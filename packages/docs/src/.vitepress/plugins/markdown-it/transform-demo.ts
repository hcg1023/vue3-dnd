import fs from 'fs'
import path from 'path'
import MarkdownIt from 'markdown-it'
import { RuleBlock } from 'markdown-it/lib/parser_block'
import glob from 'fast-glob'
import { highlight } from '../../utils/highlight'
import { normalizePath } from 'vite'

const GIT_MAIN_BRANCH_DOCS_DIR =
  'https://github.com/hcg1023/vue3-dnd/tree/main/packages/docs'

const AppVueFileName = `App.vue`
const AppVueFileTemplate = `<template>
  <DndProvider :backend="HTML5Backend">
    <Container></Container>
  </DndProvider>
</template>

<script lang="ts" setup>
import Container from './index.ts'
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
</script>`


export const transformDemo = (md: MarkdownIt, srcDir: string) => {
  const parser: RuleBlock = (state, startLine, endLine, silent) => {
    const CH = '+'.charCodeAt(0)
    const pos = state.bMarks[startLine] + state.tShift[startLine]
    const max = state.eMarks[startLine]

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false
    }

    for (let i = 0; i < 3; ++i) {
      const ch = state.src.charCodeAt(pos + i)
      if (ch !== CH || pos + i >= max) return false
    }

    if (silent) {
      return true
    }

    const start = pos + 3
    const end = state.skipSpacesBack(max, pos)

    const basename = state.src.slice(start, end).trim()
    const dirname = basename.replace(/^@/, srcDir).trim()

    state.line = startLine + 1

    const token = state.push('fence', 'code', 0)

    // @ts-ignore
    token.src = path.resolve(dirname)
    token.markup = ''
    token.info = basename
    token.map = [startLine, startLine + 1]

    return true
  }

  const fence = md.renderer.rules.fence!

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, , { loader }] = args
    const token = tokens[idx]
    // @ts-ignore
    const src: string = token.src

    if (src) {
      const isADirectory = fs.lstatSync(src).isDirectory()
      const filePaths = glob.sync('*', {
        cwd: src,
        absolute: true,
        onlyFiles: true,
        objectMode: true,
      })
      if (loader) {
        filePaths.forEach(entry => {
          loader.addDependency(entry.path)
        })
      }
      if (fs.existsSync(src) && isADirectory) {
        const fileInfos = filePaths.reduce((result, entry) => {
          const source = fs.readFileSync(entry.path, 'utf-8')
          const type: string = entry.name.split('.').at(-1)!
          return {
            ...result,
            [entry.name]: {
              type,
              raw: source,
              highlight: highlight(source, type),
            },
          }
        }, {} as Record<string, { type: string, raw: string, highlight: string }>)
        fileInfos[AppVueFileName] = {
          type: 'vue',
          raw: AppVueFileTemplate,
          highlight: highlight(AppVueFileTemplate, 'vue')
        }
        const basename = token.info
        token.info = ''

        const gitpath =
          GIT_MAIN_BRANCH_DOCS_DIR +
          normalizePath(src.replace(process.cwd(), ''))

        // demo variables are injected via vite-plugin
        return `<Demo :demo="demos['${basename}']" source="${encodeURIComponent(
          JSON.stringify(fileInfos)
        )}" path="${encodeURIComponent(gitpath)}"></Demo>`
      } else {
        token.info = ''
        return `<p style="color: #f56c6c;">${
          isADirectory
            ? `Code Directory not found: ${src}`
            : `Invalid code directory path`
        }</p>`
      }
    }
    return fence(...args)
  }

  md.block.ruler.before('fence', 'demo', parser)
}

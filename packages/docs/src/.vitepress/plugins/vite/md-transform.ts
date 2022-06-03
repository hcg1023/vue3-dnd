import type { Plugin } from 'vite'

export function mdTransform(): Plugin {
  return {
    name: 'dnd-md-transform',
    enforce: 'pre',
    async transform(code: string, id: string) {
      if (!id.endsWith('.md')) return

      const importDirs = Array.from(
        new Set(
          code
            .match(/\+\+\+\s(.*)/g)
            ?.map((item: string) => item.slice(4).trim())
        )
      ).filter(Boolean)
      if (!importDirs.length) {
        return code
      }
      const importScript =
        importDirs
          .map((dirname, index) => `import demo${index} from '${dirname}'`)
          .join('\n') +
        `\nconst demos = {\n` +
        importDirs
          .map((dirname, index) => `'${dirname}': demo${index}`)
          .join(',\n') +
        `\n}
        `
      const { code: newCode, scriptSetup } = transformScriptSetup(code)

      return combineMarkdown(
        newCode,
        [combineScriptSetup([importScript, scriptSetup])],
        []
      )
    },
  }
}

const scriptSetupRE = /<script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/script>/
const transformScriptSetup = (code: string) => {
  const matches = code.match(scriptSetupRE)
  if (matches) code = code.replace(matches[0], '')
  const scriptSetup = matches?.[3] ?? ''

  return {
    code,
    scriptSetup,
  }
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code: string,
  headers: string[],
  footers: string[]
) => {
  const frontmatterEnds = code.indexOf('---\n\n') + 4
  const firstSubheader = code.search(/\n## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}

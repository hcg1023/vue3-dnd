import { readPreState } from '@changesets/pre'
import readChangesets from '@changesets/read'
import { PreState, NewChangeset } from '@changesets/types'
import { exec } from 'child_process'

interface ChangesetState {
  preState: PreState | undefined
  changesets: NewChangeset[]
}

const FIFTY_MB_BUFFER_SIZE = 1024 * 1024 * 50

async function readChangesetState(
  cwd = process.cwd()
): Promise<ChangesetState> {
  const preState = await readPreState(cwd)
  let changesets = await readChangesets(cwd)

  if (preState?.mode === 'pre') {
    const changesetsToFilter = new Set(preState.changesets)
    changesets = changesets.filter(x => !changesetsToFilter.has(x.id))
  }

  return {
    preState: preState,
    changesets,
  }
}

async function run() {
  const { changesets, preState } = await readChangesetState()
  const shouldSkipCommand = changesets.length > 0
  let tag = 'latest'

  if (preState) {
    tag = preState.tag
  }

  const publishArgs = `--tag ${tag}`

  if (shouldSkipCommand) {
    console.log(
      `\u001B[33mUnmerged changesets found. Skipping publish command: 'release'\u001B[0m`
    )

    return
  }

  await exec(`pnpm -r publish ${publishArgs}`, {
    // @ts-ignore
    stdio: 'inherit',

    // Added so that publishing still succeeds on CI with large publish payloads.
    maxBuffer: FIFTY_MB_BUFFER_SIZE,
  })
}

run()

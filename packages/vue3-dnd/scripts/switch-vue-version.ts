import { execSync } from 'child_process'

const [version] = process.argv.slice(2)

if (version === '2') {
  execSync(`pnpm i vue@2 @vue/composition-api -D`)
  execSync(`pnpm vue-demi-switch ${version}`)
} else if (version === '3') {
  execSync(`pnpm uninstall @vue/composition-api -D`)
  execSync(`pnpm i vue@3`)
  execSync(`pnpm vue-demi-switch ${version}`)
} else {
  console.error('Invalid version')
}

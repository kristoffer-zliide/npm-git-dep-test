import { writeFile } from 'fs/promises'
import { setTimeout } from 'timers/promises'

console.error('PREPARING GIT DEPENDENCY')

await setTimeout(30000)

await writeFile('index.js', `export function aNumber() {
    return 1
}
`)

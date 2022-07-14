import { writeFile } from 'fs/promises'

async function main() {
    console.error('PREPARING GIT DEPENDENCY')

    await new Promise(resolve => setTimeout(resolve, 30000))

    await writeFile('index.js', `export function aNumber() {
    return 2
}
`)
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })

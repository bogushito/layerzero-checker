import { layerzeroSybilChecker } from "./checker.js"
import { layerzeroGithubSybilChecker } from "./github-checker.js"
import { trustaSybilChecker } from "./trusta-checker.js"
import { entryPoint } from "./utils/common.js"

async function startMenu(menu) {
    let startOver = true
    if (menu === undefined) {
        mode = await entryPoint()
    } else {
        startOver = false
    }

    switch (mode) {
        case "sybil-list":
            layerzeroSybilChecker()
            break
        case "trusta-list":
            trustaSybilChecker()
            break
        case "sybil-github":
            layerzeroGithubSybilChecker()
            break
    }
}

const args = process.argv.slice(2)
let mode = args[0]

await startMenu(mode)

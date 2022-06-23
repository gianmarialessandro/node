const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("how are you? ", answer => {
    console.log(`your answer is: ${answer}`)
    process.exit()
})


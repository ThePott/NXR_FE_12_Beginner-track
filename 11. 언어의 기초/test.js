import { getTwoNumbers, checkWinner } from './operations.js'

let myWinCount = 0
let cpuWinCount = 0
let drawCount = 0

for (let i = 0; i < 10; i++) {
    const { myNumber, cpuNumber } = getTwoNumbers()
    const result = checkWinner(myNumber, cpuNumber)
    
    myWinCount += result === 1 ? 1 : 0
    cpuWinCount += result === -1 ? 1 : 0
    drawCount += result === 0 ? 1 : 0
}

console.log(`result: ${myWinCount} wins / ${cpuWinCount} losses, / ${drawCount} draws`)
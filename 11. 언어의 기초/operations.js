function getTwoNumbers() {
    const myNumber = Math.floor(Math.random() * 10)
    const cpuNumber = Math.floor(Math.random() * 10)

    return { myNumber, cpuNumber }
}

function checkWinner(myNumber, cpuNumber) {
    // user wins: return 1
    // cpu wins: return -1
    // draw: return 0

    if (myNumber > cpuNumber) {
        return 1
    } else if (myNumber === cpuNumber) {
        return -1
    } else {
        return 0
    }
}



export {
    getTwoNumbers,
    checkWinner
}
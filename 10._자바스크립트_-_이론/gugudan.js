function gugudan(whatDan) {
	const range = [...Array(9).keys()]
    // console.log(Array(9) --> [ <9 empty items> ]
    // console.log(Array(9).keys()) --> Object [Array Iterator] {}
    // console.log(...Array(9).keys()) --> 0 1 2 3 4 5 6 7 8
    // `...`: spread operator, unpack values from iterator

    for (const index of range) {
        const rowNumber = index + 1
        console.log(whatDan * rowNumber)
    }
}

gugudan(2)
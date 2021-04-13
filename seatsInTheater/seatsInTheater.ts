function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
    const columnsDiff = nCols - col + 1;
    const rowsDiff = nRows - row

    return columnsDiff * rowsDiff;
}

console.log(seatsInTheater(16, 11, 5, 3));
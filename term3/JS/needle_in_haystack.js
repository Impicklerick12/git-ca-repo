function findNeedle(haystack) {

    // set variables for x and y positions(index)
    let xPosition, yPosition

    // foreach loop to find the row that includes the needle
    // assign the x position variable to the index of the arr which includes the needle
    haystack.forEach((row, index) => {
        row.includes('N') ? xPosition = index : ""
    })

    // assign the y position varibale to the index of the needle in the array
    yPosition = haystack[xPosition].indexOf('N')

    return [xPosition, yPosition]
    
}

  const stack = [
    ['H', 'H', 'H'],
    ['H', 'H', 'H'],
    ['H', 'N', 'H']
  ]

  findNeedle(stack) // => [2, 1]
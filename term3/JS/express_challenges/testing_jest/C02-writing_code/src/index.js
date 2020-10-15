function countCapitalLetters(input) {
    const split = input.split("")
    const capitals = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")

    // console.log(split)
    // console.log((input.trim()))
    // console.log(typeof(input))

    let count = 0
    let upperCase = []

    // From Phil
    // input.trim() will return falsey value if input has no characters
    // if input is not a typeof string
    if (!(input.trim()) || typeof input !== 'string') {
        throw ("Argument provided is either empty or not a string")
    }

    for (let char of input) {
        if (capitals.includes(char)) {
            count++
            upperCase.push(char)
        }
    }

    // console.log(`Uppercase letters: ${upperCase}`)
    // console.log(`Count is ${count}`)

    return count
}

// countCapitalLetters("Alex") // => 1
// countCapitalLetters("Hello World") // => 2
// countCapitalLetters("This code is bananas, b A n A n A s!") // => 4
// countCapitalLetters("") // => throw error
// countCapitalLetters("      ") // => throw error

module.exports = { countCapitalLetters }
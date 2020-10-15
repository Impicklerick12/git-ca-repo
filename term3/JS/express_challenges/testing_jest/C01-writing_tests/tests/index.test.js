const { greetEachPerson } = require('../src/index')

// Test to see if function is actually a function
test('greetEachPerson', () => {
    expect(typeof(greetEachPerson)).toBe("function")
})

// When given a single valid string, returns an array of one greeting using that string.
test('Give greeting if string is provided', () => {
    const input = "Tyler"
    expect(greetEachPerson(input)).toEqual([`Hello there, ${input}!`])
})

// When given no string arguments, the function should throw an error
test('Throw an error if no string arguments', () => {
    const input = 1
    expect(() => {
        greetEachPerson(input)
    }).toThrow()
})

// When given both string and non-string arguments, the function should return an array based 
// on the strings provided
test('Return an array containing only the strings provided', () => {
    const nonStrings = [null, false, 2]
    const input = ["Tyler", ...nonStrings, "Alex"]
    expect(greetEachPerson(input)).toEqual(
        expect.not.arrayContaining(nonStrings)
    )
})

// When given an empty or whitespace-only string, the function should throw an error
test('Throw an error if an empty string or whitespace is provided', () => {
    const input = ""
    expect(() => {
        greetEachPerson(input)
    }).toThrow()
})

// When given strings that have numbers or special characters in them, those strings should 
// not be used in the output of the function
test('Should not return strings containing numbers or special characters', () => {
    const invalidInput = [9, "Tyl3R", 2]
    const input = ["Tyler", ...invalidInput, "Alex"]
    expect(greetEachPerson(input)).toEqual(
        expect.not.arrayContaining(invalidInput)
    )
})

// When given string arguments but none of them are valid (eg. they're all strings with nothing 
// in them, or strings with numbers, or strings with symbols), then the function should throw an error
test('Throw an error if all strings are empty or include numbers/symbols', () => {
    const input = ["", "Tyl3R", "$%^&"]
    expect(() => {
        greetEachPerson(input)
    }).toThrow()
})

// When given arguments including multi-level arrays, the function should still return a good expected output
test('Should be truthy if a multi-level array is passed in with valid inputs', () => {
    const arr = ["Ty", "Nands"]
    const input = ["Hello", "World", ...arr]
    expect(greetEachPerson(input)).toBeTruthy()
})
/*
Loose Change
Write a function that returns an object with the smallest number of coins that would make up an amount of money passed in as an argument. Assume Australian change. 

Input is always dollars and cents (whole numbers are dollars)

Example: looseChange(1.35)

Expected output: {2d: 0, 1d: 1, 50c: 0, 20c: 1, 10c: 1, 5c: 1}


If the amount isn't divisible by 5 (there is leftover balance), add another 5c piece if its > 2 cents
*/

function looseChange(amount) {
    // multiply amount by 100 to get cents
    amount *= 100

    // create keys for objects (coin sizes)
    let keys = ["2d", "1d", "50c", "20c", "10c", "5c"]

    // create values for the keys
    let values = [200, 100, 50, 20, 10, 5]

    // empty coins array to push the amount of coins into
    let coins = []

    // empty answer object
    let answer = {};

    // for of loop to iterare through the values
    // divide the amount by the value and push to coins arr
    // remainder to be divided by next element in values arr
    for (each of values) {
        coins.push(Math.floor(amount / each))
        amount %= each
    }

    // for loop to push the corresponding keys and values into the answer object
    for (i = 0; i < keys.length; i++) {
        answer[keys[i]] = coins[i]
    }

    // final check. if remainding amount is more than 2c, add another 5c coin to the answer
    amount > 2 ? answer["5c"]++ : ""

    return answer
}

console.log(looseChange(0.23));
// => {2d: 0, 1d: 0, 50c: 0, 20c: 1, 10c: 0, 5c: 1}

console.log(looseChange(1.31));
// => {2d: 0, 1d: 1, 50c: 0, 20c: 1, 10c: 1, 5c: 0}
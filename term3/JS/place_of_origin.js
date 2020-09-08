/*

Place of Origin
Write a function that takes an array of objects as a parameter. Each object will always have two keys: country or city and a name. Your function should take this array and return a new array of strings in the format The city of {city} is home to {name} or The country of {country} is home to {name} depending on what keys the object has.

INPUT

An array of objects [{},{}]

Each object will have exactly two keys: name and either country or city. The value stored at all keys will be a string.

Inputs will always be valid.

OUTPUT

An array of strings ['','']

Objects with a city key should be returned with The city of {city} is home to {name}

Objects with a country key should be returned with The country of {country} is home to {name}

*/

function placeOfOrigin(data) {
    // create array which will house all string responses
    let arr = []

    // use a for each loop to access each object in data
    data.forEach( object => {
        // if statement to find if objects have the city key name or not
        if (object.hasOwnProperty("city")) {
            // push the sentence into the arr variable
            arr.push(`The city of ${object.city} is home to ${object.name}`)
        } else {
            // push the sentence into the arr variable
            arr.push(`The country of ${object.country} is home to ${object.name}`)
        }
    })

    // return the array
    return arr
}

placeOfOrigin([
    {
      name: 'Johannes Gutenberg',
      city: 'Mainz',
    },
    {
      name: 'Bi Sheng',
      country: 'China',
    },
  ]);

// => [
//  'The city of Mainz is home to Johannes Gutenburg',
//  'The country of China is home to Bi Sheng',
// ]
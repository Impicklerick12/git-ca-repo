// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    // creating new array from the numbers string, split into individual values, then sorted in ascending order
    let arr = numbers.split(" ").sort((a, b) => a-b)

    // logging and returning a string with the last and first index elements of the array (highest and lowest)
    console.log(`${arr[arr.length - 1]} ${arr[0]}`)
    return `${arr[0]} ${arr[arr.length - 1]}`
  }

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"); // return "542 -214"
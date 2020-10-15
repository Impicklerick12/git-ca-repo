const express = require("express");

const app = express();
const port = 3000;

const coinSides = ["Heads", "Tails"];
let heads = 0, tails = 0;

let coinflip = (array) => {
    return array[Math.floor(Math.random() * coinSides.length)]
}

let multipleFlips = function (func, numberFlips) {
    let result = func(coinFlips);
    result === "Heads" ? heads++ : tails++;
}
console.log(multipleFlips)

app.get("/coinflip", (request, response) => {
    response.send(coinflip(coinSides))
})

app.get("/coinflip/:times", (request, response) => {
    console.log(request.params);
    flips = request.params.times;

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
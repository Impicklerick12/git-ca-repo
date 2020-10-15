const express = require("express");

const app = express();
const port = 3000;

const greeting = "Hello";

app.get("/greeter", (request, response) => {
    response.send(`${greeting} world!`)
})

app.get("/greeter/:username", (request, response) => {
    console.log(request.params.username);
    response.send(`${greeting} ${request.params.username}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
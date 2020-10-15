const express = require("express");

const app = express();
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const port = 3000;

const students = ["Lachy", "Ben", "Anfii"]

// Express handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body parse middle wears
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use(function (req, res, next) {
    console.log("Time: ", Date.now())
    next() // Always need to call the next function when using Middle wear
})

app.get("/", (req,res) => {
    // res.send("<h1>Hello World!</h1>")
    const studentOne = students[Math.floor(Math.random() * students.length)];
    const studentTwo = students[Math.floor(Math.random() * students.length)];
    res.render('home', {
        student1: studentOne,
        student2: studentTwo
    })
})

app.get("/students", (req,res) => {
    // res.write(JSON.stringify(students))
    res.send(students)
})

app.post("/add", (req, res) => {
    console.log(req.body);
    students.push(req.body.student)
    res.send(students)
})

// Middle wear as part of the request : alternate syntax
app.post("/students", (req, res, next) => {
    console.log("Middle wear running");
    next()
}, (req,res) => {
    res.send(students)
})

// Listen on a specific port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

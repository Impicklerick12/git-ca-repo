const express = require("express");

const app = express();
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const axios = require('axios');
const port = 3000;

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

app.get("/teamBuilder/:num", (request, response) => {
    console.log(request.params)
    let num = request.params.num
    if (num > 6) res.send(`You can't have more than 6 pokemon in your team sorry!`)

    axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(resp => {
            // console.log(resp.data)
            let pokemon = resp.data.results.map(poke => poke.name.capitalize())
            let team = []
            let i = 0
            do {
                team.push(pokemon.random())
                i++
            } while (i < num);

            response.render('pokemon', {pokemon: team});
        })
        .catch(error => console.log(error));
    
    // Capitalize helper function
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }

    // Random number generation
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    }

})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
function getRandomNumberForPokeAPI(){
    // The "808" is just a safe maximum for how many Pokemon are currently in the API.
    // When they add more Pokemon, that number should go up.
    // Some newer Pokemon (numbers 808 and above) might be missing some data - 
    // if that's the case, just change this number back to 808 instead of 894.
    let suitableNumber = Math.floor(Math.random() * 152);
    return suitableNumber;
    
    // You would then place this number in the PokeAPI url as per the API docs,
    // using trusty ol' string interpolation.
    // Like so:
    // https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}
}

// Write your own JS after this line --------------------------------------
let getPokemon = (event) => {
    event.preventDefault();

    console.log(event.type)

    let nameDiv = document.getElementById("pokemonName");
    let type1Div = document.getElementById('pokemonType1');
    let type2Div = document.getElementById('pokemonType2');
    let figure = document.getElementById('pokemonImage');

    axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
        .then(response => {
            pokemon = response.data
            console.log(pokemon);

            pokemonImage = document.createElement('img')
            pokemonImage.src = pokemon.sprites.front_default
            pokemonImage.alt = pokemon.name.capitalize()
            figure.appendChild(pokemonImage)

            console.log(pokemon.name);
            nameDiv.textContent = pokemon.name.capitalize()

            console.log(pokemon.types[0].type.name)
            type1Div.textContent = `${pokemon.types[0].type === undefined ? "None" : pokemon.types[0].type.name.capitalize()}`
            type2Div.textContent = `${pokemon.types[1].type === undefined ? "None" : pokemon.types[1].type.name.capitalize()}`

        })
        .catch(error => console.log(error))

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
}

// let getPokemonTeam = (event) => {
//     event.preventDefault()

//     let div = document.createElement('div')
//     div.style.display = "flex"

//     let image = document.createElement('img')
//     let name = document.createElement('p')

//     axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
//         .then(resp => {
//             pokemon = resp.data.results
//             console.log(pokemon)

//             div.textContent = pokemon[Math.floor(Math.random() + pokemon.length)]
//             document.body.appendChild(div)
//         })
//         .catch(error => console.log(error))

// }

document.getElementById("pokemonEncounter").addEventListener("click", getPokemon);
// document.getElementById("pokemonTeam").addEventListener("click", getPokemonTeam)


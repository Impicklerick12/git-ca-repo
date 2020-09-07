import React, { useState } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState()

  return (
    < PokemonList pokemon = { pokemon } />
  );
}

export default App;

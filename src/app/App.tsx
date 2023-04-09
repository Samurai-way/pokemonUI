import React from 'react';
import {PokemonsList} from "../features/pokemonsList/PokemonsList";
import {Route, Routes} from "react-router-dom";
import {MyPokemons} from "../features/myPokemons/MyPokemons";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PokemonsList/>}/>
            <Route path="/mypokémons" element={<MyPokemons/>}/>
        </Routes>
    );
}

export default App;

import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {pokemonSlice} from "../store/reducers/PokemonSlice";



function App() {
    const {count} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const {increment} = pokemonSlice.actions

    return (
        <div className="App">

        </div>
    );
}

export default App;

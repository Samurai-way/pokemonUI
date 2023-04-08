import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {pokemonSlice} from "../store/reducers/PokemonSlice";

function App() {
    const { count } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const {increment} = pokemonSlice.actions

    return (
        <div className="App">
            {count}
            <button onClick={() => dispatch(increment(+1))}>Increment</button>
        </div>
    );
}

export default App;

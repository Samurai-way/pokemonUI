import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {pokemonSlice} from "../store/reducers/PokemonSlice";
import {Header} from "../features/header/Header";
import {Card} from "../features/cards/Card";



function App() {
    const {count} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const {increment} = pokemonSlice.actions

    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <main className={'main'}>
                <Card img={'1'} name={'1'} type={'1'} level={'1'}/>
                <Card img={'1'} name={'1'} type={'1'} level={'1'}/>
                <Card img={'1'} name={'1'} type={'1'} level={'1'}/>
                <Card img={'1'} name={'1'} type={'1'} level={'1'}/>
            </main>
        </div>
    );
}

export default App;

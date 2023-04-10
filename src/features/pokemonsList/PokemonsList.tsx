import React, {useEffect, useState} from 'react';
import {Header} from "../header/Header";
import {Button} from "../buttons/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchPokemons} from "../../store/reducers/ActionCreators";
import {Card} from '../cards/Card';
import a from '../../app/App.module.scss'

export const PokemonsList = () => {

    const dispatch = useAppDispatch();
    const {pokemons} = useAppSelector(
        (state) => state.userReducer
    );

    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        fetchPokemons(activePage, 10, dispatch);
    }, [activePage, dispatch]);

    const handlePrevClick = () => {
        setActivePage((prevPage) => prevPage - 1);
    };

    const handleNextClick = () => {
        setActivePage((prevPage) => prevPage + 1);
    };

    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className={a.main}>
                {pokemons.map((p, i) => (
                    <Card
                        key={i}
                        img={p.imageUrl}
                        name={p.name}
                        type={p.type}
                        level={p.level}
                        style={{gridArea: `card${i + 1}`, border: '2px solid blue', borderRadius: '10px'}}

                    />
                ))}
            </main>
            <footer className={a.footer}>
                <div className={a.buttonHeader}>
                    <Button title={'Prev'} className={a.prev}
                            onClick={handlePrevClick}/>
                    <Button title={'Next'} className={a.next}
                            onClick={handleNextClick}/>
                </div>
            </footer>
        </div>
    );
};

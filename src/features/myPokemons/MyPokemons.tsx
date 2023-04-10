import React, {useEffect} from 'react';
import {Header} from "../header/Header";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchMyPokemons} from "../../store/reducers/ActionCreators";
import {Card} from "../cards/Card";
import m from '../../app/App.module.scss'

export const MyPokemons = () => {
    const dispatch = useAppDispatch();
    const {userId, myPokemons} = useAppSelector(
        (state) => state.userReducer
    );

    useEffect(() => {
        fetchMyPokemons(dispatch, userId)
    }, [dispatch])

    return (
        <>
            <div className="App">
                <header>
                    <Header/>
                </header>
                <main className={m.main}>
                    {myPokemons.map((p, i) => (
                        <Card
                            key={i}
                            img={p.imageUrl}
                            name={p.name}
                            type={p.type}
                            level={p.level}
                            style={{gridArea: `card${i + 1}`, border: '2px solid blue'}}
                        />
                    ))}
                </main>
            </div>
        </>
    );
};

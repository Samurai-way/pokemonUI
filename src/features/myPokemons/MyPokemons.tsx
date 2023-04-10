import React, { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchMyPokemons } from "../../store/reducers/ActionCreators";
import { Card } from "../cards/Card";
import m from "../../app/App.module.scss";
import {Spinner} from "../spinner/Spinner";

export const MyPokemons = () => {
    const dispatch = useAppDispatch();
    const { userId, myPokemons } = useAppSelector((state) => state.userReducer);

    const [isLoading, setIsLoading] = useState(false); // добавьте состояние isLoading

    useEffect(() => {
        setIsLoading(true); // установите isLoading в true перед запуском асинхронного действия
        fetchMyPokemons(dispatch, userId).then(() => setIsLoading(false)); // установите isLoading в false, когда данные загружены
    }, [dispatch, userId]);

    // возвращайте компонент с крутилкой, если isLoading установлено в true
    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="App">
                <header>
                    <Header />
                </header>
                <main className={m.main}>
                    {myPokemons.map((p, i) => (
                        <Card
                            key={i}
                            img={p.imageUrl}
                            name={p.name}
                            type={p.type}
                            level={p.level}
                            style={{ gridArea: `card${i + 1}`, border: "2px solid blue" }}
                        />
                    ))}
                </main>
            </div>
        </>
    );
};

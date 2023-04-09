import React, {useEffect} from 'react';
import {Header} from "../header/Header";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchMyPokemons} from "../../store/reducers/ActionCreators";
import Card from "../cards/Card";

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
                <main style={{
                    display: 'grid',
                    width: '1290px',
                    height: '312px',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridAutoRows: '1fr',
                    gridGap: '20px',
                    gridTemplateAreas: `
            "card1 card2 card3 card4"
            "card5 card6 card7 card8"
            "card9 card10 card11 card12"
          `,
                    margin: '0 auto',
                }}
                      className={'main'}
                >
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

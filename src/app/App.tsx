import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {Header} from '../features/header/Header';
import {Card} from '../features/cards/Card';
import {Button} from '../features/buttons/Button';
import {fetchPokemons} from "../store/reducers/ActionCreators";

function App() {
    const dispatch = useAppDispatch();
    const {pokemons, isLoading, error} = useAppSelector(
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
                {pokemons.map((p, i) => (
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
            <footer
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '550px',
                }}
            >
                <div style={{width: '324px', height: '56px', borderRadius: '16px'}}>
                    <Button title={'Prev'} style={{width: '83px', borderRadius: '16px', height: '48px'}}
                            onClickHandler={handlePrevClick}/>
                    <Button title={'Next'} style={{width: '83px', borderRadius: '16px', height: '48px'}}
                            onClickHandler={handleNextClick}/>
                </div>
            </footer>
        </div>
    );
}

export default App;

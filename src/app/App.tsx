import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {Header} from "../features/header/Header";
import {fetchPokemons} from "../store/reducers/ActionCreators";
import {Card} from "../features/cards/Card";
import {Button} from "../features/buttons/Button";


function App() {
    const {pokemons, isLoading, error} = useAppSelector(state => state.userReducer)

    const dispatch = useAppDispatch()
    useEffect(() => {
        fetchPokemons(1, 10, dispatch);
    }, [])

    const style = {
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
        margin: '0 auto'
    }


    const [activeIndex,setActiveIndex] = useState(0);

    const handleButtonClick = (index: number) => {
        setActiveIndex(index);
    };

    const button1 = {
        width: "83px",
        borderRadius: '16px',
        height: "48px",
        backgroundColor: activeIndex === 0 ? "#ccc9c9" : "#eba000",
        // color: activeIndex === 0 ? "white" : "black",
        // border: "none",
        // outline: "none",
    }

    const button2 = {
        width: "83px%",
        borderRadius: '16px',
        height: "48px",
        backgroundColor: activeIndex === 1 ? "#ccc9c9" : "#eba000",
        // color: activeIndex === 1 ? "white" : "black",
        // border: "none",
        // outline: "none",
        // marginTop: '2px'
    }


    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <main style={style} className={'main'}>
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
            <footer style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '550px'}}>
                <div style={{width: "324px", height: "56px", borderRadius: '16px'}}>
                    <Button title={'Pokémon List'} style={button1} onClickHandler={() => handleButtonClick(0)}/>
                    <Button title={'My pokémons'} style={button2} onClickHandler={() => handleButtonClick(1)}/>
                </div>
            </footer>
        </div>
    );
}

export default App;

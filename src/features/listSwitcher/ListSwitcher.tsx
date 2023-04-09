import React, {useState} from "react";
import {Button} from "../buttons/Button";

export const ListSwitcher = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index: number) => {
        setActiveIndex(index);
    };

    const style = {
        width: "50%",
        borderRadius: '16px',
        height: "90%",
        backgroundColor: activeIndex === 0 ? "#0B213F" : "#eba000",
        color: activeIndex === 0 ? "white" : "black",
        border: "none",
        outline: "none",
    }

    const style2 = {
        width: "50%",
        borderRadius: '16px',
        height: "90%",
        backgroundColor: activeIndex === 1 ? "#0B213F" : "#eba000",
        color: activeIndex === 1 ? "white" : "black",
        border: "none",
        outline: "none",
        marginTop: '2px'
    }

    return (
        <div style={{width: "324px", height: "56px", border: '2px solid black', borderRadius: '16px'}}>
            <Button title={'Pokémon List'} style={style} onClick={() => handleButtonClick(0)}/>
            <Button title={'My pokémons'} style={style2} onClick={() => handleButtonClick(1)}/>
        </div>
    );
};


import React, { useState } from "react";
import { Button } from "../buttons/Button";
import { Link } from "react-router-dom";

export const ListSwitcher = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index: number) => {
        setActiveIndex(index);
    };

    const style = {
        width: "50%",
        borderRadius: "16px",
        height: "90%",
        backgroundColor: activeIndex === 0 ? "#0B213F" : "#eba000",
        color: activeIndex === 0 ? "white" : "black",
        border: "none",
        outline: "none",
    };

    const style2 = {
        width: "50%",
        borderRadius: "16px",
        height: "90%",
        backgroundColor: activeIndex === 1 ? "#0B213F" : "#eba000",
        color: activeIndex === 1 ? "white" : "black",
        border: "none",
        outline: "none",
        marginTop: "2px",
    };

    return (
        <div style={{ width: "324px", height: "56px", border: "2px solid black", borderRadius: "16px" }}>
            <Link style={style} to={"/"}>
                <Button title={"Pokémon List"} onClick={() => handleButtonClick(0)} />
            </Link>
            <Link style={style2} to={"/mypokémons"}>
                <Button title={"My pokémons"} onClick={() => handleButtonClick(1)} />
            </Link>
        </div>
    );
};

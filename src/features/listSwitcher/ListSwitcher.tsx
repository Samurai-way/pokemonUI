import React, {useState} from "react";
import {Button} from "../buttons/Button";
import {Link} from "react-router-dom";
import Web3 from "web3";
import {pokemonSlice} from "../../store/reducers/PokemonSlice";
import {useAppDispatch} from "../../hooks/redux";

export const ListSwitcher = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const dispatch = useAppDispatch()
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


    const handleAddToListClick = async () => {
        if (!window.ethereum) {
            console.error('Metamask is not available');
            return;
        }

        const ethereum = window.ethereum as any;
        try {
            // Запрос доступа к аккаунту Metamask
            const accounts = await ethereum.enable();
            const account = accounts[0];
            const web3 = new Web3(window.ethereum);
            const message = `I want watch my list`;
            const hash = web3.utils.sha3("\x19Ethereum Signed Message:\n" + message.length + message);
            // Подписываем сообщение
            const signature = await ethereum.request({
                method: 'eth_sign',
                params: [account, hash],
                id: 1, // Добавляем параметр id со значением 1
            });
            // Отправляем запрос на сервер для сохранения покемона в MongoDB
            const response = await fetch(`http://localhost:3000/api/pokemon/my`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    account,
                    message,
                    signature,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                dispatch(pokemonSlice.actions.myPokemonsFetching(data.items));
                console.log('Pokemon added to list');
            } else {
                console.error('Failed to add pokemon to list');
            }
        } catch (err: any) {
            console.log(err)
            // Обработка ошибки, когда пользователь отклоняет запрос на доступ к аккаунту Metamask
            if (err.code === 4001) {
                console.log('User rejected the request');
                alert('Please allow access to your Metamask account to continue.');
            } else {
                console.error(err);
            }
        }
    };
    const resulHandler = async () => {
        await handleButtonClick(1)
        await handleAddToListClick()
    }
    return (
        <div style={{width: "324px", height: "56px", border: "2px solid black", borderRadius: "16px"}}>
            <Link style={style} to={"/"}>
                <Button title={"Pokémon List"} onClick={() => handleButtonClick(0)}/>
            </Link>
            <Link style={style2} to={"/mypokémons"}>
                <Button title={"My pokémons"} onClick={resulHandler}/>
            </Link>
        </div>
    );
};

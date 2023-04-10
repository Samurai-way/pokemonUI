import React, {CSSProperties, useState} from 'react';
import {Button} from "../buttons/Button";
import Web3 from 'web3';
import {useAppDispatch} from "../../hooks/redux";
import {pokemonSlice} from "../../store/reducers/PokemonSlice";
import c from './Card.module.css'

type CardsPropsType = {
    img: string;
    name: string;
    type: string;
    level: number;
    style?: CSSProperties;
    handleCardClick?: () => void;
};

declare global {
    interface Window {
        ethereum?: {
            enable: () => Promise<void>;
            sendAsync: (payload: any) => Promise<void>;
            selectedAddress: string;
        };
    }
}

interface Props {
    name: string;
    img: string;
    type: string;
    level: number;
    style?: React.CSSProperties;
}

export const Card: React.FC<Props> = (props: CardsPropsType) => {
    const dispatch = useAppDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
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
            // Отправка сообщения "I want add {pokemonName} to my list"
            const message = `I want add ${props.name} to my list`;
            const hash = web3.utils.sha3("\x19Ethereum Signed Message:\n" + message.length + message);
            // Подписываем сообщение
            const signature = await ethereum.request({
                method: 'eth_sign',
                params: [account, hash],
                id: 1, // Добавляем параметр id со значением 1
            });
            // Отправляем запрос на сервер для сохранения покемона в MongoDB
            const response = await fetch('https://pokemon-api-hazel-delta.vercel.app/api/pokemon/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    account,
                    message,
                    signature,
                    pokemonName: props.name,
                }),
            });

            if (response.ok) {
                dispatch(pokemonSlice.actions.updateUserId(account))
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
    return (
        <>
            <div
                 className={c.card}
                 onClick={handleCardClick}>
                <img src={props.img} alt={props.name}/>
                <h1>{props.name}</h1>
                <p>Type: {props.type}</p>
                <p>Level: {props.level}</p>
            </div>
            {isModalOpen && (
                <div className={c.modalOverlay}>
                    <div className={c.modal}>
                        <button className={c.close} onClick={() => setIsModalOpen(false)}>
                            X
                        </button>
                        <Button className={c.modalButton} title={'Add to my list'} onClick={handleAddToListClick}/>
                        <img src={props.img} alt={props.name}/>
                        <h1>{props.name}</h1>
                        <p>Type: {props.type}</p>
                        <p>Level: {props.level}</p>
                    </div>
                </div>
            )}
        </>
    );
};





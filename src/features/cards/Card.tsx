import React, { CSSProperties, useState } from 'react';
import { Button } from "../buttons/Button";


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

const Card: React.FC<Props> = (props: CardsPropsType) => {
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
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];

            // Отправка сообщения "I want add {pokemonName} to my list"
            const message = `I want add ${props.name} to my list`;

            // Подписываем сообщение
            const signature = await ethereum.request({
                method: 'eth_signTypedData_v4',
                params: [account, message],
            });

            console.log('account', account);
            console.log('accounts', accounts);
            console.log('message', message);
            console.log('signature', signature);

            // Отправляем запрос на сервер для сохранения покемона в MongoDB
            const response = await fetch('/api/add-to-my-list', {
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
                console.log('Pokemon added to list');
            } else {
                console.error('Failed to add pokemon to list');
            }
        } catch (err: any) {
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
            <div style={props.style} className={'card'} onClick={handleCardClick}>
                <img src={props.img} alt={props.name} />
                <h1>{props.name}</h1>
                <p>Type: {props.type}</p>
                <p>Level: {props.level}</p>
            </div>

            {isModalOpen && (
                <div className={'modal-overlay'}>
                    <div className={'modal'}>
                        <button className={'modal-close'} onClick={() => setIsModalOpen(false)}>
                            X
                        </button>
                        <Button title={'Add to my list'} onClick={handleAddToListClick} />
                        <img src={props.img} alt={props.name} />
                        <h1>{props.name}</h1>
                        <p>Type: {props.type}</p>
                        <p>Level: {props.level}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;




import React, { CSSProperties, useState } from 'react';
import {Button} from "../buttons/Button";

type CardsPropsType = {
    img: string;
    name: string;
    type: string;
    level: number;
    style?: CSSProperties;
    handleCardClick?: () => void;
};

export const Card = (props: CardsPropsType) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <div style={props.style} className={'card'} onClick={handleCardClick}>
                <img src={props.img} />
                <h1>{props.name}</h1>
                <p>Type: {props.type}</p>
                <p>Level: {props.level}</p>
            </div>

            {isModalOpen && (
                <div className={'modal-overlay'}>
                    <div className={'modal'}>
                        <button className={'modal-close'} onClick={handleModalClose}>
                            X
                        </button>
                        <Button title={'Add to my list'}/>
                        <img src={props.img} />
                        <h1>{props.name}</h1>
                        <p>Type: {props.type}</p>
                        <p>Level: {props.level}</p>
                    </div>
                </div>
            )}
        </>
    );
};


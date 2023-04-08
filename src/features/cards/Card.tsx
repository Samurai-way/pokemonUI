import React from 'react';

type CardsPropsType = {
    img: string
    name: string
    type: string
    level: string
}

export const Card = (props: CardsPropsType) => {
    return (
        <div className={'card'}>
            <img src={props.img}/>
            <h1>{props.name}</h1>
            <p>{props.type}</p>
            <p>{props.level}</p>
        </div>
    );
};


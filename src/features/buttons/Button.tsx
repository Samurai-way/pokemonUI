import React, {CSSProperties} from 'react';


type ButtonsProps = {
    title: string;
    style?: CSSProperties;
    onClickHandler?: () => void
};

export const Button = (props: ButtonsProps) => {
    return (
        <button onClick={props.onClickHandler} style={props.style}>{props.title}</button>
    );
};


import React, {CSSProperties} from 'react';


type ButtonsProps = {
    title: string;
    style?: CSSProperties;
    onClick: () => void;
};

export const Button = (props: ButtonsProps) => {
    return (
        <button onClick={props.onClick} style={props.style}>{props.title}</button>
    );
};


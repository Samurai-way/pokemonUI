import React, {CSSProperties} from 'react';


type ButtonsProps = {
    title: string;
    style?: CSSProperties;
};

export const Button = (props: ButtonsProps) => {
    return (
        <button style={props.style}>{props.title}</button>
    );
};


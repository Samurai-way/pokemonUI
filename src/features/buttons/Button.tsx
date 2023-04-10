import React, {CSSProperties} from 'react';


type ButtonsProps = {
    title: string;
    style?: CSSProperties;
    onClick: () => void;
    className?: string
};

export const Button = (props: ButtonsProps) => {
    return (
        <button
            style={props.style}
            className={props.className}
            onClick={props.onClick}>{props.title}</button>
    );
};


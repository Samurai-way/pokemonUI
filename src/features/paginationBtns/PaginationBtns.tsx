import React, {CSSProperties} from 'react';

type PaginationBtnsPropTypes = {
    title: string,
    style?: CSSProperties;
}

export const PaginationBtns = (props: PaginationBtnsPropTypes) => {
    return (
        <button style={props.style}>
            {props.title}
        </button>
    );
};


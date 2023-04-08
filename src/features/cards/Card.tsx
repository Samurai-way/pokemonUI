import React, {CSSProperties, useState} from 'react';

type CardsPropsType = {
    img: string
    name: string
    type: string
    level: number
    style?: CSSProperties
    handleCardClick?: () => void
}

// const style = {
//     //background-color: #FFFFFF;
//     borderRadius: "16px",
//     border: '3px solid #C6C5C9',
//     display: 'flex',
//     alignItems: 'center',
//     width: '300px',
//     height: '312px',
//     flexBasis: 'calc(25% - 20px)',
//     margin: '10px'
// }



export const Card = (props: CardsPropsType) => {

    // const [isModalOpen, setIsModalOpen] = useState(false);
    //
    // const handleCardClick = () => {
    //     setIsModalOpen(true);
    // }

    return (
        <div style={props.style} className={'card'}>
            <img src={props.img}/>
            <h1>{props.name}</h1>
            <p>Type: {props.type}</p>
            <p>Level: {props.level}</p>
            {/*{isModalOpen && (*/}
            {/*    // здесь должен быть ваш модальный компонент, отображающийся при открытии модального окна*/}
            {/*    <div onClick={props.handleCardClick} className="modal">*/}
            {/*        <h1>Modal Content</h1>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};


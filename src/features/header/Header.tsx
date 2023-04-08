import React from 'react';
import './Header.scss';
import img from '../../commons/image 7.png'
import {ListSwitcher} from "../listSwitcher/ListSwitcher";

export const Header = () => {
    return (
        <header className="header">
            <img src={img}/>
            <ListSwitcher/>
        </header>
    );
};


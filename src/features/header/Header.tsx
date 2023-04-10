import React from 'react';
import './Header.module.scss';
import img from '../../commons/image 7.png'
import {ListSwitcher} from "../listSwitcher/ListSwitcher";
import h from './Header.module.scss'
export const Header = () => {
    return (
        <header className={h.header}>
            <img src={img} alt={'pokemon'}/>
            <ListSwitcher/>
        </header>
    );
};


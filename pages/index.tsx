import React from 'react';
import Navbar from '../components/Navbar';
import style from './index.module.css';

const Index = () => {
    return (
        <>
            <Navbar/>
            <div className={style.center}>
                <h1>Добро пожаловать</h1>
                <h3>Здесь собраны лучшие треки!</h3>
            </div>
        </>
    );
};

export default Index;

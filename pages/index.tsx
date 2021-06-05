import React from 'react';
import Navbar from '../components/Navbar';
import style from './index.module.css';
import MainLayout from "../layout/MainLayout";

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className={style.center}>
                    <h1>Добро пожаловать</h1>
                    <h3>Здесь собраны лучшие треки!</h3>
                </div>
            </MainLayout>
        </>
    );
};

export default Index;

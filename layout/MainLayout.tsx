import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import styles from '../styles/MainLauout.module.scss'
import Player from "../components/Player";

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container className={styles.containerChildren}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;

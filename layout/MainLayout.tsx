import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import styles from './MainLauout.module.css'

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container className={styles.containerChildren}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;

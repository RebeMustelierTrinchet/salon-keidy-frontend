import React from 'react'; 
import styles from "./layout.module.css";
import NavBar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';

export default function Layout({children}){
    return(
        <div className={styles.body}>
            <NavBar/>
        
            <div className={styles.contenedor}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
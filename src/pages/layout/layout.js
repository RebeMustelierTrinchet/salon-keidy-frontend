import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importa la función useTranslation
import LanguageToggle from './../../components/LanguageToggle/LanguageToggle';
import styles from "./layout.module.css";
import NavBar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';

export default function Layout({children}){
    const { t, i18n } = useTranslation(); // Inicializa useTranslation

    const toggleLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return(
        <div className={styles.body}>
            <LanguageToggle toggleLanguage={toggleLanguage} /> 
            <NavBar/>
        
            <div className={styles.contenedor}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
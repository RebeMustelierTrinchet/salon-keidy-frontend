import React, { useState } from "react";
import styles from "./service-designed.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from './../../imagenes/hair-service/usar.png'
import logo from './../../imagenes/logo/5b1be6ef-3f0f-4529-ad77-a59222d53447-removebg-preview.png'

import texto__styles from './../textos.module.css'

import { useTranslation } from 'react-i18next';




export default function Services_designed({item}) {
    const [activePanel, setActivePanel] = useState(0);

    function handleClick(index) {
        setActivePanel(index);
    }

    const { t } = useTranslation();

    return (
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                {item.services_images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.panel} ${activePanel === index ? styles.panel_active : ''}`}
                        style={{ backgroundImage: `url(${image}), url(${fondo})` }}
                        onClick={() => handleClick(index)}
                    >
                        <img className={styles.image} src={logo} />
                    </div>
                ))}
            </div>

            <div className={styles.text__container}>
                <div className={`${texto__styles.letras} ${styles.letters__container}`}>
                    <h1 className={`${texto__styles.title} ${styles.letters}`}>{t('services.our_service')}</h1>
                    <h2 className={texto__styles.subtitle}> {item.services_name}</h2>
                    <hr className={styles.linea__texto}/>
                    {/* <div className={texto__styles.div__border}> */}
                    {/* </div> */}
                </div>
                <div className={styles.text__container__work}>
                    <div className={styles.text__work}>
                        <p className={styles.text}>
                            {item.text}
                        </p>
                        
                        <div className={styles.contBordeS}></div>
                        <div className={styles.contBorde}></div>
                    </div>
                
                    
                        <ul className={styles.name__container}>
                        {t('services.our_services')}

                        {item.services_offers.map((service, index) => (
                                <li className={styles.name__letter} key={index}>
                                    {service}
                                </li>
                        ))}
                            <div className={styles.contBordeS}></div>
                        <div className={styles.contBorde}></div>
                        </ul>
                </div>
                </div>
        </div>
    );
}
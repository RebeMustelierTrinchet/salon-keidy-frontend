import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "react-bootstrap";
import { IoFlowerSharp } from "react-icons/io5";
import styles from "./ourServices.module.css";
import texto__styles from "./../../components/textos.module.css";
import styles__button from './../transiciones.module.css';

import I1 from './../../imagenes/services/OIP__1_-removebg-preview.png';
import I2 from './../../imagenes/services/99b9a72476a9cbd84bfd4d8fd751d011.jpg';
import I3 from './../../imagenes/services/9aafec5890093c1466c960cc1835085d.jpg';

export default function OurServices() {
    const { t } = useTranslation(); 

    return (
        <div className={styles.main__container}>
            <div className={texto__styles.letras}>
                <h1 className={texto__styles.title}>{t('ourServices.title')}</h1>
                <h2 className={texto__styles.subtitle}>{t('ourServices.aestheticServices')}</h2>
                <hr className={styles.line__text}/>
            </div>

            <div className={styles.top__Container}>
                <div className={styles.service__container}>
                    <div className={styles.image__container}>
                        <img className={styles.image} src={I3}/>
                        <h2 className={texto__styles.subtitle}>{t('ourServices.manicure')}</h2>
                        <div className={styles.border1}></div>
                        <div className={styles.border2}></div>
                    </div>
                </div>

                <div className={styles.service__container}>
                    <div className={styles.image__container}>
                        <img className={styles.image} src={I1}/>
                        <h2 className={texto__styles.subtitle}>{t('ourServices.styling')}</h2>
                        <div className={styles.border1}></div>
                        <div className={styles.border2}></div>
                    </div>
                </div>

                <div className={styles.service__container}>
                    <div className={styles.image__container}>
                        <img className={styles.image} src={I2}/>
                        <h2 className={texto__styles.subtitle}>{t('ourServices.esthetic')}</h2>
                        <div className={styles.border1}></div>
                        <div className={styles.border2}></div>
                    </div>
                </div>
            </div>

            <div className={styles.div_button}>
                <Button variant="outline-light" data-animation="diagonal" className={styles__button.Boton}>{t('ourServices.goGallery')}
                    <span className={styles__button.borderTop} id="border"></span>
                    <span className={styles__button.borderRight} id="border"></span>
                    <span className={styles__button.borderBottom} id="border"></span>
                    <span className={styles__button.borderLeft} id="border"></span>
                </Button> 
            </div>
        </div>
    );
}

import React from 'react';
import { useTranslation } from 'react-i18next'; 
import { Button } from 'react-bootstrap';
import styles from "./carrouselHome-movil.module.css";
import Button__styles from './../../components/transiciones.module.css';
import { Link } from 'react-router-dom';
import I1 from "./../../imagenes/carruselHome/118476215_1752149348257020_5886591329761144491_n.jpg"
import I2 from "./../../imagenes/carruselHome/120727734_1788856987919589_5156932402536750116_n.jpg"
import I3 from "./../../imagenes/carruselHome/274171477_363007865826925_4599852736620786766_n.jpg"


import logo from './../../imagenes/logo/5b1be6ef-3f0f-4529-ad77-a59222d53447-removebg-preview.png'

const IMAGES = [I1, I2, I3]
const nombreLocal = "nombreLocal"

export default function CarrouselHomeMovil() {
  const { t } = useTranslation(); 

  return (
    <div className={styles.main__container}>
        <div className={styles.header__container}>
            <div className={styles.background}></div>
            <img src={logo} alt="logo"   className={styles.logo__image}/>
        </div>

        <hr className={styles.line} />

        <div className={styles.image__container}>
        {IMAGES.map((image, index) => (
          <div key={index} className={styles.cont__imagen}>
            <img src={image} className={styles[`image${index + 1}`]} />
          </div>
        ))}
      </div>

      <div className={styles.text__container}>
        <h1 className={styles.title}>
           ~ Caribbean Salon Beauty
        </h1>
        <p className={styles.text}>
        {t('carrousel.title')}
        </p>
        <p className={styles.text}>
         {t('carrousel.subtitle')}
        </p>
        <div className={styles.schedule_button_div}>
          <Button variant="outline-light" data-animation="diagonal" className={Button__styles.Boton}>{'~'} {t('carrousel.bookingOnline')}
            <span className={Button__styles.borderTop} id="border"></span>
            <span className={Button__styles.borderRight} id="border"></span>
            <span className={Button__styles.borderBottom} id="border"></span>
            <span className={Button__styles.borderLeft} id="border"></span>
          </Button>
        </div>
      </div>
      
    </div>
  );
}

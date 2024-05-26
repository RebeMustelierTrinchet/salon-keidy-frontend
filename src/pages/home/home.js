import React from 'react'; 
import styles from "./home.module.css"
import Button__styles from './../../components/transiciones.module.css'
import Button from 'react-bootstrap/Button';
import CarrouselHome from '../../components/carruselHome/corruselHome';
import OurServices from '../../components/ourServices/ourServices';
import { GiVineFlower } from "react-icons/gi";
import { IoFlowerSharp } from "react-icons/io5";
import Comments from '../../components/comments/comments';

import { useTranslation } from 'react-i18next'
import CarrouselHomeMovil from '../../components/carrouselHome-movil/carrouselHome-movil';
import Why_us from '../../components/why-us/why_us';

export default function Home(){

  const { t } = useTranslation();
    return(
      <div className={styles.mainConteiner}>

      <div className={styles.carrousel}>
          <CarrouselHome />
          <CarrouselHomeMovil/>
      </div>

      <div className={styles.text__container}>
          <p className={styles.text}>
              {t('home.paragraph')}
          </p>
          <div className={styles.schedule_button_div}>
              <Button variant="outline-light" data-animation="diagonal" className={Button__styles.Boton}>
                  {t('home.contactUs')}
                  <span className={Button__styles.borderTop} id="border"></span>
                  <span className={Button__styles.borderRight} id="border"></span>
                  <span className={Button__styles.borderBottom} id="border"></span>
                  <span className={Button__styles.borderLeft} id="border"></span>
              </Button>
          </div>
          <div className={styles.top__border__container}></div>
          <div className={styles.bottom__border__container}></div>

      </div>

      <div className={styles.ourServices}>
          <OurServices />
      </div>

      <Why_us/>

      <div className={styles.comments}>
          <Comments />
      </div>
  </div>
    )
}
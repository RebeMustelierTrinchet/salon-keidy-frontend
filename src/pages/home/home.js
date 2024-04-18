import React from 'react'; 
import styles from "./home.module.css"
import Button__styles from './../../components/transiciones.module.css'
import Button from 'react-bootstrap/Button';
import CarrouselHome from '../../components/carruselHome/corruselHome';
import OurServices from '../../components/ourServices/ourServices';
import { GiVineFlower } from "react-icons/gi";
import { IoFlowerSharp } from "react-icons/io5";
import Comments from '../../components/comments/comments';

export default function Home(){
    return(
        <div className={styles.mainConteiner}>
           
            <div className={styles.carrousel}>
              <CarrouselHome/>
            
            </div>

            <div className={styles.contTexto}>
              <p className={styles.parrafo}>
                Dream of perfect hair and make it come tru in our beauty salon. Our hair
                care specialists offer you the most innovative and efective treatments. Feel bueautiful
                and confident with helthy and shiny hair.
              </p>
              <div className={styles.schedule_button_div}>
                <Button variant="outline-light" data-animation="diagonal" className={Button__styles.Boton}>{'~'} Contac Us
                  <span className={Button__styles.borderTop} id="border"></span>
                  <span className={Button__styles.borderRight} id="border"></span>
                  <span className={Button__styles.borderBottom} id="border"></span>
                  <span className={Button__styles.borderLeft} id="border"></span>
                </Button> 
              </div>
              <div className={styles.contBordeS}></div>
              <div className={styles.contBorde}></div>
              
              </div>
              

            <div className={styles.ourServices}>
              <OurServices/>
            
            </div>

            <div className={styles.comments}>
              <Comments/>
            
            </div>
            

            

        </div>
    )
}
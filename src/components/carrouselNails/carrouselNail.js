

import React from "react";
import styles from "./carrousel.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import I1 from "./../../imagenes/servicesNails/3958af811d50e466f6d53eac8bbe2ae3.jpg"
import I2 from "./../../imagenes/servicesNails/Slay-La-Vie3.jpg"
import I3 from "./../../imagenes/servicesNails/d800860cef2cf81395ee8c0b9e26afc1.jpg"




const IMAGES = [I1, I2, I3]

export default function Carousel__ContainerNails(){
    return(
        <div className={styles.contenedorPrincipal} >
      <div className={styles.contenedorCarousel__Container}>
        <Carousel variant="dark" className={styles.carousel}>
          {IMAGES.map((image, index) => {
            return(
              <Carousel.Item interval={9000} key={index} className={styles.carouselItem}>
              <div className={styles.carouselItemDiv}>
                <div className={styles.imageDiv}>
                  <img className={styles.imagen} src={image} />
                </div>
                <div className={styles.letras}>
                    <p className={styles.title}>{'- Nail care'} </p>
                    <p className={styles.texto}>
                    Do not underestimate the importance of having impeccable nails, as their 
                    appearance can influence how others perceive you. To ensure that your nails 
                    are in optimal condition, we invite you to visit our manicure specialists, 
                    who will provide you with the proper care and help you keep them healthy and beautiful.
                    </p>  
                </div>
              </div>
            </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      

            
     
        
      
    </div>
    )
}





import React from "react";
import styles from "./carouselService.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Carrousel_Service({item}){
    return(
      
    <div className={styles.main__container}>
     
     
        <Carousel variant="dark" className={styles.carousel}>
        {item.services_images.map((image, index) => {
            return(
              <Carousel.Item interval={8000} key={index} className={styles.carousel__item__container}>
              <div className={styles.carousel__item}>
                <div className={styles.image__contain}>
                  <img className={styles.image} src={image} />
                </div>
              </div>
            </Carousel.Item>
            );
          })}
        </Carousel>
      

     
        
      
    </div>
    )
}

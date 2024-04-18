

import React from "react";
import styles from "./carouselService.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import I1 from './../../imagenes/carruselPelo/269743024_325477069580005_2328819279906604567_n.jpg'
import I2 from './../../imagenes/carruselPelo/270926249_329090639218648_4545229565822618025_n.jpg'
import I5 from './../../imagenes/carruselPelo/272668820_346913080769737_4114481006150121237_n.jpg'
import I3 from './../../imagenes/carruselPelo/274948744_369006151893763_4379156154545316509_n.jpg'
import I4 from './../../imagenes/carruselPelo/274983969_372000241594354_6921452514445988568_n.jpg'
import I6 from './../../imagenes/carruselPelo/277167096_388790846581960_1247479558951483957_n.jpg'
import I7 from './../../imagenes/carruselPelo/380710350_803574421770265_4394043450002176981_n.jpg'
import I8 from './../../imagenes/carruselPelo/384793238_809929937801380_2688815360572191550_n.jpg'




const IMAGES = [I1, I2, I3, I4, I5, I6]

export default function CarouselService(){
    return(
      //   <div className={styles.contenedorPrincipal} >
      // <div className={styles.contenedorCarrusel}>
      //   <Carousel variant="dark" className={styles.carousel}>
      //     {IMAGES.map((image, index) => {
      //       return(
      //         <Carousel.Item interval={9000} key={index} className={styles.carouselItem}>
      //         <div className={styles.carouselItemDiv}>
      //           <div className={styles.imageDiv}>
      //             <img className={styles.imagen} src={image} />
      //           </div>

      //         </div>
      //       </Carousel.Item>
      //       );
      //     })}
      //   </Carousel>
      // </div>
    // </div>
    <div className={styles.mainConteiner}>
       {IMAGES.map((image, index) => {
        return(
            <div className={styles.image_conteiner}>
              <img className={styles.image} src={image} />
            </div>
        );
       })}
    </div>
    )
}



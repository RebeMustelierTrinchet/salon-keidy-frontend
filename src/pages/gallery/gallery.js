


import React, { useState } from "react";
import styles from "./gallery.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import IH1 from './../../imagenes/hair-service/IMG_0224.jpg';
import IH2 from './../../imagenes/hair-service/IMG_0747.jpg';
import IH3 from './../../imagenes/hair-service/IMG_0954.jpg';
import IH4 from './../../imagenes/hair-service/IMG_1176.jpg';
import IH5 from './../../imagenes/hair-service/IMG_1205.jpg';
import IH6 from './../../imagenes/hair-service/IMG_1355.jpg';
import IH7 from './../../imagenes/hair-service/IMG_1464.jpg';
import IH8 from './../../imagenes/hair-service/IMG_2445.jpg';

import IN1 from './../../imagenes/servicesNails/277555929_393944029399975_2661625416360461963_n.jpg';
import IN2 from './../../imagenes/servicesNails/365463542_770486161745758_8236630732990900890_n.jpg';
import IN3 from './../../imagenes/servicesNails/carouselService2.jpg';
import IN4 from './../../imagenes/servicesNails/398523255_834166178711089_3983555388756943144_n.jpg';
import IN5 from './../../imagenes/servicesNails/376748390_794752499319124_9005176850441855862_n.jpg';
import IN6 from './../../imagenes/servicesNails/398573261_834166542044386_4676069346703389428_n.jpg';
import IN7 from './../../imagenes/servicesNails/277661818_390502196410825_8461084756566816208_n.jpg';
import IN8 from './../../imagenes/servicesNails/277081756_383985047062540_5251203128866066394_n.jpg';

import IE1 from './../../imagenes/esthetic/193169699_177889624338751_6840215930650774046_n.jpg';
import IE2 from './../../imagenes/esthetic/259878602_304356775025368_1997051808282883306_n.jpg';
import IE3 from './../../imagenes/esthetic/364694681_770044315123276_7656971161124107379_n.jpg';
import IE4 from './../../imagenes/esthetic/364696243_770044381789936_3851315552985640054_n.jpg';
import IE5 from './../../imagenes/esthetic/261827147_311864637607915_3790256090960615545_n.jpg';
import IE6 from './../../imagenes/esthetic/386648598_811888354272205_2388357589353873904_n.jpg';
import IE7 from './../../imagenes/esthetic/eye.jpg';
import IE8 from './../../imagenes/esthetic/ceja.jpg';

const images = [
    IH3, IN1, IE7, IH2, IN3, IE1, IH8, IN2,
    IE3, IH5, IN5, IE6, IH4, IE5, IH7, IN4,
    IE2, IH1, IN6, IH6, IN8, IE4, IH7, IN7
];



export default function Gallery(){

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return(
      
    <div className={styles.main__container}>
         {images.map((image,index) => {
            return(
                <div className={styles.image__container}> 
                    <img 
                    className={styles.image} 
                    alt={'img service'} 
                    src={image}
                    onClick={() => handleImageClick(image)}/>
                </div>
                
            );
         })}

            {selectedImage && (
                <div className={styles.modal} onClick={handleClose}>
                    <div className={styles.modalContent}>
                        <img className={styles.modalImage} alt="selected" src={selectedImage} />
                    </div>
                </div>
            )}
      
    </div>
    )
}

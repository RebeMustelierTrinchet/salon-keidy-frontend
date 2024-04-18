import React from "react";

import styles from './services.module.css'
import CarouselService from "../../components/carouselServices/carouselService";
import ServicesNav from "../../components/servicesNav/servicesNav";
import CarouselHair from "./hair/hair";
import CarouselNails from "./nails/nails";
import CarouselEsthetic from "./esthetic/esthetic";


export default function Services(){
    return(
        <div>
            <div className={styles.main__container}>
                <CarouselHair/>
                <CarouselNails/>
                <CarouselEsthetic/>
            </div>
        </div>
    )
}
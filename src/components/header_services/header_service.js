

import React from "react";
import styles from "./header_service.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../imagenes/logo/5b1be6ef-3f0f-4529-ad77-a59222d53447-removebg-preview.png'


export default function Header_Service_details({item}){
    
    return(
      
    <div className={styles.main__container}>
         <div className={styles.image__container}>
            <img src={item.background} alt={item.alt} className={styles.image}/>
         </div>

         <div className={styles.right__container}>
            <div className={styles.logo__container}>
                <img src={logo} alt={'salon logo'}  className={styles.logo}/>
            </div>

            <div className={styles.text__container}>
                <h1 className={styles.title}>{item.title}</h1>
                <h2 className={styles.subtitle}>{item.subtitle}</h2>
            </div>
         </div>

      
    </div>
    )
}

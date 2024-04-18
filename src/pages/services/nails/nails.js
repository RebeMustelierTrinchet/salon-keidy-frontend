

import React from "react";
import styles from "./nails.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import texto__styles from './../../../components/textos.module.css'

import I1 from './../../../imagenes/servicesNails/277555929_393944029399975_2661625416360461963_n.jpg'
import I2 from './../../../imagenes/servicesNails/365463542_770486161745758_8236630732990900890_n.jpg'
import I5 from './../../../imagenes/servicesNails/376748390_794752499319124_9005176850441855862_n.jpg'
import I3 from './../../../imagenes/servicesNails/carouselService2.jpg'
import I4 from './../../../imagenes/servicesNails/398523255_834166178711089_3983555388756943144_n.jpg'
import I6 from './../../../imagenes/servicesNails/398573261_834166542044386_4676069346703389428_n.jpg'

import I7 from './../../../imagenes/servicesNails/277661818_390502196410825_8461084756566816208_n.jpg'
import I8 from './../../../imagenes/servicesNails/277081756_383985047062540_5251203128866066394_n.jpg'

import { Typewriter } from 'react-simple-typewriter'


const IMAGES = [I1, I2, I3, I4, I5, I6, I7, I8]
const nailsServices = [
    '~ Regular manicure, with cleaning', 
    '~ Manicure with cleansing, gel, shellac', 
    '~ Gel structure with semi-permanet polish', 
    '~ Acrilic nails', 
    '~ Pedicure with deep cleaning, plus gel', 
    '~ Acrippie']

export default function CarouselNails(){
    return(
        <div className={styles.maincontainer}>
            <div className={styles.container}>
            {IMAGES.map((image, index) => {
                return(
                    <div className={styles.image_container}>
                    <img className={styles.image} src={image} />
                    </div>
                );
            })}
            
            </div>
            <div className={styles.text__container}>
                <div className={texto__styles.letras}>
                    <h1 className={texto__styles.title}>{'Our Service'}</h1>
                    <h2 className={texto__styles.subtitle}> Manicure & Pedicure:</h2>
                    <hr className={styles.linea__texto}/>
                    {/* <div className={texto__styles.div__border}> */}
                    {/* </div> */}
                </div>
                <div className={styles.text__container__work}>
                    <div className={styles.text__work}>
                        <p className={styles.text}>
                        Nail care goes beyond nail polish; it is a self-care practice that shows attention to detail 
                        and commitment to well-being. Well-groomed nails enhance appearance and convey confidence and 
                        elegance. In our nail boutique, you will find manicure and pedicure services, with a team of 
                        passionate experts who will provide you with a luxurious experience. From deep hydration to 
                        customized designs, we are dedicated to enhancing your unique beauty. 
                        </p>
                        
                        <div className={styles.contBordeS}></div>
                        <div className={styles.contBorde}></div>
                    </div>
                
                    
                        <ul className={styles.name__container}>
                        Our Services 
                            {/* <li className={styles.name__letter}>
                                
                            <Typewriter
                                words={['  ','~ Regular manicure, with cleaning']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={0}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li>

                            <li className={styles.name__letter}>
                            <Typewriter
                                words={['  ','~ Manicure with cleansing, gel, shellac']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={3000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li>

                            <li className={styles.name__letter}>
                            <Typewriter
                                words={['  ','~ Gel structure with semi-permanet polish']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={6200}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li>

                            <li className={styles.name__letter}>
                            <Typewriter
                                words={['  ','~ Acrilic nails']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={10000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li>

                            <li className={styles.name__letter}>
                            <Typewriter
                                words={['  ','~ Pedicure with deep cleaning, plus gel']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={12000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li>

                            <li className={styles.name__letter}>
                            <Typewriter
                                words={['  ','~ Acrippie']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={15000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li> */}
                            {nailsServices.map((service, index) => {
                                return(
                                    <li className={styles.name__letter}>
                                        {service}
                                    </li>
                                );
                            })}
                            <div className={styles.contBordeS}></div>
                        <div className={styles.contBorde}></div>
                        </ul>
                </div>
        </div>
   </div>
    )
}



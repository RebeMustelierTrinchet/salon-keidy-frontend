

import React from "react";
import styles from "./hair.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import texto__styles from './../../../components/textos.module.css'

import I1 from './../../../imagenes/carruselPelo/269743024_325477069580005_2328819279906604567_n.jpg'
import I2 from './../../../imagenes/carruselPelo/270926249_329090639218648_4545229565822618025_n.jpg'
import I5 from './../../../imagenes/carruselPelo/272668820_346913080769737_4114481006150121237_n.jpg'
import I3 from './../../../imagenes/carruselPelo/274948744_369006151893763_4379156154545316509_n.jpg'
import I4 from './../../../imagenes/carruselPelo/274983969_372000241594354_6921452514445988568_n.jpg'
import I6 from './../../../imagenes/carruselPelo/277167096_388790846581960_1247479558951483957_n.jpg'
import I7 from './../../../imagenes/carruselPelo/380710350_803574421770265_4394043450002176981_n.jpg'
import I8 from './../../../imagenes/carruselPelo/384793238_809929937801380_2688815360572191550_n.jpg'

import { Typewriter } from 'react-simple-typewriter'


const IMAGES = [I1, I2, I3, I4, I5, I6]
const hairServices = ['~ Hair Extensions', '~ Keratin Treatment', '~ Haircuts', '~ Color', '~ Crochet baraids', '~ African Braids']

export default function CarouselHair(){
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
                    <h2 className={texto__styles.subtitle}> Styling:</h2>
                    <hr className={styles.linea__texto}/>
                    {/* <div className={texto__styles.div__border}> */}
                    {/* </div> */}
                </div>
                <div className={styles.text__container__work}>
                    <div className={styles.text__work}>
                        <p className={styles.text}>
                        Fixing your hair as a woman is essential in your personal care routine, not only to look good, 
                        but also to feel good about yourself. A good haircut or hairstyle can lift your spirits, boost 
                        your confidence, and highlight your individuality. We understand the importance of your hair as 
                        an expression of your identity and personal style. Our team of highly trained stylists offers 
                        you high-quality services and a relaxing and revitalizing experience, using top-quality products 
                        and innovative techniques to exceed your expectations.
                        </p>
                        
                        <div className={styles.contBordeS}></div>
                        <div className={styles.contBorde}></div>
                    </div>
                
                    
                        <ul className={styles.name__container}>
                        Our Services 
                            {/* <li className={styles.name__letter}>
                                
                            {/* Style will be inherited from the parent element *}
                            <Typewriter
                                words={['  ','~ Hair Extensions']}
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
                                words={['  ','~ Keratin Treatment']}
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
                                words={['  ','~ Haircuts']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={5000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li>

                            <li className={styles.name__letter}>
                            <Typewriter
                                words={['  ','~ Color']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={7000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li>

                            <li className={styles.name__letter}>
                            <Typewriter
                                words={['  ','~ Crochet baraids']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={9000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li>

                            <li className={styles.name__letter}>
                            <Typewriter
                                words={['  ','~ African Braids']}
                                // loop={5}
                                cursorStyle='|'
                                deleteSpeed={50}
                                typeSpeed={70}
                                delaySpeed={10200}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                            </li> */}

                            {hairServices.map((service, index) => {
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





import React from "react";
import styles from "./esthetic.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import texto__styles from './../../../components/textos.module.css'

import I1 from './../../../imagenes/esthetic/193169699_177889624338751_6840215930650774046_n.jpg'
import I2 from './../../../imagenes/esthetic/259878602_304356775025368_1997051808282883306_n.jpg'
import I5 from './../../../imagenes/esthetic/261827147_311864637607915_3790256090960615545_n.jpg'
import I3 from './../../../imagenes/esthetic/364694681_770044315123276_7656971161124107379_n.jpg'
import I4 from './../../../imagenes/esthetic/364696243_770044381789936_3851315552985640054_n.jpg'
import I6 from './../../../imagenes/esthetic/386648598_811888354272205_2388357589353873904_n.jpg'
import I7 from './../../../imagenes/esthetic/carouselService2 (2).jpg'
import I8 from './../../../imagenes/esthetic/374694681_770044315123276_7656971161124107379_n (1).jpg'

import { Typewriter } from 'react-simple-typewriter'



const IMAGES = [I1, I2, I3, I4, I5, I6, I7, I8]
const hairServices = ['~ Hair Extensions', '~ Keratin Treatment', '~ Haircuts', '~ Color', '~ Crochet baraids', '~ African Braids']

export default function CarouselEsthetic(){
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
                    <h2 className={texto__styles.subtitle}> Esthetic:</h2>
                    <hr className={styles.linea__texto}/>
                    {/* <div className={texto__styles.div__border}> */}
                    {/* </div> */}
                </div>
                <div className={styles.text__container__work}>
                    <div className={styles.text__work}>
                        <p className={styles.text}>
                        In our luxurious beauty salon, we offer a wide range of exclusive treatments to enhance 
                        your natural beauty and boost your inner confidence. From botox to combat wrinkles to 
                        mole removal and buttock treatments, our team of specialists is committed to helping you 
                        achieve your aesthetic goals. With personalized and luxury services, we invite you to 
                        experience excellence in beauty and well-being in our exclusive salon. Allow us to take 
                        care of you and highlight your unique beauty starting today.
                        </p>
                        
                        <div className={styles.contBordeS}></div>
                        <div className={styles.contBorde}></div>
                    </div>
                
                    
                        <ul className={styles.name__container}>
                        Our Services 
                            <li className={styles.name__letter}>
                                
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['  ','~ Facial Cleansing     ~Tensioning wires    ']}
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
                                words={['  ','~ Eyelash Extension    ~ BB Glow']}
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
                            </li>
                            <div className={styles.contBordeS}></div>
                        <div className={styles.contBorde}></div>
                        </ul>
                </div>
        </div>
   </div>
    )
}



import styles from "./ourServices.module.css"
import { IoFlowerSharp } from "react-icons/io5";
import texto__styles from "./../../components/textos.module.css"
// import imagen from './../../imagenes/border__buttom.png'
import styles__button from './../transiciones.module.css'
import { Button } from "react-bootstrap";

import I1 from './../../imagenes/services/OIP__1_-removebg-preview.png'
import I2 from './../../imagenes/services/99b9a72476a9cbd84bfd4d8fd751d011.jpg'
import I3 from './../../imagenes/services/9aafec5890093c1466c960cc1835085d.jpg'

export default function OurServices(){
    return(
        <div className={styles.mainCont}>
            <div className={texto__styles.letras}>
                <h1 className={texto__styles.title}>{'What we offer as services ?'}</h1>
                <h2 className={texto__styles.subtitle}> Aesthetic services:</h2>
                <hr className={styles.linea__texto}/>
                {/* <div className={texto__styles.div__border}> */}
                {/* </div> */}
            </div>

            <div className={styles.topCont}>
                <div className={styles.service__container}>
                    
                    <div className={styles.imagen__container}>
                        <img className={styles.imagen} src={I3}/>
                        <h2 className={texto__styles.subtitle}> Manicure</h2>
                        <div className={styles.border1}></div>
                        <div className={styles.border2}></div>
                    </div>
                </div>

                <div className={styles.service__container}>
                    
                    <div className={styles.imagen__container}>
                        <img className={styles.imagen} src={I1}/>
                        <h2 className={texto__styles.subtitle}> Styling </h2>
                        <div className={styles.border1}></div>
                        <div className={styles.border2}></div>
                    </div>
                </div>

                <div className={styles.service__container}>
                    
                    <div className={styles.imagen__container}>
                        <img className={styles.imagen} src={I2}/>
                        <h2 className={texto__styles.subtitle}> Esthetic </h2>
                        <div className={styles.border1}></div>
                        <div className={styles.border2}></div>
                    </div>
                </div>

            </div>

            <div className={styles.div_button}>
                <Button variant="outline-light" data-animation="diagonal" className={styles__button.Boton}>Go Gallery
                    <span className={styles__button.borderTop} id="border"></span>
                    <span className={styles__button.borderRight} id="border"></span>
                    <span className={styles__button.borderBottom} id="border"></span>
                    <span className={styles__button.borderLeft} id="border"></span>
                </Button> 
            </div>
        </div>
    )
}




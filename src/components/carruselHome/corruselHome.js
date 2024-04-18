import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./carrusel.module.css";
import I1 from "./../../imagenes/carruselHome/118476215_1752149348257020_5886591329761144491_n.jpg"
import I2 from "./../../imagenes/carruselHome/120727734_1788856987919589_5156932402536750116_n.jpg"
import I3 from "./../../imagenes/carruselHome/274171477_363007865826925_4599852736620786766_n.jpg"
// import borde from "./../../imagenes/2119443648ccad5144838610e8af0b80 - Copy.jpg"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Button__styles from './../../components/transiciones.module.css'

const IMAGES = [I1, I2, I3]
const nombreLocal = "nombreLocal"


export default function CarrouselHome() {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.cont__derecho}>
        <h1 className={styles.title}>
          {'Our team of specialized experts is ready to provide you with an unparalleled experience.'}
        </h1>
        <h2 className={styles.subtitle}>
          Our is for you to feel comfortable and satisfied with the results, which is why we strive to provide 
          you with a welcoming environment and high-quality services.
        </h2>
          <div className={styles.schedule_button_div}>
            <Button variant="outline-light" data-animation="diagonal" className={Button__styles.Boton}>{'~'} Booking Online
              <span className={Button__styles.borderTop} id="border"></span>
              <span className={Button__styles.borderRight} id="border"></span>
              <span className={Button__styles.borderBottom} id="border"></span>
              <span className={Button__styles.borderLeft} id="border"></span>
            </Button> 
          </div>
      </div>
      <div className={styles.cont__izquierdo}>
        <div className={styles.cont__imagen}>
          <img src={I1} className={styles.imagen1}/>
        </div>
        <div className={styles.cont__imagen}>
          <img src={I2} className={styles.imagen2}/>
        </div>
        <div className={styles.cont__imagen}>
          <img src={I3} className={styles.imagen3}/>
        </div>
        
        

      </div>
        <hr className={styles.raya} />
    </div>
  );
}


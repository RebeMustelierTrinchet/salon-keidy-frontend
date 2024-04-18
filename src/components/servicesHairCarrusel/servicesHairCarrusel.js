// import React from "react";
import styles from './servicesHairCarousel__Container.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
// import "../../index.css"

import I1 from './../../imagenes/Carousel__ContainerPelo/5-15-color-naturals-2018jpg42.jpg'
import I2 from './../../imagenes/Carousel__ContainerPelo/5-15-color-naturals-2018jpg42.jpg'
import I3 from './../../imagenes/Carousel__ContainerPelo/5-15-color-naturals-2018jpg42.jpg'
import I4 from './../../imagenes/Carousel__ContainerPelo/5-15-color-naturals-2018jpg42.jpg'
import I5 from './../../imagenes/Carousel__ContainerPelo/5-15-color-naturals-2018jpg42.jpg'
// import I7 from './../../../imagenes/bath1/IMG_0010 - Copy.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import Col from 'react-bootstrap/Col';


const Images=[
    {
      imagen:I1,
      evento:"Img1",
      servicio:"Strains",
      texto:"Add length and volume to your hair with hair extensions. Transform your look in minutes without waiting for your hair to grow. Experiment with different styles without damaging your hair. Dazzle with your new luxurious mane!",
      
    },
    {
      imagen:I2,
      evento:"Img2",
      servicio:"Colour",
      texto:"Give your hair a touch of life with our wide range of vibrant colors. Our colorist dyes are designed to give you a unique and personality-filled look. Whether you want a radical change or just want to add some highlights, our products will allow you to express yourself through your hair.",
    },
    {
      imagen:I3,
      evento:"Img3",
      servicio:"Hair Wash",
      texto:"In our exclusive salon, we offer you the secret to keeping your hair silky and radiant during washing. Our team of experts uses luxury products and innovative techniques to guarantee dazzling results.  Our high-end products will nourish and revitalize your hair, leaving it soft and shiny.",
    },
    {
      imagen:I4,
      evento:"Img4",
      servicio:"Treatment",
      texto:"Renew and rejuvenate your hair with our exclusive treatments at our luxurious beauty salon. Using exclusive and high-quality products, our treatments address the specific needs of your hair, whether it's intense hydration, damage repair, or strengthening."
    },
    {
      imagen:I5,
      evento:"Img5",
      servicio:"Cut & Style",
      texto:"Transform your appearance with a sophisticated and elegant makeover performed by our team of experts. Allow us to renew your image with a haircut that highlights your most beautiful features and makes you look radiant.",

    },
    
  
  ]
  
  



export default function servicesHairCarousel__Container(){
    return (
       

        <>
       
        <Tab.Container id="left-tabs-example" defaultActiveKey="Img1" className={styles.nav}>
        {/* <Row>   */}
            {/* <Col sm={3}> */}
                <Nav variant="pills" className={styles.flexRow}>
                    {Images.map((item,index) => {
                    return(
                            <Nav.Item className={styles.navItem}>
                                <Nav.Link  eventKey={item.evento}>
                                   <h2 className={styles.nav__title}> {item.servicio}   </h2>
                                </Nav.Link> 
                            </Nav.Item>
                    );
                    })}
                </Nav>
            {/* </Col> */}
         
          {/* <hr/> */}
          
            {/* <Col sm={3}> */}
                <Tab.Content className={styles.imagen__content}>
                {Images.map((item,index) => {
                    return(
                    <Tab.Pane eventKey={item.evento}> 
                        <div className={styles.tab__container}>
                            <img className={styles.Tab__imagen} src={item.imagen} /> 
                            <div className={styles.cont__letras}>
                                <h1 className={styles.Tab__servicio}>{'- '}{item.servicio} </h1>
                                <p  className={styles.Tab__texto}>{item.texto}</p>
                            </div>
                        </div>
                    </Tab.Pane>
                    );
                })}

                </Tab.Content>
            {/* </Col> */}
          
        {/* </Row> */}
      </Tab.Container>
      </>
      );
}



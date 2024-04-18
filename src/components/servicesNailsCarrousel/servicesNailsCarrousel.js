// import React from "react";
import styles from './servicesNailsCarrousel.module.css'
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
      servicio:"Manicure",
      texto:"In our manicure service, a complete treatment is carried out that includes nail trimming and filing, cuticle removal, exfoliation, and a relaxing hand massage. Additionally, it is finished with the application of nail polish to give your nails a touch of color and shine. If you want a more drastic change, we also offer acrylic or gel nail services, where extensions can be applied to achieve a longer-lasting appearance, adapting to your tastes and needs. Treat yourself and show off impeccable hands with our specialized treatments!",
      
    },
    {
      imagen:I2,
      evento:"Img2",
      servicio:"Pedicure",
      texto:"Nail salons also offer various treatments to improve the appearance and health of your nails. If you have weak nails, you can opt for a strengthening treatment to promote their growth and resilience. If you have damaged or broken nails, there are specific treatments to repair and rejuvenate them. These treatments usually include the application of fortifying products and the performance of specialized procedures to restore vitality and beauty to your nails.",
    },
    {
      imagen:I3,
      evento:"Img3",
      servicio:"Nail Treatments",
      texto:"If you're looking for a long-lasting manicure that won't flake easily, permanent nail polish may be the perfect option for you. This service involves the application of a special nail polish that, once properly dried and cured, can last up to two weeks without losing its shine and resistance. If you're someone busy or just want peace of mind that your nail polish will look perfect for longer, permanent polish is a great alternative to consider.",
    },
    {
      imagen:I4,
      evento:"Img4",
      servicio:"Permanent enamel",
      texto:"If you want to have longer or differently shaped nails, nail salons offer nail extension services. These extensions can be made using different materials, such as acrylic nails, gel, or fiberglass. Professional nail technicians can work with you to achieve your desired result, creating beautiful, long-lasting nails that suit your personal style and preferences."
    },
    {
      imagen:I5,
      evento:"Img5",
      servicio:"Nail Extensions",
      texto:"If you're looking to add a unique and creative touch to your nails, nail design services are ideal for you. Many nail salons feature expert nail artists who can create custom and decorative designs using nail polish, acrylic paint, glitter, and other materials. Whether you want a subtle design or something bolder and more eye-catching, nail design services offer you the opportunity to express yourself through your nails and show off a unique style",

    },
    
  
  ]
  
  



export default function ServicesNailCarousel__Container(){
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



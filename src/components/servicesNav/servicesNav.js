// import React from "react";
import styles from './services.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
// import "../../index.css"

import I1 from './../../imagenes/272668820_346913080769737_4114481006150121237_n.jpg'
import I2 from './../../imagenes/270926249_329090639218648_4545229565822618025_n.jpg'
import I3 from './../../imagenes/2119443648ccad5144838610e8af0b80.jpg'
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

const manicureList = ['Regular manicure with cleaning','Manicure with shellac gel cleansing', ' Gel structure with semi-permanent nail polish ','Acrylic on natural nail', ' Acrylic nails' ,' Pedicure with deep cleaning', 'Acripie (acrylic on feet)']

const Images=[
    {
      imagen:I1,
      evento:"Img1",
      servicio:"Manicure",
      texto: manicureList
      
    },
    {
      imagen:I2,
      evento:"Img2",
      servicio:"Styling",
      texto:"Nail salons also offer various treatments to improve the appearance and health of your nails. If you have weak nails, you can opt for a strengthening treatment to promote their growth and resilience. If you have damaged or broken nails, there are specific treatments to repair and rejuvenate them. These treatments usually include the application of fortifying products and the performance of specialized procedures to restore vitality and beauty to your nails.",
    },
    {
      imagen:I3,
      evento:"Img3",
      servicio:"Esthetic",
      texto:"If you're looking for a long-lasting manicure that won't flake easily, permanent nail polish may be the perfect option for you. This service involves the application of a special nail polish that, once properly dried and cured, can last up to two weeks without losing its shine and resistance. If you're someone busy or just want peace of mind that your nail polish will look perfect for longer, permanent polish is a great alternative to consider.",
    },
   
    
  
  ]
  
  



export default function ServicesNav(){
    return (
       

    //     <>
       
    //     <Tab.Container id="left-tabs-example" defaultActiveKey="Img1" className={styles.nav}>
    //     {/* <Row>   */}
    //         {/* <Col sm={3}> */}
    //             <Nav variant="pills" className={styles.flexRow}>
    //                 {Images.map((item,index) => {
    //                 return(
    //                         <Nav.Item className={styles.navItem}>
    //                             <Nav.Link  eventKey={item.evento}>
    //                                <h2 className={styles.nav__title}> {item.servicio}   </h2>
    //                             </Nav.Link> 
    //                         </Nav.Item>
    //                 );
    //                 })}
    //             </Nav>
    //         {/* </Col> */}
         
    //       {/* <hr/> */}
          
    //         {/* <Col sm={3}> */}
    //             <Tab.Content className={styles.imagen__content}>
    //             {Images.map((item,index) => {
    //                 return(
    //                 <Tab.Pane eventKey={item.evento}> 
    //                     <div className={styles.tab__container}>
    //                         <img className={styles.Tab__imagen} src={item.imagen} /> 
    //                         <div className={styles.cont__letras}>
    //                             <h1 className={styles.Tab__servicio}>{'- '}{item.servicio} </h1>
    //                             <p  className={styles.Tab__texto}>{item.texto}</p>
    //                         </div>
    //                     </div>
    //                 </Tab.Pane>
    //                 );
    //             })}

    //             </Tab.Content>
    //         {/* </Col> */}
          
    //     {/* </Row> */}
    //   </Tab.Container>
    //   </>

    <div className={styles.main__container}>

    </div>
      );
}



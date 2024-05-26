

import React from "react";
import styles from "./services_details.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

import H_header from './../../imagenes/services/hair/header.png'
import N_header from './../../imagenes/services details/nails/header.jpg'
import E_header from './../../imagenes/services details/estetic/eye.jpg'
import Header_Service_details from "../../components/header_services/header_service";

import IH1 from './../../imagenes/hair-service/IMG_0224.jpg';
import IH2 from './../../imagenes/hair-service/IMG_0747.jpg';
import IH3 from './../../imagenes/hair-service/IMG_0954.jpg';
import IH4 from './../../imagenes/hair-service/IMG_1176.jpg';
import IH5 from './../../imagenes/hair-service/IMG_1205.jpg';
import IH6 from './../../imagenes/hair-service/IMG_1355.jpg';
import IH7 from './../../imagenes/hair-service/IMG_1464.jpg';
import IH8 from './../../imagenes/hair-service/IMG_2445.jpg';

import IN1 from './../../imagenes/servicesNails/277555929_393944029399975_2661625416360461963_n.jpg';
import IN2 from './../../imagenes/servicesNails/365463542_770486161745758_8236630732990900890_n.jpg';
import IN3 from './../../imagenes/servicesNails/carouselService2.jpg';
import IN4 from './../../imagenes/servicesNails/398523255_834166178711089_3983555388756943144_n.jpg';
import IN5 from './../../imagenes/servicesNails/376748390_794752499319124_9005176850441855862_n.jpg';
import IN6 from './../../imagenes/servicesNails/398573261_834166542044386_4676069346703389428_n.jpg';
import IN7 from './../../imagenes/servicesNails/277661818_390502196410825_8461084756566816208_n.jpg';
import IN8 from './../../imagenes/servicesNails/277081756_383985047062540_5251203128866066394_n.jpg';

import IE1 from './../../imagenes/esthetic/193169699_177889624338751_6840215930650774046_n.jpg';
import IE2 from './../../imagenes/esthetic/259878602_304356775025368_1997051808282883306_n.jpg';
import IE3 from './../../imagenes/esthetic/364694681_770044315123276_7656971161124107379_n.jpg';
import IE4 from './../../imagenes/esthetic/364696243_770044381789936_3851315552985640054_n.jpg';
import IE5 from './../../imagenes/esthetic/261827147_311864637607915_3790256090960615545_n.jpg';
import IE6 from './../../imagenes/esthetic/386648598_811888354272205_2388357589353873904_n.jpg';
import IE7 from './../../imagenes/esthetic/eye.jpg';
import IE8 from './../../imagenes/esthetic/ceja.jpg';
import Gallery_Service from "../../components/gallery_service/gallery_service";

const nombreNegocio= 'Caribean Salon Beauty'


// const headers=[
//     {
//         id:"hair",
//         background: H_header,
//         alt:"hair work example",
//         title:" Gallery of Styles and Transformations",
//         subtitle:"Discover Our Best Work and Find Your Inspiration"

//     },
//     {
//         id: "nail",
//         background:  N_header ,
//         alt: "nail work example",
//         title: "Gallery of Nails and Aesthetics",
//         subtitle: "Explore Our Featured Designs and Treatments"
//     },
//     {
//         id: "esthetic",
//         background:E_header,
//         alt: "esthetic work example",
//         title: "Gallery of Aesthetics and Advanced Treatments",
//         subtitle: "Discover Our Results in Botox, Rhinoplasty, and Acne Treatments"
//     }
// ];


const headers = [
    {
        id: 'hair',
        background: H_header,
        alt: 'hair work example',
        title: 'services_deteil.hair_title',
        subtitle: 'services_deteil.hair_subtitle'
    },
    {
        id: 'nail',
        background: N_header,
        alt: 'nail work example',
        title: 'services_deteil.nail_title',
        subtitle: 'services_deteil.nail_subtitle'
    },
    {
        id: 'esthetic',
        background: E_header,
        alt: 'esthetic work example',
        title: 'services_deteil.esthetic_title',
        subtitle: 'services_deteil.esthetic_subtitle'
    }
];


const hairServices = [
    IH1, IH2, IH3, IH4, IH5, IH6, IH7, IH8
];

const nailServices = [
    IN1, IN2, IN3, IN4, IN5, IN6, IN7, IN8
];

const estheticServices = [
    IE1, IE2, IE3, IE4, IE5, IE6, IE7, IE8
];

const gallery =[
    {
        id:"hair",
        images: hairServices
    },
    {
        id: "nail",
        images: nailServices
    },
    {
        id: "esthetic",
        images: estheticServices
    }
]
export default function Service_details(){
    const { id } = useParams();


    const serviceItem = gallery.find(item => item.id === id);
    const serviceData = serviceItem ? serviceItem.images : [];

    return(
      
    <div className={styles.main__container}>
       <Header_Service_details item={headers.find(headers => headers.id ===id)} />
       <Gallery_Service  item={serviceData} />
      
    </div>
    )
}

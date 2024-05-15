import React from "react";

import styles from './services.module.css'
// import CarouselService from "../../components/carouselServices/carouselService";
// import ServicesNav from "../../components/servicesNav/servicesNav";
// import CarouselHair from "./hair/hair";
// import CarouselNails from "./nails/nails";
// import CarouselEsthetic from "./esthetic/esthetic";

import IH1 from './../../imagenes/hair-service/sin fondo/2d11d52b-9145-417a-9bdd-eab0c9d0602e-removebg-preview.png'
import IH2 from './../../imagenes/hair-service/sin fondo/IMG_0224-removebg-preview.png'
import IH5 from './../../imagenes/hair-service/sin fondo/IMG_0747-removebg-preview.png'
import IH3 from './../../imagenes/hair-service/sin fondo/IMG_0954-removebg-preview.png'
import IH4 from './../../imagenes/hair-service/sin fondo/IMG_1176-removebg-preview.png'
import IH6 from './../../imagenes/hair-service/sin fondo/IMG_1205-removebg-preview.png'
import IH7 from './../../imagenes/hair-service/sin fondo/IMG_1355-removebg-preview.png'
import IH8 from './../../imagenes/hair-service/sin fondo/IMG_1464-removebg-preview.png'


import IN1 from './../../imagenes/servicesNails/277555929_393944029399975_2661625416360461963_n.jpg';
import IN2 from './../../imagenes/servicesNails/365463542_770486161745758_8236630732990900890_n.jpg';
import IN5 from './../../imagenes/servicesNails/376748390_794752499319124_9005176850441855862_n.jpg';
import IN3 from './../../imagenes/servicesNails/carouselService2.jpg';
import IN4 from './../../imagenes/servicesNails/398523255_834166178711089_3983555388756943144_n.jpg';
import IN6 from './../../imagenes/servicesNails/398573261_834166542044386_4676069346703389428_n.jpg';

import IN7 from './../../imagenes/servicesNails/277661818_390502196410825_8461084756566816208_n.jpg';
import IN8 from './../../imagenes/servicesNails/277081756_383985047062540_5251203128866066394_n.jpg';
import Services_designed from "../../components/service-designed/service-designed";


import IE1 from './../../imagenes/esthetic/193169699_177889624338751_6840215930650774046_n.jpg'
import IE2 from './../../imagenes/esthetic/259878602_304356775025368_1997051808282883306_n.jpg'
import IE5 from './../../imagenes/esthetic/261827147_311864637607915_3790256090960615545_n.jpg'
import IE3 from './../../imagenes/esthetic/364694681_770044315123276_7656971161124107379_n.jpg'
import IE4 from './../../imagenes/esthetic/364696243_770044381789936_3851315552985640054_n.jpg'
import IE6 from './../../imagenes/esthetic/386648598_811888354272205_2388357589353873904_n.jpg'
import IE7 from './../../imagenes/esthetic/carouselService2 (2).jpg'
import IE8 from './../../imagenes/esthetic/374694681_770044315123276_7656971161124107379_n (1).jpg'



const services =[
    {
        services_name: 'STYLING:',
        services_images:[IH1,IH2,IH3,IH4,IH5,IH6,IH7,IH8],
        services_offers: ['~ Hair Extensions', '~ Keratin Treatment', '~ Haircuts', '~ Color', '~ Crochet baraids', '~ African Braids'],
        text:' Fixing your hair as a woman is essential in your personal care routine, not only to look good, but also to feel good about yourself. A good haircut or hairstyle can lift your spirits, boost your confidence, and highlight your individuality. We understand the importance of your hair as an expression of your identity and personal style. Our team of highly trained stylists offers you high-quality services and a relaxing and revitalizing experience, using top-quality products and innovative techniques to exceed your expectations.'

    },
    {
        services_name: 'Manicure & Pedicure:',
        services_images:[IN1,IN2,IN3,IN4,IN5,IN6,IN7,IN8],
        services_offers: ['~ Regular manicure, with cleaning', '~ Manicure with cleansing, gel, shellac', '~ Gel structure with semi-permanet polish', '~ Acrilic nails', '~ Pedicure with deep cleaning, plus gel', '~ Acrippie'],
        text:'Nail care goes beyond nail polish; it is a self-care practice that shows attention to detail and commitment to well-being. Well-groomed nails enhance appearance and convey confidence and elegance. In our nail boutique, you will find manicure and pedicure services, with a team of passionate experts who will provide you with a luxurious experience. From deep hydration to customized designs, we are dedicated to enhancing your unique beauty. '

    },
    {
        services_name: 'ESTHETIC:',
        services_images:[IE1,IE2,IE3,IE4,IE5,IE6,IE7,IE8],
        services_offers: ['~ Facial Cleaning', '~ Eyelash extension', '~ Microblanding', '~ Eyebrow waxing', '~ Lip augmentation', '~ Botox'],
        text:'  In our luxurious beauty salon, we offer a wide range of exclusive treatments to enhance your natural beauty and boost your inner confidence. From botox to combat wrinkles to mole removal and buttock treatments, our team of specialists is committed to helping you achieve your aesthetic goals. With personalized and luxury services, we invite you to experience excellence in beauty and well-being in our exclusive salon. Allow us to take care of you and highlight your unique beauty starting today.'

    }

]


export default function Services(){
    return(
        <div>
            <div className={styles.main__container}>
                {services.map((service, index) => (
                    <Services_designed key={index} item={service} />
                ))}
            </div>

        </div>
    )
}
import styles from './why_us.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Styles from './../../components/transiciones.module.css'


const item = [
    {
        title:"Experiencia Excepcional",
        text:"En Caribean Beauty Salon, nos destacamos por ofrecer una experiencia excepcional en cada visita. Nuestro equipo altamente capacitado está comprometido con la excelencia en cada detalle, desde el momento en que entras por nuestras puertas hasta que sales luciendo y sintiéndote increíble."
    },
    {
        title:"Dedicación a la Calidad",
        text:"¿Qué nos hace diferentes? Nuestra dedicación a la calidad en todos nuestros servicios. Utilizamos productos de primera calidad y técnicas innovadoras para asegurarnos de que cada cliente obtenga resultados que superen sus expectativas."
    },
    {
        title:"Pasión por la Belleza y el Bienestar",
        text:"Desde los cortes de cabello que resaltan la belleza natural de cada cliente hasta los tratamientos faciales diseñados para revitalizar y rejuvenecer la piel, cada servicio está diseñado con precisión y cuidado."
    },
    {
        title:"Elige la Excelencia",
        text:"Cuando elijas Caribean Beauty Salon, elige la excelencia, elige la belleza y elige una experiencia que te hará regresar una y otra vez. Estamos aquí para realzar tu belleza y hacerte sentir seguro/a y radiante en cada ocasión. ¡Únete a nosotros y descubre por qué somos la elección preferida de nuestros clientes!"
    },

];



export default function Why_us(){

    
    return(
        <div className={styles.main__conteiner}>
             <h2 className={styles.title}>{'¿Por Qué Elegirnos?'}</h2>
            <h3 className= {styles.subtitle}>Experiencia, Calidad y Pasión por la Belleza</h3>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                {item.map((item, index) => (
                    <SwiperSlide className={styles.swiper__slide} key={index}>
                      <div className={styles.backgrond__container}></div>
                        <div className={styles.card__container}>
                            <div className={styles.header}>
                                <Card.Text className={styles.title}>{'< Caribean Beauty Salon >'}</Card.Text>
                                <Card.Title className={styles.subtitle}>{item.title}</Card.Title>
                            </div>
                            <Card className={styles.sub__card__container}>
                                <Card.Body>
                                    <Card.Title className={styles.important_text}><p className={styles.text}>{item.text}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

                
                <div className={styles.btn__container}>
                        <Button data-animation="diagonal" className={`${Styles.Boton} ${ styles.btn}`} href="/contact-us" > {'<Contac Us>'}
                        <span className={Styles.borderTop} id="border"></span>
                        <span className={Styles.borderRight} id="border"></span>
                        <span className={Styles.borderBottom} id="border"></span>
                        <span className={Styles.borderLeft} id="border"></span>
                        </Button>
                    </div>
            


        </div>
    )
}
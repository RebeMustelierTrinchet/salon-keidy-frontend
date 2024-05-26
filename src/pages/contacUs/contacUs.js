

import React from "react";
import styles from "./contacUs.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

import header from './../../imagenes/Beige_Photo_Collage_Windows_Frames_Fashion_Collection-removebg-preview.png'
import map from './../../imagenes/map.png'

import { DiCssTricks } from "react-icons/di";
import { RiContactsFill } from "react-icons/ri";
import { FaCalendarTimes } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";





export default function Contact_Us(){

    const { t } = useTranslation();
    return(
        <div className={styles.main__container}>

            <div className={styles.header__container}>
                <img src={header} className={styles.header__img}/>
                <div className={styles.header__text}>
                    <h1 className={styles.header__title}>{t('contac_header.title')}</h1>
                    <h3 className={styles.header__subtitle}>{t('contac_header.subtitle')}</h3>
                </div>
            </div>

                <div className={styles.contac__container}>
                    <div className={styles.map}>
                        <img src={map} className={styles.map__img}/>
                    </div>
                    {/* <div className={styles.contac}>
                        <h2 className={styles.title}><RiContactsFill className={styles.icon_title} />INFORMACIÓN DE CONTACTO</h2>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Principal: (832) 814-0718</p>
                        <p  className={styles.info}><DiCssTricks className={styles.icon} />Secundario: (281) 974-4967</p>
                        <p  className={styles.info}><DiCssTricks className={styles.icon} />Email: <a href="mailto:info@info@beautysalon.com" className={styles.link}>info@beautysalon.com</a></p>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Ubicación: Alamar 0224, Ubicado en: 7500 Bellaire Blv. Houston, Tx 77036. PlazAmericas / SALON SPA RS. Suite 215.</p>
                        
                        <h3 className={styles.title}><FaCalendarTimes className={styles.icon_title} />Horario Regular:</h3>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Lunes a Sábado de 11:00 a.m. a 7:30 p.m.</p>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Domingos de 12:00 p.m. a 5:30 p.m.</p>
                        
                        <h3 className={styles.title}><FaRegCalendarTimes className={styles.icon_title} />Horario Especial por Temporada:</h3>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Lunes a Sábado de 10 a.m. a 8:00 p.m.</p>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Domingos de 11:00 a.m. a 7:00 p.m.</p>
                        
                        <h3 className={styles.title}><MdAttachEmail className={styles.icon_title} />Otros Datos:</h3>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />8 Años de Experiencia</p>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Contamos con Licencia</p>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Hablamos Inglés</p>
                        
                        <h3 className={styles.title}><MdOutlineAttachMoney className={styles.icon_title}/>Métodos de Pago:</h3>
                        <p className={styles.info}><DiCssTricks className={styles.icon} />Efectivo, Tarjetas de Crédito & Débito y Zelle</p>
                      
             */}
            {/* </div> */}


            <div className={styles.contac}>
                <h2 className={styles.title}><RiContactsFill className={styles.icon_title} />{t('contact_info.title')}</h2>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.main')} (832) 814-0718</p>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.secondary')} (281) 974-4967</p>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.email')} <a href="mailto:info@info@beautysalon.com" className={styles.link}>info@beautysalon.com</a></p>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.location')}</p>

                <h3 className={styles.title}><FaCalendarTimes className={styles.icon_title} />{t('contact_info.regular_hours.title')}</h3>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.regular_hours.weekdays')}</p>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.regular_hours.sundays')}</p>

                <h3 className={styles.title}><FaRegCalendarTimes className={styles.icon_title} />{t('contact_info.special_hours.title')}</h3>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.special_hours.weekdays')}</p>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.special_hours.sundays')}</p>

                <h3 className={styles.title}><MdAttachEmail className={styles.icon_title} />{t('contact_info.additional_info.title')}</h3>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.additional_info.experience')}</p>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.additional_info.license')}</p>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.additional_info.language')}</p>

                <h3 className={styles.title}><MdOutlineAttachMoney className={styles.icon_title}/>{t('contact_info.payment_methods.title')}</h3>
                <p className={styles.info}><DiCssTricks className={styles.icon} />{t('contact_info.payment_methods.methods')}</p>
            </div>

        </div>

    </div>
    )
}

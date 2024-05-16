import React, { useEffect } from "react";
import styles from './services.module.css';
import { useTranslation } from 'react-i18next';
import ServicesDesigned from "../../components/service-designed/service-designed";

import IH1 from './../../imagenes/hair-service/sin fondo/2d11d52b-9145-417a-9bdd-eab0c9d0602e-removebg-preview.png';
import IH2 from './../../imagenes/hair-service/sin fondo/IMG_0224-removebg-preview.png';
import IH3 from './../../imagenes/hair-service/sin fondo/IMG_0954-removebg-preview.png';
import IH4 from './../../imagenes/hair-service/sin fondo/IMG_1176-removebg-preview.png';
import IH5 from './../../imagenes/hair-service/sin fondo/IMG_0747-removebg-preview.png';
import IH6 from './../../imagenes/hair-service/sin fondo/IMG_1205-removebg-preview.png';
import IH7 from './../../imagenes/hair-service/sin fondo/IMG_1355-removebg-preview.png';
import IH8 from './../../imagenes/hair-service/sin fondo/IMG_1464-removebg-preview.png';

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
import IE7 from './../../imagenes/esthetic/carouselService2 (2).jpg';
import IE8 from './../../imagenes/esthetic/374694681_770044315123276_7656971161124107379_n (1).jpg';

const services = [
    {
        id: 'styling',
        services_name_key: 'services.styling_name',
        services_images: [IH1, IH2, IH3, IH4, IH5, IH6, IH7, IH8],
        services_offers: [
            'services.HairExtensions',
            'services.KeratinTreatment',
            'services.Haircuts',
            'services.Color',
            'services.CrochetBaraids',
            'services.AfricanBraids'
        ],
        textKey: 'services.styling'
    },
    {
        id: 'manicure_pedicure',
        services_name_key: 'services.manicure_pedicure_name',
        services_images: [IN1, IN2, IN3, IN4, IN5, IN6, IN7, IN8],
        services_offers: [
            'services.RegularManicure',
            'services.ManicureWithCleansingGelShellac',
            'services.GelStructureWithSemiPermanentPolish',
            'services.AcrylicNails',
            'services.PedicureWithDeepCleaningPlusGel',
            'services.Acrippie'
        ],
        textKey: 'services.manicure_pedicure'
    },
    {
        id: 'esthetic',
        services_name_key: 'services.esthetic_name',
        services_images: [IE1, IE2, IE3, IE4, IE5, IE6, IE7, IE8],
        services_offers: [
            'services.FacialCleaning',
            'services.EyelashExtension',
            'services.Microblading',
            'services.EyebrowWaxing',
            'services.LipAugmentation',
            'services.Botox'
        ],
        textKey: 'services.esthetic'
    }
];

export default function Services() {
    const { t } = useTranslation();

    useEffect(() => {
        const idToScroll = window.location.hash.replace("#", "");
        const element = document.getElementById(idToScroll);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Hace scroll suavemente hacia el elemento
        }
    }, []);

    return (
        <div className={styles.main__container}>
            {services.map((service, index) => (
                <div id={service.id} key={index}>
                    <ServicesDesigned
                        item={{
                            ...service,
                            services_name: t(service.services_name_key),
                            text: t(service.textKey),
                            services_offers: service.services_offers.map(offerKey => t(offerKey))
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

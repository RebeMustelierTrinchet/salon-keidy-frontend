// import React, { useState } from "react";
// import styles from "./nails.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import I1 from './../../../imagenes/servicesNails/277555929_393944029399975_2661625416360461963_n.jpg';
// import I2 from './../../../imagenes/servicesNails/365463542_770486161745758_8236630732990900890_n.jpg';
// import I5 from './../../../imagenes/servicesNails/376748390_794752499319124_9005176850441855862_n.jpg';
// import I3 from './../../../imagenes/servicesNails/carouselService2.jpg';
// import I4 from './../../../imagenes/servicesNails/398523255_834166178711089_3983555388756943144_n.jpg';
// import I6 from './../../../imagenes/servicesNails/398573261_834166542044386_4676069346703389428_n.jpg';

// import I7 from './../../../imagenes/servicesNails/277661818_390502196410825_8461084756566816208_n.jpg';
// import I8 from './../../../imagenes/servicesNails/277081756_383985047062540_5251203128866066394_n.jpg';

// const IMAGES = [I1, I2, I3, I4, I5, I6, I7, I8];
// const nailsServices = [
//     '~ Regular manicure, with cleaning', 
//     '~ Manicure with cleansing, gel, shellac', 
//     '~ Gel structure with semi-permanet polish', 
//     '~ Acrilic nails', 
//     '~ Pedicure with deep cleaning, plus gel', 
//     '~ Acrippie'
// ];

// export default function CarouselNails() {
//     const [activePanel, setActivePanel] = useState(0);

//     function handleClick(index) {
//         setActivePanel(index);
//     }

//     return (
//         <div className={styles.maincontainer}>
//             <div className={styles.container}>
//                 {IMAGES.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`${styles.panel} ${activePanel === index ? styles.panel_active : ''}`}
//                         style={{ backgroundImage: `url(${image})` }}
//                         onClick={() => handleClick(index)}
//                     >
//                         {/* <img className={styles.image} src={image} /> */}
//                     </div>
//                 ))}
//             </div>

//             <ul className={styles.name__container}>
//                 <li className={styles.name__title}>Our Services</li>
//                 {nailsServices.map((service, index) => (
//                     <li key={index} className={styles.name__letter}>{service}</li>
//                 ))}
//                 <div className={styles.contBordeS}></div>
//                 <div className={styles.contBorde}></div>
//             </ul>
//         </div>
//     );
// }
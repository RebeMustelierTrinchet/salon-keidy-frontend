import styles from './footer.module.css'
import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaTwitter, FaInstagram,FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Styles from './../transiciones.module.css'
import { Button } from 'react-bootstrap';
import logo from './../../imagenes/logo/5b1be6ef-3f0f-4529-ad77-a59222d53447-removebg-preview.png'

import { FaPhoneVolume } from "react-icons/fa6";

export default function Footer(){
    return(
        <>
        {/* <div className={styles.borde__superior}></div> */}
        <div className={styles.mainCont}>
            
            
            <div className={styles.contenedor__imagen__icono}>
                <img src={logo} className={styles.imagen__icono}/>
              
            </div>
            

            <div className={styles.littleCont}>
                <div className={styles.contBoton}>
                    <div className={styles.contBoton}>
                        <button className={styles.boton} href="/"><FaFacebookF  className={styles.button__iconos}  /></button>
                        <button className={styles.boton} href="/"><FaInstagram  className={styles.button__iconos}  /></button>
                        <button className={styles.boton} href="/"><FaTwitter  className={styles.button__iconos} /></button>
                        <button className={styles.boton} href="/"><CgMail  className={styles.button__iconos} /> </button>
                    </div>

                </div>
                <div className={styles.botonCont}>
                    <Button  className={styles.Boton} href="/contact-us" > {'Text Us'} </Button>
                </div>
            </div>
            <div className={styles.littleCont}>
                <div className={styles.ContBoton}>
                    <Button className={styles.botonNav} href="/">Home</Button>
                    <Button className={styles.botonNav} href="/gallery" >Gallery</Button>
                    <Button className={styles.botonNav} href="/services">Services</Button>
                </div>
                <div className={styles.contUs}>
                    <span className={styles.texto}><FaPhoneVolume size={"18px"} className={styles.iconos}/><span className={styles.phone_number}>(346){' '}526{'-'}0235</span></span>
                    <span className={styles.texto}><CgMail className={styles.iconos} />caribeanbeauty@gmail.com</span>
                </div>
            </div>
            


            
        </div>
        </>
    )
}
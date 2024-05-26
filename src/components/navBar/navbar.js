
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./navbar.module.css";
import { FaFacebookF, FaTwitter, FaInstagram,FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from "react";

import logo from './../../imagenes/logo/5b1be6ef-3f0f-4529-ad77-a59222d53447-removebg-preview.png'

import { useTranslation } from 'react-i18next';
import LanguageToggle from '../LanguageToggle/LanguageToggle';


export default function NavBar(){

    const [visible, setVisible] = useState(true);
    

    
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setVisible(true); // Mostrar la barra de navegación al hacer scroll

      clearTimeout(timeoutId); // Reiniciar el temporizador

      timeoutId = setTimeout(() => {
        setVisible(false); // Ocultar la barra de navegación después de 5 segundos
      }, 5000); // 5 segundos en milisegundos
    };

   
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const { t, i18n } = useTranslation(); // Inicializa useTranslation

    const toggleLanguage = (language) => {
        i18n.changeLanguage(language);
    };


  return (
    <div className={styles.maincontainer}>
      <Navbar collapseOnSelect expand="lg" 
        // className={`${styles.contenedorPrincipal} 
        // ${visible ? styles.visible : styles.hidden
        // }`}
        className={styles.contenedorPrincipal} 
      >
                <Container className={styles.container}>
                    <Navbar.Brand href="/" >
                            <div className={styles.conteiner__logo} >
                                <img src={logo} alt={logo} className={styles.img_logo}  />
                            </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                        <Nav.Link className={styles.botonNav} href="/">{t('navbar.home')}<hr className={styles.raya} /></Nav.Link>
                        
                        <Nav.Link className={styles.botonNav} href="/services" >{t('navbar.services')}<hr className={styles.raya} />
                            
                        </Nav.Link>

                        {/* <Nav.Link className={styles.botonNavS} href="/bookOnline">Book Online<hr className={styles.raya} /> */}
                        {/* </Nav.Link> */}

                        <Nav.Link className={styles.botonNav} href="/faqs">{t('navbar.faqs')}<hr className={styles.raya} />
                        </Nav.Link>

                        <Nav.Link className={styles.botonNav} href="/gallery">{t('navbar.gallery')}<hr className={styles.raya} />
                        </Nav.Link>

                        <Nav.Link className={styles.botonNav} href="/contact">{t('navbar.contact')}<hr className={styles.raya} />
                        </Nav.Link>
                
                        </Nav>
                        <Nav className={styles.contBoton}>
                        <Nav.Link className={styles.boton_lenguaje}><LanguageToggle toggleLanguage={toggleLanguage} /> </Nav.Link> 
                        <Nav.Link className={styles.boton} href="/"><FaFacebookF className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><FaInstagram className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><FaTwitter className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><CgMail className={styles.button__iconos} /> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </div>
   );
}
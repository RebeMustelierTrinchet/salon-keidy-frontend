
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

  return (
    <div className={styles.maincontainer}>
      <Navbar
        className={`${styles.contenedorPrincipal} ${
          visible ? styles.visible : styles.hidden
        }`}
      >
                <Container className={styles.container}>
                    <Navbar.Brand href="/" >
                            <div>
                                ICON
                            </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                        <Nav.Link className={styles.botonNav} href="/">Home<hr className={styles.raya} /></Nav.Link>
                        
                        <Nav.Link className={styles.botonNavS} href="/services" >Service<hr className={styles.raya} />
                            
                        </Nav.Link>

                        <Nav.Link className={styles.botonNavS} href="/bookOnline">Book Online<hr className={styles.raya} />
                        </Nav.Link>

                        <Nav.Link className={styles.botonNavS} href="/faqs">F.A.Qs<hr className={styles.raya} />
                        </Nav.Link>
                
                        </Nav>
                        <Nav className={styles.contBoton}>
                        <Nav.Link className={styles.boton} href="/"><FaFacebookF className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><FaInstagram className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><FaTwitter className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><CgMail className={styles.button__iconos} /> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <hr className={styles.raya} ></hr> */}
            {/* <div className={styles.cont__flower}> */}

            {/* </div> */}
       </div>
   );
}
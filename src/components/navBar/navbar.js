import React from "react";
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

export default function NavBar(){
   return(
       <div className={styles.maincontainer}>
            <Navbar  collapseOnSelect expand="lg"  className={styles.contenedorPrincipal}>
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
                            <div className={styles.menu}>
                                <Link to={"/nails_services"}><Button className={styles.Boton} variant="link" href="/nails_services">Manicure</Button></Link> 
                                <Link to={"/hair_services"}><Button className={styles.Boton} variant="link" href="/hair_services">Styling</Button></Link> 
                                <Link to={"/hair_services"}><Button className={styles.Boton} variant="link" href="/hair_services">Esthetic</Button></Link>
                            </div>
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
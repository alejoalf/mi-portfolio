import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";

const CustomNavbar = () =>{
    return (
        <Navbar fixed= "top" className="bg-body-tertiary">
            <Container>
                <Navbar.brand href="#">Alejo Alfonso</Navbar.brand>
                <Navbar.toggle aria-controls="basic-navbar-nav"></Navbar.toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.link href="#intro">Inicio</Nav.link>
                        <Nav.link href="#sobremi">Sobre Mi</Nav.link>
                        <Nav.link href="#proyectos">proyectos</Nav.link>
                        <Nav.link href="#estudios">Estudios</Nav.link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="mailto:alejoalfonsoaa@gmail.com">
                            <EmailRoundedIcon style= {{ fontSize:20 }}></EmailRoundedIcon>
                        </Nav.Link>
                        <Nav.Link href="https://github.com/alejoalf" target="_blank"> 
                        // El target blank sirve para que se abra el enlace en otra pestaña
                            <GitHubIcon style= {{ fontSize:20 }}></GitHubIcon>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default CustomNavbar;
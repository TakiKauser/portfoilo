import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold">Taki Kauser</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#intro">Intro</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
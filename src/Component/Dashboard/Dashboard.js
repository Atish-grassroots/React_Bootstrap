import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Dashboard() {
    return (
        <>
            <Navbar bg="#FFFFFF" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Grassroots</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Dashboard;
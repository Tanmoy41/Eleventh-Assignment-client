import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const HeaderTop = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/" className="d-flex text-white ml-5 text-uppercase fw-bolder">Final Destination</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto d-flex justify-content-end">
                        <Nav.Link href="/home" className="mr-5 text-white">Home</Nav.Link>
                        <Nav.Link href="/dashboard" className="mr-5 text-white">Admin</Nav.Link>
                        <Nav.Link href="/login" className="mr-5 text-white">Login</Nav.Link>
                        <Nav.Link href="/dashboard" className="mr-5 text-white">Dashboard</Nav.Link>
                        <Nav.Link href="/" className="mr-5 text-white">Contact US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderTop;
import React from "react";
import ReactDOM from "react-dom";

export  Navbar() => {
    return(
        <div className="container">
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Start Boostrap</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Services</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
             </Nav>
            </Container>
            </Navbar>
        </div>      
    );
}
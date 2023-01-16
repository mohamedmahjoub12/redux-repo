import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavImage from '../NavBar/NavImage.png';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" className="shark">
        <Container>
          <img src={NavImage} alt='icon'/>
          <Navbar.Brand href="/">REDUX</Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      </div>
      
    
  );
  }

export default NavBar
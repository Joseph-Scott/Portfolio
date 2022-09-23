import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

const Navigation = () => {
  return (
    <>
      <Navbar className="fixed-top" bg="black" variant="dark">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="#scrollspyHeading1">home</Nav.Link>
            <Nav.Link href="/skills">skills</Nav.Link>
            <Nav.Link href="/projects">projects</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

export default Navigation;
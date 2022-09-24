import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ColorGame from '../img/color-game.png';
import Keeper from '../img/keeper.png';
import YelpCamp from '../img/yelp-camp.png';
import '../index.css'


const Projects = () => {
  return (
    <>
      <Container>
        <Card id="projects">
          <Card.Img variant="top" src={ColorGame} />
          <Card.Body>
            <Card.Title>RGB Color Game</Card.Title>
            <Card.Text>
              Skills used: HTML, CSS, Javascript
            </Card.Text>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button variant="outline-light btn-lg px-4">demo</Button>
              <Button variant="outline-light btn-lg px-4">github</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Keeper} />
          <Card.Body>
            <Card.Title>Keeper</Card.Title>
            <Card.Text>
              A single page React app project for keeping notes that focuses on using props, 
              hooks, conditional rendering, managing complex state, and managing component trees
            </Card.Text>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button variant="outline-light btn-lg px-4">demo</Button>
              <Button variant="outline-light btn-lg px-4">github</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={YelpCamp} />
          <Card.Body>
            <Card.Title>YelpCamp</Card.Title>
            <Card.Text>
              Skills used: HTML, Javascript, CSS and Bootstrap for styling, Flash messaging, 
              Node.js with Express.js for handling routes and views (with EJS templating), 
              Passport for authentication, and MongoDB for database with Mongoose for data modeling
            </Card.Text>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button variant="outline-light btn-lg px-4">demo</Button>
              <Button variant="outline-light btn-lg px-4">github</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Projects;
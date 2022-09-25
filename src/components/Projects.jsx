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
    <Container className="col-xxl-8 px-4 py-4 my-5">
      <Row>
        <h1 className="display-5 fw-bold lh-1 mb-3">projects</h1>
        <p>|| this is some of my work</p>
      </Row>
      <Row className="row-cols-1 row-cols-md-2 g-3">
        <Col lg={6}>
          <Card>
            <Card.Img variant="top" src={ColorGame} />
            <Card.Body>
              <Card.Title>RGB Color Game</Card.Title>
              <Card.Text>
                Skills used: HTML, CSS, Javascript
              </Card.Text>
              <Card.Footer className="gap-2 d-md-flex justify-content-md-start">
                <Button variant="outline-light btn-lg px-4">demo</Button>
                <Button variant="outline-light btn-lg px-4">github</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Img variant="top" src={Keeper} />
            <Card.Body>
              <Card.Title>Keeper</Card.Title>
              <Card.Text>
                A single page React app project for keeping notes that focuses on using props, 
                hooks, conditional rendering, managing complex state, and managing component trees
              </Card.Text>
              <Card.Footer className="gap-2 d-md-flex justify-content-md-start">
                <Button variant="outline-light btn-lg px-4">demo</Button>
                <Button variant="outline-light btn-lg px-4">github</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="align-self-center">
          <Card>
            <Card.Img variant="top" src={YelpCamp} />
            <Card.Body>
              <Card.Title>YelpCamp</Card.Title>
              <Card.Text>
                Skills used: HTML, Javascript, CSS and Bootstrap for styling, Flash messaging, 
                Node.js with Express.js for handling routes and views (with EJS templating), 
                Passport for authentication, and MongoDB for database with Mongoose for data modeling
              </Card.Text>
              <Card.Footer className="gap-2 d-md-flex justify-content-md-start">
                <Button variant="outline-light btn-lg px-4">demo</Button>
                <Button variant="outline-light btn-lg px-4">github</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
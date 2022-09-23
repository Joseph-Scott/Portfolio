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
            <Card.Title>Color Game</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Keeper} />
          <Card.Body>
            <Card.Title>Keeper</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={YelpCamp} />
          <Card.Body>
            <Card.Title>YelpCamp</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Projects;
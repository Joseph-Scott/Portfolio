import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import JavaScript from '../img/javascript.png';
import Html5 from '../img/html5.png';
import Css3 from '../img/css3.png';
import GIt from '../img/git.png';
import NOde from '../img/node.png';
import REact from '../img/react.png';


const Skills = () => {
  return (
    <Container className=" px-4 py-4 my-5">
      <Row>
        <h1 className="display-5 fw-bold lh-1 mb-3">skills</h1>
        <p>|| these are the main technologies I've worked with</p>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Card className="bg-dark" id="skills">
            <Card.Img src={JavaScript} alt="Card image" />
          </Card>
          <h5>Javascript</h5>
        </Col>
        <Col>
          <Card className="bg-dark" id="skills">
            <Card.Img src={Html5} alt="Card image" />
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark" id="skills">
            <Card.Img src={Css3} alt="Card image" />
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Card className="bg-dark" id="skills">
            <Card.Img src={GIt} alt="Card image" />
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark" id="skills">
            <Card.Img src={NOde} alt="Card image" />
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark" id="skills">
            <Card.Img src={REact} alt="Card image" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
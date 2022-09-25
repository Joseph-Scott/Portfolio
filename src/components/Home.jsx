import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Headshot from '../img/casual-headshot.jpg';
import '../index.css';

const Home = () => {
  return (
    <Container className="col-xxl-8 px-4 py-5 my-5">
      <Row className="align-items-center g-5 py-5">
        <Col col={10} sm={8} lg={6} >
          <Image src={Headshot} className="rounded-4 d-block mx-lg-auto img-fluid" alt="Headshot" loading="lazy" id="headshot"/>
        </Col>
        <Col md={6} lg={6} xxl={6}>
          <h1 className="display-5 fw-bold lh-1 mb-3">hi, I'm Joe</h1>
          <p>I'm a front end software developer living in the Atlanta, 
            Georgia area. I attended Penn State University and have a degree in Human Development and Family Studies. 
            I have been working in the social services field for several years because I have a passion for understanding 
            the issues that people and families face, helping them to empower themselves to overcome obstacles and reach their 
            goals, and to ultimately change their lives for the better.</p>
          <p>It's kind of a long story (I'd love to tell you about) but in 2018, after looking for a career change, speaking 
            with some software developer friends, and reading about programs that were teaching military veterans (like me) to code as a 
            second career, I began teaching myself to code via different online tutorial sites. The nostalgia I felt from using 
            HTML and CSS to trick out my Xanga in junior high and my MySpace in the early 2000's was real! I realized that I loved the 
            challenge and creativity involved in using software development to help people and companies reach their goals in new 
            and constantly evolving ways. I also attended and graduated from the six month, full stack flex program at <a href="http://www.digitalcrafts.com">DigitalCrafts</a>&nbsp;
            in August of 2018.</p>
          <p>Since DigitalCrafts I have had three beautiful kids with my wife, worked full-time, and navigated a years-long 
            pandemic (do you feel me?), all while looking for my first professional software development position. I am 
            constantly in front of a monitor working to deepen my front end skills and general MERN stack knowledge with JavaScript, 
            HTML, CSS, NodeJS, JQuery, ExpressJS, MongoDB, and React with online courses such as <a href="https://www.udemy.com/the-web-developer-bootcamp/">The Web Developer Bootcamp</a>&nbsp;
            and <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">React-The Complete Guide</a>.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button variant="outline-light btn-lg px-4">my resume</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
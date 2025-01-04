import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sticker.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>











        
      <Row>
  <Col md={8} className="home-about-description" >
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body" style={{textAlign:"justify"}}>
      I have a passion for programming and problem-solving, and my journey in tech has led me to become a versatile
      <b className="purple"> Data Analyst, Python Developer </b> and <b className="purple">MERN Stack Developer.</b>
      <br />
      <br />
      I specialize in data analysis, turning raw data into actionable insights using tools and languages like
      <i>
        <b className="purple"> Python, Pandas</b> and <b className="purple">SQL  ... </b>
      </i>
      <br />
      <br />
      As a MERN stack developer, I enjoy building dynamic web applications using 
      <i>
        <b className="purple"> MongoDB, Express.js, React.js, </b> and <b className="purple">Node.js, </b>
      </i>
      focusing on creating efficient solutions.
      <br />
      <br />
      Whenever possible, I combine my skills in development and data analysis to create impactful products that bridge
      the gap between technology and data-driven decision-making.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>













        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Saidani-Hazem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/saidani.hazem.94"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hazem-saidani-b87814271"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sd_hazem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

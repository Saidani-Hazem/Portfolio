import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/meeee.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {


  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Hazem Saidani</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
  md={5}
  style={{
    paddingBottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <img
    src={homeLogo}
    alt="home pic"
    className="img-fluid"
    style={{
      maxHeight: "420px",
      borderRadius: "40%",
      boxShadow: "10px 10px 10px 10px #24143D",
    }}
  />
</Col>

            <style>
  {`
    @media (max-width: 768px) {
      img[alt="home pic"] {
        max-height: 310px !important;
        border-radius: 40% !important;
        margin-top:30px;
      }
      .home-logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `}
</style>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" >
      <Card.Body>
        <blockquote className="blockquote mb-0" >
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hazem Saidani</span> from{" "}
            <span className="purple">Tunisia.</span>
            <br />
            <span className="purple">Data Analyst</span> and <span className="purple">MERN Stack Developer </span>@<span className="purple">DigitalMoveUp</span>.
            <br />
            My experience spans web development using the MERN stack (React, Node.js, MongoDB, Express.js) and data analysis with tools like <span className="purple">Python</span> and <span className="purple">Power BI...</span>.
            <br />
            <br />
            Apart from coding, some other activities that I do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and discovering new cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, stay curious, and build impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Hazem Saidani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

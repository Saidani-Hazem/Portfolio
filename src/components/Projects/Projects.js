import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import books from "../../Assets/Projects/bbook.png";
import pbix from "../../Assets/Projects/dashs.png";
import ML from "../../Assets/Projects/ML.png";
import c4 from "../../Assets/Projects/4cc.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c4}
              isBlog={true}
              title="4c Plateform"
              description="I developed the back-end and admin pages for a website that manages posts, user accounts, and database interactions. The system allows administrators to create, edit, and delete posts, while handling user registrations, permissions, and secure data storage. ensuring smooth management of content and user data."
              demoLink=""
              ghLink="https://github.com/Saidani-Hazem/4C.git"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="Machine Learning Model"
              description="A sentiment analysis model to classify tweets into six categories (sadness, joy, love, anger, fear, surprise). Cleaned a dataset of 400,000 messages by removing duplicates, empty entries, and invalid labels, preparing it for effective machine learning training with Streamlit interface."
              demoLink=""
              ghLink="https://github.com/Saidani-Hazem/Analyse-de-sentiment.git"
            />
            
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books}
              isBlog={false}
              title="Book Heaven"
              description="With Book Heaven, you can view informations about various books, including their cover pictures. You can also save your favorite book details. Enjoy exploring and keeping track of your reading journey with us!"
              ghLink="https://github.com/Saidani-Hazem/Book-Haven"
              demoLink="https://book-haven-f36c0.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pbix}
              isBlog={true}
              title="Power bi Dashboards"
              description="Powerful dashboards provides a comprehensive view of product stores, customers, products, and brands, all in one place. With interactive visuals and detailed analytics, you can easily track store performance, monitor product sales.."
              demoLink=""
              ghLink="https://www.linkedin.com/feed/update/urn:li:activity:7182758110862675968/"
            />
            
          </Col>

          
          
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

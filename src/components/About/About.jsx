import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="blue">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;

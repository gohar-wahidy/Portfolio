import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg2 from "../../Assets/home-main2.png";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming when I was 17, and I haven't stopped building since.
              <br />
              <br />
              I earned my bachelor's degree in Computer Science from the University of Northern Iowa, and I now work as a
              <i>
                <b className="blue"> software engineer</b>
              </i>
              .
              <br />
              <br />
              I build across the stack with
              <i>
                <b className="blue"> Python, TypeScript, JavaScript, and Java</b>
              </i>
              , using React and Next.js for the web, React Native for mobile, and Node.js and PostgreSQL for the backend.
              <br />
              <br />
              My focus is shipping
              <i>
                <b className="blue"> backend systems, mobile apps, and real-time products </b>
              </i>
              that people can actually use.
              <br />
              <br />
              Whenever possible, I love taking an idea from a simple prototype to something live on iOS, Android, and the web.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <img src={myImg2} className="img-fluid" width="217px" height="237px" alt="profile pic" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gohar-wahidy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/goharwahidy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gohar_wahidy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
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

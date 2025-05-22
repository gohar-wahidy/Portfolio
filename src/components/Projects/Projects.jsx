import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import barber from "../../Assets/Projects/barber.png";
import sitesloth from "../../Assets/Projects/sitesloth.png";
import interior from "../../Assets/Projects/interior.png";
import banis from "../../Assets/Projects/banis.png";
import tubestalk from "../../Assets/Projects/tubestalk.png";
import beechers from "../../Assets/Projects/beechers.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>

        <h1 className="project-heading">
          <strong className="blue">Freelance</strong> Projects
        </h1>
        <p style={{ color: "white" }}>
          Projects I’ve worked on for clients or businesses.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banis}
              title="Bani's"
              description="Responsive website built with HTML, CSS, and JavaScript to showcase Bani’s wine and spirits shop in Cedar Falls. Designed to boost visibility and user accessibility."
              ghLink="https://github.com/gohar-wahidy/Banis4U"
              siteLink="https://www.banis-hill.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beechers}
              title="Beecher's Ice Cream"
              description="Modern React and Tailwind CSS site for Beecher’s Ice Cream in Dubuque. Highlights homemade flavors, shop location, and menu with a clean, mobile-friendly layout."
              ghLink="https://github.com/gohar-wahidy/BeechersIceCream"
              siteLink="https://www.beechersicecream.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barber}
              title="Barber Shop"
              description="Barber shop website built with React and Tailwind CSS. Promotes $20 flat-rate Euro-style haircuts and shaves with fast-loading, walk-in-friendly design."
              ghLink="https://github.com/gohar-wahidy/BarberShop"
              siteLink="https://barber-shop-waterloo.vercel.app/"
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ marginTop: "50px" }}>
          <strong className="blue">Personal</strong> Projects
        </h1>
        <p style={{ color: "white" }}>
          Projects I’ve built independently to learn, experiment, and create.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interior}
              title="MyInteriorBudAI"
              description="AI-powered interior design web app built with Next.js, React, and Tailwind CSS. Offers users a fast, modern interface for exploring creative room layouts."
              ghLink="https://github.com/gohar-wahidy/MyInteriorBudAI"
              siteLink="https://my-interior-bud-ai.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tubestalk}
              title="TubeStalk"
              description="A YouTube extension that auto-pauses videos when you look away and resumes when you return. Built with face-api.js, HTML, CSS, and JavaScript for real-time interaction."
              ghLink="https://github.com/gohar-wahidy/TubeStalk"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sitesloth}
              title="SiteSloth"
              description="Python-based internet throttling tool using mitmproxy. Slows down access to distracting websites with built-in support for macOS, Windows, and Linux certificate setup."
              ghLink="https://github.com/gohar-wahidy/SiteSloth"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
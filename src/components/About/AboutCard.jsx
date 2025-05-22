import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hey there! I’m <span className="blue">Gohar Wahidy</span> from
            <span className="blue"> Cedar Falls, Iowa.</span>
            <br />
            I’m currently pursuing a B.A. in Computer Science at the <span className="blue">University of Northern Iowa</span> and have earned Dean’s List honors every year.
            <br />
            I have hands-on experience in frontend and full-stack development through my job as a frontend developer and manager, as well as through freelance projects and personal work.
            <br />
            I specialize in building responsive, high-performance websites and tools using modern technologies like React, Tailwind CSS, Node.js, and Python.
            <br />
            <br />
            Here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <AiFillStar /> Building creative side projects that solve real-life problems
            </li>
            <li className="about-activity">
              <AiFillStar /> Experimenting with new frameworks and libraries
            </li>
            <li className="about-activity">
              <AiFillStar /> Exploring AI tools and integrating them
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

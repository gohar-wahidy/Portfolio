import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hey there! I'm <span className="blue">Gohar Wahidy</span> from
            <span className="blue"> Cedar Falls, Iowa.</span>
            <br />
            I graduated from the <span className="blue">University of Northern Iowa</span> with
            a bachelor's degree in Computer Science, completing the usual four-year program in
            three years, and I earned Dean's List honors every year.
            <br />
            I'm a software engineer with experience building full-stack applications, backend
            systems, mobile apps, and responsive websites.
            <br />
            I work with React, React Native, Next.js, TypeScript, Python, Node.js, and
            PostgreSQL, along with APIs, cloud services, real-time systems, and computer vision.
            <br />
            <br />
            Here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <AiFillStar /> Shipping products people can use on the web and on mobile
            </li>
            <li className="about-activity">
              <AiFillStar /> Experimenting with new frameworks and libraries
            </li>
            <li className="about-activity">
              <AiFillStar /> Exploring AI, computer vision, and real-time systems
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

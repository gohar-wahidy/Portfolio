import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython, DiJava, DiJavascript1, DiPhp, DiHtml5, DiCss3,
  DiReact, DiNodejsSmall, DiGit, DiMongodb
} from "react-icons/di";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase,
  SiMysql, SiNpm, SiYarn
} from "react-icons/si";

function Techstack() {
  const languages = [
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiPhp />, name: "PHP" },
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
  ];

  const frameworks = [
    { icon: <DiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  const tools = [
    { icon: <DiGit />, name: "Git" },
    { icon: <SiNpm />, name: "NPM" },
    { icon: <SiYarn />, name: "Yarn" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiMysql />, name: "MySQL" },
  ];

  const renderSection = (title, items) => (
    <>
      <h2 className="text-center" style={{ marginTop: "30px", marginBottom: "20px" }}>
        {title}
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {items.map((skill, index) => (
          <Col xs={4} md={2} className="tech-icons text-center" key={index}>
            <div>{skill.icon}</div>
            <div style={{ marginTop: "8px", fontSize: "0.9rem" }}>{skill.name}</div>
          </Col>
        ))}
      </Row>
    </>
  );

  return (
    <>
      {renderSection("Languages", languages)}
      {renderSection("Frameworks / Libraries", frameworks)}
      {renderSection("Tools", tools)}
    </>
  );
}

export default Techstack;

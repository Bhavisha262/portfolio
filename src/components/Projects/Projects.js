import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import games from "../../Assets/Projects/games.png";
import cards from "../../Assets/Projects/cards.png";
import interior from "../../Assets/Projects/interior.png";
import images from "../../Assets/Projects/overlap.png";
import PassportForm from "../../Assets/Projects/passport.jpg";
import form from "../../Assets/Projects/register.jpg";
import headerSub from "../../Assets/Projects/header.png";
import htmlcss from "../../Assets/Projects/htmlcss.jpg";
import box from "../../Assets/Projects/box.jpg";
import biodata from "../../Assets/Projects/biodata.jpg";
import table from "../../Assets/Projects/table.jpg";
import fruits from "../../Assets/Projects/array.jpg";
import sliders from "../../Assets/Projects/slider.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of My <strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few tasks and projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interior}
              isBlog={false}
              title="Interior Design Website Using HTML+CSS+JS"
              ghLink="https://bhavisha262.github.io/Interior-Website/Interior%20Design.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PassportForm}
              isBlog={false}
              title="Passport-Registration-Form"
              ghLink="https://bhavisha262.github.io/task.html/ques%204.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              isBlog={false}
              title="Text Names Overlapping on Images with z-index"
              ghLink="https://bhavisha262.github.io/games/Gaming.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images}
              isBlog={false}
              title="Images Overlapping on Images with z-index"
              ghLink="https://bhavisha262.github.io/overlap/imagesoverlap.html"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cards}
              isBlog={false}
              title="Flip Cards With Celebrities"
              ghLink="https://bhavisha262.github.io/test-ques1/card.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form}
              isBlog={false}
              title="User Sign Up Form"
              ghLink="https://bhavisha262.github.io/test-ques2/form.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={headerSub}
              isBlog={false}
              title="Header and Subheader with Education"
              ghLink="https://bhavisha262.github.io/header2/Header3.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={htmlcss}
              isBlog={false}
              title="Restaurant Website using Html and Css Only"
              ghLink="https://bhavisha262.github.io/test-12-8/test.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={box}
              isBlog={false}
              title="Box Hover effect and Transitions"
              ghLink="https://bhavisha262.github.io/box3/box.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biodata}
              isBlog={false}
              title="Biodata with picture changing"
              ghLink="https://bhavisha262.github.io/biodata1/task2.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={table}
              isBlog={false}
              title="Table content replacing with script instead of html"
              ghLink="https://bhavisha262.github.io/Table/task3.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fruits}
              isBlog={false}
              title="Joining Fruits with Array"
              ghLink="https://bhavisha262.github.io/fruits/task4.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sliders}
              isBlog={false}
              title="Sliders Using JS"
              ghLink="https://bhavisha262.github.io/sliders/task6.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import healthify from "../../Assets/Projects/healthify.png";
import readews from "../../Assets/Projects/readews.png";


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
              imgPath={healthify}
              isBlog={false}
              title="Olx Clone App"
              description="the first Flutter OLX clone app! 🚀📱 Successfully developed the basic UI, showcasing my skills in mobile app development. Looking forward to refining and expanding its features.
              -4 screens 
              
              1 splash screen
              2 home screen
              3 detail screen
              4 profile page 
              
              create simple UI
              using
              list view, grid view, etc.. widget "
              ghLink="https://www.linkedin.com/posts/nirav-kagathara-80978124b_flutter-appdevelopment-olxclone-activity-7159536736727973888-il1G?utm_source=share&utm_medium=member_desktop"
              demoLink="https://github.com/niravkagathara/olx_clone_flutter.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readews}
              isBlog={false}
              title="E-commerce website"
              description="MERN Stack E-commerce website Features & Technologies:

              - Frontend: React, Redux Toolkit, React Router, MUI, Styled Components, Bootstrap
              - Backend: Node.js, Express, MongoDB, Mongoose
              - UI/UX: Emotion, Formik, React Icons, React Feather, React Multi Carousel, React Modal, React Toastify
              - Security & Authentication: Helmet, JSON Web Token, Validator
              - File Handling: Multer
              - Environment Configuration: Dotenv
              - Logging & Debugging: Morgan
              - Testing: Jest, Testing Library
              - Other Tools: Web Vitals, React Pro Sidebar, CORS
              - cookies manage 
              "
              ghLink="https://www.linkedin.com/posts/nirav-kagathara-80978124b_mern-ecommerce-react-activity-7206285241118842880-ZVj8?utm_source=share&utm_medium=member_desktop"
              demoLink="https://ecommerce-nk.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

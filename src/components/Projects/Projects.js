import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import healthify from "../../Assets/Projects/healthify.png";
import readews from "../../Assets/Projects/readews.png";
import games from "../../Assets/Projects/dugames.png";

import docto from "../../Assets/Projects/1.png";
import { FaLinkedinIn } from "react-icons/fa";


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
              imgPath={docto}
              isBlog={false}
              title="Doctor-Appointment Management"
              description="🚀 Excited to Showcase My Doctor Appointment Management System! 🚀
I’m thrilled to introduce my latest project, a Doctor Appointment Management System designed to enhance hospital operations. Built with PHP and SQL, this system features a responsive design and offers comprehensive functionalities for patients, doctors, and admins.
- Responsive Design: Optimized for a seamless experience across all devices.
How to use site all details show in linkdin post description in 
"
ghLink="https://www.linkedin.com/posts/nirav-kagathara-80978124b_webdevelopment-php-sql-activity-7230564598725132288-BlJ8?utm_source=share&utm_medium=member_desktop"
              demoLink="http://doctor-app.infinityfreeapp.com/DAM"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readews}
              isBlog={false}
              title="E-commerce website         "
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
              using list view, grid view, etc.. widget "
              ghLink="https://www.linkedin.com/posts/nirav-kagathara-80978124b_flutter-appdevelopment-olxclone-activity-7159536736727973888-il1G?utm_source=share&utm_medium=member_desktop"
              git="https://github.com/niravkagathara/olx_clone_flutter.git"
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              isBlog={false}
              title="DU Games"
              description="🚀 Introducing DU Games – Darshan University 🎮✨
I am excited to share DU Games, an interactive online gaming platform developed by students of Darshan University! This project blends web development and game development, offering a variety of engaging games and valuable features for users.
🔑 Key Highlights:
🎲 Games Library: Play games like 2048, Car Chase, Flappy Bird, and more, designed for users of all ages.
📝 Feedback System: Share your thoughts to help us grow and improve.
👩‍💻 Developer Profiles: Meet the creators behind the platform with links to their professional profiles.
🔧 Admin Panel: Seamless management of games and user feedback.
👤 User Profiles: Personalized dashboards for registered users.
🛠 Tech Stack:
Frontend: HTML, CSS, JavaScript, Bootstrap
Backend: PHP & MySQL
This project was made possible with the guidance and mentorship of Prof. Vijay Shekhat —thank you for your support and insights! 🙏
"
              ghLink="https://www.linkedin.com/posts/nirav-kagathara-80978124b_flutter-appdevelopment-olxclone-activity-7159536736727973888-il1G?utm_source=share&utm_medium=member_desktop"
              git="https://github.com/niravkagathara/DU_game.git"
            />
          </Col>
         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

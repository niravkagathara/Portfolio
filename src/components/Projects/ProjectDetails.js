import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel, Button, Badge } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import projectsData from "../../data/projectsData";
import Card from "react-bootstrap/Card";

function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(proj => proj.id.toString() === id);

    // Disable text selection
    React.useEffect(() => {
        const handleSelectStart = (e) => e.preventDefault();
        document.addEventListener('selectstart', handleSelectStart);
        return () => document.removeEventListener('selectstart', handleSelectStart);
    }, []);

    if (!project) {
        return (
            <Container fluid className="project-section">
                <Particle />
                <Container>
                    <h1>Project not found</h1>
                    <Button 
                        variant="primary" 
                        onClick={() => navigate('/project')}
                    >
                        Back to Projects
                    </Button>
                </Container>
            </Container>
        );
    }

    const handleBackClick = () => {
        navigate('/project'); // Make sure this matches your route in App.js
    };

    const handleButtonClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Container fluid className="project-section user-select-none" style={{ userSelect: 'none' }}>
            <Particle />
            <Container>
            <Card className="project-card-view">
            <Card.Body>

                {/* Working Back Button */}
                <Button 
                    variant="primary" 
                    onClick={handleBackClick}
                    className="mb-4"
                >
                    ← Back to Projects
                </Button>

                <h1 className="project-heading text-white">
                    {project.title}
                </h1>

                {/* Auto-scrolling Carousel */}
                <Row className="justify-content-center mb-4">
                    <Col md={10}>
                        <Carousel interval={2000} wrap={true}>
                            {project.images.map((img, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={img}
                                        alt={`Slide ${index}`}
                                        style={{ 
                                            maxHeight: "500px", 
                                            objectFit: "contain",
                                            pointerEvents: 'none'
                                        }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>

                {/* Centered and Working Action Buttons */}
                <Row className="justify-content-center mb-4">
                    <Col md={8} className="text-center">
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            
                            {project.linkedinLink && (
                                <Button
                                    variant="primary"
                                    onClick={() => handleButtonClick(project.linkedinLink)}
                                    className="px-4 py-2"
                                >
                                    <FaLinkedinIn className="me-2" /> LinkedIn
                                </Button>
                            )}
                            {project.demoLink && (
                                <Button
                                    variant="primary"
                                    onClick={() => handleButtonClick(project.demoLink)}
                                    className="px-4 py-2"
                                >
                                    <CgWebsite className="me-2" /> Live Demo
                                </Button>
                            )}
                            {project.githubLink && (
                                <Button
                                    variant="primary"
                                    onClick={() => handleButtonClick(project.githubLink)}
                                    className="px-4 py-2"
                                >
                                    <BsGithub className="me-2" /> GitHub
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>

                {/* Project Details */}
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h4 className="text-white mb-3">Description</h4>
                        <p className="text-white">{project.description}</p>
                        
                        <h4 className="text-white mb-3">Features</h4>
                        <ul className="text-white">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        <div className="text-center mt-4">
                            <h4 className="text-white mb-3">Technologies Used</h4>
                            <div className="d-flex flex-wrap justify-content-center gap-2">
                                {project.technologies.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        bg="primary"
                                        className="px-3 py-2"
                                        style={{
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            borderRadius: '20px'
                                        }}
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
                </Card.Body>

                </Card>
            </Container>
        </Container>
    );
}

export default ProjectDetails;
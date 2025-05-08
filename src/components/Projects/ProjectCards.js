// src/components/Projects/ProjectCards.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProjectCards(props) {
  const navigate = useNavigate();

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px",
          objectFit: "cover",
          display: "block",
          margin: "0 auto"
        }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description.length > 150 
            ? `${props.description.substring(0, 150)}...`
            : props.description}
        </Card.Text>
        
        <div className="d-flex justify-content-center  flex-wrap gap-2">
          {props.ghLink && (
            <Button 
              as="a"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn /> &nbsp; LinkedIn
            </Button>
          )}
          
          {props.demoLink && (
            <Button 
              as="a"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
          
          {props.git && (
            <Button 
              as="a"
              href={props.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}
          
          <Button 
            variant="primary" 
            onClick={() => navigate(`/project/${props.id}`)}
          >
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
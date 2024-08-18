import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = React.useState(false); 

  return (
    <Card className="project-card-view" style={{ height: isExpanded ? "auto" : "300px" }}> 
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{ 
          height: "400px", // Increased image height
          objectFit: props.imgPath ? "cover" : "contain", // Center small images
          display: "block", 
          margin: "0 auto" 
        }} 
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", overflow: "hidden", maxHeight: isExpanded ? "none" : "100px" }}> 
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <FaLinkedinIn /> &nbsp;
          {props.isBlog ? "Blog" : "Linkdin"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
          
        )}
         {!props.isBlog && props.git && (
          <Button
          variant="primary"
          href={props.git}
          target="_blank"
          style={{ marginLeft: "10px" }}
          >
          <BsGithub /> &nbsp;
          {"git"}
          </Button>
          
        )}

         &nbsp;
         &nbsp;
        {!isExpanded && props.description.length > 100 && ( 
          <Button variant="primary link" onClick={() => setIsExpanded(true)}>
           More..
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

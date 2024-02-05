import React from "react";
import Button from "react-bootstrap/Button";
import ResumePDF from "../images/Resume.pdf";

function Resume() {
  return (
    <>
      <div className="reshead">
        <h1>My Resume</h1>
      </div>
      <div className="resdoc">
        <iframe title="resume" className="resumepic" src={ResumePDF} width="100%" height="800px"></iframe>
      </div>
      <div className="download">
        <a href={ResumePDF} download="resume">
          <Button variant="secondary">Download Resume</Button>{" "}
        </a>
      </div>
    </>
  );
}

export default Resume;


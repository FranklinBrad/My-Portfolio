import React from "react";
import Button from "react-bootstrap/Button";
import Resumeimg from "../images/resume-1.png";
import Resumeimg2 from "../images/resume-2.png";



function Resume() {
  return (
    <>
      <div className="reshead">
        <h1 style={{color:"white"}}>My Resume</h1>
      </div>
      <div className="resdoc" >
        <img src={Resumeimg} alt=""  style={{
        height: "800px", width: "700px"
      }}/>
        <img src={Resumeimg2} alt=""style={{
        height: "800px", width: "700px"
      }} />
      </div>
      <div className="download">
        <a href={Resumeimg} download="resume">
          <Button variant="secondary">Download Resume</Button>{" "}
        </a>
      </div>
    </>
  );
}

export default Resume;


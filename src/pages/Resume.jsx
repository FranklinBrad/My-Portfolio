import React from "react";
import Button from "react-bootstrap/Button";
import Resumedoc from "../images/MyResume.pdf";
import res1 from "../images/resume-1.png";
import res2 from "../images/resume-2.png";
import { useEffect } from "react";

function Resume() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenObj = document.querySelectorAll(".hidden");
    hiddenObj.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      hiddenObj.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="resume-container"  class='hidden'>
      <div className="reshead">
        <h1 style={{ color: "white" }}>My Resume</h1>
      </div>
      <div className="resdoc" style={{ height: 700, width: 650 }}>
        <img src={res1} alt="" style={{ height: "auto", width: "100%" }} />
        <img src={res2} alt="" style={{ height: "auto", width: "100%" }} />
      </div>
      <div className="download">
        <a href={Resumedoc} download="resume">
          <Button variant="secondary">Download Resume</Button>{" "}
        </a>
      </div>
    </div>
  );
}

export default Resume;




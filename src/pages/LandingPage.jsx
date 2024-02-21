import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import me2 from "../images/me-photo-2.png";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import abtimage from "../images/abtme.png";

function AboutMe() {
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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
          
        }}
        className="container"
        class='hidden'
        
        
      >
        <div
          style={{
            paddingRight: "10px",
          }}
          className="meimg"
         
        >
          <img src={me2} className="me" alt="Franklin Bradley" />
        </div>
        <div
          style={{
            flex: "1",
          }}
          className="text-container"
          
        >
          <h1
            style={{
              fontSize: "80px",
            }}
            className="abtH"
          >
            Franklin Bradley
          </h1>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ["A Full Stack Web Developer"],
              }}
            ></Typewriter>
          </h1>
          <h3>
            | JavaScript | React | HTML | CSS | Boot Strap | MongoDB/Mongoose |
            MySQL | Node.js |
          </h3>

          <div className="logos">
            <a href="https://github.com/FranklinBrad">
              <FaGithub className="github" />
            </a>
            <a href="https://www.linkedin.com/in/franklin-bradley-520a8b286/">
              <FaLinkedin className="linkedin" />
            </a>
          </div>
          <div>
            <p>Email: Franklin1jbradley@gmail.com</p>
          </div>
          <div>
            <div>
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "400px",
                  paddingTop: "100px",
                  color: "white",
                }}
                className="button"
                href="#abtimg"
              >
                More About Me!
              </a>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "400px",
                  color: "white",
                }}
              >
                ⇣
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "300px",
          marginBottom: "100px",
          paddingLeft: "50px",
          paddingRight: "50px",
          display: "flex",
          flexDirection: "row", // Set flex direction to row
          alignItems: "center",
          justifyContent: "center",
        }}
        id="abtimg"
        className="abt" class="hidden"
      >
        <p
          style={{
            backgroundColor: "white",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "25px",
            paddingBottom: "25px",
            borderRadius: "10px",
          }}
          className="abtP"
         
        >
          Hello, my name is Franklin Bradley. I am 19 and based out of
          Minneapolis. I graduated from the University of Minnesota Full Stack
          Web Development Program and got my certificate in December of 2023. In this class we 
          learned to code under intense deadline pressure and learned to not only work in 
          front and back end but also got experience working in a development team helping us gain skills 
          and prepare for a role as a Developer.
          With this class, I have found a passion for coding and am eager to
          pursue a career in Web Development. My main coding language is
          JavaScript, but I am willing to be agile and learn new coding
          languages and skills. Right now I have knowledge in JavaScript, HTML,
          CSS, Bootstrap, Node, MySQL, MongoDB, and React. Please take a look at
          some of my work as well as my resume, and feel free to contact me if
          you have any questions!
        </p>
        <img
          src={abtimage}
          style={{
            marginBottom: "200px",
          }}
          className="abtimg"
          alt="Franklin Bradley2"
        />
      </div>
    </>
  );
}

export default AboutMe;

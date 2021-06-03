import React from "react";
import profilePicture from "./img/Profile.jpg";
import { SkillBar } from "react-skills";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner container">
        <div className="about-card p-1">
          <div className="card-image">
            <img src={profilePicture} alt="Rory Headshot"></img>
          </div>
          <div className="card-skills">
            <div className="skills-header">Character Details</div>
            <div className="th">Name:</div>
            <div className="td">Rory Campbell</div>
            <div className="th">Location:</div>
            <div className="td">Gold Coast</div>
            <div className="th">Role:</div>
            <div className="td">Web Developer</div>
          </div>
          <div className="skill-bar">
            <div className="bar-header">Character Skills</div>

            <SkillBar name="HTML" level={90} color="red" />

            <SkillBar name="CSS" level={85} color="blue" />

            <SkillBar name="JS" level={80} color="green" />

            <SkillBar name="React" level={75} color="pink" />

            <SkillBar name="Node.js" level={50} color="gold" />

            <SkillBar name="MongoDB" level={50} color="orange" />
          </div>

          <div className="card-about p-1">
            <p>
              A front end focused developer with full stack knowledge. Rory
              loves using code to make his website designs come alive. His main
              skills are in HTML, CSS, JavaScript and React but he has built
              full stack projects using the MERN stack. Outside of coding Rory
              is a avid runner, a big Rugby fan and as you may have guessed a
              gaming enthusiast. Choose Rory as your character and you will get
              a self motivated and hard working developer who enjoys connecting
              with humans as much as coding computers.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

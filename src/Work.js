import React from "react";
import WorkItem from "./WorkItem";
import smile from "./img/Smile.png";
import rugby from "./img/RugbyMatch.png";
import yelp from "./img/Yelp-camp.png";
import story from "./img/Rory-story.png";
import planner from "./img/Class-planner.png";
import connector from "./img/Dev-connector.png";

const Work = () => {
  const projects = [
    {
      img: rugby,
      title: "Rugby Match",
      body:
        "A Full Stack MERN project where users can sign up as a player or a team",
      link: "https://damp-plains-19168.herokuapp.com/",
    },
    {
      img: yelp,
      title: "Yelp Camp",
      body: "A Full Stack project where users can add, see and rate campsites",
      link: "https://pacific-everglades-88365.herokuapp.com/",
    },
    {
      img: planner,
      title: "Class Planner App",
      body: "A React app where users can plan an exercise class",
      link: "https://rory-campbell.github.io/class-planner/",
    },
    {
      img: story,
      title: "Story of Rory",
      body: "A dynamic comic strip built with css grid and flexbox",
      link: "https://rory-campbell.github.io/rory-story/",
    },
    {
      img: smile,
      title: "Smile 2U",
      body: "A user Login built with MERN Stack",
      link: "https://pure-escarpment-76611.herokuapp.com/",
    },
    {
      img: connector,
      title: "Dev Connector",
      body:
        "A MERN app that allows user to log in, share posts and like other users posts",
      link: "https://calm-bayou-54398.herokuapp.com/",
    },
  ];

  return (
    <section id="work" className="work">
      <div className="work-inner container">
        {projects.map((project, index) => {
          return (
            <WorkItem
              img={project.img}
              title={project.title}
              body={project.body}
              link={project.link}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;

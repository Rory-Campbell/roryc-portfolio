import React from "react";

const Home = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        <div className="landing-title">
          <h1>Rory Campbell</h1>
        </div>
        <div className="py-2 landing-links">
          <p className="my-1 hover-show">
            <a href="#work">View Work</a> <i className="fas fa-caret-left"></i>
          </p>
          <p className="my-1 hover-show">
            <a href="#about">About</a> <i className="fas fa-caret-left"></i>
          </p>
          <p className="my-1 hover-show">
            <a href="#contact">Contact</a> <i className="fas fa-caret-left"></i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

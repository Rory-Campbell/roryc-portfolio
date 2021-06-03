import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-content">
          <div className="contact-title">
            <h3> New Game? </h3>
          </div>
          <div className="contact-message">
            <p>
              {" "}
              To start playing reach out through one of the methods below:{" "}
            </p>
          </div>
          <div className="contact-item">
            <a href="mailto: rorycampbell345@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
            <p>Send an Email</p>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/rory-campbell-aa74a61b5/">
              <i className="fab fa-linkedin"></i>
            </a>
            <p>Connect on linkedin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

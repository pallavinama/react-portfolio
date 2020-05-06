import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="container">
      <section className="row">
        <div className="col-md-4">
          <article className="block">
            <h1 className="block-header">About Me</h1>
            <hr />
            <img src="https://avatars3.githubusercontent.com/u/61402034?s=460&u=284e23e5cdc81696326ceaab0e1c07a8a69482a9&v=4" alt="" id="about-image" />
            <p>
              I am a software Quality Assurance Professional with around 9 years of Experience in testing applications manually and using Automation tools.'
              Worked in domains like Telecommunications, retail , financial and gaming industries. 
              I have hands-on experience testing web applications , web services, mobile Apps , hardware devices and gaming applcations.
             Actively Particpated and contributed in Agile/scrum methodologies and worked in cloud environment(AWS).
            </p>
            <p>
             I am currently doing full stack web developer certficate program to enhance my skillset and to transition into a Full stack Developer or SDET role.
            </p>
            
          </article>
        </div>
        <div className="col-8">
          {/* <br /> */}
          <a href="https://github.com/pallavinama" className="contacts">
            <p>
              <i className="fab fa-github"></i> Github
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/pallavinama/"
            className="contacts">
            <p>
              <i className="fab fa-linkedin"></i> LinkedIn
            </p>
          </a>
          <a href="mailto:pallavi_nama@yahooo.com" className="contacts">
            <p>
              <i className="fas fa-envelope"></i> pallavi_nama@yahoo.com
            </p>
          </a>
          {/* <p className="contacts">
            <i className="fas fa-phone"></i> (404) 324-3519
          </p> */}
          <a
            href="resume"
            className="contacts"
          >
            <p>
              <i className="fas fa-file-alt"></i> Resume
            </p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
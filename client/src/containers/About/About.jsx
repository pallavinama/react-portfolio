import React from "react";
import "./About.css";
// import resume from "../src/images/resume.pdf";

const About = () => {
  return (
    <main className="container">
      <section className="row">
        <div className="col-md-8">
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

                {/* <a id="resume" class="btn btn-dark" href={resume} download>Resume</a> */}
               <a id="linkedin" type="button" className="btn btn-dark" href="https://www.linkedin.com/in/pallavinama/" target="_blank">LinkedIn</a>
               <br></br>
               <a id="github" type="button" className="btn btn-dark" href="https://github.com/pallavinama" target="_blank">GitHub</a>
               <br></br>
               <a id="Resume" type="button" className="btn btn-dark" href="" target="_blank">Resume</a>
               <br></br>
               <a id="Phone Number" className="contacts" class="btn btn-dark">Phone Number: (404) 324-3519 </a>
           
              



        </div>
        
      </section>
    </main>
  );
};

export default About;
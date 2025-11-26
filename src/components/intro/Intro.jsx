import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/Me.png';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know my journey in computer science and data analytics.</h5>
      <h2>Academic background</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="sowmiya" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Co-founder of Skill Connect and Fashionsista, contributing to project development, teamwork, and data-driven decision-making.</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5Projects</small>
            </article>
          </div>
          <p>
            I am Sowmiya, currently pursuing my second year Computer Science and Engineering at KSR College of Engineering. Along with my academic coursework, I am actively involved in two entrepreneurial projects—Skill Connect and Fashionsista—where I serve as a co-founder. These initiatives have strengthened my skills in project management, collaboration, and solution-driven development. I also have a strong interest in the data analytics domain, and I am continuously exploring tools and techniques that help transform data into meaningful insights. Working on both academic and project responsibilities has enhanced my ability to adapt, learn, and stay focused. I am committed to expanding my technical expertise, gaining industry-relevant experience, and contributing to impactful innovations in the tech field.
          </p>
          <a href="#contact" className="btn btn-primary">
            connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

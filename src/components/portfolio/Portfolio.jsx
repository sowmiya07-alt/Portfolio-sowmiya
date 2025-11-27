import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Skill Connect",
      img: IMG1,
      description:
        "Skill Connect is a platform that connects blue-collar job seekers with employers, enabling seamless access to skilled work opportunities.",
      technologies: "Html | CSS | Javascript | Flutter| AWS",
      link: "https://educational-website-reactjs.netlify.app/",
     
    },
    {
      id: 2,
      title: "fashionista",
      img: IMG4,
      description:
        "Fashionista is a customization-first fashion platform that connects users with boutiques, enabling personalized designs and tailored fabric choices.",
      technologies: "HTML | CSS | JavaScript | Express Js | Firebase",
      link: "https://drive.google.com/file/d/156ZN30VQulhsiGVq4kXxEH7xkPRYxmD8/view?usp=drive_link",
     
    },
    {
      id: 3,
      title: "E-commerce website(food delivery)",
      img: IMG2,
      description: "A seamless food delivery platform that connects users with nearby restaurants, offering fast ordering and doorstep delivery like Swiggy and Zomato.",
      technologies: "HTML | CSS | JavaScript",
      link: "file:///C:/Users/SOWMIYA/Desktop/food_ordering_web/index.html",
      
    },
    {
      id: 4,
      title: "Route mate",
      img: IMG3,
      description:
        "Route Mate is a real-time bus tracking platform that provides live arrival updates, seat availability, and complete route information for effortless travel.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://alpha-agency-project.vercel.app/",
      
    },
    {
      id: 5,
      title: "Heal on",
      img: IMG5,
      description:
        "Heal On is an online healthcare platform that enables virtual doctor consultations, medicine ordering, and real-time medicine availability checks.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://jokes-project.vercel.app/",
      
    },
    {
      id: 6,
      title: "Stationery Website",
      img: IMG6,
      description:
        "A user-friendly stationery platform where customers can browse, select, and order all types of stationery items online.",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} loading="lazy" />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github || '#'}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

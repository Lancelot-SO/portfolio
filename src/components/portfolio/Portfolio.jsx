import React from "react";
import "./portfolio.css"
import IMG1 from "../../assets/avatar1.jpg";
import IMG2 from "../../assets/avatar2.jpg";
import IMG3 from "../../assets/avatar3.jpg";
import IMG4 from "../../assets/avatar4.jpg";
import IMG5 from "../../assets/avatar5.jpg";
import IMG6 from "../../assets/avatar6.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Lancelot-SO/portfolio",
    dribble: "https://dribbble.com/Lan_celot-1"
  },


  {
    id: 2,
    image: IMG2,
    title: "Chart templates & Graphics with Figma",
    github: "https://github.com/Lancelot-SO/portfolio",
    dribble: "https://dribbble.com/Lan_celot-1"
  },

  {
    id: 3,
    image: IMG3,
    title: "Figma liveboard with UI design",
    github: "https://github.com/Lancelot-SO/portfolio",
    dribble: "https://dribbble.com/Lan_celot-1"
  },

  {
    id: 4,
    image: IMG4,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Lancelot-SO/portfolio",
    dribble: "https://dribbble.com/Lan_celot-1"
  },

  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Lancelot-SO/portfolio",
    dribble: "https://dribbble.com/Lan_celot-1"
  },

  {
    id: 6,
    image: IMG6,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Lancelot-SO/portfolio",
    dribble: "https://dribbble.com/Lan_celot-1"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image,title,github,dribble})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="title" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={dribble}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribble
              </a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  );
};

export default Portfolio;

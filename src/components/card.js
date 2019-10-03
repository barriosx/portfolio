import React from "react"
import card from "../styles/card.module.css"


const Card = ({title,description,github,demo,tech}) => {
  let demo_link = null;
  let technologies = tech.map(t => {
      return (
        <span className="badge">{t}</span>
      );
    })
  ;
  if(demo) {
    demo_link = <a className="btn btn-primary" href={demo}>Live Demo</a>
  }
  return (
    <div className={card.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={card.links}>
        <a className="btn btn-primary" href={github}>Github</a>
        {demo_link}
      </div>
      <div className={card.links}>
        { technologies }
      </div>
    </div>
  )

}

export default Card
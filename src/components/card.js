import React from "react"
import * as card from "../styles/card.module.css"


const Card = ({title,description,github,demo,tech, isActive}) => {
  let demo_link = null;
  let techStack = null;
  if(demo) {
    demo_link = <a className="btn btn-primary" href={demo}>Live Demo</a>
  }
  if (tech && tech.length > 0) {
    techStack = tech.map((t,i) => {
      return (
        <span key={i}>{t}</span>
      )
    })
  }

  return (
    <div className={`${card.card} ${isActive ? card.active : ''}`}>
      <h2>{title}</h2>
      <p className="text">{description}</p>
      <div className={card.links}>
        {
          github.length > 0 ? 
          <a className="btn btn-primary" href={github}>Github</a> : null 
        }
        {demo_link}
        <div className={card.techStack}>
          { techStack }
        </div>
      </div>
    </div>
  )

}

export default Card
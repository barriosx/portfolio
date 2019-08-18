import React from "react"
import card from "../styles/card.module.css"


const Card = ({title,description,github,demo}) => {


  return (
    <div className={card.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={card.links}>
        <a className="btn btn-primary" href={github}>Github</a>
        <a className="btn btn-primary" href={demo}>Live Demo</a>
      </div>
    </div>
  )

}

export default Card
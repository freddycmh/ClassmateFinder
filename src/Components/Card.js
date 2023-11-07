import React from 'react'

const Card = (props) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <a>
    <img src={props.img} class="card-img-top" alt="..."/>
        <div class="card-body">
        <p class="card-text">{props.name}</p>
      </div>
      </a>
        </div>
  )
}

export default Card
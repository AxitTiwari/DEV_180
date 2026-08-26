import React from 'react'
import hero from "../assets/hero.png"
import "./UserCard.css"
import badge from "../assets/badge.png"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={props.img} alt="love"/>
      <p id="user-desc">{props.desc}</p>
    </div>
  )
}

export default UserCard

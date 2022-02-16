import React from 'react'
import man from "../assets/man.png";
function Host(props) {
  return (
    <div className="host">
        <div className="details">
          <img src={props.icon} alt="ncie " />
          <label>{props.name}</label>
        </div>
        <button>Follow</button>
    </div>
  )
}

export default Host
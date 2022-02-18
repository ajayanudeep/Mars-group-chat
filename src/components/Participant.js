import React from 'react'

const Participant = (props) => {
  return (
    <div className="participant">
        <div className="details">
          <img src={props.icon} alt="nice " />
          <label>{props.name}</label>
        </div>
    </div>
  )
}

export default Participant
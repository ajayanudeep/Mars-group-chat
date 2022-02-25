import React from 'react'
import man from "../assets/man.png";
function Host({val}) {
  return (
    <div className="host">
        <div className="details">
          <img src={man} alt="ncie " />
          <label>{val.username}</label>
        </div>
        <button>Follow</button>
    </div>
  )
}

export default Host
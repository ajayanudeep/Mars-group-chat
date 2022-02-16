import React from 'react'

const Sidecontent = (props) => {
  return (
    <div className='sidecontent'>
            <label>{props.name}</label>
            <button>Follow</button>
    </div>
  )
}

export default Sidecontent
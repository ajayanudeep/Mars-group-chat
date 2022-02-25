import React from 'react'

const Sidecontent = ({val}) => {
  return (
    <div className='sidecontent'>
            <label>{val.name}</label>
            <button>Follow</button>
    </div>
  )
}

export default Sidecontent
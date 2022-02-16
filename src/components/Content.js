import React from 'react'
import { ReactComponent as Add } from '../assets/add.svg'

const Content = () => {
  return (
    <div className='content'>
        <div className='contentHeader'>
            <label>
                Rooms
            </label>
            <button> <Add className="add"></Add>Create Room</button>
        </div>
    </div>
  )
}

export default Content
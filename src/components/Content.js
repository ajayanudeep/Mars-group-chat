import React from 'react'
import { ReactComponent as Add } from '../assets/add.svg'

const Content = () => {
  return (
    <div className='content'>
        <div className='contentHeader'>
            <div className='contentheadwithtotal'>
              <label className='contenthead'>
                  Rooms
              </label>
              <p className='contenttotalrooms'>
                34 Rooms available
              </p>
            </div>
            <button> <Add className="add"></Add>Create Room</button>
        </div>
    </div>
  )
}

export default Content
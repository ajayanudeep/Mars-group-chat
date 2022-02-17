import React from 'react'
import { useLocation } from 'react-router-dom'

const Chatroom = (props) => {
    const title=useLocation();
    console.log(title);
  return (
      <div>
          <div className='chatroom'>
                <div className='chatspace'> 
                    <div className='header'>
                    </div>
                </div>
                <div className='participants'>
                    <div className='header'>
                        participants
                    </div>
                </div>
            </div>
      </div>
    
  )
}

export default Chatroom
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
const Chatroom = (props) => {
    const title=useLocation();
    let {roomname} = useParams();
    console.log(title);
  return (
      <div>
          <div className='chatroom'>
                <div className='chatspace'> 
                    <div className='header'>
                        {roomname}
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
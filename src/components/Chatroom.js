import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom';
import backarrow from '../assets/backarrow.svg'
const Chatroom = (props) => {
    let {roomname} = useParams();
  return (
      <div>
          <div className='chatroom'>
                <div className='chatspace'> 
                    <div className='chatspaceheader'>
                        <div className='headercontent'>
                            <Link to="/Home" className='link'><img src={backarrow} alt=""/></Link>
                            <label htmlFor="">{roomname}</label>
                        </div>
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
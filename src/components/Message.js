import React from 'react'
import user from '../assets/user.png'

const Message = () => {
  return (
    <div className='message'>
        <hr />
        <div className='details'>
            <div className='user'>
                <img src={user} alt="" />
                <label >User</label>
            </div>
            <div className='time'>
                Sent at 13:09
            </div>
        </div>
        <div className='actualmessage'>
            Message
        </div>
        
    </div>
  )
}

export default Message
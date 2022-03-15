import React from 'react'
import user from '../assets/user.png'

const Message = ({message,userer}) => {
  return (
    <div className={`${userer.username!=message.messager ? "messagereceived" : "messagesent"}`}>
        <div className='details'>
            <div className='user'>
                <label >{userer.username!=message.messager?message.messager:"You"}</label>
            </div>
            <div className='time'>
                {message.created}
            </div>
        </div>
        <div className='actualmessage'>
            {message.body}
        </div>
        
    </div>
  )
}

export default Message
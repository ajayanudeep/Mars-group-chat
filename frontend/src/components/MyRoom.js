import React from 'react'

const MyRoom = ({rooms})=> {
  console.log(rooms);
  return (
    <div className='myroom'>
        {rooms.name}
    </div>
  )
}

export default MyRoom
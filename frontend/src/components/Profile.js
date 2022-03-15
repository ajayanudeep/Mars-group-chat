import React from 'react'
import man from '../assets/man.png'

const Profile = () => {
  return (
    <div className='profile'>
        <div className='header'>
            Profile
        </div>
        <div className='profilepic'>
            <img src={man} />
        </div>
        <div>
          <label>Name</label>
          <input type="text"/>
          <label>Email</label>
          <input type="email" />
          <label>Followers</label>
        </div>
    </div>
  )
}

export default Profile
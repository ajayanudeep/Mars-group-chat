import React, { useContext, useEffect, useState } from 'react'
import man from '../assets/man.png'
import AuthContext from '../context/AuthContext'
import fileupload from '../assets/fileupload.png';
import MyRoom from './MyRoom';


const Profile = () => {
  const {user} = useContext(AuthContext)
  const [profile,setProfile] = useState({})
  const getprofile = async () => {
    let response = await fetch(`http://127.0.0.1:8000/get_profile/${user.user_id}`);
    let data = await response.json();
    if(response.status ===200){
        setProfile(data)
    }
  }
  useEffect(()=>{
    getprofile()
  },[])
  if(profile=={}){
    return <h1 style={{color:"white"}}>Loading...</h1>
  }
  else{
    return (
      <div className="profilepage">
        <div className='profile'>
          <div className='header'>
              Profile
          </div>
          <div className='profilepic'>
              <img src={profile.profile_pic} />
              <label className='fileupload'>
                <input type="file" />
              </label>
          </div>
          <div>
            <label>Name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email" />
            <label>Followers</label>
          </div>
        </div>
        <div className="myrooms">
          <div className='header'>
              My Rooms
          </div>
          <div className='myroomslist'>
              <MyRoom />
              <MyRoom />
              <MyRoom />
              <MyRoom />
              <MyRoom />
              <MyRoom />
              <MyRoom />
          </div>
        </div>
    </div>
  )
}
}

export default Profile
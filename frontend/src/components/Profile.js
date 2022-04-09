import React, { useContext, useEffect, useState } from 'react'
import man from '../assets/man.png'
import AuthContext from '../context/AuthContext'
import fileupload from '../assets/fileupload.png';
import MyRoom from './MyRoom';
import edit from '../assets/edit.png'


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
  console.log(profile)
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
          <div className='details'>
            <div className='profilepic'>
                <img src={profile.profile_pic} />
                <label className='fileupload' >
                  <img src={edit} accept=".png, .gif, .jpeg"></img>
                  <input type="file" />
                </label>
            </div>
            <div className='actualdetails'>
              <div className='eachdetail'>
                <label>Name</label>
                <h3>Ajay</h3>
              </div>
              <div className='eachdetail'>
                <label>Email</label>
                <h3>mymail@gmail.com</h3>
              </div>
              <div className='eachdetail'>
                <label>Rooms</label>
                <h3>100</h3>
              </div>
              
            </div>
          </div>
        </div>
          

        <div className="myrooms">
          <div className='header'>
              My Rooms
          </div>
          <div className='myroomslist'>
              <MyRoom />
              
          </div>
        </div>
    </div>
  )
}
}

export default Profile
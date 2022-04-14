import React, { useContext, useEffect, useState } from 'react'
import man from '../assets/man.png'
import AuthContext from '../context/AuthContext'
import fileupload from '../assets/fileupload.png';
import MyRoom from './MyRoom';
import edit from '../assets/edit.png';
import userimg from '../assets/userimg.png'


const Profile = () => {
  const {user} = useContext(AuthContext)
  const [profile,setProfile] = useState({})
  const [ userdetails, setUserDetails] = useState({})
  const [ roomdetails, setRoomdetails] = useState({})
  var rooms = [];
  const getprofile = async () => {
    let response = await fetch(`http://127.0.0.1:8000/get_profile/${user.user_id}`);
    let data = await response.json();
    if(response.status === 200){ 
        setProfile(data);
    }
  }
  const getuser = async () => {
    let response = await fetch("http://127.0.0.1:8000/users/");
    let data = await response.json();
    if(profile.user){
      let details = data.find(p => p.id === profile.user);
      setUserDetails(details);
      // console.log(userdetails);
    } 
  }
  const getrooms = async () => {
    let response = await fetch("http://127.0.0.1:8000/rooms/");
    let data = await response.json();
    data.forEach(element => {
      if(element.host === userdetails.username){
        setRoomdetails(element);
        rooms.push(roomdetails);
      }
    });
    console.log(rooms.length);
  }
  useEffect(()=>{
    getprofile();
    getuser();
    getrooms();
  },[])
  console.log(rooms)
  if(profile === {} || userdetails === {}){
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
              {profile.profile_pic ?
                <img src={profile.profile_pic} />:
                <img src={userimg}/>
              }
                <label className='fileupload' >
                  <img src={edit} accept=".png, .gif, .jpeg"></img>
                  <input type="file" />
                </label>
            </div>
            <div className='actualdetails'>
              <div className='eachdetail'>
                <label>Name</label>
                <input type="text" value={userdetails.username} readOnly/>
              </div>
              <div className='eachdetail'>
                <label>Email</label>
                <input type="text" value={userdetails.email} readOnly/>
              </div>
              <div className='eachdetail'>
                <label>Rooms</label>
                <input type="text" value={rooms.length} readOnly/> 
              </div>
            </div>
            <div className='socialmedia'>
              <ul>
                <li>
                  <a href="#" class="fa fa-facebook" style={{backgroundColor:"#3B5998",border:"0.8px white groove"}}></a>
                </li>
                <li>
                  <a href="#" class="fa fa-linkedin" style={{backgroundColor:"#007bb5",border:"0.8px white groove"}}></a>
                </li>
                <li>
                  <a href="#" class="fa fa-github" style={{backgroundColor:"#000000",border:"0.8px white groove"}}></a>
                </li>
                <li>
                  <a href="#" class="fa fa-instagram" style={{background:" #d6249f",background:"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",border:"0.8px white groove"}}></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          

        <div className="myrooms">
          <div className='header'>
              My Rooms
          </div>
          <div className='myroomslist'>
            {
              console.log(rooms)
              // rooms.forEach(room =>{
              //   <MyRoom rooms={room} /> 
              // })
            }
              {/* <MyRoom rooms={rooms}/> */}
          </div>
        </div>
    </div>
  )
}
}

export default Profile
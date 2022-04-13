import { React,useContext,useState,useEffect } from 'react'
import groupicon from '../assets/groupicon.png'
import userimg from '../assets/userimg.png'
import { Link , Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
const Navbar = ({setterm}) => {
    let {user,logoutUser}=useContext(AuthContext)
    const [profile,setProfile] = useState({})
    const getprofile = async () => {
        let response = await fetch(`http://127.0.0.1:8000/get_profile/${user.user_id}`);
        let data = await response.json();
        if(response.status ===200){ 
            setProfile(data)
        }
    }
    // console.log(profile)
    useEffect(()=>{
        getprofile()
    },[])
    if(profile=={}){
        return <h1 style={{color:"white"}}>Loading...</h1>
    }
    else{
        return (
            <nav className='navbar'>
          <div className='header-left'>
              <img src={groupicon} className="icon" />
              <h2 className='header'>
                  <Link to='/Home' className='link'><a href="">Mars</a></Link>
              </h2>
          </div>
          <form className='searchbar'>
              <input type="text" placeholder='search' onChange={(e) => {setterm(e.target.value)}}/>
              <button type='submit' className='search-button'><i class="fa fa-search"></i></button>
          </form>
          <div className='header-right'>
              {/* <Link to='/signup'><img src={user} className="user-icon"/></Link> */}
              <Link to="/Home" className='login'>Home</Link>
              { user!=null && <p className='login'>{`Hello, ${user.username}`}</p>}
              {   !user ? <>
                  <Link to="/signup" className='login'>Sign Up</Link>
                  <Link to="/login" className='login'>Log In</Link> 
                  </>
                  :
                  <>
                  {profile.profile_pic ?
                    <img src={profile.profile_pic} className="user-icon"/>:
                    <img src={userimg} className="user-icon"/>
                  }
                  <Link to="/profile" className='login'>Profile</Link>
                  <p onClick={logoutUser} className='login'>Logout</p>
                  </>
              }
          </div>
      </nav>
    )
}
}

export default Navbar
import { React,useContext,useState } from 'react'
import groupicon from '../assets/groupicon.png'
import user from '../assets/user.png'
import { Link , Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const Navbar = ({setterm}) => {
    let {user,logoutUser}=useContext(AuthContext)
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
                <img src={user} className="user-icon"/>
                <Link to="/profile" className='login'>Profile</Link>
                <p onClick={logoutUser} className='login'>Logout</p>
                </>
            }
        </div>
    </nav>
)
}

export default Navbar
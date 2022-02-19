import { React,useState } from 'react'
import groupicon from '../assets/groupicon.png'
import user from '../assets/user.png'
import { Link , Navigate } from 'react-router-dom'
const Navbar = () => {
    const [loggedin, setLoggedin ] = useState(false);
    
  return (
    <nav className='navbar'>
        <div className='header-left'>
            <img src={groupicon} className="icon" />
            <h2 className='header'>
                <Link to='/Home' className='link'><a href="">Mars</a></Link>
            </h2>
        </div>
        <form className='searchbar'>
            <input type="text" placeholder='search' />
            <button type='submit' className='search-button'><i class="fa fa-search"></i></button>
        </form>
        <div className='header-right'>
            <button onClick={() =>{setLoggedin(!loggedin)}}>Login</button>
            {console.log(loggedin)}
            {/* <Link to='/signup'><img src={user} className="user-icon"/></Link> */}
            <Link to="/Home" className='login'>Home</Link>
            {   loggedin ? <>
                <Link to="/signup" className='login'>Sign Up</Link>
                <Link to="/login" className='login'>Log In</Link> 
                </>
                :
                <>
                <img src={user} className="user-icon"/>
                <Link to="" className='login'>Profile</Link>
                </>
            }
        </div>
    </nav>
)
}

export default Navbar
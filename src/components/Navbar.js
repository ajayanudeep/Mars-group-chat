import React from 'react'
import groupicon from '../assets/groupicon.png'
import user from '../assets/user.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='header-left'>
            <img src={groupicon} className="icon" />
            <h2 className='header'>Mars</h2>
        </div>
        <form className='searchbar'>
            <input type="text" placeholder='search' />
            <button type='submit' className='search-button'><i class="fa fa-search"></i></button>
        </form>
        <div className='header-right'>
            <img src={user} className="user-icon"/>
            <a href="" className='login'>Login</a>
        </div>
    </nav>
)
}

export default Navbar
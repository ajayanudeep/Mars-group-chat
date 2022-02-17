import React from 'react'
import studentm from '../assets/studentm.png';
import studentw from '../assets/studentw.png';
import { ReactComponent as People } from "../assets/people.svg"
import user from '../assets/user.png'
const Room = () => {
  return (
    <div className='room'>
        <div className='owner'>
            <div className='ownerheader'>
                <img src={user} alt="" />
                <div className='ownerdetail'>
                   <a href="">Mahesh</a>
                </div>
            </div>
            <p> 4 Weeks ago</p>
        </div>
        <div className='roomdetails'>
            <label>Come Buddy let's Chat</label>
            <div className='studentlist'>
                <img src={studentm} alt="" />
                <img src={studentw} alt="" />
                <img src={studentw} alt="" />
                <img src={studentm} alt="" />
                <img src={studentw} alt="" />
                <img src={studentm} alt="" />
                <img src={studentm} alt="" />
                <img src={studentw} alt="" />
                <img src={studentm} alt="" />
                <img src={studentw} alt="" />
                <hr />
            </div>
            <div className='peoplejoined'>
                <div className='number'>
                    <People className="people" />
                    210 joined
                </div>
                <label>Python</label>
            </div>
        </div>
    </div>
  )
}

export default Room
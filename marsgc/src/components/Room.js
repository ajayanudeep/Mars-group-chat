import React, { useState,useEffect } from 'react'
import studentm from '../assets/studentm.png';
import studentw from '../assets/studentw.png';
import { ReactComponent as People } from "../assets/people.svg"
import user from '../assets/user.png'
import { Link } from 'react-router-dom';
const Room = ({val}) => {
    const value = `/chatroom/${val.name}`
    const [users,setUsers] = useState([])
    const getusers = async () => {
        let response = await fetch('http://127.0.0.1:8000/users/');
        let data = await response.json();
        setUsers(data);
    }
    useEffect(() => {
        getusers();
    },[])
    return (
    <div className='room'>
        <div className='owner'>
            <div className='ownerheader'>
                <img src={user} alt="" />
                <div className='ownerdetail'>
                   <a href="">{val.host}</a>
                </div>
            </div>
            <p> {val.created}</p>
        </div>
        <div className='roomdetails'>
            
            <Link to={value} className='link'>{val.name}</Link>
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
                    500 joined
                </div>
                <label>{val.topic}</label>
            </div>
        </div>
    </div>
  )
}

export default Room
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom';
import backarrow from '../assets/backarrow.svg'
import Participant from './Participant';
import studentm from '../assets/studentm.png'
import studentw from '../assets/studentw.png'
const Chatroom = (props) => {
    let {roomname} = useParams();
  return (
      <div>
          <div className='chatroom'>
                <div className='chatspace'> 
                    <div className='chatspaceheader'>
                        <div className='headercontent'>
                            <Link to="/Home" className='link'><img src={backarrow} alt=""/></Link>
                            <label htmlFor="">{roomname}</label>
                        </div>
                    </div>
                </div>
                <div className='participants'>
                    <div className='header'>
                        Participants
                    </div>
                    <div className='participantsdetails'>
                            <Participant name="Mahesh" icon={studentm}></Participant>
                            <Participant name="papa" icon={studentw}></Participant>
                            <Participant name="babu" icon={studentm}></Participant>
                            <Participant name="chinni" icon={studentw}></Participant>
                            <Participant name="sethu" icon={studentm}></Participant>
                            <Participant name="girl" icon={studentw}></Participant>
                            <Participant name="boy" icon={studentm}></Participant>
                            <Participant name="girl2" icon={studentw}></Participant>
                            <Participant name="boy2" icon={studentm}></Participant>
                            <Participant name="girl3" icon={studentw}></Participant>
                            <Participant name="boy3" icon={studentm}></Participant>
                            <Participant name="boy4" icon={studentm}></Participant>
                            <Participant name="girl4" icon={studentw}></Participant>
                            <Participant name="boy5" icon={studentm}></Participant>
                            <Participant name="girl5" icon={studentw}></Participant>
                    </div>
                </div>
            </div>
      </div>
    
  )
}

export default Chatroom
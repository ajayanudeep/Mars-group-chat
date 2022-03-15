import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import {ReactComponent as Backarrow} from '../assets/backarrow.svg';
import Participant from './Participant';
import studentm from '../assets/studentm.png';
import studentw from '../assets/studentw.png';
import user from '../assets/user.png';
import Message from './Message'
import {ReactComponent as Send} from '../assets/sendicon.svg';
import { useState } from 'react';
import AuthContext from '../context/AuthContext';
import ReactScrollableFeed from 'react-scrollable-feed';

const Chatroom = () => {
    let {roomname} = useParams();
    let {user} = useContext(AuthContext)
    const [room,setRoom]=useState([]);
    const [room_id,setRoomid] = useState(room?.id)
    const [message,setMessage] = useState(null)

    const getrooms = async () => {
        let response = await fetch('http://127.0.0.1:8000/rooms/');
        let data = await response.json();
        if(response.status ===200){
          setRoom(data.find(e=>e.name===roomname))
          setRoomid(data.find(e=>e.name === roomname).id)
        }
    }
    let add_message = async (message) => {
        await fetch(`http://localhost:8000/create_message/`,{
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(message)
        })
    }
    const new_message = async (e) => {
        e.preventDefault()
        const messager = user.user_id;
        const body = message;
        const room_in = room.id;
        await add_message({body,messager,room_in})
        document.getElementById('inputfield').value=''
        get_room()
    }
    const [room_messages,setRoommessages] = useState(null)
    const get_room = async () => {
        let response = await fetch(`http://127.0.0.1:8000/get_room/${room_id}`);
        let data = await response.json();
        if(response.status ===200){
            setRoommessages(data)
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => get_room(),5000);
        return () => clearTimeout(timer);
    }, [get_room]);
    useEffect( () => {
        getrooms()
    },[])
    useEffect(()=>{
        get_room()
    },[room_id])
    if(room==[] || room_messages==null){
        return <h1 style={{color:"white"}}>Loading...</h1>
    }
    else{
        return (
            <div>
            <div className='chatroom'>
                <div className='chatspace'> 
                    <div className='chatspaceheader'>
                        <div className='headercontent'>
                            <Link to="/Home" className='link'><Backarrow /></Link>
                            <label htmlFor="">{roomname}</label>
                        </div>
                        <div className='host'>
                            <img src={user} alt="" />
                            <label htmlFor="">{room.host}</label>
                        </div>
                    </div>
                    <div className='chatspacedetails'>
                        <div className='chatspacedetailsheader'>
                            <div className='details'>
                                <label>{roomname}</label>
                                <button>Join</button>
                            </div>
                            <div className='about'>
                                <p style={{color:'white'}}>{room.created}</p>
                            </div>
                        </div>
                        <div className='chats'>
                            <ReactScrollableFeed>
                                {
                                room_messages.map((body)=>
                                    {return <Message message={body} userer={user}/>}
                                    )
                                }
                            </ReactScrollableFeed>
                        </div>
                        <div className='entryfield'>
                            <textarea type="text" id='inputfield' onChange={(e) => setMessage(e.target.value)} placeholder='Type something'/>
                            <Send onClick={new_message} className='send'></Send>
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
}

export default Chatroom
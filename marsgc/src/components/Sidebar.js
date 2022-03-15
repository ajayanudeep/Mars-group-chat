import React, { useState,useEffect } from 'react'
import Sidecontent from './Sidecontent'

const Sidebar = () => {
  const [topics,setTopics] = useState([])
  const gettopics = async () => {
    let response = await fetch('http://127.0.0.1:8000/topics/');
    let data = await response.json();
    setTopics(data);
  }
  useEffect(() => {
    gettopics(); 
  },[])
  return (
    <div className='sidepanel'>
        <div className='header'>
            TOPICS
        </div>
        <div className='sidecontents'>
            {topics.map((val) => {
                return <Sidecontent val = {val}/>
            })}
        </div>
    </div>  
)
}

export default Sidebar
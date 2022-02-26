import React from "react";
import { useState,useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const Roomcreation = () => {
  const [topic, setTopic] = useState("");
  const [roomname, setRoomname] = useState("");
  const [description, setDescription] = useState("");
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = { topic, roomname, description };
    console.log(room);
    // history('/chatroom:roomname')
  };
  const [topics,setTopics] = useState([])
  const gettopics = async () => {
    let response = await fetch('http://127.0.0.1:8000/topics/');
    let data = await response.json();
    setTopics(data);
  }
  const [topiclist,setTopiclist]=useState([]);
  useEffect(() => {
    gettopics();
    setTopiclist(topics.map((val)=>{
          return {value:val.name,label:val.name}
    }))
    console.log(topiclist)
  },[])
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="form">
        <div className='formheader'>
            Create Room
        </div>
        <div className="field">
          <label>Enter a Topic</label>
          <Select className="select" options={topiclist} />
        </div>
        <div className="field">
          <label>Room Name</label>
          <input
            type="text"
            value={roomname}
            onChange={(e) => setRoomname(e.target.value)}
            placeholder="Enter Room Name"
          />
        </div>
        <div className="field">
          <label>Room Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </div>
        <button type="submit" className="createbutton">Create</button>
        
      </form>
    </div>
  );
};

export default Roomcreation;

import React from "react";
import { useState,useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const Roomcreation = () => {
  const [user, setUser] = useState();
  const [topic_selected, setTopicselected] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const history = useNavigate();
  let create = async (room) => {
    await fetch(`http://localhost:8000/create_room/`,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(room)
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const host = user.value;
    const topic = topics.find( e => e.name===topic_selected.value).id
    create({host,topic,name,description})
    history('/')
  };
  const [topics,setTopics] = useState([])
  const gettopics = async () => {
    let response = await fetch('http://127.0.0.1:8000/topics/');
    let data = await response.json();
    setTopics(data);
  }
  const [users,setUsers] = useState([])
  const getusers = async () => {
    let response = await fetch('http://127.0.0.1:8000/users/');
    let data = await response.json();
    setUsers(data);
  }
  const [topiclist,setTopiclist]=useState([]);
  const [userlist,setUserlist]=useState([]);
  useEffect(() => {
    gettopics();
    getusers();
    setTopiclist(topics.map((val)=>{
          return {value:val.name,label:val.name}
    }))
    setUserlist(users.map((val)=>{
          return {value:val.id,label:val.id}
    }))
    console.log("Hi")
  },[name])
  return (
    <div className="login-form">
      {console.log(userlist)}
      <form onSubmit={handleSubmit} className="form">
        <div className='formheader'>
            Create Room
        </div>
        <div className="field">
          <label>Room Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Room Name"
          />
        </div>
        <div className="field">
          <label>Enter Host</label>
          <Select className="select" options={userlist}
            onChange={setUser}
          />
        </div>
        <div className="field">
          <label>Enter a Topic</label>
          <Select className="select" options={topiclist}
            onChange={setTopicselected}
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

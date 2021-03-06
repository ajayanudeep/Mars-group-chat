import React, { useContext } from "react";
import { useState,useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { render } from "@testing-library/react";


const Roomcreation = () => {
  const [userer, setUser] = useState();
  const [topic_selected, setTopicselected] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  let {user} = useContext(AuthContext)
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.user_id)
    console.log(topics)
    const host = user.user_id;
    const topic = topics.find( e => e.name===topic_selected.value).id
    await create({host,topic,name,description})
    history('/')
  };
  const [topics,setTopics] = useState([])
  const [topiclist,setTopiclist]=useState([]);
  const gettopics = async () => {
    let response = await fetch('http://127.0.0.1:8000/topics/');
    let data = await response.json();
    if(response.status ===200){
      await setTopics(data);
      setTopiclist(data.map((val)=>{
        return {value:val.name,label:val.name}  
      }))
    }
  }
  useEffect( () => {
    gettopics()
  },[])
  if(topics==[]){
    return <h1 style={{color:"white"}}>Loading...</h1>
  }
  else{
    return (
      <div className="login-form">
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
}
};

export default Roomcreation;

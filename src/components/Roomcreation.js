import React from "react";
import { useState } from "react";
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
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="form">
        <div className='formheader'>
            Create Room
        </div>
        <div className="field">
          <label>Enter a Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter Topic Name"
          />
        </div>
        <div className="field">
          <label>Room Name</label>
          <input
            type="text"
            value={roomname}
            onChange={(e) => setRoomname(e.target.value)}
            placeholder="Enter Room Rame"
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

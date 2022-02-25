import React, { useState,useEffect } from "react";
import Host from "./Host";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import woman2 from "../assets/woman2.png";
import man2 from '../assets/man2.png'
const TopHosts = () => {
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
    <div className="tophosts">
      <div className="header">Top Hosts</div>
      <div className="hosts">
          {users.map((val) => {
              return <Host val = {val}/>
          })}
      </div>
    </div>
  );
};

export default TopHosts;

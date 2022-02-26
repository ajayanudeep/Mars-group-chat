import React, { useEffect, useState } from "react";
import { ReactComponent as Add } from "../assets/add.svg";
import Room from "./Room";
import { Link } from "react-router-dom";
const Content = ({searchterm}) => {
  const [rooms,setRooms] = useState([])
  const getrooms = async () => {
    let response = await fetch('http://127.0.0.1:8000/rooms/');
    let data = await response.json();
    setRooms(data);
  }
  useEffect(() => {
    getrooms();
  },[])
  return (
    <div className="content">
      <div className="contentHeader">
        <div className="contentheadwithtotal">
          <label className="contenthead">Rooms</label>
          <p className="contenttotalrooms">{rooms.length} Rooms available</p>
        </div>
        <Link to="/createroom" className="link">
          <button>
            <Add className="add"></Add>Create Room
          </button>
        </Link>
      </div>
      <div className="rooms">
        {rooms.filter((val) => {
                if(searchterm === ""){
                    return val
                }
                else if(val.name.toLowerCase().includes(searchterm.toLowerCase()) || val.description.toLowerCase().includes(searchterm.toLowerCase())){
                    return val
                }
            }).map((val) => {
                return <Room val={val}/>
        })}
      </div>
    </div>
  );
};

export default Content;
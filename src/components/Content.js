import React from "react";
import { ReactComponent as Add } from "../assets/add.svg";
import Room from "./Room";
const Content = () => {
  return (
    <div className="content">
      <div className="contentHeader">
        <div className="contentheadwithtotal">
          <label className="contenthead">Rooms</label>
          <p className="contenttotalrooms">34 Rooms available</p>
        </div>
        <button>
          {" "}
          <Add className="add"></Add>Create Room
        </button>
      </div>
      <div className="rooms">
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  );
};

export default Content;
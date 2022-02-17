import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import TopHosts from "./TopHosts";

const Header = () => {
  return (
    <div>
      <div className="main">
        <div className="box1">
          <Sidebar></Sidebar>
        </div>
        <div className="box2">
          <Content></Content>
        </div>
        <div className="box3">
          <TopHosts></TopHosts>
        </div>
      </div>
    </div>
  );
};

export default Header;

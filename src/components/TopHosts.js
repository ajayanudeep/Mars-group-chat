import React from "react";
import Host from "./Host";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import woman2 from "../assets/woman2.png";
import man2 from '../assets/man2.png'
const TopHosts = () => {
  return (
    <div className="tophosts">
      <div className="header">Top Hosts</div>
      <div className="hosts">
          <Host icon={man} name = "Ajay"></Host>
          <Host icon={woman} name = "Rithika"></Host>
          <Host icon={man2} name = "Sethu"></Host>
          <Host icon={woman2} name = "Dedheepya"></Host>
          <Host icon={woman} name = "Akshaya"></Host>
          <Host icon={woman2} name = "Pooja"></Host>
          {/* <Host icon={man2} name = "Sagar"></Host>
          <Host icon={man} name = "Mahesh"></Host>
          <Host icon={man} name = "Akshay"></Host>
          <Host icon={woman} name = "Uma"></Host>
          <Host icon={man} name = "Hemanth"></Host>
          <Host icon={woman} name = "Priyanka"></Host>
          <Host icon={man} name = "Rushiketh"></Host>
          <Host icon={woman} name = "Kanchan"></Host> */}

      </div>
    </div>
  );
};

export default TopHosts;

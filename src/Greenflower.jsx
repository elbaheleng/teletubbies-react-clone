import React from 'react'
import { useState, useEffect } from "react";

function Greenflower() {
     const [rotation, setRotation] = useState(0);
     useEffect(() => {
         const handleScroll = () => {
           const scrollY = window.scrollY;
           setRotation(scrollY % 360); // Keep rotation within 0-360 degrees
         };
     
         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
       }, []);
  return (
    <img id='greenflower' src="/greenflower.jpg" alt=""  style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.1s linear" }} />
  )
}

export default Greenflower
import React, { useState } from "react";
import "./ResponsiveBar.css";

const ResponsiveBar = () => {
  const [nav, setNav] = useState("nav_link nav_link-li");

  const handlerToActive = ()=>{
    setNav("nav-active nav_link");
  }
  const handlerClose = ()=>{
    setNav("nav_link nav_link-li");
  }
  return (
    <div className="main">
      <nav>
        <div className="logo">
          <h3>Taki Kauser</h3>
        </div>
        <ul className={nav}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
       {
           nav==="nav_link nav_link-li" &&  <div onClick={handlerToActive} className="burger">
           <div className="line1"></div>
           <div className="line2"></div>
           <div className="line3"></div>
         </div>
       }
       {
           nav==="nav-active nav_link" &&  <div onClick={handlerClose} className="burger toggle">
           <div className="line1"></div>
           <div className="line2"></div>
           <div className="line3"></div>
         </div>
       }
      </nav>
    </div>
  );
};

export default ResponsiveBar;

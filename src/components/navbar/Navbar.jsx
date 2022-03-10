import React from "react";
import "./navbar.scss";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = ({ active,setActive}) => {
  return (
    <div className={"navbar " + (active && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            LOGO.
          </a>
          <div className="containerItem">
            <EmailIcon className="icon" />
            <span>abc@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setActive(!active)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

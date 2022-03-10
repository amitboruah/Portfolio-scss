import React from "react";
import './menu.scss'

const Menu = ({ active, setActive }) => {
  return (
    <div className={"menu " + (active && 'active')}>
      <ul>
        <li>
          <a href="#intro" onClick={()=>setActive(false)}>Intro</a>
        </li>
        <li>
          <a href="#portfolio" onClick={()=>setActive(false)}>Portfolio</a>
        </li>
        <li>
          <a href="#work" onClick={()=>setActive(false)}>Works</a>
        </li>
        <li>
          <a href="#testimonial" onClick={()=>setActive(false)}>Testimonials</a>
        </li>
        <li>
          <a href="#contact" onClick={()=>setActive(false)}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

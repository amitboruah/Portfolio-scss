import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonials/Testimonial";
import Work from "./components/works/Work";
import Menu from "./components/menu/Menu";
import "./app.scss";


export default function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="app">
        <Navbar active={active} setActive={setActive} />
        <Menu  active={active} setActive={setActive}/>
        <div className="sections">
          <Intro />
          <Portfolio />
          <Work />
          <Testimonial />
          <Contact />
        </div>
      </div>
    </>
  );
}

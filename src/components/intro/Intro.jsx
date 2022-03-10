import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:1000,
      strings: ["Reacjs Developer.", "Nodejs Developer.", "Python Developer.", "Fullstack Developer."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="image/intro.svg" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Abcd Efghi</h1>
          <h3>
           <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="image/down.png" alt="dwn arrw" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;

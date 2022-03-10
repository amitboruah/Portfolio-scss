import React, { useState } from "react";
import "./work.scss";

const Work = () => {
  const [current, setCurrent] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./image/mobile.png",
      title: "Mobile Application ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./image/globe.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./image/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrent(current > 0 ? current - 1 : 2)
      : setCurrent(current < data.length - 1 ? current + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {data.map((d, k) => (
          <div className="container" key={k}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="mobile" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="image/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="image/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Work;

import React from "react";
import "./testimonial.scss";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      icon: "image/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      icon: "image/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Divyaraj",
      title: "CEO of GT",
      icon: "image/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">

      { data.map((d)=>( <div className={d.featured?"card featured ":"card "}>
          <div className="top">
            <img src="image/right-arrow.png" alt="" className="left" />
            <img src="image/utube.svg" alt="" className="user" />
            <img src={d.icon} alt="" className="right" />
          </div>
          <div className="center">
           {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>))}
      </div>
    </div>
  );
};

export default Testimonial;

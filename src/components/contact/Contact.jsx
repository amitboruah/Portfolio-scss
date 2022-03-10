import React, { useState } from "react";
import "./contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.length) {
      setMessage(true);

      toast.success("Message Send", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setData("")
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="image/contact.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea
            placeholder="Message"
            onChange={(e) => setData(e.target.value)}
            value={data}
          />
          <button id="submit" type="submit">
            Send
          </button>
          <ToastContainer />
          {message ? <span>Thank you! i will contact you asap</span> : null}
        </form>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import { useState } from "react";
import Image from "next/image";

import { images } from "@constants";
import { AppWrap, MotionWrap } from "@components/wrapper";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };
  };

  return (
    <>
      <h2 className="head-text">contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Image src={images.email} alt="email" width={50} height={50} />
          <a href="mailto:faleyeoluwafemi1@gmail.com" className="p-text">
            faleyeoluwafemi1@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <Image src={images.mobile} alt="phone" width={50} height={50} />
          <a href="tel:+2348137192766" className="p-text">
            +234 (813) 719-2766
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Full Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__blackbg"
);

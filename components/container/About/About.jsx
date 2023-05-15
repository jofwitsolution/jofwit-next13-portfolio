"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { AppWrap, MotionWrap } from "@components/wrapper";
import { images } from "@constants";

const abouts = [
  {
    title: "Frontend Development",
    description:
      "I hone in on your brand vision to develop an impactful visual language for your online presence.",
    imgUrl: images.about01,
  },
  {
    title: "Backend Development",
    description:
      "I design and develop polished presentations that add value to your speech, on and off the screen.",
    imgUrl: images.about02,
  },
  {
    title: "Web Development",
    description:
      "From custom frontend to sophisticated backend, I create an engaging experience online.",
    imgUrl: images.about03,
  },
  {
    title: "Embedded System",
    description: "I provide embedded system solutions.",
    imgUrl: images.about04,
  },
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);

  return (
    <>
      {" "}
      <h2 className="heading-primary">
        Good Development <br />
        means Good Business
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

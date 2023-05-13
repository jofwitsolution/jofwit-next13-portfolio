"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { AppWrap } from "@components/wrapper";
import { images } from "@constants";
import "./Header.css";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className="wave-emoji">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Oluwafemi</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Fullstack Developer</p>
            <p className="p-text">Web Instructor</p>
            <p className="p-text">Embedded Programmer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <div className="app__header-img-img">
          <Image src={images.profile} alt="profile_bg" />
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          images.python,
          images.next_js_logo_small,
          images.node,
          images.react,
        ].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <Image src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");

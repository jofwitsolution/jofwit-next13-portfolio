"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { AppWrap, MotionWrap } from "@components/wrapper";
import { brands as myBrands } from "@data/brands";

import "./Testimonial.css";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setBrands(myBrands);
  }, []);

  return (
    <>
      <h2 className="heading-primary">Brands</h2>
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={index}
          >
            <Image
              src={brand.imgUrl}
              alt={brand.name}
              width={100}
              height={100}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "brands",
  "app__primarybg"
);

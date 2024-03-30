"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quote = {
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      delay:0.9,
      duration:1,
    }
  }
}

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8  items-center justify-center">
          {/* Title */}
          <motion.h1 variants={quote} initial="initial" animate="animate" className="text-4xl lg:text-6xl  font-bold">
          Turning Vision Into Reality With Code And Design.
          </motion.h1>
          {/* Description */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* Buttons */}
          <div className=" w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

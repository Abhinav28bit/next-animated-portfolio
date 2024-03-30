"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Page = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const ExpRef = useRef();
  const isExpRefInView = useInView(ExpRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-auto lg:flex">
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-28 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
          <Image
              src="/Abhinav.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              As a frontend developer and UI designer, I&apos;m dedicated to creating
              seamless digital experiences. I focus on user-centric design
              principles to craft elegant interfaces that blend aesthetics with
              functionality. My passion lies in shaping the digital landscape
              with purpose and innovation.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* Sign SVG */}
            <div className="self-end">
              <svg
                width="243"
                height="126"
                viewBox="0 0 243 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126 2C124.212 4.83112 121.429 6.97336 119 9.22222C103.715 23.375 87.6828 36.251 70 47.3333C56.005 56.1044 41.2555 63.6243 27.0556 72.0556C21.608 75.29 13.5088 80.2054 7.94445 83.6667C2.82288 86.8525 -2.18903 89.5783 7.66667 88.4444C67.16 81.6001 124.972 64.5407 184.944 60.8333C196.174 60.1392 207.42 60 218.667 60C221.415 60 221.572 60.2878 221 58"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M54 124C58.2779 121.623 58.8136 104.508 59.3333 100.667C62.0186 80.8216 62.2762 59.3702 58.8889 39.6111C57.9728 34.2673 56.853 28.7131 54.7778 23.6667C54.1704 22.1896 52.5281 20.3493 52.2778 18.7222C52.1309 17.7673 54.3213 18.7769 55.1111 19.3333C62.8505 24.7861 69.6908 32.1089 76.3333 38.7778C90.9051 53.4073 103.871 69.5062 118.111 84.4444C121.694 88.2032 125.448 91.7742 129.278 95.2778C131.243 97.0756 135.733 100.271 129.333 97.6667C106.279 88.2841 85.6229 73.9359 62.8333 63.9444C49.8156 58.2371 36.1259 54.2503 23 49"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M100 36C103.622 39.622 103.64 46.2214 104.5 51C105.58 56.9992 107.219 62.2124 109 68C110.409 72.58 107.232 68.0542 106.5 66.4444C105.032 63.2152 105.637 59.1153 109.556 59C115.644 58.8209 123.408 60.5147 116.444 68.1111C113.901 70.8858 106 69.9204 106 66"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M113 40C113 44.0272 114.759 47.6101 115.056 51.6111C115.373 55.8969 118.719 59.431 119 63.2222C119.395 68.5515 114.977 54 120 54C126.989 54 128.709 58.1413 131.778 64C136.295 72.6242 134.528 49.2778 135.444 49.1111C139.649 48.3467 144.799 60.6883 147.389 63.2778C148.405 64.2942 148 60.7039 148 60.6667C148 56.1267 148.135 51.6125 148.778 47.1111C149.152 44.4918 150.318 45 152.556 45C156.642 45 156.598 47.0563 159.222 49.7778C160.811 51.4256 162.494 52.2084 163 54.6111C164.587 62.1513 164.049 56.2517 164 52C163.953 47.956 162.988 43.0634 168.444 44.0556C172.295 44.7556 175.789 50.6159 177.944 53.4444C181.023 57.4852 182.791 53.6506 183 50C183.189 46.6951 187.719 44.7498 190.111 42.8889C192.619 40.9384 196.315 40.0401 194.778 36.1111C194.584 35.6171 191.79 45.2609 191.556 46.5C190.222 53.5484 190.267 60 198.444 60C202.225 60 202 59.6661 202 55.7778C202 51.5869 203.1 47.6876 199.889 44.8333C198.053 43.2015 190.415 37.3154 197.222 41.4444C203.455 45.2252 207.372 51.7868 211 57.8333C216.033 66.2225 211.845 39.1048 214.722 37.5556C222.907 33.1486 227.221 55.7928 232.444 58.7778C233.071 59.1361 234.079 55.4128 234.111 55.3333C235.371 52.1844 237.316 49.3543 238.556 46.2222C239.554 43.7007 240.17 41.1833 241.278 38.6667C242.596 35.6708 236.936 34.7446 235 34"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M133 32C133.763 32 140.353 30.9943 138.778 29.2222C137.487 27.7703 133.615 29.6146 132 28"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* Biography Scroll SVG */}
            <motion.svg
              initial={{opacity: 0.2, y: 0}}
              animate={{opacity: 1, y: "20px"}}
              transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* Skill List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Django
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React Native
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GSAP
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SEO
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* Skill Scroll SVG */}
            <motion.svg
              initial={{opacity: 0.2, y: 0}}
              animate={{opacity: 1, y: "20px"}}
              transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience Container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={ExpRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExpRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* Exp List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExpRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Frontend Web Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    NextBit
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Software Development Intern.
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    LIAA
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - 2023{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG Container */}
        
      </div>
    </motion.div>
  );
};

export default Page;

import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker " key={index}>
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                    className="w-[8vw] mt-[5.4px] mr-5 h-[6vw]"
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      className="w-full h-full bg-cover rounded-xl"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase text-[9vw] font-grotes leading-[6.7vw] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md cursor-pointer font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 rounded-full border-[2px] cursor-pointer border-zinc-500 font-light text-sm uppercase relative overflow-hidden">
            <span className="absolute inset-0 bg-black transform scale-x-0 origin-left"></span>
            <span className="relative z-10">Start the project</span>
          </div>
          <div className="w-10 h-10 border-[2px] items-center cursor-pointer justify-center border-zinc-500  rounded-full flex">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

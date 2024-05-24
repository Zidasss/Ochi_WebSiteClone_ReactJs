import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cardControls = [useAnimation(), useAnimation()];

  const handleHoverStart = (controls) => {
    controls.start({ y: "0%" });
  };

  const handleHoverEnd = (controls) => {
    controls.start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-14">
        <h1 className="text-8xl font-neue">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-10">
          <motion.div
            onHoverStart={() => handleHoverStart(cardControls[0])}
            onHoverEnd={() => handleHoverEnd(cardControls[0])}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute overflow-hidden flex text-[#EC6234] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cardControls[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </motion.div>
          <motion.div
            onHoverStart={() => handleHoverStart(cardControls[1])}
            onHoverEnd={() => handleHoverEnd(cardControls[1])}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#EC6234] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cardControls[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

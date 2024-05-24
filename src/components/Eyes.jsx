import React, { useState,useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      let angle = Math.atan2(deltaY, deltaX) *(180/Math.PI);
      setRotate(angle-180); // Convert to degrees and add 90 so the eyes face upwards
    });
  } , []); 
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-0.6" className="relative w-full bg-cover bg-center h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="flex items-center justify-center bg-zinc-100 rounded-full w-[15vw] h-[15vw]">
            <div className="bg-zinc-900 h-2/3 relative rounded-full w-2/3 ]">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="bg-zinc-100 h-10 rounded-full w-10"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-zinc-100 rounded-full w-[15vw] h-[15vw]">
            <div className="bg-zinc-900 h-2/3 relative rounded-full w-2/3 ]">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="bg-zinc-100 h-10 rounded-full w-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;

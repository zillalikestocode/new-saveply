import React from "react";
import "../styles/styles.css";
import { BsArrowRight } from "react-icons/bs/index.js";

const Why = () => {
  return (
    <div className="lg:mx-20 lg:my-10 relative z-10 text-black m-5">
      <div className="card-border"></div>
      <div className="bg-violet-300 flex gap-20 rounded-md card relative p-20">
        <div className="w-full">
          <h4 className="font-[blaft] text-5xl">
            Save Simply, not Harder. Saving money doesn't have to be
            complicated.
          </h4>
          <div className="border-2 border-black w-[500px] flex items-center mt-10">
            <input
              type="email"
              placeholder="Your Email"
              className="focus:outline-none flex-grow pl-5 placeholder:text-black font-medium bg-transparent"
            />
            <button className="bg-black flex gap-3 items-center w-fit px-5 p-3 ml-auto text-white">
              Join The Waitlist
              <BsArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Why;

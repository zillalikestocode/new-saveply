import React from "react";
import "../styles/styles.css";
import { BsArrowRight } from "react-icons/bs/index.js";

function Why() {
  return (
    <div className="lg:mx-20 lg:my-10 relative z-10 text-black">
      <div className="card-border"></div>
      <div className="bg-violet-300 flex flex-col md:flex-row gap-20 p-5 card relative py-10 md:py-20 md:p-20">
        <div className="w-full flex md:block items-center flex-col">
          <h4 className="font-[blaft] text-center md:text-left text-4xl">
            Save Simply, not Harder. Saving money doesn't have to be
            complicated.
          </h4>
          <div className="md:border-2 border-black w-fit md:w-[500px] flex items-center mt-10">
            <input
              type="email"
              placeholder="Your Email"
              className="focus:outline-none hidden md:block flex-grow pl-5 placeholder:text-black font-medium bg-transparent"
            />
            <button className="bg-black text-xs md:text-base flex gap-3 items-center w-fit px-5 p-3 ml-auto text-white">
              Join The Waitlist
              <BsArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}

export default Why;

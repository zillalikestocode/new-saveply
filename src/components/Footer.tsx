import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs/index.js";

function Footer() {
  return (
    <>
      <div className="bg-[#f2f2f2] lg:p-20 p-5 flex">
        <div className="space-y-5">
          <div>
            <h4 className="text-3xl text-violet-600 font-[getai]">saveply</h4>
          </div>
          <div className="flex gap-5 items-center">
            <a
              href="#"
              className="border border-neutral-300 text-neutral-700 p-3 rounded-lg"
            >
              <BsTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="border border-neutral-300 text-neutral-700 p-3 rounded-lg"
            >
              <BsInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="border border-neutral-300 text-neutral-700 p-3 rounded-lg"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="border border-neutral-300 text-neutral-700 p-3 rounded-lg"
            >
              <BsFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-end lg:px-20 p-5 pt-0 bg-[#f2f2f2]">
        <div className="space-y-2">
          <h4 className="md:text-2xl text-xl font-semibold">
            Save Simply, not Harder.
          </h4>
          <p className="text-black/60 md:text-base text-sm font-medium">
            Use Saveply today and say goodbye to saving problems.
          </p>
        </div>
        <div className="md:ml-auto flex items-center mt-5 md:mt-0 gap-2">
          &copy;
          <h4 className="font-medium text-neutral-600">
            2023 Saveply. All rights reserved.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Footer;

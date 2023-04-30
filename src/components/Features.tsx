import React from "react";
import { BsArrowRight, BsPiggyBank } from "react-icons/bs/index.js";
import { BiLockAlt } from "react-icons/bi/index.js";
import { TbChevronRight } from "react-icons/tb/index.js";
import budget from "../assets/images/Spreadsheets-bro.svg";
import wallet from "../assets/images/Wallet-bro (1).svg";
import target from "../assets/images/Business vision-bro.svg";

function Features() {
  return (
    <div className="lg:grid items-center lg:px-20 lg:gap-y-20 px-5 p-5 flex flex-col grid-cols-2">
      <div className="space-y-5 order-2 md:order-none">
        <h4 className="md:text-5xl text-4xl font-[universo]">
          Efficient Budget Tracking
        </h4>
        <p>
          Say goodbye to overspending and hello to financial freedom with our
          easy budget planner and tracker.
        </p>
        <a href="/waitlist" className="mt-5">
          <button className="feat-btn flex items-center gap-3 px-6 p-3 mt-5 border-black bg-white border-2 font-semibold text- uppercase">
            Join The Waitlist
            <BsArrowRight className="w-5 h-5" />
          </button>
        </a>
      </div>
      <div className="md:h-[500px] order-1 md:order-none object-cover overflow-hidden">
        <img src={budget} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="md:h-[500px] mt-10 md:mt-0 order-3 md:order-none object-cover overflow-hidden">
        <img src={wallet} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="space-y-5 order-4 md:order-none z-30">
        <h4 className="md:text-5xl text-4xl font-[universo]">
          Personal Wallet
        </h4>
        <p>
          Our secure and user-friendly digital wallet allows you to store, send,
          and receive money with just a few taps on your smartphone.
        </p>
        <div className="absolute bg-violet-500 -z-10 translate-y-32 -translate-x-5 w-16 h-16 rounded-full" />
        <div className="absolute bg-violet-500 -z-10 translate-y-2 translate-x-56 md:translate-x-[450px] w-16 h-16 rounded-full" />
        <div className="border mt-5 bg-violet-500/10 z-20 backdrop-blur-[12px] p-5 w-full md:w-[500px] rounded-2xl">
          <h4 className="text-sm font-medium">Wallet</h4>
          <div className="flex w-8 mt-5 h-4 rounded">
            <div className="w-full bg-green-700 rounded-l" />
            <div className="w-full bg-white" />
            <div className="w-full bg-green-700 rounded-r" />
          </div>
          <h4 className="font-[blaft] text-4xl mt-5">$1,000,000.00</h4>
        </div>
        <a href="/waitlist" className="mt-5">
          <button className="feat-btn flex items-center gap-3 px-6 p-3 mt-5 border-black bg-black text-white border-2 font-semibold text- uppercase">
            Join The Waitlist
            <BsArrowRight className="w-5 h-5" />
          </button>
        </a>
      </div>
      <div className="space-y-5 order-6 md:order-none">
        <h4 className="md:text-5xl text-4xl font-[universo]">
          Target Your Savings
        </h4>
        <p>
          With customizable savings plans and a user-friendly interface, saving
          has never been this effortless
        </p>
        <div className="flex mt-5 md:gap-10 gap-5">
          <div className="rounded-xl border border-black h-fit w-full lg:w-56 shad font-semibold text-black/90 gap-10">
            <div className="p-5">
              <div className="flex items-center">
                <div className="bg-violet-400 border-black border w-fit p-3 rounded-md">
                  <BsPiggyBank className="w-5 h-5 text-black" />
                </div>
                <h4 className="ml-auto">$10,000</h4>
              </div>
              <h4 className="mt-10">School Fees</h4>
              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase">target</h4>
                <h4 className="text-xl">$30,000</h4>
              </div>
            </div>
            <button className="w-full p-3 px-5 text-black/75 font-medium flex gap-3 items-center bg-violet-400/25 rounded-t-2xl rounded-b-xl">
              Withdraw
              <BiLockAlt className="w-5 h-5 ml-auto" />
            </button>
          </div>
          <div className="relative w-full z-10">
            <div className="absolute -z-10 h-full w-full rounded-xl border border-black top-4 left-4" />
            <div className="rounded-xl p-1 h-fit w-full lg:w-56 bg-violet-400/50 backdrop-blur-xl font-semibold text-black gap-10">
              <div className="p-4">
                <div className="flex items-center">
                  <div className=" bg-black w-fit p-3 rounded-md">
                    <BsPiggyBank className="w-5 h-5 text-violet-400" />
                  </div>
                  <h4 className="ml-auto">$110,000</h4>
                </div>
                <h4 className="mt-10">Rent</h4>
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase">target</h4>
                  <h4 className="text-xl">$100,000</h4>
                </div>
              </div>
              <button className="w-full p-3 px-5 text-violet-400 font-medium flex gap-3 items-center bg-black rounded-t-2xl rounded-b-xl">
                Withdraw
                <TbChevronRight className="w-5 h-5 ml-auto" />
              </button>
            </div>
          </div>
        </div>
        <a href="/waitlist" className="mt-5">
          <button className="feat-btn flex items-center gap-3 px-6 p-3 mt-5 border-black bg-white border-2 font-semibold text- uppercase">
            Join The Waitlist
            <BsArrowRight className="w-5 h-5" />
          </button>
        </a>
      </div>
      <div className="md:h-[500px] mt-10 md:mt-0 order-5 md:order-none object-cover overflow-hidden">
        <img src={target} alt="" className="object-cover h-full w-full" />
      </div>
    </div>
  );
}

export default Features;

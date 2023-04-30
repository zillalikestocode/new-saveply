import React, { LegacyRef, useEffect, useLayoutEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs/index.js";
import piggy from "../assets/images/Piggy bank-bro.svg";
import gsap from "gsap";

function Hero() {
  const circle: LegacyRef<HTMLDivElement> = useRef();

  useLayoutEffect(() => {
    const degreeToRadian = (angle) => {
      return angle * (Math.PI / 180);
    };

    const radius = 80;
    const diameter = radius * 2;

    circle.current.style.width = `${diameter}px`;
    circle.current.style.height = `${diameter}px`;

    const text = circle.current.dataset.text;
    const characters = text.split("");

    const deltaAngle = 360 / characters.length;
    const characterOffsetAngle = 8;
    let currentAngle = -90;

    characters.forEach((character, index) => {
      const span = document.createElement("span");
      span.innerText = character;
      const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
      const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

      const transform = `translate(${xPos}px, ${yPos}px)`;
      const rotate = `rotate(${index * deltaAngle + characterOffsetAngle}deg)`;
      span.style.transform = `${transform} ${rotate}`;

      currentAngle += deltaAngle;
      circle.current.appendChild(span);
    });

    //gsap animations
    const ctx = gsap.context(() => {
      const heroText = gsap.utils.toArray(".hero-text");
      const tl = gsap.timeline();
      // heroText.forEach((item: any) => {
      //   tl.fromTo(
      //     item,
      //     {
      //       y: 100,
      //     },
      //     { y: 0, duration: 0.3 }
      //   );
      // });
      tl.fromTo(
        ".hero-text",
        {
          y: 100,
        },
        { y: 0, duration: 0.5, delay: 0.5, stagger: 0.1 }
      );
      tl.to(".savings-span", {
        width: "100%",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row lg:grid grid-cols-2 grid-rows-1 mt-10 lg:mt-0 overflow-hidden px-5 lg:pl-20">
        <div className="flex-grow lg:mt-16">
          <div>
            <div className="overflow-hidden">
              <h4 className="lg:text-7xl text-5xl hero-text !leading-[1.2] font-[universo]">
                Be part of the
              </h4>
            </div>
            <div className="overflow-hidden">
              <h4 className="lg:text-7xl text-5xl hero-text !leading-[1.2] w-fit font-[universo] savings">
                <span className="savings-span">Savings</span>
                Savings
              </h4>
            </div>
            <div className="overflow-hidden">
              <h4 className="lg:text-7xl text-5xl hero-text !leading-[1.2] font-[universo]">
                Revolution.
              </h4>
            </div>
          </div>
          <p className="font-medium lg:text-base text-sm text-neutral-600 !leading-normal lg:w-[600px] mt-5">
            Save more money and earn simply and securely with Saveply. With
            Saveply, you can take control of your financial future and enjoy
            peace of mind knowing your money is working for you. Start your
            journey to financial freedom today with Saveply.
          </p>
          <div className="flex w-fit md:border-2 mt-5 md:mt-0 border-black lg:mt-7">
            <input
              placeholder="Your Email"
              type="email"
              className="font-semibold bg-transparent hidden md:block lg:w-[400px] placeholder:text-black focus:outline-none p-3"
            />
            <button className="bg-black p-4 px-5 flex items-center gap-3 text-white w-fit text-sm ml-auto">
              Join Waitlist
              <BsArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex-grow hidden md:block ml-auto lg:w-[800px]">
          <img src={piggy} className="-translate-y-24" />
        </div>
      </div>
      <div className="lg:px-20 mt-10 md:mt-0 px-5 text-black flex flex-col md:flex-row gap-10">
        <div className="space-y-5">
          <h4 className="font-[universo] text-3xl md:text-5xl">
            The NeoPiggybank you can trust.
          </h4>
          <p className="md:text-xl !leading-normal font-medium">
            Saveply uses up-to-date encryption and security measures to protect
            the savings, informations and transactions of our users. Users can
            be assured that their funds are safe and secure.
          </p>
        </div>
        <div className="w-[500px] hidden md:block">
          <div
            ref={circle}
            id="circle"
            className="font-semibold"
            data-text="SAVEPLY SAVEPLY&nbsp;"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Hero;

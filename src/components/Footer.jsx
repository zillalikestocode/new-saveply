import { Fragment } from "react";
import SavePlyLogo from "../assets/Images/SavePly_logo.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-between md:items-center w-[90%] mx-auto font-semibold">
        <img src={SavePlyLogo} alt="" className="md:w-[200px] w-[100px]" />
        <div className="max-w-[400px]">
          <ul className="flex justify-between md:items-center mb-4 text-[#7F0799]">
            <li>Home</li>
            <li>Why Us</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
          <div className="border max-w-[400px] flex justify-between p-1">
            <input type="text" name="" id="" className="outline-none" />
            <button className="bg-[#7F0799] text-white p-2 outline-none">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="">
          <p className="text-[#7F0799]">Contact us:</p>
          <ul className="my-2">
            <li>
              {" "}
              <a href="mailto:saveply@gmail.com">saveply@gmail.com</a>
            </li>
            <li>
              {" "}
              <a href="tel:+234 3533643623">+234 3533643623</a>
            </li>
          </ul>
          <p className="text-[#7F0799]">Follow us:</p>
          <div className=""></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;

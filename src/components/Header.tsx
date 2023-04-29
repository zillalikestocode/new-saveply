import React from "react";
import "../styles/styles.css";

function Header() {
  return (
    <header>
      <nav className=" flex items-center lg:px-20 p-5">
        <div>
          <h4 className="font-[getai] text-3xl text-violet-800">saveply</h4>
        </div>
        <div className=" ml-auto">
          <button className="border-black border-2 nav-btn font-semibold px-8 p-3">
            Join Waitlist
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import Marquee from "react-fast-marquee";

const Marq = () => {
  return (
    <div className="py-10">
      <Marquee autoFill pauseOnHover>
        <h4 className="text-4xl font-['Bungee_Outline'] font-semibold text-violet-600">
          Save Simply, Not Harder. Saveply &nbsp;&nbsp;&nbsp;&nbsp;
          &bull;&nbsp;&nbsp; &nbsp;&nbsp;
        </h4>
      </Marquee>
    </div>
  );
};

export default Marq;

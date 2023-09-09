import React from "react";
import { useSprings, animated } from "react-spring";
import "./clientSpring.css";

function Number({ n }) {
  const [props] = useSprings(1, (i) => ({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  }));

  return (
    <div>
      {props.map(({ number }, index) => (
        <animated.div key={index}>
          {number.to((n) => n.toFixed(0))}
        </animated.div>
      ))}
    </div>
  );
}

const ClientSpring = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-[15px] lg:pl-[66px] lg:pr-[66px] client-spring-containt lg:w-[1220px] mx-auto md:h-173px lg:h-[180px] h-[95px]   ">
        <div className="   md:mt-4">
          <h1 className="flex text-[17px] md:text-[40px] font-[Poppins] font-[600]  justify-center text-center text-[#3C4FF8]">
            <Number n={103} />
            <animated.span>{" +"}</animated.span>
          </h1>
          <h3 className="font-[Poppins] text-[12px] md:text-[20px] text-center font-[600] text-white lg:mt-[7px]">
            Happy Clients
          </h3>
        </div>
        <div className="   md:mt-4">
          <h1 className="flex text-[17px] md:text-[40px] font-[Poppins] font-[600] justify-center text-center text-[#3C4FF8]  ">
            <Number n={277} />
            <animated.span>{" +"}</animated.span>
          </h1>
          <h3 className="font-[Poppins] text-[12px] md:text-[20px] font-[600] text-center text-white lg:mt-[7px]">
            Total Complete Projects
          </h3>
        </div>
        <div className="   md:mt-4">
          <h1 className="flex text-[17px] md:text-[40px] font-[Poppins] font-[600] justify-center text-center text-[#3C4FF8] ">
            <Number n={11} />
            <animated.span>{" +"}</animated.span>
          </h1>
          <h3 className="font-[Poppins] text-[12px] md:text-[20px] font-[600] text-center text-white lg:mt-[7px]">
            Total Running Projects
          </h3>
        </div>
        <div className="   md:mt-4">
          <h1 className="flex text-[17px] md:text-[40px] font-[Poppins] text-center font-[600] justify-center text-[#3C4FF8]">
            <Number n={12} />
            <animated.span>{" +"}</animated.span>
          </h1>
          <h3 className="font-[Poppins] text-[12px] md:text-[20px] font-[600] text-center text-white lg:mt-[7px]">
            Total Review
          </h3>
         
        </div>
      </div>
    </div>
  );
};

export default ClientSpring;

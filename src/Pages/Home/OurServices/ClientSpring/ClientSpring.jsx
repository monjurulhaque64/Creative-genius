import React from "react";
import { useSprings, animated } from "react-spring";

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
    <div className="flex w-[1240px] h-[173px] border rounded-lg bg-[#404040]">
      <div className="ml-[100px] mt-7">
        <h1 className="flex text-[40px] font-[Poppins] font-[600] text-[#3C4FF8]">
          <Number n={103} />
          <animated.span>{" +"}</animated.span>
        </h1>
        <h3 className="font-[Poppins] text-[20px] font-[600] text-white">
          Happy Clients
        </h3>
      </div>
      <div className="ml-[125px] mt-7">
        <h1 className="flex text-[40px] font-[Poppins] font-[600] text-center text-[#3C4FF8]  ml-8">
          <Number n={277} />
          <animated.span>{" +"}</animated.span>
        </h1>
        <h3 className="font-[Poppins] text-[20px] font-[600] text-white ">
        Total Complete Projects
        </h3>
      </div>
      <div className="ml-[125px] mt-7">
        <h1 className="flex text-[40px] font-[Poppins] font-[600] text-[#3C4FF8]  ml-8">
          <Number n={11} />
          <animated.span>{" +"}</animated.span>
        </h1>
        <h3 className="font-[Poppins] text-[20px] font-[600] text-white">
        Total Running Projects
        </h3>
      </div>
      <div className="ml-[125px] mt-7">
        <h1 className="flex text-[40px] font-[Poppins] font-[600] text-[#3C4FF8]">
          <Number n={12} />
          <animated.span>{" +"}</animated.span>
        </h1>
        <h3 className="font-[Poppins] text-[20px] font-[600] text-white">
        Total Review
        </h3>
      </div>
    </div>
  );
};

export default ClientSpring;

import React from "react";
import { useSprings, animated } from "react-spring";
import './clientSpring.css'

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
    <div className="flex client-spring-containt ">
      <div className="ml-[100px] mt-7">
        <h1 className="flex text-[40px] font-[Poppins] font-[600] text-[#FF0000]">
          <Number n={103} />
          <animated.span>{" +"}</animated.span>
        </h1>
        <h3 className="font-[Poppins] text-[20px] font-[600] text-black">
          Happy Clients
        </h3>
      </div>
      <div className="ml-[125px] mt-7">
        <h1 className="flex text-[40px] font-[Poppins] font-[600] text-center text-[#FF0000]  ml-8">
          <Number n={277} />
          <animated.span>{" +"}</animated.span>
        </h1>
        <h3 className="font-[Poppins] text-[20px] font-[600] text-black ">
        Total Complete Projects
        </h3>
      </div>
      <div className="ml-[125px] mt-7">
        <h1 className="flex text-[40px] font-[Poppins] font-[600] text-[#FF0000]  ml-8">
          <Number n={11} />
          <animated.span>{" +"}</animated.span>
        </h1>
        <h3 className="font-[Poppins] text-[20px] font-[600] text-black">
        Total Running Projects
        </h3>
      </div>
      <div className="ml-[125px] mt-7">
        <h1 className="flex text-[40px] font-[Poppins] font-[600] text-[#FF0000]">
          <Number n={12} />
          <animated.span>{" +"}</animated.span>
        </h1>
        <h3 className="font-[Poppins] text-[20px] font-[600] text-black">
        Total Review
        </h3>
      </div>
    </div>
  );
};

export default ClientSpring;

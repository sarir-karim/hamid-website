import React from "react";
import topSecBg from "../assets/topSecBg.jpg";

const Top = ({ title }) => {
  return (
    <section
      className="relative flex h-72 items-center justify-center overflow-hidden md:h-[250px]"
      aria-label={`${title} page hero section`}
    >
      <img
        src={topSecBg}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/70"></div>
      <div className="relative z-20 px-6 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      </div>
    </section>
  );
};

export default Top;

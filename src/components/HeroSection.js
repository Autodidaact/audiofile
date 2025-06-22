import React from "react";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className="relative bg-[#101010] text-white overflow-hidden px-6 lg:px-32 pt-32 pb-40">
      <img
        src="../assets/home/desktop/image-hero.jpg"
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
      />
      <div className="relative z-10 max-w-xl">
        <p className="uppercase text-sm tracking-[10px] text-[#FFFFFF]/60 mb-6">
          New Product
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          XX99 Mark II Headphones
        </h1>
        <p className="text-white/75 mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          to="/product/xx99-mark-two-headphones"
          className="inline-block bg-[#D87D4A] hover:bg-[#fbaf85] text-white px-8 py-4 uppercase tracking-wide transition"
        >
          See Product
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

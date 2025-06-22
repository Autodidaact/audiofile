import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white px-6 lg:px-32 pt-0 pb-12 font-manrope">
      {/* Accent bar */}
      <div className="h-1 w-24 bg-[#D87D4A] mb-12"></div>

      {/* Logo */}
      <img src="../assets/shared/desktop/logo.svg" alt="Audiophile" className="h-6 mb-8" />

      {/* Navigation links */}
      <nav className="flex gap-8 uppercase text-sm tracking-widest mb-8">
        <NavLink to="/" end className="hover:text-[#D87D4A]">Home</NavLink>
        <NavLink to="/category/headphones" className="hover:text-[#D87D4A]">Headphones</NavLink>
        <NavLink to="/category/speakers" className="hover:text-[#D87D4A]">Speakers</NavLink>
        <NavLink to="/category/earphones" className="hover:text-[#D87D4A]">Earphones</NavLink>
      </nav>

      {/* Description */}
      <p className="text-gray-400 max-w-2xl leading-relaxed mb-12">
        Audiophile is an all in one stop to fulfill your audio needs. We’re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>

      {/* Bottom row: Copyright + social */}
      <div className="flex justify-between items-center flex-wrap gap-6 text-sm text-gray-500">
        <p>Copyright 2021. All Rights Reserved</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook"><img src="../assets/shared/desktop/icon-facebook.svg" alt="Facebook" className="h-5" /></a>
          <a href="#" aria-label="Twitter"><img src="../assets/shared/desktop/icon-twitter.svg" alt="Twitter" className="h-5" /></a>
          <a href="#" aria-label="Instagram"><img src="../assets/shared/desktop/icon-instagram.svg" alt="Instagram" className="h-5" /></a>
        </div>
      </div>
    </footer>
  );
}

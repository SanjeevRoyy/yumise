import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-16 items-center  p-4 bg-white">
      <div className="flex items-center gap-4">
      <img width={70} src="assets/images/logo.png" alt="logo" />
      <p className="font-bold" > <span style={{color:"#94268C"}}>YUMISE
        </span> INTERNATIONAL <br /> EDUCATIONAL CONSULTANCY PVT. LTD </p>
      </div>
      <Link className="" to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About Us</Link>
      <Link to="/vacancy">Vacancy</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default Navbar;

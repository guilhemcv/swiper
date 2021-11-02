import React from "react";
import "./Logo.css";
import img from "./logo.png";

function Logo() {
  return (
    <div>
      <h1 className="titre-logo">Swiper</h1>
      <img className="img-logo" src={img} alt="logo swiper" />
    </div>
  );
}

export default Logo;

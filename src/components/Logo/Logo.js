import React, { useContext } from "react";
import "./Logo.css";
import img from "../../Assets/Images/logo.png";

import LogoContext from "../../contexts/LogoContext";

function Logo() {
  const { logoColor } = useContext(LogoContext);
  return (
    <div>
      <h1 className={logoColor}>Swiper</h1>
      <img className="img-logo" src={img} alt="logo swiper" />
    </div>
  );
}

export default Logo;

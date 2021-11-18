import React, { useEffect } from "react";
import { useHistory } from "react-router";
import "./NotFound.css";
import img404 from "../../Assets/Images/24.png";

function NotFound() {
  const history = useHistory();
  // Redirection au bout de 5secondes sur la page d'accueil
  setTimeout(() => {
    history.push("/");
  }, 5000);

  return (
    <div className="div404">
      <div className="flex404">
        <h1 className="title404">4</h1>
        <img className="image404 rotate-scale-up" src={img404} alt="404" />
        <h1 className="title404">4</h1>
      </div>
      <h2 className="title2404">
        Page Introuvable ! <br /> redirection dans 5 secondes
      </h2>
    </div>
  );
}

export default NotFound;

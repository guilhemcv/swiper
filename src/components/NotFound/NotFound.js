import React from "react";
import "./NotFound.css";
import image404 from "../../Assets/Images/error404.jpg";

function NotFound() {
  return (
    <div className="div404">
      <h1 className="title404">
        Erreur 404 <br /> Page Introuvable !
      </h1>
      <img className="image404" src={image404} alt="404" />
    </div>
  );
}

export default NotFound;

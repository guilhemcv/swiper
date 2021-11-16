import React, { useEffect } from "react";
import { useHistory } from "react-router";
import "./NotFound.css";
import image404 from "../../Assets/Images/error404.jpg";

function NotFound() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 5000);

  return (
    <div className="div404">
      <h1 className="title404">
        Erreur 404 <br /> Page Introuvable ! <br /> redirection dans 5 secondes
      </h1>
      <img className="image404" src={image404} alt="404" />
    </div>
  );
}

export default NotFound;

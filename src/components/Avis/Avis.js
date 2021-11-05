import React from "react";
import "./Avis.css";
import Coralie from "./Images/coralie.png";
import Lucas from "./Images/lucas.png";
import Guilhem from "./Images/guilhem.png";

function Avis() {
  return (
    <div className="carte-avis">
      <div className="titre">
        <h2>Ils parlent de nous</h2>
      </div>
      <div className="avis">
        <div className="avis1">
          <img src={Coralie} alt="Portrait Coralie" className="photo" />
          <p>
            J'adore utiliser Swiper pour organiser mes week-ends! Je ne peux
            plus m'en passer!!
          </p>
        </div>
        <div className="avis2">
          <img src={Lucas} alt="Portrait Lucas" className="photo" />
          <p>
            Grâce à Swiper je re-découvre ma ville tous les week-ends!! Trop
            bien conçu!
          </p>
        </div>
        <div className="avis3">
          <img src={Guilhem} alt="Portrait Maxime" className="photo" />
          <p>
            Je l'ai utilisé pour découvrir Nantes: Super appli', très complète!
            Hyper fan!
          </p>
        </div>
        <div className="avis4">
          <img src={Lucas} alt="Portrait Guilhem" className="photo" />
          <p>
            Avec notre groupe d'amis, on l'utilise tous les week-ends! On est
            fan!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Avis;

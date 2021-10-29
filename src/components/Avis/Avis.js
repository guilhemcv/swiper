import React from "react";
import "./Avis.css";
import Images from "./Images/coralie.png";

function Avis() {
  return (
    <div>
      <div className="titre">
        <h2>Ils parlent de nous</h2>
      </div>
      <div className="avis">
        <div className="avis1">
          <img src={Images} alt="Portrait Coralie" class="photo" />
          <p>
            J'adore utiliser Swiper pour organiser mes week-ends! Je ne peux
            plus m'en passer!!
          </p>
        </div>
        <div className="avis2">
          <img src={Images} alt="Portrait Lucas" class="photo" />
          <p>
            Grâce à Swiper je re-découvre ma ville tous les week-ends!! Trop
            bien conçu!
          </p>
        </div>
        <div className="avis3">
          <img src={Images} alt="Portrait Maxime" class="photo" />
          <p>
            Je l'ai utilisé pour découvrir Nantes: Super appli', très complète!
            Hyper fan!
          </p>
        </div>
        <div className="avis4">
          <img src={Images} alt="Portrait Guilhem" class="photo" />
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
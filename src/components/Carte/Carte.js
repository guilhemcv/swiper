import React from "react";
import "./Carte.css";

function Carte() {
  return (
    <div className="carte">
      <div>
        <h2> A quoi ça sert ? </h2>
        <p>
          "On fait quoi ce week-end ?" T'en as marre de cette question ?! Pas de
          panique ! Swiper est là pour toi !Tu retouveras des propostions
          d'activités par catégorie : Lieux culturels, Parcs, Sport et Loisirs,
          Restaurants et même les parkings les plus proches de toi !
        </p>
      </div>
      <div>
        <h2> Comment ça fonctionne ? </h2>
        <p>
          Tu peux commencer par créer un compte via ton compte Google ou
          Facebook.Ensuite tu peux te diriger vers la page Swipe et sélectionner
          la catégorie qui t'intéresse : une photo et un petit texte descriptif
          s'affiche, de là tu peux swiper à droite si l'activité t'intéresse
          sinon swipe à gauche. Si tu cliques si l'activité proposée tu seras
          rediriger vers la Carte pour situer le lieux. Sur la Carte tu pourras
          sélectionner les catégories qui t'intéresse pour retrouver leur
          emplacement. Sur la page Favoris tu retrouveras les activés que tu as
          sélectionnées classées par catégorie.
        </p>
      </div>
    </div>
  );
}
export default Carte;

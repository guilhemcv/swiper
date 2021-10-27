import React from "react";
import "./Carte.css";

function Carte() {
  return (
    <div className="carte">
      <div className="info">
        <h2> A quoi ça sert ? </h2>
        <p>
          "On fait quoi ce week-end ?" T'en as marre de cette question ?! Pas de
          panique ! Swiper est là pour toi! Tu retouveras des propostions
          d'activités par catégorie : Lieux culturels, Parcs, Sport et Loisirs,
          Restaurants et même les parkings les plus proches de toi! Tu pourras
          retrouver les activités que tu as aimé dans tes Favoris. Un plan de la
          ville te permettra de retrouver ces lieux.
        </p>
      </div>
      <div className="fonctionnement">
        <h2> Comment ça fonctionne ? </h2>
        <p>
          Tu peux commencer par créer un compte.Ensuite tu peux te diriger vers
          la page Swipe et sélectionner la catégorie qui t'intéresse : une
          activité te sera proposée, de là tu peux swiper à droite si cette
          propostion t'intéresse sinon swipe à gauche. Tu pourras les retrouver
          sur la page Favoris. Si tu cliques sur l'activité proposée tu seras
          redirigé vers un plan pour situer le lieu.
        </p>
      </div>
    </div>
  );
}
export default Carte;

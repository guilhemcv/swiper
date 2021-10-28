import React from "react";
import "./Avis.css";

function Avis() {
    return(
        <div className="avis">
        <h2>Ils parlent de nous</h2>
        <div className="avis1">
            <img src="./Images/coralie.jpg" alt="Portrait Coralie" class="photo" />
            <p>J'adore utiliser Swiper pour organiser mes week-ends! Je ne peux plus m'en passer!!</p>
        </div>
        <div className="avis2">
            <img />
            <p>Je l'ai utilisé pour découvrir Nantes: Super appli', très complète!</p>
        </div>
        <div className="avis3">
            <img />
            <p>Avec notre groupe d'amis, on l'utilise tous les week-ends! On est fan!!</p>
        </div>
        <div className="avis4">
            <img />
            <p>Nantais depuis toujours, Swiper est tellement bien conçu que j'ai l'impression de (re)-découvrir ma ville!</p>
        </div>
        </div>
    )
}
export default Avis;
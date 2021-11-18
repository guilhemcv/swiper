import React, { useState } from "react";
import { logDOM } from "@testing-library/react";
import imageFavori from "../../Assets/Images/Markers/favoris.png";
import {
  popupContent,
  popupHead,
  popupText,
  popupSite,
  popupButton,
  popupAfter,
} from "../Popup/PopupStyle";

function MarkerFavori(props) {
  /* state pour affichage popup au clique du marker */
  const [popup, setPopup] = useState(false);

  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageFavori}
        width="70px"
        alt="favoris"
        onClick={() => setPopup(true)}
      />
      {/* Affichage du popup  */}
      {popup && (
        <div onClose={() => setPopup(false)} style={popupContent}>
          <button
            type="button"
            onClick={() => setPopup(false)}
            style={popupButton}
          >
            {/* croix pour fermer le popup */}X
          </button>
          {/* Recuperation des donnees pour les affichar dans popup */}
          <h2 style={popupHead}>{props.favoriNom}</h2>
          <p style={popupText}>{props.favoriType}</p>
          {/* Style pour fleche du bas du popup */}
          <span style={popupAfter}></span>
        </div>
      )}
    </div>
  );
}

export default MarkerFavori;

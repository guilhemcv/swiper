import React, { useState } from "react";
import { logDOM } from "@testing-library/react";
import {
  popupContent,
  popupHead,
  popupText,
  popupSite,
  popupButton,
  popupAfter,
} from "../Popup/PopupStyles";

function Marker(props) {
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
        src={props.data.img}
        alt={props.data.type}
        width="35px"
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
          <h2 style={popupHead}>{props.data.nom}</h2>
          <p style={popupText}>{props.data.commune}</p>
          <p style={popupText}>{props.data.adresse}</p>
          {`${props.data.places}` ? (
            <p style={popupText}>Nombre de places : {props.data.places}</p>
          ) : (
            " "
          )}
          <p style={popupText}>{props.data.telephone}</p>
          <a href={props.data.site_web} style={popupSite} target="_blank">
            Voir le site internet
          </a>
          <p style={popupText}>{props.data.jeux_enfants}</p>
          <p style={popupText}>{props.data.acces}</p>
          <p style={popupText}>{props.data.descriptif}</p>
          <p style={popupText}>{props.data.capacite}</p>
          <p style={popupText}>{props.data.categorie}</p>
          {/* Style pour fleche du bas du popup */}
          <span style={popupAfter}></span>
        </div>
      )}
      ;
    </div>
  );
}

export default Marker;

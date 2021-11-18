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
        <div onClick={() => setPopup(false)} style={popupContent}>
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
          {props.data.places ? (
            <p style={popupText}>Nombre de places : {props.data.places}</p>
          ) : (
            " "
          )}
          {props.data.telephone ? (
            <p style={popupText}>N° de téléphone : {props.data.telephone}</p>
          ) : (
            " "
          )}
          {props.data.site ? (
            <a href={props.data.site} style={popupSite} target="_blank">
              Voir le site internet
            </a>
          ) : (
            " "
          )}
          {props.data.jeux_enfants ? (
            <p style={popupText}>
              Jeux pour enfants : {props.data.jeux_enfants}
            </p>
          ) : (
            " "
          )}
          {props.data.acces ? (
            <p style={popupText}>Moyen de transport : {props.data.acces}</p>
          ) : (
            " "
          )}
          {props.data.capacite ? (
            <p style={popupText}>Capacité : {props.data.capacite}</p>
          ) : (
            " "
          )}
          {props.data.categorie ? (
            <p style={popupText}>Catégorie : {props.data.categorie}</p>
          ) : (
            " "
          )}
          {/* Style pour fleche du bas du popup */}
          <span style={popupAfter}></span>
        </div>
      )}
    </div>
  );
}

export default Marker;

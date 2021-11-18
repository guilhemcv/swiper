import React from "react";
import "./GoogleMapSelection.css";

function GoogleMapSelection(props) {
  return (
    /* Input pour la barre de recherche */
    <div className="barreRecherche">
      <div className="selection-recherche">
        <label forHtml="name">
          <h3 className="mapselection-titre">Rechercher une adresse :</h3>
        </label>
        <br />
        <div className="recherchebouton">
          <input
            ref={props.textInput}
            className="input-recherche"
            type="text"
            id="name"
            name="name"
          />
          <button
            className="rechercheadresse"
            onClick={() => props.onClickButton()}
          >
            Rechercher
          </button>
        </div>
      </div>
      {/* Input pour les filtres */}
      <div className="selection">
        {props.checkboxFilter.map((filter, index) => (
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id={filter.name}
              name={filter.name}
              checked={filter.check}
              onChange={() => props.updateCheckboxFilter(index)}
            />
            <label for={filter.name}>{filter.name}</label>
          </div>
        ))}
        {/* input pour tout déselectionner */}
        <div className="inputLabel">
          <input
            className="input"
            type="checkbox"
            name="aucun"
            defaultChecked={props.showMarkers}
            checked={!props.showMarkers}
            onChange={props.handleClick}
          />
          <label for="Aucun">Tout Désélectionner</label>
        </div>
      </div>
      {/* Bouton pour le changement de  thème de la map */}
      <div className="divbouton">
        <button
          className="switchtheme"
          onClick={() => props.ChangeColorTheme()}
        >
          {props.changeTheme ? "Map : theme clair" : "Map : theme sombre"}
        </button>
      </div>
    </div>
  );
}

export default GoogleMapSelection;

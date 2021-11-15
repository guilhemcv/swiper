import React from "react";
import "./GoogleMapSelection.css";

function GoogleMapSelection(props) {
  return (
    <div className="barreRecherche">
      <div className="selection-recherche">
        <label forHtml="name">
          <h3 className="mapselection-titre">Rechercher une adresse :</h3>
        </label>
        <br />
        <div className="recherchebouton">
          <input
            className="input-recherche"
            type="text"
            id="name"
            name="name"
          />
          <button className="rechercheadresse">Rechercher</button>
        </div>
      </div>
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
      </div>
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

import React from "react";
import "./GoogleMapSelection.css";

function GoogleMapSelection() {
  return (
    <div className="selection">
      <div className="selection-recherche">
        <label forHtml="name">
          <h4>Rechercher une adresse :</h4>
        </label>
        <br />
        <input className="input-recherche" type="text" id="name" name="name" />
      </div>
      <br />
      <br />
      <br />
      <div className="inputLabel">
        <input className="input" type="checkbox" id="parking" name="parking" />
        <label for="parking">Parkings</label>
      </div>
      <div className="inputLabel">
        <input
          className="input"
          type="checkbox"
          id="restaurant"
          name="restaurant"
        />
        <label for="restaurant">Restaurants</label>
      </div>
      <div className="inputLabel">
        <input className="input" type="checkbox" id="sport" name="sport" />
        <label for="sport">Sport et loisirs</label>
      </div>
      <div className="inputLabel">
        <input
          className="input"
          type="checkbox"
          id="culturel"
          name="culturel"
        />
        <label for="culturel">Lieux culturels</label>
      </div>
      <div className="inputLabel">
        <input className="input" type="checkbox" id="cinemas" name="cinemas" />
        <label for="cinemas">Cinémas</label>
      </div>
    </div>
  );
}

export default GoogleMapSelection;

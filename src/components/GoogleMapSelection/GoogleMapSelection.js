import React from "react";
import "./GoogleMapSelection.css";

function GoogleMapSelection(props) {
  console.log(props.parkingTableauVide);
  return (
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
      <div className="selection">
        <div className="selectiongauche">
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="monuments"
              name="monuments"
              defaultChecked={props.monumentIsChecked}
              checked={!props.monumentIsChecked}
              onChange={props.MonumentHandleOnChange}
            />
            <label for="monuments">Monuments</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="cinemas"
              name="cinemas"
              defaultChecked={props.cinemaIsChecked}
              checked={!props.cinemaIsChecked}
              onChange={props.CinemaHandleOnChange}
            />
            <label for="cinemas">Cinémas</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="salledespectacle"
              name="salledespectacle"
              defaultChecked={props.spectacleIsChecked}
              checked={!props.spectacleIsChecked}
              onChange={props.SpectacleHandleOnChange}
            />
            <label for="spectacle">Spectacles</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="restaurant"
              name="restaurant"
              defaultChecked={props.restaurantIsChecked}
              checked={!props.restaurantIsChecked}
              onChange={props.RestaurantHandleOnChange}
            />
            <label for="restaurant">Restaurants</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="parc"
              name="parc"
              defaultChecked={props.parcIsChecked}
              checked={!props.parcIsChecked}
              onChange={props.ParcHandleOnChange}
            />
            <label for="parc">Parcs et Squares</label>
          </div>
        </div>
        <div className="selectiondroite">
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="sport"
              name="sport"
              defaultChecked={props.sportIsChecked}
              checked={!props.sportIsChecked}
              onChange={props.SportHandleOnChange}
            />
            <label for="sport">Sport</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="piscine"
              name="piscine"
              defaultChecked={props.piscineIsChecked}
              checked={!props.piscineIsChecked}
              onChange={props.PiscineHandleOnChange}
            />
            <label for="piscine">Piscines</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="parking"
              name="parking"
              defaultChecked={props.parkingIsChecked}
              checked={!props.parkingIsChecked}
              onChange={props.ParkinghandleOnChange}
            />
            <label for="parking">Parkings</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="bicloo"
              name="bicloo"
              defaultChecked={props.biclooIsChecked}
              checked={!props.biclooIsChecked}
              onChange={props.BiclooHandleOnChange}
            />
            <label for="bicloo">Stations Bicloo</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="marguerite"
              name="marguerite"
              defaultChecked={props.margueriteIsChecked}
              checked={!props.margueriteIsChecked}
              onChange={props.MargueriteHandleOnChange}
            />
            <label for="marguerite">Stations Marguerite</label>
          </div>
        </div>
      </div>
      <div className="divbouton">
        <button className="switchtheme" onClick={props.ChangeColorTheme}>
          {props.changeTheme ? "Map : theme clair" : "Map : theme sombre"}
        </button>
      </div>
    </div>
  );
}

export default GoogleMapSelection;

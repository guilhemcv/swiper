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
        <input className="input-recherche" type="text" id="name" name="name" />
      </div>
      <div className="selection">
        <div className="selectiongauche">
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
              id="parc"
              name="parc"
              defaultChecked={props.parcIsChecked}
              checked={!props.parcIsChecked}
              onChange={props.ParcHandleOnChange}
            />
            <label for="culturel">Parcs et Squares</label>
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
        </div>
        <div className="selectiondroite">
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
              id="salledespectacle"
              name="salledespectacle"
              defaultChecked={props.spectacleIsChecked}
              checked={!props.spectacleIsChecked}
              onChange={props.SpectacleHandleOnChange}
            />
            <label for="restaurant">Spectacles</label>
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
            <label for="sport">Piscines</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="culturel"
              name="culturel"
              defaultChecked=""
              checked=""
              onChange=""
            />
            <label for="culturel">Lieux culturels</label>
          </div>
          <div className="inputLabel">
            <input
              className="input"
              type="checkbox"
              id="cinemas"
              name="cinemas"
              defaultChecked=""
              checked=""
              onChange=""
            />
            <label for="cinemas">Cinémas</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleMapSelection;

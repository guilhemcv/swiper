import React from "react";
import "./GoogleMapSelection.css";

function GoogleMapSelection(props) {
  console.log(props.parkingIsChecked);
  console.log(props.restaurantIsChecked);
  console.log(props.culturelIsChecked);
  console.log(props.cinemaIsChecked);
  console.log(props.sportIsChecked);

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
        <div className="inputLabel">
          <input
            className="input"
            type="checkbox"
            id="parking"
            name="parking"
            checked={props.parkingIsChecked}
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
            checked={props.restaurantIsChecked}
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
            checked={props.sportIsChecked}
            onChange={props.SportHandleOnChange}
          />
          <label for="sport">Sport et loisirs</label>
        </div>
        <div className="inputLabel">
          <input
            className="input"
            type="checkbox"
            id="culturel"
            name="culturel"
            checked={props.culturelIsChecked}
            onChange={props.CulturelHandleOnChange}
          />
          <label for="culturel">Lieux culturels</label>
        </div>
        <div className="inputLabel">
          <input
            className="input"
            type="checkbox"
            id="cinemas"
            name="cinemas"
            checked={props.cinemaIsChecked}
            onChange={props.CinemaHandleOnChange}
          />
          <label for="cinemas">Cinémas</label>
        </div>
      </div>
    </div>
  );
}

export default GoogleMapSelection;

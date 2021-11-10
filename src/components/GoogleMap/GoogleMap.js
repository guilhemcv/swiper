/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
import React from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import env from "react-dotenv";
import Popup from "../Popup/Popup";
import imageParcs from "../../Assets/Images/Markers/parc.png";
import imageParking from "../../Assets/Images/Markers/parking.png";
import imageMusee from "../../Assets/Images/Markers/musee.png";
import imageCinema from "../../Assets/Images/Markers/cinema.png";
import imageRestaurant from "../../Assets/Images/Markers/restaurant.png";
import imageSpectacle from "../../Assets/Images/Markers/spectacle.png";
import imagePiscine from "../../Assets/Images/Markers/piscine.png";
import imageBicloo from "../../Assets/Images/Markers/bicloo.png";
import imageMarguerite from "../../Assets/Images/Markers/voiture.png";
import imageSport from "../../Assets/Images/Markers/sport.png";
import imageRecherche from "../../Assets/Images/Markers/recherche.png";
import customStylesLite from "./CustomStyleLite";
import customStylesDark from "./CustomStylesDark";

/* API Google */
const key = process.env.REACT_APP_API_KEY;

function Mar() {
  return <div></div>
};

/* fonction affichage de la Google Map */
function GoogleMap({ changeTheme, markers }) {
  const center = { lat: 47.212369, lng: -1.55 };



  function Marker() {
    for (let i = 0; i < markers.length; i += 1) {
      if (markers[i].type === "parking") {
        return (
          <div
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              className="marker"
              src={imageParking}
              alt="parking"
              width="35px"
            />
          </div>
        );
      }
      if (markers[i].type === "parcs") {
        return (
          <div
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <img className="marker" src={imageParcs} alt="parcs" width="35px" />
          </div>
        );
      }
    }
  }

  return (
    <div className="googlemap">
      <GoogleMapReact
        options={
          changeTheme
            ? { styles: customStylesDark }
            : { styles: customStylesLite }
        }
        /* bootstrapURLKeys={{ key }} */
        defaultCenter={center}
        defaultZoom={13}
      >
        <Marker lat={} lng={} />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;

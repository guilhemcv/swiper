/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import env from "react-dotenv";
import Popup from "../Popup/Popup";
import customStylesLite from "./CustomStyleLite";
import customStylesDark from "./CustomStylesDark";

/* API Google */
const key = process.env.REACT_APP_API_KEY;

function Marker(props) {
  console.log(props);
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
      />
    </div>
  );
}

/* fonction affichage de la Google Map */
function GoogleMap({ changeTheme, markers }) {
  const center = { lat: 47.212369, lng: -1.55 };
  console.log(markers);

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
        {markers.map((marker) => {
          console.log("marker");
          return (
            <Marker
              lat={marker.coordonnees[1]}
              lng={marker.coordonnees[0]}
              data={marker}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;

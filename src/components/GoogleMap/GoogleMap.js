/* eslint-disable arrow-body-style */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import env from "react-dotenv";
import Marker from "../Marker/Marker";
import "./GoogleMap.css";
import customStylesLite from "./CustomStyleLite";
import customStylesDark from "./CustomStylesDark";

/* API Google */
const key = process.env.REACT_APP_API_KEY;

/* fonction affichage de la Google Map */
function GoogleMap(props) {
  const center = { lat: 47.212369, lng: -1.55 };

  return (
    <div className="googlemap">
      <GoogleMapReact
        options={
          props.changeTheme
            ? { styles: customStylesDark }
            : { styles: customStylesLite }
        }
        /* bootstrapURLKeys={{ key }} */
        defaultCenter={center}
        defaultZoom={13}
      >
        {props.markers.map((marker) => {
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

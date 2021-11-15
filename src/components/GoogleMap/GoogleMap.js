/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import env from "react-dotenv";
import Marker from "../Marker/Marker";
import "./GoogleMap.css";
import Popup from "../Popup/Popup";
import customStylesLite from "./CustomStyleLite";
import customStylesDark from "./CustomStylesDark";

/* API Google */
const key = process.env.REACT_APP_API_KEY;

/* fonction affichage de la Google Map */
function GoogleMap({ changeTheme, markers }) {
  const center = { lat: 47.212369, lng: -1.55 };
  /* console.log(markers); */

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
          console.log("hello");
          return (
            <Marker
              lat={marker.coordonnees[1]}
              lng={marker.coordonnees[0]}
              data={marker}
            />
          );
        })}
        {/* {popupInfo && (
          <Popup
            store={popupInfo}
            lat={popupInfo.coordonnees[1]}
            lng={popupInfo.coordonnees[0]}
          />
        )} */}
        {/* {selectedMarker && (
          <div>
            <h2>{selectedMarker.nom}</h2>
            <p>lat={selectedMarker.coordonnees[1]}</p>
            <p>lng={selectedMarker.coordonnees[0]}</p>
            <p>{selectedMarker.marker.commune}</p>
          </div>
        )} */}
        {/* {selectedMarker && (
          <InfoWindow
            position={{
              lat:{selectedMarker.coordonnees[1]},
              lng:{selectedMarker.coordonnees[0]}
              }}
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
          >
           <div>
            <h2>{selectedMarker.marker.nom}</h2>
            <p>{selectedMarker.marker.commune}</p>
          </div>
          </InfoWindow>
        )} */}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;

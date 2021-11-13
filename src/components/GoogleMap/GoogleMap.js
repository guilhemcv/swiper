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
  /* Ajout d'un state pour cibler le marker */
  const [selectedMarker, setSelectedMarker] = useState(null);

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
          console.log("hi");
          return (
            <Marker
              key={marker.id}
              lat={marker.coordonnees[1]}
              lng={marker.coordonnees[0]}
              data={marker}
              onClick={() => {
                setSelectedMarker(marker);
              }}
            />
          );
        })}
        {selectedMarker && (
          <Popup
            lat={selectedMarker.coordonnees[1]}
            lng={selectedMarker.coordonnees[0]}
            OncloseClick={() => {
              setSelectedMarker(null);
            }}
          >
            <div>
              <h2>{selectedMarker.fields.name}</h2>
              <p>{selectedMarker.fields.commune}</p>
            </div>
          </Popup>
        )}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;

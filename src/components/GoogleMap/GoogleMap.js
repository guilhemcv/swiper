/* eslint-disable prefer-destructuring */
import React, { Component, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import "./GoogleMap.css";
import img from "./Chefs_Hat_6.png";
import imgpark from "./Parking_8.png";

/* API Google */
const key = process.env.REACT_APP_API_KEY;

/* Marker pour les restaurants */
/* function MarkerRestaurant() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={img} width="70px" alt="restaurant"></img>
    </div>
  );
} */

/* Marker pour les parkings */
function MarkerParking() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={imgpark} width="70px" alt="restaurant"></img>
    </div>
  );
}

let parkingLat = 0;
let parkingLng = 0;

/* fonction affichage de la Google Map */
class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&rows=20&facet=grp_nom&facet=grp_statut"
      )
      .then((response) => {
        const myData = response.data;
        console.log(response.data);
        for (let i = 0; i < myData.records.length; i += 1) {
          parkingLat = myData.records[i].fields.location[0];
          parkingLng = myData.records[i].fields.location[1];
          console.log(parkingLat, parkingLng);
        }
      });
    this.setState({ markers: [] });
  }

  /* Définir le center de la carte par défaut */
  static defaultProps = {
    center: {
      lat: 47.212369,
      lng: -1.55,
    },
    zoom: 14,
  };

  render() {
    return (
      <div className="googlemap">
        <GoogleMapReact
          bootstrapURLKeys={
            {
              /* key */
            }
          }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <MarkerRestaurant lat={47.212369} lng={-1.55} />
          <MarkerRestaurant lat={47.21} lng={-1.5545} />
          <MarkerRestaurant lat={47.2} lng={-1.55231} />
          <MarkerRestaurant lat={47.2165} lng={-1.5552} /> */}
          <MarkerParking lat={47.21} lng={-1.55} />
          {/* <MarkerParking lat={47.21} lng={-1.567} /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

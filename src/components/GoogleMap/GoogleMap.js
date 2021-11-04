/* eslint-disable prefer-destructuring */
import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import "./GoogleMap.css";
import imageParcs from "./parks.png";
import imageParking from "./Parking_8.png";

/* API Google */
const key = process.env.REACT_APP_API_KEY;

/* Marker pour les restaurants */
function MarkerParc() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={imageParcs} width="70px" alt="restaurant"></img>
    </div>
  );
}

/* Marker pour les parkings */
function MarkerParking() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={imageParking} width="70px" alt="restaurant"></img>
    </div>
  );
}

/* fonction affichage de la Google Map */
class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markersParking: [],
      markersParc: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes&q=&rows=100&facet=libcategorie&facet=libtype&facet=acces_pmr&facet=service_velo&facet=stationnement_velo&facet=stationnement_velo_securise&facet=moyen_paiement"
      )
      .then((response) => {
        console.log(response.data);
        const parkingData = response.data.records.map(
          (record) => record.fields.location
        );
        this.setState({
          markersParking: parkingData,
        });
      });
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&rows=100&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique"
      )
      .then((response) => {
        const parcData = response.data.records.map(
          (record) => record.fields.location
        );
        this.setState({
          markersParc: parcData,
        });
        console.log(parcData);
      });
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
    let googleMarkersParking = [];
    if (this.state.markersParking.length > 0) {
      googleMarkersParking = this.state.markersParking.map((marker) =>
        marker ? <MarkerParking lat={marker[0]} lng={marker[1]} /> : <div></div>
      );
    }
    let googleMarkersParc = [];
    if (this.state.markersParc.length > 0) {
      googleMarkersParc = this.state.markersParc.map((marker) =>
        marker ? <MarkerParc lat={marker[0]} lng={marker[1]} /> : <div></div>
      );
    }
    console.log(googleMarkersParking);
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
          {googleMarkersParking}
          {googleMarkersParc}
          {/* <MarkerParking lat={47.21} lng={-1.567} /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

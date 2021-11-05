/* eslint-disable prefer-destructuring */
import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import "./GoogleMap.css";
import imageParcs from "./park.png";
import imageParking from "./Parking.png";
import imageMusee from "./Musee.png";

/* API Google */
const key = process.env.REACT_APP_API_KEY;

/* Marker pour les parcs */
function MarkerParc() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={imageParcs} width="35px" alt="parc"></img>
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
      <img src={imageParking} width="35px" alt="parking"></img>
    </div>
  );
}

/* Marker pour les musées */
function MarkerMusee() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={imageMusee} width="35px" alt="musee"></img>
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
      markersMusee: [],
    };
  }

  /* 
  //UseEffect pour affichage des markers sur la Google Map
  */

  componentDidMount() {
    /* fetch pour les parkings */
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
    /* fetch pour les parcs */
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
      });
    /* fetch pour les musées */
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Mus%C3%A9e%2C+Ch%C3%A2teau&refine.commune=Nantes"
      )
      .then((response) => {
        const museeData = response.data.records.map(
          (record) => record.fields.geo_shape.coordinates
        );
        this.setState({
          markersMusee: museeData,
        });
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
    /* Affichage des markers selon disponibilites des données dans l'API */
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
    let googleMarkersMusee = [];
    if (this.state.markersMusee.length > 0) {
      googleMarkersMusee = this.state.markersMusee.map((marker) =>
        marker ? <MarkerMusee lat={marker[1]} lng={marker[0]} /> : <div></div>
      );
    }
    return (
      <div className="googlemap">
        <GoogleMapReact
          options={(map) => ({ mapTypeId: map.MapTypeId.HYBRID })}
          bootstrapURLKeys={
            {
              /* key, */
            }
          }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {googleMarkersParking}
          {googleMarkersParc}
          {googleMarkersMusee}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;


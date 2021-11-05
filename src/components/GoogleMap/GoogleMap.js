/* eslint-disable prefer-destructuring */
import React from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import imageParcs from "../../Assets/Images/Markers/park.png";
import imageParking from "../../Assets/Images/Markers/parking.png";
import imageMusee from "../../Assets/Images/Markers/musee.png";
import imageCinema from "../../Assets/Images/Markers/cinema.png";
import imageRestaurant from "../../Assets/Images/Markers/restaurant.png";

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
/* Marker pour les cinémas */
function MarkerCinema() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={imageCinema} width="35px" alt="musee"></img>
    </div>
  );
}
/* Marker pour les restaurant */
function MarkerRestaurant() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={imageRestaurant} width="35px" alt="musee"></img>
    </div>
  );
}

/* fonction affichage de la Google Map */
class GoogleMap extends React.Component {
  /*   constructor(props) {
    super(props);
    this.state = {
      markersParking: [],
      markersParc: [],
      markersMusee: [],
      markersCinema: [],
      animation: 2,
    }; 
  } */

  /* 
  //UseEffect pour affichage des markers sur la Google Map
  */

  /*   componentDidMount() {
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
      });
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
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Mus%C3%A9e%2C+Ch%C3%A2teau&refine.commune=Nantes"
      )
      .then((response) => {
        const cinemaData = response.data.records.map(
          (record) => record.fields.geo_shape.coordinates
        );
        this.setState({
          markersCinema: cinemaData,
        });
      });
  } */

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
    if (this.props.parking.length > 0) {
      googleMarkersParking = this.props.parking.map((marker) =>
        marker ? <MarkerParking lat={marker[0]} lng={marker[1]} /> : <div></div>
      );
    }
    let googleMarkersParc = [];
    if (this.props.parc.length > 0) {
      googleMarkersParc = this.props.parc.map((marker) =>
        marker ? <MarkerParc lat={marker[0]} lng={marker[1]} /> : <div></div>
      );
    }
    let googleMarkersMusee = [];
    if (this.props.musee.length > 0) {
      googleMarkersMusee = this.props.musee.map((marker) =>
        marker ? <MarkerMusee lat={marker[1]} lng={marker[0]} /> : <div></div>
      );
    }
    let googleMarkersCinema = [];
    if (this.props.cinema.length > 0) {
      googleMarkersCinema = this.props.cinema.map((marker) =>
        marker ? <MarkerCinema lat={marker[1]} lng={marker[0]} /> : <div></div>
      );
    }
    let googleMarkersRestaurant = [];
    if (this.props.restaurant.length > 0) {
      googleMarkersRestaurant = this.props.restaurant.map((marker) =>
        marker ? (
          <MarkerRestaurant lat={marker[1]} lng={marker[0]} />
        ) : (
          <div></div>
        )
      );
    }
    return (
      <div className="googlemap">
        <GoogleMapReact
          options={(map) => ({ mapTypeId: map.MapTypeId.HYBRID })}
          /*           bootstrapURLKeys={{
            key,
          }} */
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {googleMarkersParking}
          {googleMarkersParc}
          {googleMarkersMusee}
          {googleMarkersCinema}
          {googleMarkersRestaurant}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

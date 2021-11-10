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

<<<<<<< HEAD
/* API Google */

const key = process.env.REACT_APP_API_KEY;
=======
/* const key = env.REACT_APP_API_KEY; */
>>>>>>> 885d7771db154868e1eb9bc33c5c2f6db725363b

/* Marker pour les parcs */
function MarkerParc() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img className="marker" src={imageParcs} width="35px" alt="parc"></img>
    </div>
  );
}
/* Marker pour les parkings */
function MarkerParking() {
  return (
    <div
      className="markernothover"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageParking}
        width="35px"
        alt="parking"
      ></img>
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
      <img className="marker" src={imageMusee} width="35px" alt="musee"></img>
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
      <img className="marker" src={imageCinema} width="35px" alt="cinema"></img>
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
      <img
        className="marker"
        src={imageRestaurant}
        width="35px"
        alt="restaurant"
      ></img>
    </div>
  );
}
/* Marker pour les salles de spectacle */
function MarkerSpectacle() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageSpectacle}
        width="35px"
        alt="spectacle"
      ></img>
    </div>
  );
}
/* Marker pour les piscines */
function MarkerPiscine() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imagePiscine}
        width="35px"
        alt="piscine"
      ></img>
    </div>
  );
}
/* Marker pour les bicloo */
function MarkerBicloo() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img className="marker" src={imageBicloo} width="35px" alt="bicloo"></img>
    </div>
  );
}
/* Marker pour les bicloo */
function MarkerMarguerite() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageMarguerite}
        width="35px"
        alt="marguerite"
      ></img>
    </div>
  );
}
/* Marker pour le sport de plein air */
function MarkerSport() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageSport}
        width="35px"
        alt="marguerite"
      ></img>
    </div>
  );
}
/* Marker pour la recherche input */
function MarkerRecherche() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageRecherche}
        width="60px"
        alt="recherche"
      ></img>
    </div>
  );
}

/* fonction affichage de la Google Map */
class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

<<<<<<< HEAD
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
  }
=======
  /* fonction affichage popup sur map */
  togglePopup = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
>>>>>>> 885d7771db154868e1eb9bc33c5c2f6db725363b

  /* Définir le center de la carte par défaut */
  static defaultProps = {
    center: {
      lat: 47.212369,
      lng: -1.55,
    },
    zoom: 13,
  };

  render() {
    return (
      <div className="googlemap">
        <GoogleMapReact

          options={
            this.props.changeTheme
              ? { styles: customStylesDark }
              : { styles: customStylesLite }
          }
          /* bootstrapURLKeys={{ key }} */
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={() => this.togglePopup()}
        >
          {/* {this.props.parkingTableauVide.map((marker) => (
            <MarkerParking
              lat={marker.coordonnees[1]}
              lng={marker.coordonnees[0]}
            />
          ))} */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

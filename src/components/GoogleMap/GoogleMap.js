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

function Marker() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageParking}
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
    this.markers = this.props.markers;
    this.markers.map((marker) => console.log(marker));
    this.togglePopup = this.togglePopup.bind(this);
  }

  /* fonction affichage popup sur map */
  togglePopup = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  /* Définir le center de la carte par défaut */
  static defaultProps = {
    center: {
      lat: 47.212369,
      lng: -1.55,
    },
    zoom: 13,
  };

  render() {
    // eslint-disable-next-line no-return-assign
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
          {/* {this.markers.map((marker) => (
            <Marker lat={marker.coordonnees[0]} lng={marker.coordonnees[1]} />
          ))} */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

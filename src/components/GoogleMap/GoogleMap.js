/* eslint-disable prefer-destructuring */
import React from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import Popup from "../Popup/Popup";
import imageParcs from "../../Assets/Images/Markers/park.png";
import imageParking from "../../Assets/Images/Markers/parking.png";
import imageMusee from "../../Assets/Images/Markers/musee.png";
import imageCinema from "../../Assets/Images/Markers/cinema.png";
import imageRestaurant from "../../Assets/Images/Markers/restaurant.png";
import imageSpectacle from "../../Assets/Images/Markers/spectacle.png";
import imagePiscine from "../../Assets/Images/Markers/piscine.png";
import imageBicloo from "../../Assets/Images/Markers/bicloo.png";
import imageMarguerite from "../../Assets/Images/Markers/voiture.png";
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

/* fonction affichage de la Google Map */
class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
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
    /* Affichage des markers selon disponibilites des données dans l'API */
    let googleMarkersParking = [];
    if (this.props.parking.length > 0) {
      googleMarkersParking = this.props.parking.map((marker) =>
        marker ? <MarkerParking lat={marker[1]} lng={marker[0]} /> : <div></div>
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
    let googleMarkersSpectacle = [];
    if (this.props.spectacle.length > 0) {
      googleMarkersSpectacle = this.props.spectacle.map((marker) =>
        marker ? (
          <MarkerSpectacle lat={marker[1]} lng={marker[0]} />
        ) : (
          <div></div>
        )
      );
    }
    let googleMarkersPiscine = [];
    if (this.props.piscine.length > 0) {
      googleMarkersPiscine = this.props.piscine.map((marker) =>
        marker ? <MarkerPiscine lat={marker[1]} lng={marker[0]} /> : <div></div>
      );
    }
    let googleMarkersBicloo = [];
    if (this.props.bicloo.length > 0) {
      googleMarkersBicloo = this.props.bicloo.map((marker) =>
        marker ? <MarkerBicloo lat={marker[1]} lng={marker[0]} /> : <div></div>
      );
    }
    let googleMarkersMarguerite = [];
    if (this.props.marguerite.length > 0) {
      googleMarkersMarguerite = this.props.marguerite.map((marker) =>
        marker ? (
          <MarkerMarguerite lat={marker[1]} lng={marker[0]} />
        ) : (
          <div></div>
        )
      );
    }
    return (
      <div className="googlemap">
        <GoogleMapReact
          options={
            this.props.changeTheme
              ? { styles: customStylesDark }
              : { styles: customStylesLite }
          }
          bootstrapURLKeys={
            {
              /* key, */
            }
          }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={() => this.togglePopup()}
        >
          {this.props.biclooIsChecked ? "" : googleMarkersBicloo}
          {this.props.parkingIsChecked ? "" : googleMarkersParking}
          {this.props.parcIsChecked ? "" : googleMarkersParc}
          {this.props.monumentIsChecked ? "" : googleMarkersMusee}
          {this.props.cinemaIsChecked ? "" : googleMarkersCinema}
          {this.props.restaurantIsChecked ? "" : googleMarkersRestaurant}
          {this.props.spectacleIsChecked ? "" : googleMarkersSpectacle}
          {this.props.piscineIsChecked ? "" : googleMarkersPiscine}
          {this.props.margueriteIsChecked ? "" : googleMarkersMarguerite}
          {this.state.isOpen && (
            <Popup
              content={
                <>
                  <h5>Ceci est la Cigale</h5>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </>
              }
              handleClose={() => this.togglePopup}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

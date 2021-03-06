/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useHistory } from "react-router-dom";
import "./CarteFavoris.css";
import imageRestaurant from "../../Assets/Images/restaurant.jpg";
import imageTheatre from "../../Assets/Images/theatre.jpg";
import imageMonument from "../../Assets/Images/monuments.jpg";
import imageSpectacle from "../../Assets/Images/spectacles.jpg";
import imageSport from "../../Assets/Images/sport.jpg";
import imagePiscine from "../../Assets/Images/piscine.jpg";

function CarteFavoris(props) {
  const history = useHistory();
  const Redirect = () => {
    history.push("/map");
  };
  // pour ne pas afficher parc, sport, piscine
  if (
    props.data.type === "parking" ||
    props.data.type === "bicloo" ||
    props.data.type === "parcs" ||
    props.data.type === "sport" ||
    props.data.type === "piscine"
  ) {
    return "";
  }
  let image = "";
  /**
   * Selection de l'image adéquate en fonction de la catégorie
   */
  if (props.data.type === "restaurant") {
    image = imageRestaurant;
  }
  if (props.data.type === "cinema") {
    image = imageTheatre;
  }
  if (props.data.type === "musee") {
    image = imageMonument;
  }
  if (props.data.type === "spectacle") {
    image = imageSpectacle;
  }
  return (
    <div className="favoris-card">
      <div
        className="carte-favoris"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        onClick={() => {
          Redirect();
        }}
      >
        <h2
          className="favoris-titre"
          cible={props.data.nom}
          lattitude={props.data.coordonnees[1]}
          longitude={props.data.coordonnees[0]}
          type={props.data.type}
          onClick={props.EcouteInfo}
        >
          {props.data.nom}
        </h2>
      </div>
    </div>
  );
}

export default CarteFavoris;

import React from "react";
import "./CarteFavoris.css";
import imageRestaurant from "../../Assets/Images/restaurant.jpg";
import imageTheatre from "../../Assets/Images/theatre.jpg";
import imageMonument from "../../Assets/Images/monuments.jpg";
import imageSpectacle from "../../Assets/Images/spectacles.jpg";
import imageSport from "../../Assets/Images/sport.jpg";
import imagePiscine from "../../Assets/Images/piscine.jpg";

function CarteFavoris(props) {
  console.log(props.data);
  if (
    props.data.type === "parking" ||
    props.data.type === "bicloo" ||
    props.data.type === "parcs"
  ) {
    return "";
  }
  let image = "";

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
  if (props.data.type === "sport") {
    image = imageSport;
  }
  if (props.data.type === "piscine") {
    image = imagePiscine;
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
      >
        <h2
          className="favoris-titre"
          onClick={() => console.log("carte cliquée")}
        >
          {props.data.nom}
        </h2>
      </div>
    </div>
  );
}

export default CarteFavoris;

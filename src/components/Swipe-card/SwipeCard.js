/* eslint-disable no-nested-ternary */
import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import InputSelect from "../InputSelect/InputSelect";

function Advanced(props) {
  const [allPlaces, setAllPLaces] = useState([]);
  const [newPlace, setNewPlace] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(29);
  const [lastDirection, setLastDirection] = useState();

  const canGoBack = currentIndex < newPlace.length - 1;
  const canSwipe = currentIndex >= 0;

  // utilisé pour la clôture de outOfFrame
  const currentIndexRef = useRef(currentIndex);

  // on crée 30 cartes à partir du filtre
  function createCards(places) {
    const actualPlaces = [];
    for (let i = 0; i < 30; i += 1) {
      actualPlaces.push(places[i]);
    }
    setNewPlace(actualPlaces);
  }

  // création des cartes à chaque changement de catégories
  useEffect(() => {
    const places = props.markers.filter((el) => el.type === props.value);
    setAllPLaces(places);
    if (places.length > 0) {
      createCards(places);
    }
  }, [props.value]);

  // on Memoize nos objets dans un tableau
  const childRefs = useMemo(
    () =>
      Array(allPlaces.length)
        .fill(0)
        .map((i) => React.createRef()),
    [allPlaces]
  );

  // Mise à jour de l'index après chaque mouvement de carte
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  // on définit la direction du dernier swipe et on décrémente l'index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    // prise en compte du cas où l'utilisateur cliquerait sur retour avant la disparition de la carte
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < newPlace.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe de la carte !
    }
  };

  // dans le cas du retour on incrémente l'index et on remontre la carte
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  // On utilise le lien source d'unsplash pour obtenir une image aléatoire pour chaque carte
  // eslint-disable-next-line consistent-return
  const getRandomImage = (index) => {
    let image = "";
    const i = index % 9 || 9;
    if (props.value === "musee") {
      image = `https://source.unsplash.com/600x60${i}/?museum}`;
    }
    if (props.value === "restaurant") {
      image = `https://source.unsplash.com/600x60${i}/?restaurant}`;
    }
    if (props.value === "spectacle") {
      image = `https://source.unsplash.com/600x60${i}/?concert}`;
    }
    return image;
  };

  // ajout des cartes likées aux favoris
  function addFavoris() {
    const actualFavoris = JSON.parse(sessionStorage.getItem("Favoris")) || []; // on récupère le tableau Favoris enregistré en sessionStorage
    const mesFavoris = [...actualFavoris]; // on crée un tableau mesFavoris à partir de ce tableau
    let foundFav = false;
    if (currentIndex !== 29) {
      foundFav = mesFavoris.some(
        (fav) => fav.nom === newPlace[currentIndex + 1].nom // Lors du swipe à droite on vérifie si l'élément swipé est déjà enregistré en favoris
      );
    } else {
      foundFav = mesFavoris.some(
        (fav) => fav.nom === newPlace[currentIndex].nom
      );
    }
    if (!foundFav) {
      mesFavoris.push(newPlace[currentIndex + 1]); // si l'élément n'est pas déjà en favoris on l'ajoute
      let session = true;
      const intervalId = setTimeout(() => {
        if (session) {
          sessionStorage.setItem("Favoris", JSON.stringify(mesFavoris));
        }
        session = false;
      }, 200);
    }
  }

  return (
    <div className="swipe-card">
      {props.value !== "all" ? (
        <div className="superContainer">
          <div className="cardContainer">
            {newPlace.length > 0
              ? newPlace.map((place, index) => (
                  <TinderCard
                    ref={childRefs[index]}
                    className="swipe"
                    key={place.nom}
                    onSwipe={(dir) => swiped(dir, place.nom, index)}
                    onCardLeftScreen={() => outOfFrame(place.nom, index)}
                    preventSwipe={["up", "down"]}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${getRandomImage(index)})`,
                      }}
                      className="card"
                    >
                      <h3>{place.nom}</h3>
                    </div>
                  </TinderCard>
                ))
              : ""}
          </div>
          <div className="buttons">
            <button
              className="button-dislike"
              style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
              onClick={() => swipe("left")}
            >
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
            <button
              className="button-back"
              style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
              onClick={() => goBack()}
            >
              <FontAwesomeIcon icon={faUndo} />
            </button>
            <button
              className="button-like"
              style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
              onClick={() => swipe("right")}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            {lastDirection === "right" ? addFavoris() : ""}
          </div>
        </div>
      ) : (
        <h2>Sélectionnez une catégorie</h2>
      )}
    </div>
  );
}

export default Advanced;

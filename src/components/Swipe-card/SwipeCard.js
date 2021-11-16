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

function Advanced({ markers }) {
  const [allPlaces, setAllPLaces] = useState([]);
  const [newPlace, setNewPlace] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(9);
  const [lastDirection, setLastDirection] = useState();
  const [position, setPosition] = useState(0);

  const canGoBack = currentIndex < newPlace.length - 1;
  const canSwipe = currentIndex >= 0;
  console.log(currentIndex);

  // utilisé pour la clôture de outOfFrame
  const currentIndexRef = useRef(currentIndex);

  function createCards(places) {
    const actualPlaces = [];
    console.log(position);
    for (let i = position; i < position + 10; i += 1) {
      actualPlaces.push(places[i]);
    }
    setNewPlace(actualPlaces);
    setPosition(position + 10);
  }

  useEffect(() => {
    const places = markers.filter((el) => el.type === "musees");
    setAllPLaces(places);
    if (places.length > 0) {
      createCards(places);
    }
  }, [markers]);

  useEffect(() => {
    if (markers.length > 0 && currentIndex === 0) {
      console.log("Hello World");
      createCards(allPlaces);
      setCurrentIndex(9);
      currentIndexRef.current = 9;
      updateCurrentIndex(9);
    }
  }, [currentIndex]);

  // on Memoize nos objets dans un tableau
  const childRefs = useMemo(
    () =>
      Array(allPlaces.length)
        .fill(0)
        .map((i) => React.createRef()),
    [allPlaces]
  );
  console.log(allPlaces);
  console.log(newPlace);

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
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // prise en compte du cas où l'utilisateur cliquerait sur retour avant la disparition de la carte
    // currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    console.log(`currentIndex ${childRefs[currentIndex].current}`);

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
  const getRandomImage = (index) => {
    const image = `https://source.unsplash.com/600x60${index}/?museum}`;
    return image;
  };

  return (
    <div className="swipe-card">
      <InputSelect />
      <div className="cardContainer">
        {newPlace.map((place, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={place.name}
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
        ))}
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
      </div>
      {lastDirection === "left" ? (
        <h2 className="infoText">!isFavorite</h2>
      ) : lastDirection === "right" ? (
        <h2 className="infoText">isFavorite</h2>
      ) : (
        <h2 className="infoText"></h2>
      )}
    </div>
  );
}

export default Advanced;

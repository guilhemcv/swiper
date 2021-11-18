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
  const [currentIndex, setCurrentIndex] = useState(29);
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
    for (let i = position; i < position + 30; i += 1) {
      actualPlaces.push(places[i]);
    }
    setNewPlace(actualPlaces);
    setPosition(position + 30);
  }

  useEffect(() => {
    const places = markers.filter((el) => el.type === "musee");
    setAllPLaces(places);
    if (places.length > 0) {
      createCards(places);
    }
  }, [markers]);

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
  // eslint-disable-next-line consistent-return
  const getRandomImage = (index) => {
    const i = index % 9 || 9;
    const image = `https://source.unsplash.com/600x60${i}/?museum}`;
    return image;
  };

  const addFavoris = () => {
    const actualFavoris = JSON.parse(sessionStorage.getItem("Favoris")) || [];
    const mesFavoris = [...actualFavoris];
    mesFavoris.push(newPlace[currentIndex + 1]);
    let session = true;
    const intervalId = setTimeout(() => {
      if (session) {
        sessionStorage.setItem("Favoris", JSON.stringify(mesFavoris));
      }
      session = false;
    }, 200);
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
        {lastDirection === "right"
          ? addFavoris()
          : console.log(newPlace[currentIndex + 1])}
      </div>
    </div>
  );
}

export default Advanced;

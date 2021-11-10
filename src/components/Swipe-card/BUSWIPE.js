import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeCard.css";
import axios from "axios";

function Advanced() {
  const [newPlace, setNewPlace] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState();

  useEffect(() => {
    getPlace();

    function getPlace() {
      // Requête sur l'API
      axios
        .get(
          "https://data.loire-atlantique.fr/api/records/1.0/search/?dataset=793866443_chateaux-monuments-musees-entreprises-et-artisanat-loire-atlantique&q=&rows=10&exclude.type_1=Artisanat&exclude.type_1=Coll%C3%A9giale&exclude.type_1=Mus%C3%A9e+prive"
        )
        // Extraction des data
        .then((response) => response.data)
        // On utilise ces datas pour mettre à jour le state de nos places
        .then((data) => {
          setNewPlace(data.records);
          setCurrentIndex(data.records.length - 1);
        });
    }
  }, []);
  console.log(newPlace);

  // utilisé pour la clôture de outOfFrame
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(newPlace.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );
  // Mise à jour de l'index après chaque mouvement de carte
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < newPlace.length - 1;

  const canSwipe = currentIndex >= 0;

  // on définit la direction du dernier swipe et on décrémente l'index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // prise en compte du cas où l'utilisateur cliquerait sur retour avec la disparition de la carte
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  console.log(`currentIndex ${childRefs[currentIndex].current}`);
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

  return (
    <div className="swipe-card">
      <div className="cardContainer">
        {newPlace.map((place, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={place.recordid}
            onSwipe={(dir) => swiped(dir, place.fields.raison_sociale, index)}
            onCardLeftScreen={() =>
              outOfFrame(place.fields.raison_sociale, index)
            }
            preventSwipe={["up", "down"]}
          >
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1630348637723-25d84aac0dd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80")`,
              }}
              className="card"
            >
              <h3>{place.fields.raison_sociale}</h3>
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
          Swipe à gauche !
        </button>
        <button
          className="button-back"
          style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          onClick={() => goBack()}
        >
          Annuler swipe!
        </button>
        <button
          className="button-like"
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          Swipe à droite !
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          Vous avez swipe à {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipez pour faire apparaître le bouton annuler
        </h2>
      )}
    </div>
  );
}

export default Advanced;

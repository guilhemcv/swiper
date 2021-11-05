import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeCard.css";
import axios from "axios";

const db = [
  {
    name: "Musée D'art",
    url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
  },
  {
    name: "Musée d'Histoire Naturelle",
    url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
  },
  {
    name: "Musée Jules Verne",
    url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
  },
  {
    name: "Musée du château",
    url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
  },
  {
    name: "Musée des Machines",
    url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
  },
];

function Advanced() {
  const [newPlace, setNewPlace] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(newPlace.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const canGoBack = currentIndex < newPlace.length - 1;
  const canGoBackRef = useRef(canGoBack);
  const canSwipe = currentIndex >= 0;

  useEffect(() => {
    getPlace();

    async function getPlace() {
      // Send the request
      axios
        .get(
          "https://data.loire-atlantique.fr/api/records/1.0/search/?dataset=793866443_chateaux-monuments-musees-entreprises-et-artisanat-loire-atlantique&q=&rows=5&exclude.type_1=Artisanat&exclude.type_1=Coll%C3%A9giale&exclude.type_1=Mus%C3%A9e+prive"
        )
        // Extract the DATA from the received response
        .then((response) => response.data)
        // Use this data to update the state
        .then((data) => {
          setNewPlace(data.records);
          canGoBackRef.current = currentIndex < db.length - 1;
        });
    }
  }, []);
  console.log(newPlace);
  console.log(canGoBack);

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="swipe-card">
      <div className="cardContainer">
        {db.map((place, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={place.recordid}
            onSwipe={(dir) => swiped(dir, place.name, index)}
            onCardLeftScreen={() => outOfFrame(place.name, index)}
            preventSwipe={["up", "down"]}
          >
            <div
              //   style={{ backgroundImage: `url(${place.url})` }}
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80")`,
              }}
              className="card"
            >
              <h3>{place.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          Swipe à gauche !
        </button>
        <button
          style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          onClick={() => goBack()}
        >
          Annuler swipe!
        </button>
        <button
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

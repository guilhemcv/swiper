import React, { useState } from "react";
import Popup from "./Popup";
import "./PopupButton.css";

function PopupLogin(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inputVide">
      <button
        className="inputButton"
        type="button"
        value="Se connecter"
        onClick={togglePopup}
      >
        Se connecter
      </button>
      {isOpen && (
        <Popup
          content={
            <>
              <button className="buttonConnect">Se connecter</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default PopupLogin;

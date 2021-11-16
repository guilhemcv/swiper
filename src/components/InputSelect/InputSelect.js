import React from "react";
import "./InputSelect.css";

function InputSelect() {
  return (
    <div className="select-container">
      <select name="select-categories" id="select-categories">
        <option value="">Choisir une catégorie</option>
        <option value="Musées">Musées</option>
        <option value="Cinémas">Cinémas</option>
        <option value="Restaurants">Restaurants</option>
        <option value="Salles de spectacle">Salles de spectacle</option>
      </select>
    </div>
  );
}

export default InputSelect;

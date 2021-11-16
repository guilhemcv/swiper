import React from "react";
import "./InputSelect.css";

function InputSelect() {
  return (
    <div className="select-container">
      <select name="select-categories" id="select-categories">
        <option value="">Choisir une catégorie</option>
        <option value="musees">Musées</option>
        <option value="cinemas">Cinémas</option>
        <option value="restaurants">Restaurants</option>
        <option value="spectacles">Salles de spectacle</option>
      </select>
    </div>
  );
}

export default InputSelect;

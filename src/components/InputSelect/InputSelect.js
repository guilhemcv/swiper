import React from "react";
import "./InputSelect.css";

function InputSelect(props) {
  return (
    <div className="selectFav-container">
      <select
        name="selectFav-categories"
        id="selectFav-categories"
        value={props.value}
        onChange={props.handleChange}
      >
        <option value="all">Choisir une catégorie :</option>
        <option value="musee">Musées</option>
        <option value="restaurant">Restaurants</option>
        <option value="spectacle">Salles de spectacle</option>
      </select>
    </div>
  );
}

export default InputSelect;

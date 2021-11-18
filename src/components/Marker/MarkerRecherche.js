import React from "react";
import imageRecherche from "../../Assets/Images/Markers/recherche.png";

function MarkerRecherche() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageRecherche}
        width="60px"
        alt="recherche"
      ></img>
    </div>
  );
}

export default MarkerRecherche;

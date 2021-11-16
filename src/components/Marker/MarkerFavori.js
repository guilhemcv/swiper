import React from "react";
import imageFavori from "../../Assets/Images/Markers/favoris.png";

function MarkerFavori() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={imageFavori}
        width="70px"
        alt="favoris"
      ></img>
    </div>
  );
}

export default MarkerFavori;

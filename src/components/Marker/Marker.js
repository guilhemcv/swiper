import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import Popup from "../Popup/Popup";

function Marker(props) {
  const [popup, setPopup] = useState(false);
  // console.log(props);
  // function handleClick(e) {
  //   console.log(props.data.nom);
  //   <Popup props={props.data.nom} />;
  // }
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        className="marker"
        src={props.data.img}
        alt={props.data.type}
        width="35px"
        // onClick={handleClick()}
        onClick={() => setPopup(true)}
      />
      {popup && (
        <div
          style={{
            border: "1px solid black",
            backgroundColor: "white",
            position: "absolute",
            top: 5,
            right: 5,
          }}
        >
          <h2>{props.data.nom}</h2>
          <p>{props.data.commune}</p>
          <p>{props.data.adresse}</p>
          <p>{props.data.places}</p>
          <p>{props.data.telephone}</p>
          <p>{props.data.site_web}</p>
        </div>
      )}
      {/* <Popup
        position={props.data.coordonnees}
        onCloseClick={() => {
          setSelectedMarker(null);
        }}
      >
        <div>
          <h2>{props.data.nom}</h2>
          <p>{props.data.commune}</p>
        </div>
      </Popup> */}
      ;
    </div>
  );
}

export default Marker;

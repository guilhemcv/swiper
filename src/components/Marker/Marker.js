import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import Popup from "../Popup/Popup";

function Marker(props) {
  const [popup, setPopup] = useState(false);
  // console.log(props);

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
        onClick={() => setPopup(true)}
      />
      {popup && (
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
            position: "absolute",
            top: 5,
            right: 5,
            width: "auto",
            textAlign: "center",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem" }}>{props.data.nom}</h2>
          <p style={{ fontSize: "1rem" }}>{props.data.commune}</p>
          <p style={{ fontSize: "0.8rem" }}>{props.data.adresse}</p>
          <p style={{ fontSize: "0.8rem" }}>{props.data.places}</p>
          <p style={{ fontSize: "0.8rem" }}>{props.data.telephone}</p>
          <a
            href={props.data.site_web}
            style={{ fontSize: "0.8rem", color: "blue" }}
          />
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

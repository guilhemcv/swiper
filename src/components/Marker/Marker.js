import React from "react";

function Marker(props) {
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
      />
    </div>
  );
}

export default Marker;

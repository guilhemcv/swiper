import React from "react";

function Marker(props) {
  const [infoWindowOpen, setInfoWindowOpen] = React.useState(false);

  const handleToggleOpen = () => {
    console.log("Marker Clicked");
    setInfoWindowOpen(!infoWindowOpen);
  };

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
        onClick={() => handleToggleOpen()}
      />
    </div>
  );
}

export default Marker;

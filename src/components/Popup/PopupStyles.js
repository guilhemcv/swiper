import { faAlignRight, faBorderNone } from "@fortawesome/free-solid-svg-icons";

// Style du bloc popup
const popupContent = {
  textAlign: "center",
  position: "fixed",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "135px",
  borderRadius: "5px",
  right: "-120px",
  top: "-145px",
  zIndex: 100,
};
// Style du h2 popup
const popupHead = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  textAlign: "center",
  width: "auto",
};

// Style du text popup
const popupText = {
  fontSize: "1rem",
  textAlign: "center",
};

// Style de la redirection du site
const popupSite = {
  color: "blue",
};

// Style de la croix pour fermer le popup
const popupButton = {
  position: "absolute",
  top: "115px",
  left: "185px",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
};

// Style de la fleche du bas du popup
const popupAfter = {
  position: "absolute",
  top: "135px",
  borderLeft: "9px solid transparent",
  borderRight: "9px solid transparent",
  borderTop: "11px solid white",
  textAlign: "center",
};

export {
  popupContent,
  popupHead,
  popupText,
  popupSite,
  popupButton,
  popupAfter,
};

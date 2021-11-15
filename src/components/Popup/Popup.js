import React, { useState } from "react";
import "./Popup.css";

function Popup({ props }) {
  return (
    <div
      style={{
        border: "1px solid black",
        position: "absolute",
        top: 5,
        right: 5,
      }}
    >
      <h2>Nom: {props.data.nom}</h2>
    </div>
  );
}
export default Popup;

//   {
//     (lat = selectedMarker.coordonnees[1]),
//     (lng = selectedMarker.coordonnees[0]);
//    }
//    <div>
//     <h2>{marker.nom}</h2>
//      <p>{marker.commune}</p>
//    </div>

// function Popup(props) {
//   return props.show ? (
//     <div style={{ width: 100, height: 100 }}>
//       <div
//         onClick={props.handleClose}
//         style={{
//           border: "1px solid black",
//           position: "absolute",
//           top: 5,
//           right: 5,
//         }}
//       >
//         X
//       </div>
//       <div>{props.children}</div>
//     </div>
//   ) : null;
// }

// function Popup({ marker }) {
//   {
//     (lat = selectedMarker.coordonnees[1]),
//       (lng = selectedMarker.coordonnees[0]);
//   }

//   <div>
//     <h2>{marker.nom}</h2>
//     <p>{marker.commune}</p>
//   </div>;
// }
// export default Popup;

// function Popup(props) {
//   return props.trigger ? (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={() => props.setTrigger(false)}>
//           close
//         </button>
//         {props.children}
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }

// function Popup(props) {
//   return (
//     <div className="popup-box">
//       <div className="box">
//         <span className="close-icon" onClick={props.handleClose}></span>
//         {props.content}
//       </div>
//     </div>
//   );
// }

import React from "react";
import axios from "axios";

function getParking() {
  axios
    .get(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&rows=20&facet=grp_nom&facet=grp_statut"
    )
    .then((response) => response.data)
    .then((data) => {
      console.log(data.results[0]);
    });
}

export default getParking;
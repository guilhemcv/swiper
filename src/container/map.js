/* eslint-disable import/no-cycle */
import "./map.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import GoogleMapSelection from "../components/GoogleMapSelection/GoogleMapSelection";
import Footer from "../components/Footer/Footer";

function Map() {
  /* useState pour les Fetch des APIS */
  const [parking, setParking] = useState("");
  const [parc, setParc] = useState("");
  const [musee, setMusee] = useState("");
  const [cinema, setCinema] = useState("");
  const [restaurant, setRestaurant] = useState("");

  /* useEffect pour les Fetch des APIS */
  useEffect(() => {
    getParking();
    getParc();
    getMusee();
    getCinema();
    getRestaurant();
  }, []);

  /* Fetch API pour markers parking */
  const getParking = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes&q=&rows=100&facet=libcategorie&facet=libtype&facet=acces_pmr&facet=service_velo&facet=stationnement_velo&facet=stationnement_velo_securise&facet=moyen_paiement"
      )
      .then((response) => {
        const parkingData = response.data.records.map(
          (record) => record.fields.location
        );
        setParking(parkingData);
      });
  };

  /* Fetch API pour markers parc */
  const getParc = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&rows=100&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique"
      )
      .then((response) => {
        const parcData = response.data.records.map(
          (record) => record.fields.location
        );
        setParc(parcData);
      });
  };

  /* Fetch API pour markers musées */
  const getMusee = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Mus%C3%A9e%2C+Ch%C3%A2teau&refine.commune=Nantes"
      )
      .then((response) => {
        const museeData = response.data.records.map(
          (record) => record.fields.geo_shape.coordinates
        );
        setMusee(museeData);
      });
  };

  /* Fetch API pour markers cinémas */
  const getCinema = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Mus%C3%A9e%2C+Ch%C3%A2teau&refine.commune=Nantes"
      )
      .then((response) => {
        const cinemaData = response.data.records.map(
          (record) => record.fields.geo_shape.coordinates
        );
        setCinema(cinemaData);
      });
  };

  /* Fetch API pour markers restaurant */
  const getRestaurant = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=793866443_restaurants-en-loire-atlantique%40loireatlantique&q=&rows=300&facet=type&facet=categorie&facet=commune&facet=modepaiement&facet=departement&refine.commune=NANTES"
      )
      .then((response) => {
        const restaurantData = response.data.records.map(
          (record) => record.geometry.coordinates
        );
        setRestaurant(restaurantData);
      });
  };

  return (
    <div className="map">
      {/* Carte + sélection catégorie --------------------------------- */}
      <div className="selectionAndMap">
        <GoogleMapSelection />
        <GoogleMap
          parking={parking}
          parc={parc}
          musee={musee}
          cinema={cinema}
          restaurant={restaurant}
        />
      </div>
      {/* ---------------------------------------------------- */}

      {/* Footer --------------------------------- */}
      <Footer />
      {/* ---------------------------------------------------- */}
    </div>
  );
}
export default Map;

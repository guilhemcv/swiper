/* eslint-disable consistent-return */
import "./map.css";
import React, { useState, useEffect, useContext } from "react";
import env from "react-dotenv";
import Geocode from "react-geocode";
import axios from "axios";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import GoogleMapSelection from "../components/GoogleMapSelection/GoogleMapSelection";
import Footer from "../components/Footer/Footer";
import LogoContext from "../contexts/LogoContext";

function Map({ markers }) {
  /* State pour input recherche */
  const [adresse, setAdresse] = useState("");
  /* State pour changement de thème de couleur de la map */
  const [changeTheme, setChangeTheme] = useState(false);
  /* State pour définir les lattitudes et longitudes issues de la barre de recherche d'adresse */
  const [latRecherche, setLatRecherche] = useState("");
  const [lngRecherche, setLngRecherche] = useState("");
  /* State pour filtres sur Google Map */
  const [checkboxFilter, setCheckboxFilter] = useState([
    { name: "musee", check: true },
    { name: "cinema", check: true },
    { name: "spectacle", check: true },
    { name: "restaurant", check: true },
    { name: "parc", check: true },
    { name: "sport", check: true },
    { name: "piscine", check: true },
    { name: "parking", check: true },
    { name: "bicloo", check: true },
  ]);
  /**
   * Utilisation du LogoContext pour gérer la couleur du logo en fonction de la page où on est
   */
  const { setLogoColor } = useContext(LogoContext);
  const [mapPoint, setMapPoint] = useState(markers);

  /* Clé Google Map */
  const key = process.env.REACT_APP_API_KEY;

  /**
   * UseEffect pour la couleur du logo et les filtres des markers
   */
  useEffect(() => {
    setLogoColor("logo-black");
    const newMapPoint = [];
    markers.forEach((marker) => {
      checkboxFilter.forEach((filter) => {
        if (filter.check === true && marker.type === filter.name) {
          newMapPoint.push(marker);
        }
      });
    });
    setMapPoint(newMapPoint);
  }, [checkboxFilter, markers]);

  /**
   * Fonction pour filtrer les markers sur la Google map selon la catégorie selectionnée
   * @ params : index
   */
  const updateCheckboxFilter = (index) => {
    const newCheckboxFilter = [...checkboxFilter];
    newCheckboxFilter[index].check = !newCheckboxFilter[index].check;
    setCheckboxFilter(newCheckboxFilter);
  };

  /**
   * Fonction pour appliquer un changement de thème pour la Google Map
   */
  const ChangeColorTheme = () => {
    setChangeTheme(!changeTheme);
  };

  /**
   * Geocodage pour transformer l'adresse renseignée dans le champs de recherche en coordonnées GPS
   */
  const textInput = React.createRef();
  const onClickButton = () => {
    setAdresse(textInput.current.value);
  };
  Geocode.setLanguage("fr");
  Geocode.setApiKey("");
  Geocode.setRegion("fr");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  Geocode.fromAddress(adresse).then(
    (response) => {
      setLatRecherche(response.results[0].geometry.location.lat);
      setLngRecherche(response.results[0].geometry.location.lng);
      console.log(latRecherche, lngRecherche);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <div className="map">
      {/* Carte + sélection catégorie --------------------------------- */}
      <div className="selectionAndMap">
        <GoogleMapSelection
          changeTheme={changeTheme}
          ChangeColorTheme={ChangeColorTheme}
          onClickButton={onClickButton}
          checkboxFilter={checkboxFilter}
          updateCheckboxFilter={updateCheckboxFilter}
          textInput={textInput}
        />
        <GoogleMap
          changeTheme={changeTheme}
          ChangeColorTheme={ChangeColorTheme}
          markers={mapPoint}
          latRecherche={latRecherche}
          lngRecherche={lngRecherche}
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

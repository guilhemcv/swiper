import "./map.css";
import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import Geocode from "react-geocode";
import axios from "axios";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import GoogleMapSelection from "../components/GoogleMapSelection/GoogleMapSelection";
import Footer from "../components/Footer/Footer";
import LogoContext from "../contexts/LogoContext";

function Map() {
  // Utilisation du LogoContext pour gérer la couleur du logo en fonction de la page où on est
  const { setLogoColor } = useContext(LogoContext);

  useEffect(() => {
    setLogoColor("logo-black");
  });

  /* Usestate pour les filtres checkbox */
  const [parkingIsChecked, setParkingIsChecked] = useState(false);
  const [restaurantIsChecked, setRestaurantIsChecked] = useState(false);
  const [sportIsChecked, setSportIsChecked] = useState(false);
  const [parcIsChecked, setParcIsChecked] = useState(false);
  const [cinemaIsChecked, setCinemaIsChecked] = useState(false);
  const [monumentIsChecked, setMonumentIsChecked] = useState(false);
  const [spectacleIsChecked, setSepctacleIsChecked] = useState(false);
  const [piscineIsChecked, setPiscineIsChecked] = useState(false);
  const [biclooIsChecked, setBiclooIsChecked] = useState(false);
  const [margueriteIsChecked, setMargueriteIsChecked] = useState(false);

  /* useState pour les Fetch des APIS */

  /* State pour bouton switch de changement theme google map */
  const [changeTheme, setChangeTheme] = useState(false);
  const ChangeColorTheme = () => {
    setChangeTheme(!changeTheme);
  };

  /* fonction pour changement statut de chaque checkbox */
  const ParkinghandleOnChange = () => {
    setParkingIsChecked(!parkingIsChecked);
  };
  const RestaurantHandleOnChange = () => {
    setRestaurantIsChecked(!restaurantIsChecked);
  };
  const ParcHandleOnChange = () => {
    setParcIsChecked(!parcIsChecked);
  };
  const CinemaHandleOnChange = () => {
    setCinemaIsChecked(!cinemaIsChecked);
  };
  const MonumentHandleOnChange = () => {
    setMonumentIsChecked(!monumentIsChecked);
  };
  const SpectacleHandleOnChange = () => {
    setSepctacleIsChecked(!spectacleIsChecked);
  };
  const PiscineHandleOnChange = () => {
    setPiscineIsChecked(!piscineIsChecked);
  };
  const BiclooHandleOnChange = () => {
    setBiclooIsChecked(!biclooIsChecked);
  };
  const MargueriteHandleOnChange = () => {
    setMargueriteIsChecked(!margueriteIsChecked);
  };
  const SportHandleOnChange = () => {
    setSportIsChecked(!sportIsChecked);
  };

  /* State pour input recherche */
  const [adresse, setAdresse] = useState("");
  const textInput = React.createRef();
  const onClickButton = () => {
    setAdresse(textInput.current.value);
  };

  /* Geocodage pour transformer input barre recherche en coordonnées Lat et Long afin de cibler le lieu sur la carte */
  const [latRecherche, setLatRecherche] = useState("");
  const [lngRecherche, setLngRecherche] = useState("");

  /*   Geocode.setLanguage("fr");
  Geocode.setApiKey(env.REACT_APP_API_KEY);
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
  ); */

  return (
    <div className="map">
      {/* Carte + sélection catégorie --------------------------------- */}
      <div className="selectionAndMap">
        <GoogleMapSelection
          parkingIsChecked={parkingIsChecked}
          ParkinghandleOnChange={ParkinghandleOnChange}
          restaurantIsChecked={restaurantIsChecked}
          RestaurantHandleOnChange={RestaurantHandleOnChange}
          sportIsChecked={sportIsChecked}
          SportHandleOnChange={SportHandleOnChange}
          parcIsChecked={parcIsChecked}
          ParcHandleOnChange={ParcHandleOnChange}
          cinemaIsChecked={cinemaIsChecked}
          CinemaHandleOnChange={CinemaHandleOnChange}
          monumentIsChecked={monumentIsChecked}
          MonumentHandleOnChange={MonumentHandleOnChange}
          spectacleIsChecked={spectacleIsChecked}
          SpectacleHandleOnChange={SpectacleHandleOnChange}
          piscineIsChecked={piscineIsChecked}
          PiscineHandleOnChange={PiscineHandleOnChange}
          biclooIsChecked={biclooIsChecked}
          BiclooHandleOnChange={BiclooHandleOnChange}
          margueriteIsChecked={margueriteIsChecked}
          MargueriteHandleOnChange={MargueriteHandleOnChange}
          changeTheme={changeTheme}
          ChangeColorTheme={ChangeColorTheme}
          onClickButton={onClickButton}
          textInput={textInput}
        />
        <GoogleMap
          parkingIsChecked={parkingIsChecked}
          ParkinghandleOnChange={ParkinghandleOnChange}
          restaurantIsChecked={restaurantIsChecked}
          RestaurantHandleOnChange={RestaurantHandleOnChange}
          sportIsChecked={sportIsChecked}
          SportHandleOnChange={SportHandleOnChange}
          parcIsChecked={parcIsChecked}
          ParcHandleOnChange={ParcHandleOnChange}
          cinemaIsChecked={cinemaIsChecked}
          CinemaHandleOnChange={CinemaHandleOnChange}
          monumentIsChecked={monumentIsChecked}
          MonumentHandleOnChange={MonumentHandleOnChange}
          spectacleIsChecked={spectacleIsChecked}
          SpectacleHandleOnChange={SpectacleHandleOnChange}
          piscineIsChecked={piscineIsChecked}
          PiscineHandleOnChange={PiscineHandleOnChange}
          biclooIsChecked={biclooIsChecked}
          BiclooHandleOnChange={BiclooHandleOnChange}
          margueriteIsChecked={margueriteIsChecked}
          MargueriteHandleOnChange={MargueriteHandleOnChange}
          changeTheme={changeTheme}
          ChangeColorTheme={ChangeColorTheme}
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

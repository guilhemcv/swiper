/* eslint-disable import/no-cycle */
import "./map.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import GoogleMapSelection from "../components/GoogleMapSelection/GoogleMapSelection";
import Footer from "../components/Footer/Footer";

function Map() {
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
  const [parking, setParking] = useState("");
  const [parc, setParc] = useState("");
  const [musee, setMusee] = useState("");
  const [cinema, setCinema] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [spectacle, setSpectacle] = useState("");
  const [piscine, setPiscine] = useState("");
  const [bicloo, setBicloo] = useState("");
  const [marguerite, setMarguerite] = useState("");
  const [sport, setSport] = useState("");

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

  /* useEffect pour les Fetch des APIS */
  useEffect(() => {
    getParking();
    getParc();
    getMusee();
    getCinema();
    getRestaurant();
    getSpectacle();
    getPiscine();
    getBicloo();
    getMarguerite();
    getSport();
  }, []);

  /* Fetch API pour markers parking */
  const getParking = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_lieux-stationnement-nantes-metropole%40nantesmetropole&q=&rows=100&facet=type_usagers"
      )
      .then((response) => {
        const parkingData = response.data.records.map(
          (record) => record.fields.geo_shape.coordinates
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
        "https://data.paysdelaloire.fr/api/records/1.0/search/?dataset=234400034_070-012_offre-touristique-patrimoineculturel-rpdl&q=nantes&rows=100&facet=type&facet=commune&facet=animauxacceptes&facet=accueilgroupe&facet=ouverturealannee&facet=resaenligneouinon&facet=tarifgratuit&facet=departement&refine.commune=NANTES"
      )
      .then((response) => {
        const museeData = response.data.records.map(
          (record) => record.geometry.coordinates
        );
        setMusee(museeData);
      });
  };

  /* Fetch API pour markers cinémas */
  const getCinema = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=cinema&facet=theme&facet=categorie&facet=type&facet=commune&refine.commune=Nantes"
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

  /* Fetch API pour markers salles de spectacles */
  const getSpectacle = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Salle+de+spectacle&refine.commune=Nantes"
      )
      .then((response) => {
        const spectacleData = response.data.records.map(
          (record) => record.fields.geo_shape.coordinates
        );
        setSpectacle(spectacleData);
      });
  };

  /* Fetch API pour markers piscines */
  const getPiscine = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_piscines-nantes-metropole%40nantesmetropole&q=&rows=100&facet=commune&facet=acces_pmr_equipt&facet=bassin_sportif&facet=pataugeoire&facet=toboggan&facet=bassin_apprentissage&facet=plongeoir&facet=solarium&facet=bassin_loisir&facet=accessibilite_handicap&facet=libre_service"
      )
      .then((response) => {
        const piscineData = response.data.records.map(
          (record) => record.geometry.coordinates
        );
        setPiscine(piscineData);
      });
  };
  /* Fetch API pour markers bicloo */
  const getBicloo = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole%40nantesmetropole&q=&rows=200&facet=commune&facet=descriptif"
      )
      .then((response) => {
        const biclooData = response.data.records.map(
          (record) => record.fields.geo_shape.coordinates
        );
        setBicloo(biclooData);
      });
  };
  /* Fetch API pour markers marguerite */
  const getMarguerite = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-marguerite-nantes-metropole-disponibilites&q=&rows=100&facet=sparknom&facet=smodenom&facet=smarqnom&facet=icapacite&facet=bvehielectrique&facet=bdisponiblevehicule"
      )
      .then((response) => {
        const margueriteData = response.data.records.map(
          (record) => record.geometry.coordinates
        );
        setMarguerite(margueriteData);
      });
  };
  /* Fetch API pour markers marguerite */
  const getSport = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Pratique+libre"
      )
      .then((response) => {
        const sportData = response.data.records.map(
          (record) => record.fields.geo_shape.coordinates
        );
        setSport(sportData);
      });
  };

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
          parking={parking}
          parc={parc}
          musee={musee}
          cinema={cinema}
          restaurant={restaurant}
          spectacle={spectacle}
          piscine={piscine}
          bicloo={bicloo}
          marguerite={marguerite}
          sport={sport}
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

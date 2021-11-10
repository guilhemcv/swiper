import "./map.css";
import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import Geocode from "react-geocode";
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
  const [markers, setMarkers] = useState([]);

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
      .then((response) => response.data)
      .then((data) => {
        const dataParkingFinal = () => {
          data.records.forEach((record) => {
            const parkingnettoyes = record.fields;
            const parkingTableauVide = [];
            parkingTableauVide.push({
              type: "parking",
              img: "path",
              imgWidth: "35px",
              places: parkingnettoyes.nb_places,
              commune: parkingnettoyes.commune,
              nom: parkingnettoyes.nom,
              adresse: parkingnettoyes.adresse,
              coordonnees: parkingnettoyes.geo_shape.coordinates,
            });
            const newMarkers = [...markers, ...parkingTableauVide];
            setMarkers(newMarkers);
          });
        };
        dataParkingFinal();
      });
  };
  console.log(markers);

  /* Fetch API pour markers parc */
  const getParc = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&rows=100&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataParcFinal = () => {
          const parctableauvide = [];
          const parcNettoyes = data.records.map((record) => record.fields);
          parcNettoyes.forEach((parcnettoye) => {
            parctableauvide.push({
              commune: parcnettoye.commune,
              nom: parcnettoye.nom_complet,
              adresse: parcnettoye.adresse,
              site_web: parcnettoye.siteweb,
              coordonnees: parcnettoye.location,
              jeux_enfants: parcnettoye.jeux_enfants,
              acces: parcnettoye.acces_transport_commun,
            });
          });
          console.log(parctableauvide);
        };
        dataParcFinal();
      });
  };
  /* Fetch API pour markers musées */
  const getMusee = () => {
    axios
      .get(
        "https://data.paysdelaloire.fr/api/records/1.0/search/?dataset=234400034_070-012_offre-touristique-patrimoineculturel-rpdl&q=nantes&rows=100&facet=type&facet=commune&facet=animauxacceptes&facet=accueilgroupe&facet=ouverturealannee&facet=resaenligneouinon&facet=tarifgratuit&facet=departement&refine.commune=NANTES"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataMuseesFinal = () => {
          const museestableauvide = [];
          const museesNettoyes = data.records.map((record) => record.fields);
          museesNettoyes.forEach((museesnettoye) => {
            museestableauvide.push({
              site: museesnettoye.commweb,
              commune: museesnettoye.commune,
              nom: museesnettoye.nomoffre,
              adresse: museesnettoye.adresse1suite,
              coordonnees: [
                museesnettoye.gmaplongitude0,
                museesnettoye.gmaplatitude0,
              ],
            });
          });
          console.log(museestableauvide);
        };

        dataMuseesFinal();
      });
  };
  /* Fetch API pour markers cinémas */
  const getCinema = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=cinema&facet=theme&facet=categorie&facet=type&facet=commune&refine.commune=Nantes"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataCinemasFinal = () => {
          const cinemastableauvide = [];
          const cinemasNettoyes = data.records.map((record) => record.fields);
          cinemasNettoyes.forEach((cinemasnettoye) => {
            cinemastableauvide.push({
              site: cinemasnettoye.site_web,
              commune: cinemasnettoye.commune,
              nom: cinemasnettoye.nom,
              adresse: cinemasnettoye.adresse,
              telephone: cinemasnettoye.telephone,
              coordonnees: cinemasnettoye.geo_shape.coordinates,
            });
          });
          console.log(cinemastableauvide);
        };

        dataCinemasFinal();
      });
  };
  /* Fetch API pour markers restaurant */
  const getRestaurant = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=793866443_restaurants-en-loire-atlantique%40loireatlantique&q=&rows=300&facet=type&facet=categorie&facet=commune&facet=modepaiement&facet=departement&refine.commune=NANTES"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataRestaurantsFinal = () => {
          const restaurantstableauvide = [];
          const restaurantNettoyes = data.records.map(
            (record) => record.fields
          );
          restaurantNettoyes.forEach((restaurantnettoye) => {
            restaurantstableauvide.push({
              site: restaurantnettoye.commweb,
              commune: restaurantnettoye.commune,
              nom: restaurantnettoye.nomoffre,
              adresse: restaurantnettoye.adresse2,
              telephone: restaurantnettoye.commtel,
              coordonnees: [
                restaurantnettoye.longitude,
                restaurantnettoye.latitude,
              ],
            });
          });
          console.log(restaurantstableauvide);
        };

        dataRestaurantsFinal();
      });
  };
  /* Fetch API pour markers salles de spectacles */
  const getSpectacle = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Salle+de+spectacle&refine.commune=Nantes"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataSpectacleFinal = () => {
          const spectacletableauvide = [];
          const spectacleNettoyes = data.records.map((record) => record.fields);
          spectacleNettoyes.forEach((spectaclenettoye) => {
            spectacletableauvide.push({
              commune: spectaclenettoye.commune,
              nom: spectaclenettoye.nom,
              adresse: spectaclenettoye.adresse,
              coordonnees: spectaclenettoye.geo_shape.coordinates,
            });
          });
          console.log(spectacletableauvide);
        };
        dataSpectacleFinal();
      });
  };
  /* Fetch API pour markers piscines */
  /* Coordonées inversées */
  const getPiscine = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_piscines-nantes-metropole%40nantesmetropole&q=&rows=100&facet=commune&facet=acces_pmr_equipt&facet=bassin_sportif&facet=pataugeoire&facet=toboggan&facet=bassin_apprentissage&facet=plongeoir&facet=solarium&facet=bassin_loisir&facet=accessibilite_handicap&facet=libre_service"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataPiscineFinal = () => {
          const piscinetableauvide = [];
          const piscineNettoyes = data.records.map((record) => record.fields);
          piscineNettoyes.forEach((piscinenettoye) => {
            piscinetableauvide.push({
              commune: piscinenettoye.commune,
              nom: piscinenettoye.nom_complet,
              adresse: piscinenettoye.adresse,
              coordonnees: piscinenettoye.location,
              site_web: piscinenettoye.web,
              descriptif: piscinenettoye.infos_complementaires,
            });
          });
          console.log(piscinetableauvide);
        };
        dataPiscineFinal();
      });
  };
  /* Fetch API pour markers bicloo */
  const getBicloo = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole%40nantesmetropole&q=&rows=200&facet=commune&facet=descriptif"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataBiclooFinal = () => {
          const biclootableauvide = [];
          const biclooNettoyes = data.records.map((record) => record.fields);
          biclooNettoyes.forEach((bicloonettoye) => {
            biclootableauvide.push({
              commune: bicloonettoye.commune,
              nom: bicloonettoye.nom,
              adresse: bicloonettoye.adresse,
              coordonnees: bicloonettoye.geo_shape.coordinates,
              capacite: bicloonettoye.capacite,
            });
          });
          console.log(biclootableauvide);
        };
        dataBiclooFinal();
      });
  };
  /* Fetch API pour markers marguerite */
  /* coordonnées inversées */
  const getMarguerite = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-marguerite-nantes-metropole-disponibilites&q=&rows=100&facet=sparknom&facet=smodenom&facet=smarqnom&facet=icapacite&facet=bvehielectrique&facet=bdisponiblevehicule"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataMargueriteFinal = () => {
          const margueritetableauvide = [];
          const margueriteNettoyes = data.records.map(
            (record) => record.fields
          );
          margueriteNettoyes.forEach((margueritenettoye) => {
            margueritetableauvide.push({
              commune: margueritenettoye.svillnom,
              nom: margueritenettoye.sparknom,
              adresse: margueritenettoye.sparkadresse1,
              coordonnees: margueritenettoye.geo_location,
              options: margueritenettoye.options,
              capacite: margueritenettoye.icapacite,
              description: margueritenettoye.sparkdescription,
            });
          });
          console.log(margueritetableauvide);
        };
        dataMargueriteFinal();
      });
  };
  /* Fetch API pour markers marguerite */
  const getSport = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Pratique+libre"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataSportFinal = () => {
          const sporttableauvide = [];
          const sportNettoyes = data.records.map((record) => record.fields);
          sportNettoyes.forEach((sportnettoye) => {
            sporttableauvide.push({
              commune: sportnettoye.commune,
              nom: sportnettoye.nom_complet,
              adresse: sportnettoye.adresse,
              coordonnees: sportnettoye.geo_shape.coordinates,
              categorie: sportnettoye.type,
              site_web: sportnettoye.url_nantesfr,
            });
          });
          console.log(sporttableauvide);
        };
        dataSportFinal();
      });
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

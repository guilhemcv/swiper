import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Logo from "./components/Logo/Logo";
import Accueil from "./container/accueil";
import Favoris from "./container/favoris";
import Map from "./container/map";
import Swipe from "./container/swipe";
import NotFound from "./components/NotFound/NotFound";
import "./components/MenuBurger/MenuBurger.css";
import LogoContext from "./contexts/LogoContext";
import imageParking from "./Assets/Images/Markers/parking.png";
import imageParcs from "./Assets/Images/Markers/parc.png";
import imageMusee from "./Assets/Images/Markers/musee.png";
import imageCinema from "./Assets/Images/Markers/cinema.png";
import imageRestaurant from "./Assets/Images/Markers/restaurant.png";
import imageSpectacle from "./Assets/Images/Markers/spectacle.png";
import imagePiscine from "./Assets/Images/Markers/piscine.png";
import imageBicloo from "./Assets/Images/Markers/bicloo.png";
import imageSport from "./Assets/Images/Markers/sport.png";

function App() {
  const [isChecked, setIsChecked] = React.useState("");
  const [logoColor, setLogoColor] = React.useState("logo-white");
  const [info, setInfo] = React.useState("");
  const [markers, setMarkers] = useState([]);
  const parkingTableauVide = [];
  const sportTableauVide = [];
  const biclooTableauVide = [];
  const restaurantsTableauVide = [];
  const cinemasTableauVide = [];
  const piscinesTableauVide = [];
  const spectaclesTableauVide = [];
  const museesTableauVide = [];
  const parcTableauVide = [];
  let fetchIndex = 0;

  /* const history = useHistory(); */
  const EcouteInfo = (event) => {
    setInfo(event.target.getAttribute("cible"));
    console.log(info);
    /* history.push("/map"); */
  };

  // On utilise une fonction sur l'état du menu burger pour le fermer lorsqu'on clique sur un lien
  function handleIsChecked() {
    if (isChecked === "") {
      setIsChecked("checked");
    } else {
      setIsChecked("");
    }
  }
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
    getSport();
  }, []);

  const setFullMarkers = () => {
    const newMarkers = [
      ...parkingTableauVide,
      ...parcTableauVide,
      ...museesTableauVide,
      ...cinemasTableauVide,
      ...restaurantsTableauVide,
      ...spectaclesTableauVide,
      ...piscinesTableauVide,
      ...biclooTableauVide,
      ...sportTableauVide,
    ];
    setMarkers(newMarkers);
  };

  /* Fetch pour les parkings */
  const getParking = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_lieux-stationnement-nantes-metropole%40nantesmetropole&q=&rows=100&facet=type_usagers"
      )
      .then((response) => response.data)
      .then((data) => {
        fetchIndex += 1;
        const dataParkingFinal = () => {
          data.records.forEach((record) => {
            const parkingnettoyes = record.fields;
            parkingTableauVide.push({
              commune: parkingnettoyes.commune,
              adresse: parkingnettoyes.adresse,
              nom: parkingnettoyes.nom,
              coordonnees: parkingnettoyes.geo_shape.coordinates,
              type: "parking",
              img: imageParking,
              places: parkingnettoyes.nb_places,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
        };
        dataParkingFinal();
      });
  };
  /* Fetch API pour markers parc */
  const getParc = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&rows=100&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique"
      )
      .then((response) => response.data)
      .then((data) => {
        fetchIndex += 1;
        const dataParcFinal = () => {
          data.records.forEach((record) => {
            const parcnettoyes = record.fields;
            parcTableauVide.push({
              commune: parcnettoyes.commune,
              adresse: parcnettoyes.adresse,
              nom: parcnettoyes.nom_complet,
              coordonnees: [parcnettoyes.location[1], parcnettoyes.location[0]],
              type: "parcs",
              img: imageParcs,
              site_web: parcnettoyes.siteweb,
              jeux_enfants: parcnettoyes.jeux_enfants,
              acces: parcnettoyes.acces_transport_commun,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
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
        fetchIndex += 1;
        const dataMuseeFinal = () => {
          data.records.forEach((record) => {
            const museesnettoyes = record.fields;
            museesTableauVide.push({
              commune: museesnettoyes.commune,
              adresse: museesnettoyes.adresse1suite,
              nom: museesnettoyes.nomoffre,
              coordonnees: [
                museesnettoyes.gmaplongitude0,
                museesnettoyes.gmaplatitude0,
              ],
              type: "musee",
              img: imageMusee,
              site: museesnettoyes.commweb,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
        };
        dataMuseeFinal();
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
        fetchIndex += 1;
        const dataSpectacleFinal = () => {
          data.records.forEach((record) => {
            const spectaclesnettoyes = record.fields;
            spectaclesTableauVide.push({
              commune: spectaclesnettoyes.commune,
              adresse: spectaclesnettoyes.adresse,
              nom: spectaclesnettoyes.nom,
              coordonnees: spectaclesnettoyes.geo_shape.coordinates,
              type: "spectacle",
              img: imageSpectacle,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
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
        fetchIndex += 1;
        const dataPiscineFinal = () => {
          data.records.forEach((record) => {
            const piscinesnettoyes = record.fields;
            piscinesTableauVide.push({
              commune: piscinesnettoyes.commune,
              adresse: piscinesnettoyes.adresse,
              nom: piscinesnettoyes.nom_complet,
              coordonnees: [
                piscinesnettoyes.location[1],
                piscinesnettoyes.location[0],
              ],
              type: "piscine",
              img: imagePiscine,
              site_web: piscinesnettoyes.web,
              descriptif: piscinesnettoyes.infos_complementaires,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
        };
        dataPiscineFinal();
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
        fetchIndex += 1;
        const dataCinemasFinal = () => {
          data.records.forEach((record) => {
            const cinemasnettoyes = record.fields;
            cinemasTableauVide.push({
              site: cinemasnettoyes.site_web,
              commune: cinemasnettoyes.commune,
              nom: cinemasnettoyes.nom,
              adresse: cinemasnettoyes.adresse,
              telephone: cinemasnettoyes.telephone,
              coordonnees: cinemasnettoyes.geo_shape.coordinates,
              type: "cinema",
              img: imageCinema,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
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
        fetchIndex += 1;
        const dataRestaurantsFinal = () => {
          data.records.forEach((record) => {
            const restaurantsnettoyes = record.fields;
            restaurantsTableauVide.push({
              site: restaurantsnettoyes.commweb,
              commune: restaurantsnettoyes.commune,
              nom: restaurantsnettoyes.nomoffre,
              adresse: restaurantsnettoyes.adresse2,
              telephone: restaurantsnettoyes.commtel,
              coordonnees: [
                restaurantsnettoyes.longitude,
                restaurantsnettoyes.latitude,
              ],
              type: "restaurant",
              img: imageRestaurant,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
        };

        dataRestaurantsFinal();
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
        fetchIndex += 1;
        const dataBiclooFinal = () => {
          data.records.forEach((record) => {
            const biclooNettoye = record.fields;
            biclooTableauVide.push({
              commune: biclooNettoye.commune,
              nom: biclooNettoye.nom,
              adresse: biclooNettoye.adresse,
              coordonnees: biclooNettoye.geo_shape.coordinates,
              type: "bicloo",
              img: imageBicloo,
              capacite: biclooNettoye.capacite,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
        };
        dataBiclooFinal();
      });
  };

  /* Fetch API pour markers Sport */
  const getSport = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Pratique+libre"
      )
      .then((response) => response.data)
      .then((data) => {
        fetchIndex += 1;
        const dataSportFinal = () => {
          data.records.forEach((record) => {
            const sportNettoyes = record.fields;
            sportTableauVide.push({
              commune: sportNettoyes.commune,
              nom: sportNettoyes.nom_complet,
              adresse: sportNettoyes.adresse,
              coordonnees: sportNettoyes.geo_shape.coordinates,
              type: "sport",
              img: imageSport,
              categorie: sportNettoyes.categorie,
              site_web: sportNettoyes.url_nantesfr,
            });
          });
          if (fetchIndex === 9) {
            setFullMarkers();
          }
        };
        dataSportFinal();
      });
  };

  return (
    <LogoContext.Provider value={{ logoColor, setLogoColor }}>
      <div className="App">
        <Router>
          <Link to="/">
            <Logo />
          </Link>
          <div>
            <input
              id="burger"
              type="checkbox"
              checked={isChecked}
              readOnly={true}
            />
            <label id="label-burger" htmlFor="burger" onClick={handleIsChecked}>
              <span id="burger-top"></span>
              <span id="burger-middle"></span>
              <span id="burger-bottom"></span>
            </label>
            <nav id="nav-header">
              <ul>
                <li>
                  <Link to="/swipe" className="a" onClick={handleIsChecked}>
                    Swipe
                  </Link>
                </li>
                <li>
                  <Link to="/map" className="a" onClick={handleIsChecked}>
                    Carte
                  </Link>
                </li>
                <li>
                  <Link to="/favoris" className="a" onClick={handleIsChecked}>
                    Favoris
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/swipe" component={Swipe} />
            <Route path="/map">
              <Map markers={markers} EcouteInfo={EcouteInfo} info={info} />
            </Route>
            <Route path="/favoris">
              <Favoris markers={markers} EcouteInfo={EcouteInfo} />
            </Route>
            <Route exact path="/" component={Accueil} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </LogoContext.Provider>
  );
}

export default App;

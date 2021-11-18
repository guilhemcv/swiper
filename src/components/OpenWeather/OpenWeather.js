import React, { useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";

const key = env.REACT_METEO_API_KEY;
function OpenWeather() {
  const [temp, setTemp] = React.useState(null);
  {
    /* initialisation de la temp à null par défaut */
  }
  const [sky, setSky] = React.useState(null);
  {
    /* initialisation description du temps à null par défaut */
  }

  useEffect(() => {
    {
      /* Affichage de l'API */
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Nantes,fr&APPID=${key}&units=metric`
      )
      .then((response) => response.data)
      .then((data) => {
        setTemp(data.main.temp);
        {
          /* mise à jour de la temp en temps réel */
        }
        setSky(data.weather[0].icon);
        {
          /* icône description du temps récupéré */
        }
      });
  }, []);

  return (
    <div className="weather">
      <div className="footer-meteo">
        <div className="footer-meteo-titre">
          <h3>Nantes</h3>
          {temp != null ? <h3>{Math.round(temp)} °</h3> : ""}
          {/* Affichage du temps arrondie a l'entier supp */}
        </div>
        {/* Affichage de l'icône */}
        {sky != null ? (
          <img src={`https://openweathermap.org/img/wn/${sky}@2x.png`} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default OpenWeather;

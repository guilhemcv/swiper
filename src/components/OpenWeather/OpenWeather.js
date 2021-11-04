import React, { useEffect } from "react";
import axios from "axios";
import nuage from "../Footer/icone-de-nuage.png";

function OpenWeather() {
  const [weather, setWeather] = React.useState(true);
  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Nantes,fr&APPID=2aed266dbd13eb51768f8ca86b3086ae&units=metric"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data.temp);
        setWeather(data);
      });
  }, []);

  return (
    weather && (
      <div className="weather">
        <div className="footer-meteo">
          <div className="footer-meteo-titre">
            <h3>Nantes</h3>
            <h3>22°</h3>
            <p>{weather.main.temp}</p>
          </div>
          <img className="footer-image-meteo" src={nuage} alt="logo nuage" />
        </div>
      </div>
    )
  );
}

export default OpenWeather;

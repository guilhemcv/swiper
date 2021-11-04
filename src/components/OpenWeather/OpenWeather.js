import React, { useEffect } from "react";
import axios from "axios";

function OpenWeather() {
  const [temp, setTemp] = React.useState(null);
  const [sky, setSky] = React.useState("soleil");
  const weatherImg = {
    Clouds: "../Footer/icone-de-nuage.png",
    soleil: "",
    pluie: "../Footer/icone-de-pluie.png",
  };

  useEffect(() => {
    console.log("hello");
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Nantes,fr&APPID=2aed266dbd13eb51768f8ca86b3086ae&units=metric"
      )
      .then((response) => response.data)
      .then((data) => {
        setTemp(data.main.temp);
        console.log(temp);
        setSky(data.weather[0].main);
        console.log(data.weather[0]);
      });
  }, []);

  return (
    <div className="weather">
      <div className="footer-meteo">
        <div className="footer-meteo-titre">
          <h3>Nantes</h3>
          {temp != null ? <h3>{temp}</h3> : ""}
        </div>
        <img
          className="footer-image-meteo"
          src={weatherImg[sky]}
          alt="logo nuage"
        />
      </div>
    </div>
  );
}

export default OpenWeather;

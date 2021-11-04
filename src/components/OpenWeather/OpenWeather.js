import React, { useEffect } from "react";
import axios from "axios";
import clouds from "../Footer/icone-de-nuage.png";
import rain from "../Footer/icone-de-pluie.png";
import clearSky from "../Footer/icone-de-soleil.png";

function OpenWeather() {
  const [temp, setTemp] = React.useState(null);
  const [sky, setSky] = React.useState(null);
  const weatherImg = {
    Clouds: { clouds },
    Rain: { rain },
    ClearSky: { clearSky },
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
        setSky(data.weather[0].icon);
        console.log(data.weather[0].icon);
      });
  }, []);

  return (
    <div className="weather">
      <div className="footer-meteo">
        <div className="footer-meteo-titre">
          <h3>Nantes</h3>
          {temp != null ? <h3>{Math.round(temp)} °</h3> : ""}
        </div>
        {sky != null ? (
          <img
            src={`http://openweathermap.org/img/wn/{setSky(
              data.weather[0].icon
            )}@2x.png`}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default OpenWeather;

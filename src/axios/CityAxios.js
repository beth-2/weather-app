import React, { useState } from "react";
import {
  Input,
  CityI,
  CityP,
  TempPE,
  WeatherPE,
  DivC,
} from "../style/Styled.styles";

const api = {
  base: "http://api.openweathermap.org/data/2.5/",
};

const CityAxios = () => {
  const [query, setQuery] = useState("");
  const [cityW, setCityW] = useState(null);

  const search = (evt) => {
    const key = process.env.REACT_APP_LON_LAT_API_KEY;
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setCityW(result);
          console.log(`result`, result);
        });
    }
  };

  return (
    <div>
      <DivC>
        <Input
          placeholder="PLEASE ENTER CITY NAME"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <CityP>
          {cityW?.name} {cityW?.name != undefined ? "," : ""}{" "}
          {cityW?.sys.country}
        </CityP>
        <div>
          {cityW?.main.temp != undefined ? (
            <div>
              <TempPE>{Math.round(cityW?.main.temp)}°C</TempPE>
            </div>
          ) : (
            ""
          )}
        </div>

        <WeatherPE>{cityW?.weather[0].description}</WeatherPE>
        <div>
          {cityW?.weather[0].description === "few clouds" ? (
            <div>
              <CityI className="fad fa-clouds-moon"></CityI>
            </div>
          ) : cityW?.weather[0].description === "clear sky" ? (
            <div>
              <CityI className="fad fa-sun"></CityI>
            </div>
          ) : cityW?.weather[0].description === "scattered clouds" ? (
            <div>
              <CityI className="fad fa-cloud"></CityI>
            </div>
          ) : cityW?.weather[0].description === "broken clouds" ? (
            <div>
              <CityI className="fad fa-clouds"></CityI>
            </div>
          ) : cityW?.weather[0].description === "shower rain" ? (
            <div>
              <CityI className="fad fa-cloud-drizzle"></CityI>
            </div>
          ) : cityW?.weather[0].description === "rain" ? (
            <div>
              <CityI className="fad fa-raindrops"></CityI>
            </div>
          ) : cityW?.weather[0].description === "thunderstorm" ? (
            <div>
              <CityI className="fad fa-thunderstorm"></CityI>
            </div>
          ) : cityW?.weather[0].description === "snow" ? (
            <div>
              <CityI className="fad fa-snowflake"></CityI>
            </div>
          ) : cityW?.weather[0].description === "mist" ? (
            <div>
              <CityI className="fad fa-fog"></CityI>
            </div>
          ) : cityW?.weather[0].description === "overcast clouds" ? (
            <div>
              <CityI className="fad fa-clouds"></CityI>
            </div>
          ) : (
            ""
          )}
        </div>
      </DivC>
    </div>
  );
};

export default CityAxios;

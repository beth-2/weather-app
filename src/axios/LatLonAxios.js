import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { GeoContext } from "../context/GeoContext";
import  { P, WeatherP, TempP, I, ContD }  from '../style/Styled.styles' 

const LatLonAxios = () => {
  const { latitude, longitude } = useContext(GeoContext);
  const [ weather, setWeather ] = useState(null)

  const weatherApi = async (lat, lon) => {
    const key = process.env.REACT_APP_LON_LAT_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}&units=metric`
      );
      console.log(`response.data`, response.data)
      setWeather(response.data);
    } catch(err) {
      alert(err);
    }
  };
 
  useEffect(() => {
    latitude && longitude && weatherApi(latitude, longitude);
  }, [latitude, longitude]);

  

  return (
    <div>
      <ContD>
      <P>{weather?.name}, {weather?.sys.country}</P>
      <WeatherP>{weather?.weather[0].description}</WeatherP>
      <div> { ( weather?.main.temp != undefined ) ? (
        <div>
          <TempP>
            {Math.round(weather?.main.temp)}°C
          </TempP>
        </div>
      ) : ('') } </div>

      <div>{ ( weather?.weather[0].description === 'few clouds' ) ? (
        <div>
          <I className="fad fa-clouds-moon"></I>
          </div>
      ) : ( weather?.weather[0].description === 'clear sky' ) ? (
        <div>
          <I className="fad fa-sun"></I>
        </div>
      ) : ( weather?.weather[0].description === 'scattered clouds' ) ? (
        <div>
          <I className="fad fa-cloud"></I>
        </div>
      ) : ( weather?.weather[0].description === 'broken clouds' ) ? (
        <div>
          <I className="fad fa-clouds"></I>
        </div>
      ) : ( weather?.weather[0].description === 'shower rain' ) ? (
        <div>
          <I className="fad fa-cloud-drizzle"></I>
        </div>
      ) : ( weather?.weather[0].description === 'rain' ) ? (
        <div>
          <I className="fad fa-raindrops"></I>
        </div>
      ) : ( weather?.weather[0].description === 'thunderstorm' ) ? (
        <div>
          <I className="fad fa-thunderstorm"></I>
        </div>
      ) : ( weather?.weather[0].description === 'snow' ) ? (
        <div>
          <I className="fad fa-snowflake"></I>
        </div>
      ) : ( weather?.weather[0].description === 'mist' ) ? (
        <div>
          <I className="fad fa-fog"></I>
        </div>
      ) : ( weather?.weather[0].description === 'overcast clouds' ) ? (
        <div>
          <I className="fad fa-clouds"></I>
        </div>
      ) : ('') }</div> 
      </ContD>
    </div>
  );
};

export default LatLonAxios;
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GeoContext } from "../context/GeoContext";

const LatLonAxios = () => {
  const [weather, setWeather] = useState('');
  const { latitude, longitude } = useContext(GeoContext);

  const weatherApi = async (lat, lon) => {
    const key = process.env.REACT_APP_LON_LAT_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}`
      );
      console.log(`response`, response.data);
      setWeather(response.data);
    } catch(err) {
      alert(err);
    }
  };

  useEffect(() => {
    latitude && longitude && weatherApi(longitude, longitude);
  }, [latitude, longitude]);

  return <div></div>;
};

export default LatLonAxios;
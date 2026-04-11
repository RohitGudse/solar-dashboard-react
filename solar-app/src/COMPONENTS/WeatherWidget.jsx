import React, { useEffect, useState } from "react";
import API from "../api";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    API.get("/users/1").then(res => setWeather(res.data));
  }, []);

  return <div>Weather Data: {weather?.name}</div>;
}

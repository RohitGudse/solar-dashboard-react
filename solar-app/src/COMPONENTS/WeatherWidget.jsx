import React, { useEffect, useState } from "react";
import API from "../api";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/users/1");

      if (!response.data) {
        throw new Error("Weather data not found");
      }

      setWeather(response.data);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("Weather API Error:", err);
      setError("Unable to load weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="weather-widget loading">
        <div className="weather-loader"></div>
        <p>Loading weather information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-widget error">
        <div className="weather-error-icon">⚠️</div>

        <h3>Weather Unavailable</h3>

        <p>{error}</p>

        <button onClick={fetchWeather}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <div>
          <span className="weather-label">
            Current Weather
          </span>

          <h2>
            {weather?.name || "Unknown Location"}
          </h2>
        </div>

        <button
          className="refresh-button"
          onClick={fetchWeather}
          title="Refresh weather"
        >
          ↻
        </button>
      </div>

      <div className="weather-main">
        <div className="weather-icon">
          ☀️
        </div>

        <div className="temperature-section">
          <span className="temperature">
            {weather?.temperature ?? "--"}°
          </span>

          <span className="temperature-unit">
            C
          </span>
        </div>
      </div>

      <div className="weather-description">
        {weather?.description ||
          "Weather information available"}
      </div>

      <div className="weather-details">

        <div className="weather-detail-card">
          <span className="detail-icon">💧</span>

          <div>
            <small>Humidity</small>
            <strong>
              {weather?.humidity ?? "--"}%
            </strong>
          </div>
        </div>

        <div className="weather-detail-card">
          <span className="detail-icon">💨</span>

          <div>
            <small>Wind Speed</small>
            <strong>
              {weather?.windSpeed ?? "--"} km/h
            </strong>
          </div>
        </div>

        <div className="weather-detail-card">
          <span className="detail-icon">🌡️</span>

          <div>
            <small>Feels Like</small>
            <strong>
              {weather?.feelsLike ?? "--"}°
            </strong>
          </div>
        </div>

        <div className="weather-detail-card">
          <span className="detail-icon">☁️</span>

          <div>
            <small>Condition</small>
            <strong>
              {weather?.condition || "Clear"}
            </strong>
          </div>
        </div>

      </div>

      {lastUpdated && (
        <div className="weather-footer">
          Last updated:{" "}
          {lastUpdated.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}
import React, { useEffect, useState } from "react";

const EnergyGraph = () => {
  const [energyData, setEnergyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [averageEnergy, setAverageEnergy] = useState(0);

  useEffect(() => {
    loadEnergyData();
  }, []);

  const loadEnergyData = () => {
    setLoading(true);

    setTimeout(() => {
      const data = [
        { day: "Monday", energy: 72 },
        { day: "Tuesday", energy: 88 },
        { day: "Wednesday", energy: 60 },
        { day: "Thursday", energy: 95 },
        { day: "Friday", energy: 84 },
        { day: "Saturday", energy: 76 },
        { day: "Sunday", energy: 90 },
      ];

      setEnergyData(data);

      const total = data.reduce((sum, item) => sum + item.energy, 0);
      setAverageEnergy((total / data.length).toFixed(1));

      setLoading(false);
    }, 1000);
  };

  const getColor = (value) => {
    if (value >= 90) return "#28a745";
    if (value >= 70) return "#ffc107";
    return "#dc3545";
  };

  const getStatus = (value) => {
    if (value >= 90) return "Excellent";
    if (value >= 70) return "Good";
    return "Low";
  };

  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Weekly Energy Dashboard
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
        }}
      >
        Track your weekly energy performance.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <div>
          <h4>Average Energy</h4>
          <h2>{averageEnergy}%</h2>
        </div>

        <div>
          <h4>Total Days</h4>
          <h2>{energyData.length}</h2>
        </div>

        <div>
          <h4>Status</h4>
          <h2>
            {averageEnergy >= 80 ? "Healthy" : "Needs Improvement"}
          </h2>
        </div>
      </div>

      <button
        onClick={loadEnergyData}
        style={{
          padding: "10px 18px",
          cursor: "pointer",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#007bff",
          color: "white",
          marginBottom: "20px",
        }}
      >
        Refresh Data
      </button>

      {loading ? (
        <h3>Loading Energy Graph...</h3>
      ) : (
        energyData.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <strong>{item.day}</strong>

              <span>
                {item.energy}% ({getStatus(item.energy)})
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: "20px",
                background: "#ddd",
                borderRadius: "20px",
                overflow: "hidden",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  width: `${item.energy}%`,
                  height: "100%",
                  background: getColor(item.energy),
                  transition: "0.5s",
                }}
              ></div>
            </div>
          </div>
        ))
      )}

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <h3>Summary</h3>

        <ul>
          <li>Total Records : {energyData.length}</li>
          <li>Average Energy : {averageEnergy}%</li>
          <li>Highest Energy : 95%</li>
          <li>Lowest Energy : 60%</li>
        </ul>
      </div>
    </div>
  );
};

export default EnergyGraph;
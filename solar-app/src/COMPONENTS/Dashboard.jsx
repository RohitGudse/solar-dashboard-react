import React, { useState, useEffect } from "react";
import SolarStats from "./SolarStats";
import PanelList from "./PanelList";

export default function Dashboard() {

  const [companyName] = useState("Advik Solar");
  const [location] = useState("Mumbai, India");
  const [currentDate, setCurrentDate] = useState("");
  const [totalPanels] = useState(150);
  const [onlinePanels] = useState(145);
  const [offlinePanels] = useState(5);

  useEffect(() => {
    const today = new Date();

    const formattedDate =
      today.toLocaleDateString() +
      " | " +
      today.toLocaleTimeString();

    setCurrentDate(formattedDate);
  }, []);

  const calculateHealth = () => {
    return ((onlinePanels / totalPanels) * 100).toFixed(2);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        backgroundColor: "#f4f8fb",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}

      <div
        style={{
          background: "#0a8754",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h1>{companyName} Dashboard</h1>

        <p>
          <strong>Location :</strong> {location}
        </p>

        <p>
          <strong>Date :</strong> {currentDate}
        </p>
      </div>

      {/* Overview */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>Total Solar Panels</h3>
          <h2>{totalPanels}</h2>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>Online Panels</h3>
          <h2>{onlinePanels}</h2>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>Offline Panels</h3>
          <h2>{offlinePanels}</h2>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>System Health</h3>
          <h2>{calculateHealth()}%</h2>
        </div>
      </div>

      {/* Components */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Solar Statistics</h2>

          <SolarStats />
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Installed Panels</h2>

          <PanelList />
        </div>
      </div>

      {/* Footer */}

      <footer
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#555",
        }}
      >
        <hr />

        <p>© 2026 Advik Solar. All Rights Reserved.</p>

        <p>Renewable Energy Monitoring Dashboard</p>
      </footer>
    </div>
  );
}
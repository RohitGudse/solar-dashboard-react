import React, { useEffect, useState } from "react";

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(80);
  const [charging, setCharging] = useState(false);
  const [status, setStatus] = useState("Good");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      // Browser Battery API (supported in some browsers)
      if ("getBattery" in navigator) {
        navigator.getBattery().then((battery) => {
          const level = Math.round(battery.level * 100);

          setBatteryLevel(level);
          setCharging(battery.charging);

          if (level >= 80) {
            setStatus("Excellent");
          } else if (level >= 50) {
            setStatus("Good");
          } else if (level >= 20) {
            setStatus("Low");
          } else {
            setStatus("Critical");
          }
        });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const batteryColor = () => {
    if (batteryLevel >= 80) return "#22c55e";
    if (batteryLevel >= 50) return "#f59e0b";
    if (batteryLevel >= 20) return "#ef4444";
    return "#b91c1c";
  };

  if (loading) {
    return <h3>Loading Battery Information...</h3>;
  }

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "40px auto",
        padding: "25px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        🔋 Battery Status Dashboard
      </h2>

      <div
        style={{
          width: "100%",
          height: "25px",
          border: "2px solid #ddd",
          borderRadius: "20px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${batteryLevel}%`,
            height: "100%",
            background: batteryColor(),
            transition: "0.5s",
          }}
        ></div>
      </div>

      <h3 style={{ marginTop: "20px" }}>
        Battery Level : {batteryLevel}%
      </h3>

      <p>
        <strong>Charging :</strong>{" "}
        {charging ? "Yes ⚡" : "No"}
      </p>

      <p>
        <strong>Health :</strong> {status}
      </p>

      <p>
        <strong>Last Updated :</strong>{" "}
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};

export default BatteryStatus;
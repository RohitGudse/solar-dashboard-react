import React, { useEffect, useState } from "react";
import API from "../api";

export default function SolarStats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/posts").then(res => setData(res.data.slice(0, 5)));
  }, []);

  return (
    <div>
      <h2>Solar Stats</h2>
      {data.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
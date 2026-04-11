import React from "react";
import SolarStats from "./SolarStats";
import PanelList from "./PanelList";

export default function Dashboard() {
  return (
    <div>
      <h1>Solar Dashboard</h1>
      <SolarStats />
      <PanelList />
    </div>
  );
}
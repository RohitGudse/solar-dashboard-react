import React from "react";
import PanelCard from "./PanelCard";

export default function PanelList() {
  const panels = ["Panel A", "Panel B", "Panel C"];

  return (
    <div>
      <h2>Panels</h2>
      {panels.map((p, i) => (
        <PanelCard key={i} name={p} />
      ))}
    </div>
  );
}
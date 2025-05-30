import React from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Map View placeholder component.
 * The interactive Leaflet map and all related imports have been removed.
 * This card remains to hold space for future map/geo features.
 */
function MapView() {
  return (
    <section className="cv-content-area" aria-label="Map View">
      <div
        className="cv-card"
        style={{
          minHeight: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 className="cv-section-title" style={{ marginBottom: 20 }}>Explore Experiences on the Map</h2>
        <div
          style={{
            width: "100%",
            maxWidth: 780,
            minWidth: 260,
            minHeight: 220,
            borderRadius: 14,
            background: "#fafbfc",
            border: "1.5px solid var(--divider)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1.5px 10px 0 rgba(160,160,160,0.10)",
            color: "#b8b8b8",
            fontSize: "1.17em"
          }}
        >
          {/* Neutral placeholder so UI stays visually balanced */}
          <span>No map is currently displayed.<br />Interactive map features will return soon.</span>
        </div>
      </div>
    </section>
  );
}

export default MapView;

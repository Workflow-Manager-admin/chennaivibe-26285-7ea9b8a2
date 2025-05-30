import React from "react";
import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/**
 * PUBLIC_INTERFACE
 * Map View component – shows a styled, interactive Leaflet map of Chennai within a responsive card.
 * Future experience markers/data layers can be added in the map container.
 */
function MapView() {
  // Coordinates for Chennai: (13.0827° N, 80.2707° E)
  const chennaiPosition = [13.0827, 80.2707];

  return (
    <section className="cv-content-area" aria-label="Map View">
      <div
        className="cv-card"
        style={{
          minHeight: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingBottom: 0,
        }}
      >
        <h2 className="cv-section-title" style={{ marginBottom: 20 }}>Explore Experiences on the Map</h2>
        <div
          style={{
            width: "100%",
            maxWidth: 780,
            minWidth: 260,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 260,
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 1.5px 10px 0 rgba(160,160,160,0.10)",
            border: "1.5px solid var(--divider)",
            background: "#fafbfc",
            marginBottom: 18,
          }}
        >
          <MapContainer
            center={chennaiPosition}
            zoom={12}
            scrollWheelZoom={true}
            style={{
              height: "320px",
              width: "100%",
              minHeight: 220,
            }}
            className="cv-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/" rel="noopener noreferrer" target="_blank">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Future: Add <Marker />, <Popup />, <LayersControl /> etc. here */}
          </MapContainer>
        </div>
        <span style={{ marginTop: 0, color: "#b8b8b8", fontSize: "1em" }}>
          More map features launching soon!
        </span>
      </div>
    </section>
  );
}

export default MapView;

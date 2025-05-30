import React from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Host Dashboard placeholder component.
 * Modern, minimalist dashboard view for hosts.
 */
function HostDashboard() {
  return (
    <section className="cv-content-area" aria-label="Host Dashboard">
      <div className="cv-card" style={{ minHeight: 250 }}>
        <h2 className="cv-section-title">Host Dashboard</h2>
        <div style={{color: "#999", fontSize: "1.12em", margin: "14px 0"}}>
          Manage your experiences, bookings, reviews, and more.<br />
          <span style={{color: "#949494", fontWeight: 500}}>Dashboard features coming soon!</span>
        </div>
        <div
          style={{
            background: "linear-gradient(92deg,#ffe9ba 40%,#f5f7fa 100%)",
            borderRadius: 12,
            marginTop: 25,
            padding: "36px 12px",
            textAlign: "center",
            color: "#333",
            fontWeight: 600,
            fontSize: "1.07em"
          }}
        >
          Host resources | Bookings | Analytics | Reviews
        </div>
      </div>
    </section>
  );
}

export default HostDashboard;

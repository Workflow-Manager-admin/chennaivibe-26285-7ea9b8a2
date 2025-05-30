import React from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Wishlist placeholder component for saved experiences.
 * Responsive, modern card UI.
 */
function Wishlist() {
  return (
    <section className="cv-content-area" aria-label="Wishlist">
      <div className="cv-card" style={{ minHeight: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="cv-section-title">Your Wishlist</h2>
        <div style={{color: "#999", fontSize: "1.15em", textAlign: "center"}}>
          All your saved ChennaiVibe experiences will appear here.<br/>
          <span style={{color: "#e87a41", fontWeight: 500}}>Start discovering and add to your wishlist!</span>
        </div>
      </div>
    </section>
  );
}

export default Wishlist;

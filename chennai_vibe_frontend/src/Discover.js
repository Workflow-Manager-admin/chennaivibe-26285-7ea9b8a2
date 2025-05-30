import React from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Discover (Experiences/Home) placeholder routed component.
 * Showcases search bar, trending cards, and community invite in ChennaiVibe card style.
 */
function Discover() {
  return (
    <section className="cv-content-area" aria-label="Discover Experiences">
      {/* Search Bar Row */}
      <div className="cv-card search-card" role="search">
        <input
          type="text"
          placeholder="Search for experiences, hosts, or places..."
          className="search-input"
          aria-label="Search experiences"
        />
        <button className="cv-btn search-btn">Search</button>
      </div>

      {/* Trending Placeholder */}
      <div className="cv-card" aria-label="Trending Experiences">
        <h2 className="cv-section-title">Trending Experiences in Chennai</h2>
        <div className="experience-grid">
          <div className="cv-card experience-card">
            <div className="experience-img-wrapper" aria-hidden="true" style={{ background: "#e0e0e0" }} />
            <div className="experience-body">
              <div className="experience-header">
                <strong className="experience-title">Sunrise Yoga by Marina Beach</strong>
                <span className="experience-category">Wellness</span>
              </div>
              <div className="experience-location">📍 Marina Beach</div>
              <div className="experience-desc">
                Join a rejuvenating yoga session on the sands of iconic Marina Beach as the sun rises over the Bay of Bengal.
              </div>
              <button className="cv-btn experience-btn" style={{ marginTop: "9px" }}>
                See Details
              </button>
            </div>
          </div>
          <div className="cv-card experience-card">
            <div className="experience-img-wrapper" aria-hidden="true" style={{ background: "#e0e0e0" }} />
            <div className="experience-body">
              <div className="experience-header">
                <strong className="experience-title">Sketch & Sip: Kapaleeshwarar Temple</strong>
                <span className="experience-category">Art & Creativity</span>
              </div>
              <div className="experience-location">📍 Mylapore</div>
              <div className="experience-desc">
                Capture vibrant colors of Chennai’s most famous temple with local artists in outdoor sketching sessions.
              </div>
              <button className="cv-btn experience-btn" style={{ marginTop: "9px" }}>
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Card */}
      <div className="cv-card community-card" aria-label="Community Section">
        <h3 className="cv-section-title" style={{ marginBottom: 10 }}>
          Join the Vibe Community
        </h3>
        <div style={{ fontSize: "1.07em", color: "var(--text-secondary)" }}>
          Share your stories, connect with local hosts, & inspire others! <a href="#">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Discover;

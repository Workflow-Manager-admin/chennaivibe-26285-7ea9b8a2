import React from 'react';
import './App.css';

/**
 * Experience meta data (now with no image fields for clean UI)
 */
const EXPERIENCE_LIST_META = [
  {
    title: 'Sunrise Yoga by Marina Beach',
    desc: 'Join a rejuvenating yoga session on the sands of iconic Marina Beach as the sun rises over the Bay of Bengal.',
    location: 'Marina Beach',
    category: 'Wellness'
  },
  {
    title: 'Sketch & Sip: Kapaleeshwarar Temple',
    desc: 'Capture the vibrant colors of Chennai’s most famous temple while local artists guide you in outdoor sketching sessions.',
    location: 'Mylapore',
    category: 'Art & Creativity'
  },
  {
    title: 'Chettinad Flavours Walk',
    desc: 'Guided street food tour through Sowcarpet’s bustling lanes, tasting local snacks, sweets, and Chettinad delicacies.',
    location: 'Sowcarpet',
    category: 'Culinary'
  }
];

/**
 * Sidebar filter categories (no image or attribution fields)
 */
const FILTER_CATEGORIES = [
  { name: "Art & Creativity" },
  { name: "Culinary" },
  { name: "Wellness" },
  { name: "Culture" }
];

/**
 * Navigation Bar, always visible at the top.
 * Contains branding and primary navigation.
 */
function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <div className="cv-container" style={{ alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        <div className="logo" tabIndex={0}>
          <span className="logo-symbol" />
          ChennaiVibe
        </div>
        <ul className="nav-menu">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Map</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Host Dashboard</a></li>
        </ul>
        <button className="cv-btn" aria-label="Sign In">Sign In</button>
      </div>
    </nav>
  );
}

/**
 * Sidebar (Filters)
 * On large screens, it's shown left. On mobile, it's hidden for space.
 * Use .cv-card for card look and visible section headings.
 */
function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar filters">
      <div className="cv-card filter-card">
        <h2 className="cv-section-title" style={{marginTop: 0, marginBottom: 16}}>Filters</h2>

        {/* Filter: Category */}
        <section className="filter-section" aria-labelledby="filter-cat-title">
          <span id="filter-cat-title" className="filter-title">Category</span>
          <div className="filter-grid">
            {FILTER_CATEGORIES.map(cat => (
              <div key={cat.name} className="filter-cat">
                {/* Neutral placeholder for icon/image */}
                <div
                  className="filter-cat-img"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    background: '#e2e2e2',
                    marginBottom: 1
                  }}
                  aria-hidden="true"
                />
                <span style={{ display: "block", textAlign: "center" }}>{cat.name}</span>
                <span
                  style={{
                    fontSize: "0.75em",
                    color: "#b8b8b8",
                    display: "block",
                    marginTop: 1,
                    minHeight: 15
                  }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </section>

        <hr className="sidebar-divider" />
        
        {/* Filter: Price */}
        <section className="filter-section" aria-labelledby="filter-price-title">
          <span id="filter-price-title" className="filter-title">Price</span>
          <input type="range" min="0" max="1000" step="50" style={{ width: '100%' }} />
        </section>

        <hr className="sidebar-divider" />
        
        {/* Filter: Date */}
        <section className="filter-section" aria-labelledby="filter-date-title">
          <span id="filter-date-title" className="filter-title">Date</span>
          <input type="date" style={{ width: '100%' }} />
        </section>
      </div>
    </aside>
  );
}

function ExperienceCard({ title, desc, location, category }) {
  return (
    <div className="cv-card experience-card">
      {/* Placeholder for the image: keeps space for design consistency */}
      <div className="experience-img-wrapper">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#e0e0e0"
          }}
          aria-hidden="true"
        />
      </div>
      <div className="experience-body">
        <div className="experience-header">
          <strong className="experience-title">{title}</strong>
          <span className="experience-category">{category}</span>
        </div>
        <div className="experience-location">📍 {location}</div>
        <div className="experience-desc">{desc}</div>
        {/* Attribution removed: this blank space maintains visual alignment */}
        <span style={{
          fontSize: ".93em",
          color: "#b4b4b4",
          minHeight: 12,
          display: "inline-block",
          marginBottom: 2
        }} />
        <button className="cv-btn experience-btn" style={{ marginTop: "9px" }}>
          See Details
        </button>
      </div>
    </div>
  );
}

function ContentArea() {
  return (
    <section className="cv-content-area">
      {/* Search Bar */}
      <div className="cv-card search-card">
        <input
          type="text"
          placeholder="Search for experiences, hosts, or places..."
          className="search-input"
          aria-label="Search experiences"
        />
        <button className="cv-btn search-btn">Search</button>
      </div>

      {/* Trending Collections */}
      <div className="cv-card">
        <h2 className="cv-section-title">
          Trending Experiences in Chennai
        </h2>
        <div className="experience-grid">
          {EXPERIENCE_LIST_META.map(exp => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              desc={exp.desc}
              location={exp.location}
              category={exp.category}
            />
          ))}
        </div>
      </div>

      {/* Showcase / Community */}
      <div className="cv-card community-card">
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

function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} ChennaiVibe. All rights reserved.
        &nbsp;|&nbsp;
        <a href="#" style={{ color: "var(--text-secondary)" }}>Instagram</a> | <a href="#" style={{ color: "var(--text-secondary)" }}>Contact</a>
      </span>
    </footer>
  );
}

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="cv-container">
          <Sidebar />
          <ContentArea />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;


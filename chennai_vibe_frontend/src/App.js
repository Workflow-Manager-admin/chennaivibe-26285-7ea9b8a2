import React from 'react';
import './App.css';

/**
 * EXPERIENCE_LIST: Experience content cards with NO images/alt/credits;
 * just titles, descriptions, locations, and categories.
 */
const EXPERIENCE_LIST = [
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
  },
];

// Filter categories as image-free (neutral placeholder icon area or left blank)
const FILTER_CATEGORIES = [
  { name: "Art & Creativity" },
  { name: "Culinary" },
  { name: "Wellness" },
  { name: "Culture" }
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="cv-container" style={{ alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        <div className="logo">
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

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="cv-card filter-card">
        <h3 style={{ marginTop: 0, color: "var(--cv-primary)" }}>Filters</h3>
        <div className="filter-section">
          <span className="filter-title">Category</span>
          <div className="filter-grid">
            {FILTER_CATEGORIES.map(cat => (
              <div key={cat.name} className="filter-cat">
                {/* Placeholder image area to preserve spacing; left blank */}
                <div
                  className="filter-cat-img"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    background: '#eee',
                    marginBottom: 1
                  }}
                  aria-hidden="true"
                />
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="sidebar-divider" />
        <div className="filter-section">
          <span className="filter-title">Price</span>
          <input type="range" min="0" max="1000" step="50" style={{ width: '100%' }} />
        </div>
        <hr className="sidebar-divider" />
        <div className="filter-section">
          <span className="filter-title">Date</span>
          <input type="date" style={{ width: '100%' }} />
        </div>
      </div>
    </aside>
  );
}

function ExperienceCard({ title, desc, location, category }) {
  return (
    <div className="cv-card experience-card">
      <div className="experience-img-wrapper" style={{ background: "#f3f3f3" }}>
        {/* No image or alt text; empty block for consistent layout */}
      </div>
      <div className="experience-body">
        <div className="experience-header">
          <strong className="experience-title">{title}</strong>
          <span className="experience-category">{category}</span>
        </div>
        <div className="experience-location">📍 {location}</div>
        <div className="experience-desc">{desc}</div>
        {/* No credit attribution */}
        <button className="cv-btn experience-btn">See Details</button>
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
          {EXPERIENCE_LIST.map(exp => (
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

import React from 'react';
import './App.css';

/**
 * EXPERIENCE_IMAGES uses copyright-permitted, Chennai-specific images sourced from Wikimedia Commons,
 * each with proper credit and descriptive, local context alt text.
 * Image sources:
 *  - Marina Beach: https://commons.wikimedia.org/wiki/File:Marina_Beach_Chennai_Aug_2022.jpg (CC BY-SA 4.0 - L.vivian.richard)
 *  - Kapaleeshwarar Temple: https://commons.wikimedia.org/wiki/File:Kapaleeshwarar_Temple1.jpg (CC BY-SA 3.0 - Prateek Karandikar)
 *  - Sowcarpet Market: https://commons.wikimedia.org/wiki/File:Sowcarpet_street,_Chennai.jpg (CC BY-SA 3.0 - PlaneMad/Wikimedia)
 */
const EXPERIENCE_IMAGES = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Marina_Beach_Chennai_Aug_2022.jpg',
    title: 'Sunrise Yoga by Marina Beach',
    desc: 'Join a rejuvenating yoga session on the sands of iconic Marina Beach as the sun rises over the Bay of Bengal.',
    location: 'Marina Beach',
    category: 'Wellness',
    alt: 'Yoga session at sunrise on Marina Beach with Chennai city skyline in the background',
    credit: 'Photo by L.vivian.richard, CC BY-SA 4.0, via Wikimedia Commons'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Kapaleeshwarar_Temple1.jpg',
    title: 'Sketch & Sip: Kapaleeshwarar Temple',
    desc: 'Capture the vibrant colors of Chennai’s most famous temple while local artists guide you in outdoor sketching sessions.',
    location: 'Mylapore',
    category: 'Art & Creativity',
    alt: 'View of Kapaleeshwarar Temple gopuram with intricate colorful sculptures in Mylapore, Chennai',
    credit: 'Photo by Prateek Karandikar, CC BY-SA 3.0, via Wikimedia Commons'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Sowcarpet_street%2C_Chennai.jpg',
    title: 'Chettinad Flavours Walk',
    desc: 'Guided street food tour through Sowcarpet’s bustling lanes, tasting local snacks, sweets, and Chettinad delicacies.',
    location: 'Sowcarpet',
    category: 'Culinary',
    alt: 'Busy Sowcarpet street with people, shops, and food vendors in Chennai',
    credit: 'Photo by PlaneMad/Wikimedia, CC BY-SA 3.0'
  },
];

const FILTER_CATEGORIES = [
  { 
    name: "Art & Creativity",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Kapaleeshwarar_Temple1.jpg",
    alt: "Colorful gopuram (temple tower) of Kapaleeshwarar Temple, Mylapore",
    credit: "Photo: Prateek Karandikar, CC BY-SA 3.0"
  },
  {
    name: "Culinary",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Sowcarpet_street%2C_Chennai.jpg",
    alt: "Street food vendors and snack shops in a vibrant Sowcarpet lane, Chennai",
    credit: "Photo: PlaneMad/Wikimedia, CC BY-SA 3.0"
  },
  {
    name: "Wellness",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Marina_Beach_Chennai_Aug_2022.jpg",
    alt: "Early morning scene on Marina Beach with walkers, Chennai",
    credit: "Photo: L.vivian.richard, CC BY-SA 4.0"
  },
  // If a distinct "Culture" photo is not available or copyright-permitted at this time,
  // we retain the original as a fallback, but encourage its replacement when a Chennai-specific image is sourced.
  { 
    name: "Culture",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Chennai_railway_station.jpg",
    alt: "Chennai Central railway station, a historic landmark with red brick frontage",
    credit: "Photo: Unsure of licensing, please verify on Wikimedia Commons or update with known CC photo."
  }
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
                <img src={cat.img} alt={cat.name} className="filter-cat-img" />
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

function ExperienceCard({ image, alt, credit, title, desc, location, category }) {
  return (
    <div className="cv-card experience-card">
      <div className="experience-img-wrapper">
        <img src={image} alt={alt || title} className="experience-img" />
      </div>
      <div className="experience-body">
        <div className="experience-header">
          <strong className="experience-title">{title}</strong>
          <span className="experience-category">{category}</span>
        </div>
        <div className="experience-location">📍 {location}</div>
        <div className="experience-desc">{desc}</div>
        {credit && (
          <div style={{fontSize: "0.85em", color: "var(--text-secondary)", marginTop: 3}}>
            <em>{credit}</em>
          </div>
        )}
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
          {EXPERIENCE_IMAGES.map(exp => (
            <ExperienceCard
              key={exp.title}
              image={exp.url}
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

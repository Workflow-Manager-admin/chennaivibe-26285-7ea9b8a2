import React from 'react';
import './App.css';

/**
 * EXPERIENCE_LIST: Experience content cards with NO images/alt/credits;
 * just titles, descriptions, locations, and categories.
 */
// Wikimedia-licensed (CC BY-SA 4.0 or Public Domain) Chennai image URLs and info for attribution
const EXPERIENCE_LIST = [
  {
    title: 'Sunrise Yoga by Marina Beach',
    desc: 'Join a rejuvenating yoga session on the sands of iconic Marina Beach as the sun rises over the Bay of Bengal.',
    location: 'Marina Beach',
    category: 'Wellness',
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/7/77/Marina_Beach_-_panoramic_view%2C_Chennai.jpg",
      alt: "Panoramic sunrise at Marina Beach, Chennai",
      caption: "Marina Beach at sunrise",
      credit: "Photo: Prateek Rungta, Wikimedia Commons",
      creditLink: "https://commons.wikimedia.org/wiki/File:Marina_Beach_-_panoramic_view,_Chennai.jpg"
    }
  },
  {
    title: 'Sketch & Sip: Kapaleeshwarar Temple',
    desc: 'Capture the vibrant colors of Chennai’s most famous temple while local artists guide you in outdoor sketching sessions.',
    location: 'Mylapore',
    category: 'Art & Creativity',
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kapaleeshwarar_Temple%2C_Chennai.jpg",
      alt: "Kapaleeshwarar Temple, Chennai with colorful gopuram",
      caption: "Kapaleeshwarar Temple",
      credit: "Photo: Mohan S, Wikimedia Commons",
      creditLink: "https://commons.wikimedia.org/wiki/File:Kapaleeshwarar_Temple,_Chennai.jpg"
    }
  },
  {
    title: 'Chettinad Flavours Walk',
    desc: 'Guided street food tour through Sowcarpet’s bustling lanes, tasting local snacks, sweets, and Chettinad delicacies.',
    location: 'Sowcarpet',
    category: 'Culinary',
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Sowcarpet_market_lane_chennai.jpg",
      alt: "Bustling street food and market lane in Sowcarpet, Chennai",
      caption: "Sowcarpet Market, the culinary hub",
      credit: "Photo: Mylittlefinger, Wikimedia Commons",
      creditLink: "https://commons.wikimedia.org/wiki/File:Sowcarpet_market_lane_chennai.jpg"
    }
  },
];


/**
 * FILTER_CATEGORIES: Uses small relevant Chennai images for each filter.
 * Sources: Wikimedia Commons (free use with attribution)
 */
const FILTER_CATEGORIES = [
  {
    name: "Art & Creativity",
    img: {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Chennai_Kalakshetra_2019.jpg",
      alt: "Classical dancers at Kalakshetra, Chennai",
      credit: "Adam Jones, Wikimedia Commons",
      creditLink: "https://commons.wikimedia.org/wiki/File:Chennai_Kalakshetra_2019.jpg"
    }
  },
  {
    name: "Culinary",
    img: {
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Idly_sambar_chutney.jpg",
      alt: "South Indian breakfast with idli, sambar and chutney",
      credit: "R Subramanian, Wikimedia Commons",
      creditLink: "https://commons.wikimedia.org/wiki/File:Idly_sambar_chutney.jpg"
    }
  },
  {
    name: "Wellness",
    img: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Marina_Beach_Morning_yoga.JPG",
      alt: "People doing yoga at sunrise on Marina Beach",
      credit: "Arun Prasad, Wikimedia Commons",
      creditLink: "https://commons.wikimedia.org/wiki/File:Marina_Beach_Morning_yoga.JPG"
    }
  },
  {
    name: "Culture",
    img: {
      url: "https://upload.wikimedia.org/wikipedia/commons/6/60/Mylapore_Temple_Festival_2019.jpg",
      alt: "Mylapore temple festival parade",
      credit: "Adam Jones, Wikimedia Commons",
      creditLink: "https://commons.wikimedia.org/wiki/File:Mylapore_Temple_Festival_2019.jpg"
    }
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
                {cat.img ? (
                  <a
                    href={cat.img.creditLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={0}
                    aria-label={`${cat.name} - View photo credits`}
                    style={{ outline: "none" }}
                  >
                    <img
                      src={cat.img.url}
                      alt={cat.img.alt}
                      className="filter-cat-img"
                      style={{ width: 30, height: 30, objectFit: "cover", borderRadius: 6, marginBottom: 1 }}
                      loading="lazy"
                      title={cat.name}
                    />
                  </a>
                ) : (
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
                )}
                <span style={{ display: "block", textAlign: "center" }}>{cat.name}</span>
                <span
                  style={{
                    fontSize: "0.75em",
                    color: "#a3a3a3",
                    display: "block",
                    marginTop: 1,
                    minHeight: 15
                  }}
                >
                  {cat.img ? (
                    <a
                      href={cat.img.creditLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#b7b7b7", textDecoration: "underline" }}
                      tabIndex={0}
                    >
                      {cat.img.credit}
                    </a>
                  ) : null}
                </span>
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

function ExperienceCard({ title, desc, location, category, image }) {
  return (
    <div className="cv-card experience-card">
      <div className="experience-img-wrapper">
        {image ? (
          <img
            className="experience-img"
            src={image.url}
            alt={image.alt}
            title={image.caption}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        ) : (
          // Fallback in case no image is present
          <div style={{ width: "100%", height: "100%", background: "#e0e0e0" }} />
        )}
      </div>
      <div className="experience-body">
        <div className="experience-header">
          <strong className="experience-title">{title}</strong>
          <span className="experience-category">{category}</span>
        </div>
        <div className="experience-location">📍 {location}</div>
        <div className="experience-desc">{desc}</div>
        {image && (
          <div
            style={{
              fontSize: "0.82em",
              color: "var(--text-secondary)",
              margin: "7px 0 0 0"
            }}
          >
            <span style={{ fontStyle: "italic" }}>
              {image.caption}
            </span>
            <span>
              {" "}
              <a
                href={image.creditLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#888", marginLeft: 8, textDecoration: "underline" }}
                tabIndex={0}
              >
                {image.credit}
              </a>
            </span>
          </div>
        )}
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
          {EXPERIENCE_LIST.map(exp => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              desc={exp.desc}
              location={exp.location}
              category={exp.category}
              image={exp.image}
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

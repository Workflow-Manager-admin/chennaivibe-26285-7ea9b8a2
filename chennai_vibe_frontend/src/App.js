import React from 'react';
import './App.css';

// Demo image data for experiences and sidebar filters
const EXPERIENCE_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // Marina Beach
    title: 'Sunset Beach Yoga',
    desc: 'Join a peaceful yoga session by Marina Beach at golden hour.',
    location: 'Marina Beach',
    category: 'Wellness',
  },
  {
    url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // city rooftop arts
    title: 'Rooftop Art Jam',
    desc: 'Create murals with Chennai artists while admiring the cityscape.',
    location: 'Nungambakkam',
    category: 'Art & Creativity',
  },
  {
    url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // cooking class
    title: 'Chettinad Cooking Class',
    desc: 'Hands-on South Indian cooking experience with a local chef.',
    location: 'Mylapore',
    category: 'Culinary',
  },
];

const FILTER_CATEGORIES = [
  { name: "Art & Creativity", img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=200&q=50" },
  { name: "Culinary", img: "https://images.unsplash.com/photo-1519864600265-abb686776c1c?auto=format&fit=crop&w=200&q=50" },
  { name: "Wellness", img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=200&q=50" },
  { name: "Culture", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=50" },
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

function ExperienceCard({ image, title, desc, location, category }) {
  return (
    <div className="cv-card experience-card">
      <div className="experience-img-wrapper">
        <img src={image} alt={title} className="experience-img" />
      </div>
      <div className="experience-body">
        <div className="experience-header">
          <strong className="experience-title">{title}</strong>
          <span className="experience-category">{category}</span>
        </div>
        <div className="experience-location">📍 {location}</div>
        <div className="experience-desc">{desc}</div>
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

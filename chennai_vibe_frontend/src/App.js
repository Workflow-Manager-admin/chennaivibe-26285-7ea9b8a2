import React, { useEffect, useState } from 'react';
import './App.css';

/**
 * Experience meta data, with image search/keywords for Wikimedia Commons fetch
 */
const EXPERIENCE_LIST_META = [
  {
    title: 'Sunrise Yoga by Marina Beach',
    desc: 'Join a rejuvenating yoga session on the sands of iconic Marina Beach as the sun rises over the Bay of Bengal.',
    location: 'Marina Beach',
    category: 'Wellness',
    imgKeyword: 'Marina Beach sunrise',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sunrise_Marina_Beach_Chennai.jpg/640px-Sunrise_Marina_Beach_Chennai.jpg',
    fallbackAttribution: 'Photo: Samuelraj, CC-BY-SA 4.0 via Wikimedia Commons'
  },
  {
    title: 'Sketch & Sip: Kapaleeshwarar Temple',
    desc: 'Capture the vibrant colors of Chennai’s most famous temple while local artists guide you in outdoor sketching sessions.',
    location: 'Mylapore',
    category: 'Art & Creativity',
    imgKeyword: 'Kapaleeshwarar Temple',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kapaleeshwarar_Temple_Chennai_Gopuram_2018.jpg/640px-Kapaleeshwarar_Temple_Chennai_Gopuram_2018.jpg',
    fallbackAttribution: 'Photo: Sujatha Vempaty, CC-BY-SA 4.0 via Wikimedia Commons'
  },
  {
    title: 'Chettinad Flavours Walk',
    desc: 'Guided street food tour through Sowcarpet’s bustling lanes, tasting local snacks, sweets, and Chettinad delicacies.',
    location: 'Sowcarpet',
    category: 'Culinary',
    imgKeyword: 'Chennai street food',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Samosa_and_sweets_Chennai_street_food.JPG/640px-Samosa_and_sweets_Chennai_street_food.JPG',
    fallbackAttribution: 'Photo: Jugni, CC-BY-SA 4.0 via Wikimedia Commons'
  },
];

/**
 * Sidebar filter categories with Wikimedia Commons search keywords for live thumbnails
 */
const FILTER_CATEGORIES = [
  {
    name: "Art & Creativity",
    imgKeyword: "Chennai mural art",
    fallbackImg: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Metro_Rail_Mural_of_Chennai_Central.jpg/120px-Metro_Rail_Mural_of_Chennai_Central.jpg",
      alt: "Colorful mural on Chennai Metro pillar",
      attribution: "Photo: McKay Savage, CC-BY 2.0, via Wikimedia Commons"
    }
  },
  {
    name: "Culinary",
    imgKeyword: "Chennai banana leaf meal",
    fallbackImg: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Vegetarian_meal_Banana_leaf_Chennai.jpg/140px-Vegetarian_meal_Banana_leaf_Chennai.jpg",
      alt: "Banana leaf meal, Chennai",
      attribution: "Photo: Biswarup Ganguly, CC-BY 3.0, via Wikimedia Commons"
    }
  },
  {
    name: "Wellness",
    imgKeyword: "Yoga Marina Beach Chennai",
    fallbackImg: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/International_Yoga_Day_%40_Marina_Beach_Chennai_-_2_%282016%29.jpg/120px-International_Yoga_Day_%40_Marina_Beach_Chennai_-_2_%282016%29.jpg",
      alt: "Yoga event at Marina Beach, Chennai",
      attribution: "Photo: Indian Navy, GODL-India, via Wikimedia Commons"
    }
  },
  {
    name: "Culture",
    imgKeyword: "Bharatanatyam Chennai",
    fallbackImg: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bharatanatyam_performance_Chennai_Sabha.jpg/120px-Bharatanatyam_performance_Chennai_Sabha.jpg",
      alt: "Bharatanatyam dancer in sabha, Chennai",
      attribution: "Photo: Saranya Ghosh, CC-BY-SA 4.0, via Wikimedia Commons"
    }
  }
];

/**
 * Helper: Wikimedia Commons API search request for thumbnail image and attribution.
 * Returns a {imageUrl, alt, attribution, pageUrl} object or null.
 */
async function fetchWikimediaImage(keyword, minWidth = 320) {
  // Uses Wikimedia Commons API to search for relevant images by keyword
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages|imageinfo&generator=search&gsrlimit=1&gsrsearch=${encodeURIComponent(
    keyword
  )}&piprop=thumbnail|original&pilicense=any&pithumbsize=${minWidth}&iiprop=extmetadata|url`;

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    if (!data.query || !data.query.pages) return null;
    const page = Object.values(data.query.pages)[0];
    // Check for thumbnail and attribution/metadata:
    let imageUrl = page.thumbnail?.source || page.original?.source;
    let alt = page.title;
    let pageUrl = `https://commons.wikimedia.org/wiki/${page.title.replace(/ /g, "_")}`;
    // Attribution from extmetadata, fallback to title
    let attribution =
      page.imageinfo &&
      page.imageinfo[0] &&
      page.imageinfo[0].extmetadata &&
      page.imageinfo[0].extmetadata.Artist
        ? page.imageinfo[0].extmetadata.Artist.value.replace(/(<([^>]+)>)/gi, "")
        : page.title;
    return { imageUrl, alt, attribution, pageUrl };
  } catch (e) {
    return null;
  }
}

/**
 * Hook for fetching Wikimedia images for experiences (with fallback to static for demo or network error)
 */
function useWikimediaImages(experiencesMeta) {
  const [experiences, setExperiences] = useState(
    experiencesMeta.map((x) => ({
      ...x,
      imgFinal: x.fallbackUrl,
      attributionFinal: x.fallbackAttribution,
      attributionUrl: x.fallbackUrl
    }))
  );

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const updated = await Promise.all(
        experiencesMeta.map(async (exp, idx) => {
          const wikidata = await fetchWikimediaImage(exp.imgKeyword, 480);
          if (wikidata && wikidata.imageUrl) {
            return {
              ...exp,
              imgFinal: wikidata.imageUrl,
              attributionFinal: wikidata.attribution,
              attributionUrl: wikidata.pageUrl,
              alt: wikidata.alt
            };
          } else {
            return {
              ...exp,
              imgFinal: exp.fallbackUrl,
              attributionFinal: exp.fallbackAttribution,
              attributionUrl: exp.fallbackUrl,
              alt: exp.title
            };
          }
        })
      );
      if (isMounted) setExperiences(updated);
    })();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, [experiencesMeta]);
  return experiences;
}

/**
 * Hook for filter categories (images by Wikimedia, fallback to static)
 */
function useWikimediaCategoryImages(categoriesMeta) {
  const [categories, setCategories] = useState(
    categoriesMeta.map((cat) => ({
      ...cat,
      img: { ...cat.fallbackImg }
    }))
  );
  useEffect(() => {
    let isMounted = true;
    (async () => {
      const updated = await Promise.all(
        categoriesMeta.map(async (cat) => {
          const wikidata = await fetchWikimediaImage(cat.imgKeyword, 128);
          if (wikidata && wikidata.imageUrl) {
            return {
              ...cat,
              img: {
                url: wikidata.imageUrl,
                alt: wikidata.alt,
                attribution: wikidata.attribution,
                pageUrl: wikidata.pageUrl
              }
            };
          } else {
            return {
              ...cat,
              img: {
                ...cat.fallbackImg,
                pageUrl: cat.fallbackImg.url
              }
            };
          }
        })
      );
      if (isMounted) setCategories(updated);
    })();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, [categoriesMeta]);
  return categories;
}

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
  const categories = useWikimediaCategoryImages(FILTER_CATEGORIES);
  return (
    <aside className="sidebar">
      <div className="cv-card filter-card">
        <h3 style={{ marginTop: 0, color: "var(--cv-primary)" }}>Filters</h3>
        <div className="filter-section">
          <span className="filter-title">Category</span>
          <div className="filter-grid">
            {categories.map(cat => (
              <div key={cat.name} className="filter-cat">
                {cat.img && cat.img.url ?
                  <>
                    <img
                      src={cat.img.url}
                      alt={cat.img.alt || cat.name}
                      className="filter-cat-img"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
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
                      <a
                        href={cat.img.pageUrl || cat.img.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#a3a3a3", textDecoration: "underline dotted", wordBreak: "break-word" }}
                      >credit</a>
                      {cat.img.attribution ? <>&nbsp;&ndash; {cat.img.attribution}</> : null}
                    </span>
                  </>
                  :
                  <>
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
                    <span style={{ display: "block", textAlign: "center" }}>{cat.name}</span>
                    <span style={{
                      fontSize: "0.75em",
                      color: "#a3a3a3",
                      display: "block",
                      marginTop: 1,
                      minHeight: 15
                    }} />
                  </>
                }
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

function ExperienceCard({ title, desc, location, category, imgFinal, alt, attributionFinal, attributionUrl }) {
  return (
    <div className="cv-card experience-card">
      <div className="experience-img-wrapper">
        {imgFinal ? (
          <img
            src={imgFinal}
            alt={alt || `${title} in ${location} - ${category}`}
            className="experience-img"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px 14px 0 0" }}
          />
        ) : (
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
        <span style={{ fontSize: ".93em", color: "#b4b4b4", minHeight: 12, display: "inline-block", marginBottom: 2 }}>
          {attributionFinal && (
            <>
              <a href={attributionUrl || imgFinal} target="_blank" rel="noopener noreferrer" style={{ color: "#b4b4b4", textDecoration: "underline dotted", wordBreak: "break-all" }}>
                credit
              </a> &ndash; {attributionFinal}
            </>
          )}
        </span>
        <button className="cv-btn experience-btn" style={{ marginTop: "9px" }}>
          See Details
        </button>
      </div>
    </div>
  );
}

function ContentArea() {
  // "Real-time" images for the experiences, from Wikimedia live fetch, fallback to demo-stable static images
  const experienceList = useWikimediaImages(EXPERIENCE_LIST_META);

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
          {experienceList.map(exp => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              desc={exp.desc}
              location={exp.location}
              category={exp.category}
              imgFinal={exp.imgFinal}
              attributionFinal={exp.attributionFinal}
              attributionUrl={exp.attributionUrl}
              alt={exp.alt}
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


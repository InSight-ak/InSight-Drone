import React from "react";
import {
  Aperture,
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Compass,
  Crosshair,
  Expand,
  FileCheck,
  Film,
  Home,
  Images,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Pause,
  Plane,
  Play,
  Route,
  ShieldCheck,
  Sparkles,
  TreePine,
  Video,
  X
} from "lucide-react";

const DJI_AIR_3S_URL = "https://www.djiusa.com/products/dji-air-3s-rcn3";

const mediaItems = [
  {
    id: "hero-edit",
    title: "Alaska Sunset Film",
    category: "Finished Edits",
    type: "video",
    src: "/images/Hero-sunset.MP4",
    poster: "/images/sunset-2.JPG",
    description: "A short cinematic aerial edit built around Alaska light and landscape.",
    featured: true
  },
  {
    id: "red-sunset",
    title: "Red Alaska Sunset",
    category: "Photography",
    type: "image",
    src: "/images/sunset-2.JPG",
    description: "Cinematic sunset color captured from the air."
  },
  {
    id: "luxury-real-estate",
    title: "Luxury Real Estate",
    category: "Photography",
    type: "image",
    src: "/images/house-hero.JPG",
    description: "Clean aerial property coverage for listings and marketing."
  },
  {
    id: "sunset-over-alaska",
    title: "Sunset Over Alaska",
    category: "Photography",
    type: "image",
    src: "/images/sunset.JPG",
    description: "Wide scenic imagery with strong natural color."
  },
  {
    id: "mountain-views",
    title: "Alaska Mountain Views",
    category: "Raw Footage",
    type: "image",
    src: "/images/mountains.JPG",
    description: "A raw scenic capture ready for commercial or editorial use."
  },
  {
    id: "moose-wildlife",
    title: "Moose Wildlife Capture",
    category: "Photography",
    type: "image",
    src: "/images/moose.JPG",
    description: "Wildlife imagery captured from a respectful distance."
  }
];

const filters = ["All", "Finished Edits", "Raw Footage", "Photography"];

const services = [
  {
    icon: Home,
    title: "Real Estate",
    text: "Aerial photos and short-form video for homes, cabins, land, and listings.",
    action: "portfolio"
  },
  {
    icon: Sparkles,
    title: "Marketing Content",
    text: "Visuals for tourism pages, reels, websites, campaigns, and local businesses.",
    action: "portfolio"
  },
  {
    icon: ClipboardCheck,
    title: "Property & Site Views",
    text: "Clear overhead context for roofs, land, buildings, and project locations.",
    action: "contact"
  }
];

const focusAreas = [
  { icon: Building2, title: "Property Visuals", text: "Homes, lots, cabins, land, and listings." },
  { icon: Mountain, title: "Tourism Media", text: "Scenic Alaska visuals made for promotion." },
  { icon: TreePine, title: "Outdoor Work", text: "Trails, recreation, events, and adventure." },
  { icon: Route, title: "Site Context", text: "Useful aerial layout views for projects and locations." }
];

function Glass({ children, className = "" }) {
  return <div className={`glass ${className}`}>{children}</div>;
}

function MediaThumb({ item, onOpen }) {
  const videoRef = React.useRef(null);
  const [previewing, setPreviewing] = React.useState(false);

  const startPreview = async () => {
    if (item.type !== "video" || !videoRef.current) return;
    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
      setPreviewing(true);
    } catch {
      setPreviewing(false);
    }
  };

  const stopPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPreviewing(false);
  };

  return (
    <button
      type="button"
      className={`media-card ${item.featured ? "media-card-featured" : ""}`}
      onClick={() => onOpen(item)}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      aria-label={`Open ${item.title}`}
    >
      <div className="media-visual">
        {item.type === "video" ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={item.poster}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img src={item.src} alt="" />
        )}

        <div className="media-shade" />

        <div className="media-topline">
          <span className="media-category">
            {item.type === "video" ? <Film size={13} /> : <Camera size={13} />}
            {item.category}
          </span>
          <span className="expand-chip"><Expand size={15} /></span>
        </div>

        {item.type === "video" && (
          <span className="play-chip">
            {previewing ? <Pause size={17} /> : <Play size={17} fill="currentColor" />}
          </span>
        )}

        <div className="media-copy">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </button>
  );
}

function Lightbox({
  item,
  index,
  total,
  direction,
  isAnimating,
  onClose,
  onNext,
  onPrevious
}) {
  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="lightbox-toolbar">
        <span>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        <button type="button" onClick={onClose} aria-label="Close fullscreen viewer">
          <X size={22} />
        </button>
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous media"
      >
        <ChevronLeft size={30} />
      </button>

      <div
        className={`lightbox-stage slide-${direction} ${isAnimating ? "is-animating" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        {item.type === "video" ? (
          <video key={item.id} controls autoPlay playsInline poster={item.poster}>
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img key={item.id} src={item.src} alt={item.title} />
        )}
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next media"
      >
        <ChevronRight size={30} />
      </button>

      <div className="lightbox-caption">
        <span>{item.category}</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = React.useState("home");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [selectedId, setSelectedId] = React.useState(null);
  const [slideDirection, setSlideDirection] = React.useState("next");
  const [isAnimating, setIsAnimating] = React.useState(false);

  const filteredMedia = React.useMemo(
    () => activeFilter === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const selectedIndex = selectedId
    ? filteredMedia.findIndex((item) => item.id === selectedId)
    : -1;

  const selectedItem = selectedIndex >= 0 ? filteredMedia[selectedIndex] : null;

  const changePage = (nextPage) => {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToContact = () => {
    setPage("home");
    setMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  const openMedia = (item) => {
    setSlideDirection("next");
    setSelectedId(item.id);
  };

  const moveLightbox = React.useCallback((direction) => {
    if (isAnimating || selectedIndex < 0 || filteredMedia.length < 2) return;

    setSlideDirection(direction);
    setIsAnimating(true);

    window.setTimeout(() => {
      const offset = direction === "next" ? 1 : -1;
      const nextIndex = (selectedIndex + offset + filteredMedia.length) % filteredMedia.length;
      setSelectedId(filteredMedia[nextIndex].id);
      setIsAnimating(false);
    }, 180);
  }, [filteredMedia, isAnimating, selectedIndex]);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedId(null);
        setMenuOpen(false);
      }
      if (!selectedItem) return;
      if (event.key === "ArrowRight") moveLightbox("next");
      if (event.key === "ArrowLeft") moveLightbox("previous");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveLightbox, selectedItem]);

  React.useEffect(() => {
    if (!selectedItem) return;

    let startX = 0;
    let currentX = 0;

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
      currentX = startX;
    };

    const handleTouchMove = (event) => {
      currentX = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const distance = startX - currentX;
      if (Math.abs(distance) < 50) return;
      moveLightbox(distance > 0 ? "next" : "previous");
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [moveLightbox, selectedItem]);

  const NavLinks = () => (
    <>
      <button className={page === "home" ? "active" : ""} onClick={() => changePage("home")}>Home</button>
      <button className={page === "services" ? "active" : ""} onClick={() => changePage("services")}>Services</button>
      <button className={page === "about" ? "active" : ""} onClick={() => changePage("about")}>About</button>
      <button className={page === "portfolio" ? "active" : ""} onClick={() => changePage("portfolio")}>Portfolio</button>
      <button onClick={goToContact}>Contact</button>
    </>
  );

  const PortfolioSection = ({ compact = false }) => (
    <section className={`section portfolio-section ${compact ? "portfolio-compact" : ""}`}>
      <div className="section-head split-head">
        <div>
          <span className="kicker">Selected Work</span>
          <h2>{compact ? "A few recent views." : "Finished work, raw clips, and photography."}</h2>
          <p>
            A growing collection of aerial media created across Alaska.
          </p>
        </div>
        {compact && (
          <button className="text-link" onClick={() => changePage("portfolio")}>
            View full portfolio <ArrowRight size={17} />
          </button>
        )}
      </div>

      {!compact && (
        <div className="filter-row" role="tablist" aria-label="Portfolio filters">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => {
                setActiveFilter(filter);
                setSelectedId(null);
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <div className="media-grid">
        {(compact ? mediaItems.slice(0, 4) : filteredMedia).map((item) => (
          <MediaThumb key={item.id} item={item} onOpen={openMedia} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <div className="nav-wrap">
          <button className="brand" onClick={() => changePage("home")}>
            In<span>Sight</span>
            <small>Drone Flights</small>
          </button>

          <nav className="desktop-nav"><NavLinks /></nav>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <button className="quote-button" onClick={goToContact}>Get a Quote</button>
        </div>

        {menuOpen && <nav className="mobile-nav"><NavLinks /></nav>}
      </header>

      <main>
        {page === "home" && (
          <>
            <section className="section hero">
              <div className="hero-copy">
                <span className="eyebrow"><Plane size={15} /> Alaska aerial media</span>
                <h1>A clearer view of <em>Alaska.</em></h1>
                <p>
                  Professional aerial photography and video for property, tourism,
                  business, and outdoor projects.
                </p>
                <div className="hero-actions">
                  <button className="primary-button" onClick={goToContact}>
                    Request a Quote <ArrowRight size={18} />
                  </button>
                  <button className="secondary-button" onClick={() => changePage("portfolio")}>
                    View Portfolio
                  </button>
                </div>
              </div>

              <Glass className="hero-media">
                <video autoPlay muted loop playsInline preload="metadata" poster="/images/sunset-2.JPG">
                  <source src="/images/Hero-sunset.MP4" type="video/mp4" />
                </video>
                <div className="hero-overlay" />
                <div className="hero-label">
                  <span>Featured aerial film</span>
                  <strong>Alaska at golden hour</strong>
                </div>
              </Glass>

              <div className="trust-row">
                <button onClick={() => changePage("portfolio")}><Aperture /><span>4K aerial media</span></button>
                <button onClick={() => changePage("about")}><Compass /><span>Alaska-based</span></button>
                <button onClick={goToContact}><Crosshair /><span>Purposeful angles</span></button>
              </div>
            </section>

            <PortfolioSection compact />

            <section className="section focus-section">
              <div className="section-head">
                <span className="kicker">What I Capture</span>
                <h2>Useful media with a cinematic edge.</h2>
                <p>Built for real projects—not just pretty aerial shots.</p>
              </div>

              <Glass className="focus-grid">
                {focusAreas.map(({ icon: Icon, title, text }) => (
                  <button key={title} onClick={title.includes("Property") || title.includes("Tourism") ? () => changePage("portfolio") : goToContact}>
                    <span className="icon-box"><Icon /></span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </button>
                ))}
              </Glass>
            </section>

            <section className="section credibility-section">
              <div className="section-head">
                <span className="kicker">Credibility</span>
                <h2>Certified, careful, and project-focused.</h2>
                <p>Each flight is planned around airspace, weather, location, and the needs of the job.</p>
              </div>

              <div className="credibility-grid">
                <Glass className="cert-card">
                  <FileCheck size={52} />
                  <h3>FAA Part 107 Certified</h3>
                  <p>Commercial drone work completed with legal, safety-minded flight planning.</p>
                </Glass>

                <Glass className="credential-list">
                  <p><BadgeCheck /> FAA Part 107 Certified</p>
                  <p><Plane /> DJI Air 3S Operator</p>
                  <p><MapPin /> Alaska-based service</p>
                  <p><ShieldCheck /> Safety-focused planning</p>
                </Glass>
              </div>
            </section>

            <section id="contact" className="section contact-section">
              <Glass className="contact-panel">
                <div>
                  <span className="kicker">Contact</span>
                  <h2>Ready to plan a flight?</h2>
                  <p>Send your project type, location, timeline, and what you want captured.</p>

                  <div className="contact-details">
                    <span><Mail /> hello@insightdroneflights.com</span>
                    <span><MapPin /> Serving Alaska</span>
                    <span><ShieldCheck /> FAA Part 107 Certified</span>
                  </div>
                </div>

                <form action="https://formspree.io/f/mvzyvlda" method="POST">
                  <input type="text" name="name" placeholder="Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="text" name="location" placeholder="Project location" />
                  <textarea name="message" placeholder="Tell me about your project..." required />
                  <button type="submit">Send Request</button>
                </form>
              </Glass>
            </section>
          </>
        )}

        {page === "portfolio" && (
          <>
            <section className="section page-intro">
              <span className="kicker">Portfolio</span>
              <h1>Aerial work from across Alaska.</h1>
              <p>Explore finished edits, raw captures, and still photography. Every item opens fullscreen.</p>
            </section>
            <PortfolioSection />
          </>
        )}

        {page === "services" && (
          <section className="section page-section">
            <div className="section-head">
              <span className="kicker">Services</span>
              <h1>Simple aerial services built around the project.</h1>
              <p>Clean deliverables, clear communication, and no inflated sales pitch.</p>
            </div>

            <div className="service-grid">
              {services.map(({ icon: Icon, title, text, action }) => (
                <Glass key={title} className="service-card">
                  <span className="icon-box"><Icon /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button onClick={action === "portfolio" ? () => changePage("portfolio") : goToContact}>
                    Learn more <ArrowRight size={16} />
                  </button>
                </Glass>
              ))}
            </div>
          </section>
        )}

        {page === "about" && (
          <section className="section page-section">
            <Glass className="about-layout">
              <div className="about-image">
                <img src="/images/about-drone.png" alt="Drone pilot in Alaska" />
              </div>

              <div className="about-copy">
                <span className="kicker">About InSight</span>
                <h1>Built from aviation, photography, and curiosity.</h1>
                <p>
                  I grew up around aviation and photography, which shaped how I approach
                  aerial media today. Flight planning, weather, composition, lighting,
                  and visual storytelling all influence the way I prepare for a project.
                </p>
                <p>
                  I earned my FAA Part 107 certification at 16 and continue building
                  hands-on experience through property work, local businesses, tourism,
                  outdoor projects, and creative storytelling across Alaska.
                </p>

                <div className="about-stats">
                  <span><Plane /><strong>Aviation influence</strong></span>
                  <span><Camera /><strong>Photography background</strong></span>
                  <span><BadgeCheck /><strong>FAA certified</strong></span>
                  <span><Mountain /><strong>Alaska focused</strong></span>
                </div>
              </div>
            </Glass>
          </section>
        )}
      </main>

      <footer>
        <div>
          <strong>InSight Drone Flights</strong>
          <span>© 2026 • insightdroneflights.com</span>
        </div>
        <a href={DJI_AIR_3S_URL} target="_blank" rel="noopener noreferrer">
          Flying DJI Air 3S
        </a>
      </footer>

      {selectedItem && (
        <Lightbox
          item={selectedItem}
          index={selectedIndex}
          total={filteredMedia.length}
          direction={slideDirection}
          isAnimating={isAnimating}
          onClose={() => setSelectedId(null)}
          onNext={() => moveLightbox("next")}
          onPrevious={() => moveLightbox("previous")}
        />
      )}
    </div>
  );
}
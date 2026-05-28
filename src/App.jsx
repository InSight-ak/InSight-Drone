import React from "react";
import {
  Aperture,
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Crosshair,
  FileCheck,
  Home,
  Mail,
  MapPin,
  Mountain,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  TreePine,
  X
} from "lucide-react";

const DJI_AIR_3S_URL = "https://www.djiusa.com/products/dji-air-3s-rcn3";

const portfolio = [
  { title: "Sunset Over Alaska", tag: "Cinematic Aerial", image: "/images/sunset.JPG" },
  { title: "Alaska Mountain Views", tag: "Scenic Aerial", image: "/images/mountains.JPG" },
  { title: "Moose Wildlife Capture", tag: "Wildlife", image: "/images/moose.JPG" },
  { title: "Luxury Real Estate", tag: "Property Showcase", image: "/images/house-hero.JPG" },
  { title: "Residential Listing", tag: "Real Estate", image: "/images/house-2.JPG" }
];

const services = [
  {
    icon: <Home />,
    title: "Real Estate",
    text: "Clean aerial photos and short clips that help homes, cabins, land, and listings stand out.",
    href: "#work"
  },
  {
    icon: <Sparkles />,
    title: "Marketing Content",
    text: "Visuals for tourism pages, reels, ads, local businesses, websites, and outdoor brands.",
    href: "#work"
  },
  {
    icon: <ClipboardCheck />,
    title: "Property Checks",
    text: "Roof, land, building, and project overview shots from safer aerial angles.",
    href: "#contact"
  }
];

const projects = [
  { icon: <Building2 />, title: "Property Visuals", text: "Homes, lots, cabins, land, and listings.", href: "#work" },
  { icon: <Mountain />, title: "Tourism Media", text: "Scenic Alaska visuals for promotion.", href: "#work" },
  { icon: <TreePine />, title: "Outdoor Work", text: "Trails, events, recreation, and adventure.", href: "#contact" },
  { icon: <Route />, title: "Site Context", text: "Aerial layout views for projects and locations.", href: "#contact" }
];

function PremiumGlass({ children, className = "" }) {
  return <div className={`premium-glass ${className}`}>{children}</div>;
}

function ImagePanel({ item, className = "", onClick }) {
  return (
    <button
      type="button"
      className={`image-panel ${className}`}
      onClick={() => onClick(item)}
      aria-label={`Open ${item.title}`}
    >
      <img src={item.image} alt={item.title} />
      <div className="image-gradient" />
      <div className="image-tag">{item.tag}</div>
      <div className="image-title">
        <h3>{item.title}</h3>
        <span>Click to expand</span>
      </div>
    </button>
  );
}

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [showAbout, setShowAbout] = React.useState(false);

  React.useEffect(() => {
    const droneOne = document.getElementById("scrollDroneOne");
    const droneTwo = document.getElementById("scrollDroneTwo");

    const moveEffects = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const isMobile = window.innerWidth <= 620;

      if (droneOne) {
        const x = isMobile
          ? progress * (window.innerWidth + 120) - 90
          : progress * (window.innerWidth + 240) - 140;
        const y = Math.sin(progress * 7) * (isMobile ? 18 : 34);
        droneOne.style.transform = `translate(${x}px, ${y}px) rotate(${progress * 300}deg)`;
      }

      if (droneTwo) {
        const x = isMobile
          ? -progress * (window.innerWidth + 140)
          : -progress * (window.innerWidth + 260);
        const y = isMobile
          ? progress * (window.innerHeight + 140)
          : progress * (window.innerHeight + 260);
        droneTwo.style.transform = `translate(${x}px, ${y}px) rotate(${-progress * 360}deg) scale(.78)`;
      }
    };

    window.addEventListener("scroll", moveEffects);
    window.addEventListener("resize", moveEffects);
    moveEffects();

    return () => {
      window.removeEventListener("scroll", moveEffects);
      window.removeEventListener("resize", moveEffects);
    };
  }, []);

  React.useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setShowAbout(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAbout = () => {
    setShowAbout(true);
    goTop();
  };

  const closeAbout = () => {
    setShowAbout(false);
    goTop();
  };

  return (
    <div className="site">
      <div className="scroll-stars" />

      <a
        href={DJI_AIR_3S_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="scroll-drone drone-one"
        id="scrollDroneOne"
        title="DJI Air 3S"
        aria-label="Open DJI Air 3S page"
      />

      <a
        href={DJI_AIR_3S_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="scroll-drone drone-two"
        id="scrollDroneTwo"
        title="DJI Air 3S"
        aria-label="Open DJI Air 3S page"
      />

      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="site-header">
        <div className="nav-wrap">
          <button
            type="button"
            className="brand brand-button"
            onClick={() => {
              setShowAbout(false);
              goTop();
            }}
          >
            In<span>Sight</span>
            <small>Drone Flights</small>
          </button>

          <nav className="nav-links">
            <a href="#services" onClick={() => setShowAbout(false)}>Services</a>
            <button type="button" className="nav-link-button" onClick={openAbout}>About</button>
            <a href="#projects" onClick={() => setShowAbout(false)}>Projects</a>
            <a href="#credibility" onClick={() => setShowAbout(false)}>Credibility</a>
            <a href="#work" onClick={() => setShowAbout(false)}>Work</a>
            <a href="#contact" onClick={() => setShowAbout(false)}>Contact</a>
          </nav>

          <a href="#contact" onClick={() => setShowAbout(false)} className="nav-cta">
            Get a Quote
          </a>
        </div>
      </header>

      <main id="top">
        {showAbout ? (
          <section className="section about-page">
            <PremiumGlass className="about-panel">
              <button type="button" className="about-back" onClick={closeAbout}>
                <X size={18} /> Back Home
              </button>

              <div className="about-layout">
                <div className="section-heading">
                  <p>About Me</p>
                  <h2>Built from aviation, photography, and self-driven work.</h2>
                </div>

                <div className="about-copy">
                  <p>
                    I grew up around aviation and photography, which naturally shaped the way I see the world today.
                    My dad worked as a pilot, and from an early age I was exposed to aviation, weather, navigation,
                    and the unique perspective that comes from seeing landscapes from above.
                  </p>

                  <p>
                    At the same time, my mom’s background in photography introduced me to composition, lighting,
                    storytelling, and the importance of capturing moments in a meaningful way.
                  </p>

                  <p>
                    I’m also a homeschooled student currently taking college courses at 16 years old, which has pushed
                    me to become self-driven and independent.
                  </p>

                  <p>
                    My focus is simple: create professional aerial media with attention to detail, strong communication,
                    and a genuine passion for both aviation and photography.
                  </p>
                </div>

                <div className="about-stat-grid">
                  <a href="#credibility" onClick={closeAbout} className="about-stat">
                    <Plane />
                    <strong>Aviation Influence</strong>
                    <span>Raised around flight, weather, and navigation.</span>
                  </a>

                  <a href="#work" onClick={closeAbout} className="about-stat">
                    <Camera />
                    <strong>Photography Background</strong>
                    <span>Composition, light, and storytelling matter.</span>
                  </a>

                  <a href="#contact" onClick={closeAbout} className="about-stat">
                    <BadgeCheck />
                    <strong>Self-Driven</strong>
                    <span>Homeschooled, 16, and taking college courses.</span>
                  </a>
                </div>
              </div>
            </PremiumGlass>
          </section>
        ) : (
          <>
            <section className="hero section">
              <div className="hero-copy">
                <div className="eyebrow">
                  <Plane size={16} /> DJI Air 3S • Alaska Drone Services
                </div>

                <h1>
                  A sharper view of <span>Alaska.</span>
                </h1>

                <p>
                  Professional aerial media for Alaska's businesses, tourism,
                  outdoor projects, and property visuals.
                </p>

                <div className="hero-actions">
                  <a href="#contact" className="primary-btn">
                    Request a Quote <ArrowRight size={18} />
                  </a>

                  <a href="#work" className="secondary-btn">
                    View Portfolio
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <PremiumGlass className="hero-main">
                  <ImagePanel item={portfolio[0]} onClick={setSelectedImage} />
                </PremiumGlass>

                <PremiumGlass className="hero-card hero-card-right">
                  <ImagePanel item={portfolio[3]} onClick={setSelectedImage} />
                </PremiumGlass>

                <PremiumGlass className="hero-card hero-card-left">
                  <ImagePanel item={portfolio[1]} onClick={setSelectedImage} />
                </PremiumGlass>

                <a href="#work" className="hud-card hud-top">
                  <Aperture size={24} />
                  <span>4K aerial media</span>
                </a>

                <button type="button" className="hud-card hud-middle" onClick={openAbout}>
                  <Compass size={24} />
                  <span>Alaska-based</span>
                </button>

                <a href="#contact" className="hud-card hud-bottom">
                  <Crosshair size={24} />
                  <span>Clean useful angles</span>
                </a>
              </div>
            </section>

            <section id="services" className="section">
              <div className="section-heading center">
                <p>Services</p>
                <h2>Aerial media without the overdone sales pitch.</h2>
              </div>

              <div className="service-grid">
                {services.map((item, index) => (
                  <a
                    href={item.href}
                    key={item.title}
                    className={`premium-glass service-card ${index === 1 ? "offset-card" : ""}`}
                  >
                    <div className="icon-box">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </a>
                ))}
              </div>
            </section>

            <section id="projects" className="section">
              <PremiumGlass className="projects-panel">
                <div className="projects-copy">
                  <div className="section-heading">
                    <p>Projects</p>
                    <h2>What InSight is built to capture.</h2>
                    <span>
                      Focused aerial work for Alaska properties, tourism, and local business media.
                    </span>
                  </div>
                </div>

                <div className="project-orbit">
                  {projects.map((item) => (
                    <a key={item.title} href={item.href} className="project-node">
                      <div className="node-icon">{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </a>
                  ))}
                </div>
              </PremiumGlass>
            </section>

            <section id="credibility" className="section credibility">
              <div>
                <div className="section-heading">
                  <p>Credibility</p>
                  <h2>Certified, careful, and safety-focused.</h2>
                  <span>
                    Commercial drone work is planned around weather, location,
                    airspace, and the needs of the project.
                  </span>
                </div>
              </div>

              <div className="cred-grid">
                <a href="#contact" className="premium-glass cert-card">
                  <FileCheck size={62} />
                  <h3>FAA Part 107 Certified</h3>
                  <p>
                    FAA-certified commercial drone operator providing safe, legal,
                    and professional aerial services across Alaska.
                  </p>
                </a>

                <PremiumGlass className="cred-list">
                  <p><BadgeCheck /> FAA Part 107 Certified</p>
                  <p><Plane /> DJI Air 3S Operator</p>
                  <p><MapPin /> Alaska-based service</p>
                  <p><ShieldCheck /> Safety-minded flight planning</p>
                </PremiumGlass>
              </div>
            </section>

            <section id="work" className="section">
              <div className="section-heading center">
                <p>Portfolio</p>
                <h2>Recent aerial work</h2>
              </div>

              <div className="portfolio-grid">
                <PremiumGlass className="portfolio-large">
                  <ImagePanel item={portfolio[0]} onClick={setSelectedImage} />
                </PremiumGlass>

                <PremiumGlass>
                  <ImagePanel item={portfolio[1]} onClick={setSelectedImage} />
                </PremiumGlass>

                <PremiumGlass>
                  <ImagePanel item={portfolio[2]} onClick={setSelectedImage} />
                </PremiumGlass>

                <PremiumGlass className="portfolio-wide">
                  <ImagePanel item={portfolio[3]} onClick={setSelectedImage} />
                </PremiumGlass>

                <PremiumGlass className="portfolio-wide">
                  <ImagePanel item={portfolio[4]} onClick={setSelectedImage} />
                </PremiumGlass>
              </div>
            </section>

            <section className="section process">
              <div className="section-heading">
                <p>Process</p>
                <h2>Simple from planning to delivery.</h2>
              </div>

              <div className="process-list">
                {[
                  "Tell me the project goal and location",
                  "Plan weather, airspace, and shot timing",
                  "Capture aerial photos or video safely",
                  "Deliver polished files for web, listings, or social"
                ].map((step, index) => (
                  <a href="#contact" key={step} className="premium-glass process-step">
                    <strong>{index + 1}</strong>
                    <p><CheckCircle2 /> {step}</p>
                  </a>
                ))}
              </div>
            </section>

            <section id="contact" className="section">
              <PremiumGlass className="contact-panel">
                <div>
                  <div className="section-heading">
                    <p>Contact</p>
                    <h2>Ready to plan a flight?</h2>
                    <span>Send the project type, location, and details.</span>
                  </div>

                  <div className="contact-list">
                    <p><Mail /> hello@insightdroneflights.com</p>
                    <p><MapPin /> Serving Alaska</p>
                    <p><ShieldCheck /> FAA Part 107 Certified</p>
                  </div>
                </div>

                <form
                  className="contact-form"
                  action="https://formspree.io/f/mvzyvlda"
                  method="POST"
                >
                  <input type="text" name="name" placeholder="Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="text" name="location" placeholder="Location" />
                  <textarea name="message" placeholder="Tell me about your project..." required />
                  <button type="submit">Send Request</button>
                </form>
              </PremiumGlass>
            </section>
          </>
        )}
      </main>

      <footer className="footer">
        © 2026 InSight Drone Flights • insightdroneflights.com
      </footer>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(event) => event.stopPropagation()}
          />

          <div className="lightbox-caption">
            <p>{selectedImage.tag}</p>
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
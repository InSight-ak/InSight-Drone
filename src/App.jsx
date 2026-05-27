import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck,
  Home,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  TreePine,
  Compass,
  Aperture,
  Route,
  Map,
  Crosshair
} from "lucide-react";

const portfolio = [
  { title: "Sunset Over Alaska", tag: "Cinematic Aerial", image: "/images/sunset.JPG" },
  { title: "Alaska Mountain Views", tag: "Scenic Aerial", image: "/images/mountains.JPG" },
  { title: "Moose Wildlife Capture", tag: "Wildlife", image: "/images/moose.JPG" },
  { title: "Luxury Real Estate", tag: "Property Showcase", image: "/images/house-hero.JPG" },
  { title: "Residential Listing", tag: "Real Estate", image: "/images/house-2.JPG" }
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
    >
      <img src={item.image} alt={item.title} />
      <div className="image-gradient" />
      <div className="image-tag">{item.tag}</div>
      <div className="image-title">
        <h3>{item.title}</h3>
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
    const stars = document.getElementById("scrollStars");

    const moveEffects = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      if (droneOne) {
        const x = progress * (window.innerWidth + 220) - 140;
        const y = Math.sin(progress * 8) * 40;
        droneOne.style.transform =
          `translate(${x}px, ${y}px) rotate(${progress * 360}deg)`;
      }

      if (droneTwo) {
        const x = -progress * (window.innerWidth + 260);
        const y = progress * (window.innerHeight + 260);
        droneTwo.style.transform =
          `translate(${x}px, ${y}px) rotate(${-progress * 420}deg) scale(.82)`;
      }

      if (stars) {
        stars.style.opacity = "0.38";
        stars.style.transform = "none";
      }
    };

    window.addEventListener("scroll", moveEffects);
    moveEffects();

    return () => window.removeEventListener("scroll", moveEffects);
  }, []);

  React.useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="site">
      <div className="scroll-stars" id="scrollStars"></div>
      <div className="scroll-drone drone-one" id="scrollDroneOne"></div>
      <div className="scroll-drone drone-two" id="scrollDroneTwo"></div>
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="site-header">
        <div className="nav-wrap">
          <a href="#top" className="brand">
            In<span>Sight</span>
            <small>Drone Flights</small>
          </a>

          <nav className="nav-links">
  <a href="#services">Services</a>
  <button className="nav-link-button" onClick={() => setShowAbout(true)}>
  About
</button>
  <a href="#projects">Projects</a>
  <a href="#credibility">Credibility</a>
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>


          <a href="#contact" className="nav-cta">
            Get a Quote
          </a>
        </div>
      </header>

      <main id="top">
{showAbout ? (
  <section className="section about-page">
    <PremiumGlass className="about-panel">
      <button className="about-back" onClick={() => setShowAbout(false)}>
        ← Back Home
      </button>

      <div className="section-heading">
        <p>About Me</p>
        <h2>Built from aviation, photography, and self-driven work.</h2>
      </div>

      <div className="about-copy">
        <p>
          I grew up around aviation and photography, which naturally shaped the
          way I see the world today. My dad worked as a pilot, and from an
          early age I was exposed to aviation, weather, navigation, and the
          unique perspective that comes from seeing landscapes from above.
        </p>

        <p>
          At the same time, my mom’s background in photography introduced me to
          composition, lighting, storytelling, and the importance of capturing
          moments in a meaningful way.
        </p>

        <p>
          I’m also a homeschooled student currently taking college courses at
          16 years old, which has pushed me to become self-driven and
          independent.
        </p>

        <p>
          My focus is simple: create professional aerial media with attention to
          detail, strong communication, and a genuine passion for both aviation
          and photography.
        </p>
      </div>
    </PremiumGlass>
  </section>
) : (
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

            <PremiumGlass className="hud-card hud-top">
              <Aperture size={24} />
              <span>4K aerial media</span>
            </PremiumGlass>

            <PremiumGlass className="hud-card hud-middle">
              <Compass size={24} />
              <span>Alaska-based</span>
            </PremiumGlass>

            <PremiumGlass className="hud-card hud-bottom">
              <Crosshair size={24} />
              <span>Clean useful angles</span>
            </PremiumGlass>
          </div>
        </section>
      
  <section id="services" className="section">
          <div className="section-heading center">
            <p>Services</p>
            <h2>Aerial media without the overdone sales pitch.</h2>
          </div>

          <div className="service-grid">
            {[
              {
                icon: <Home />,
                title: "Real Estate",
                text: "Aerial photos and short clips that help properties stand out."
              },
              {
                icon: <Sparkles />,
                title: "Marketing Content",
                text: "Clean visuals for tourism, ads, social, and business promotion."
              },
              {
                icon: <ClipboardCheck />,
                title: "Property Checks",
                text: "Roof, land, building, and project overview shots."
              }
            ].map((item, index) => (
              <PremiumGlass
                key={item.title}
                className={`service-card ${index === 1 ? "offset-card" : ""}`}
              >
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </PremiumGlass>
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
              {[
                {
                  icon: <Building2 />,
                  title: "Property Visuals",
                  text: "Homes, lots, cabins, and listings.",
                  className: "project-node"
                },
                {
                  icon: <Mountain />,
                  title: "Tourism Media",
                  text: "Scenic Alaska visuals.",
                  className: "project-node"
                },
                {
                  icon: <TreePine />,
                  title: "Outdoor Work",
                  text: "Trails, events, recreation.",
                  className: "project-node"
                },
                {
                  icon: <Route />,
                  title: "Site Context",
                  text: "Project overview visuals.",
                  className: "project-node"
                }
              ].map((item) => (
                <div key={item.title} className={item.className}>
                  <div className="node-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
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
            <PremiumGlass className="cert-card">
              <FileCheck size={62} />
              <h3>FAA Part 107 Certified</h3>
              <p>
                FAA-certified commercial drone operator providing safe, legal,
                and professional aerial services across Alaska.
              </p>
            </PremiumGlass>

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
              <PremiumGlass key={step} className="process-step">
                <strong>{index + 1}</strong>
                <p><CheckCircle2 /> {step}</p>
              </PremiumGlass>
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
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
              />
              <button type="submit">Send Request</button>
            </form>
          </PremiumGlass>
        </section>
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
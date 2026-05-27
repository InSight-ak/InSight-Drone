import React from "react";
import {
  ArrowRight, BadgeCheck, Building2, CheckCircle2, ClipboardCheck, FileCheck,
  Home, Mail, MapPin, Mountain, Phone, Plane, ShieldCheck, Sparkles, TreePine,
  Compass, Aperture, Route, Map, Crosshair
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

function ImagePanel({ item, className = "" }) {
  return (
    <div className={`image-panel ${className}`}>
      <img src={item.image} alt={item.title} />
      <div className="image-gradient" />
      <div className="image-tag">{item.tag}</div>
      <div className="image-title"><h3>{item.title}</h3></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="site">
      <div className="background-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="site-header">
        <div className="nav-wrap">
          <a href="#top" className="brand">In<span>Sight</span><small>Drone Flights</small></a>
          <nav className="nav-links">
            <a href="#services">Services</a><a href="#projects">Projects</a><a href="#credibility">Credibility</a><a href="#work">Work</a><a href="#contact">Contact</a>
          </nav>
          <a href="mailto:hello@insightdroneflights.com" className="nav-cta">Get a Quote</a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><Plane size={16} /> DJI Air 3S • Alaska Drone Services</div>
            <h1>A sharper view of <span>Alaska.</span></h1>
            <p>Professional aerial media for Alaska's businesses, tourism, outdoor projects, and property visuals.</p>
            <div className="hero-actions">
             <a href="mailto:hello@insightdroneflights.com" className="primary-btn">Request a Quote <ArrowRight size={18} /></a>
              <a href="#work" className="secondary-btn">View Portfolio</a>
            </div>
          </div>

          <div className="hero-visual">
            <PremiumGlass className="hero-main"><ImagePanel item={portfolio[0]} /></PremiumGlass>
            <PremiumGlass className="hero-card hero-card-right"><ImagePanel item={portfolio[3]} /></PremiumGlass>
            <PremiumGlass className="hero-card hero-card-left"><ImagePanel item={portfolio[1]} /></PremiumGlass>
            <PremiumGlass className="hud-card hud-top"><Aperture size={24} /><span>4K aerial media</span></PremiumGlass>
            <PremiumGlass className="hud-card hud-middle"><Compass size={24} /><span>Alaska-based</span></PremiumGlass>
            <PremiumGlass className="hud-card hud-bottom"><Crosshair size={24} /><span>Clean useful angles</span></PremiumGlass>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading center"><p>Services</p><h2>Aerial media without the overdone sales pitch.</h2></div>
          <div className="service-grid">
            {[
              { icon: <Home />, title: "Real Estate", text: "Aerial photos and short clips that help properties stand out with strong first impressions." },
              { icon: <Sparkles />, title: "Marketing Content", text: "Clean visuals for websites, reels, tourism pages, ads, and local business promotion." },
              { icon: <ClipboardCheck />, title: "Property Checks", text: "Roof, land, building, and project overview shots from safer aerial angles." }
            ].map((item, index) => (
              <PremiumGlass key={item.title} className={`service-card ${index === 1 ? "offset-card" : ""}`}>
                <div className="icon-box">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p>
              </PremiumGlass>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <PremiumGlass className="projects-panel">
            <div className="projects-copy">
              <div className="section-heading">
                <p>Projects</p><h2>What InSight is built to capture.</h2>
                <span>Focused aerial work for Alaska properties, outdoor spaces, tourism visuals, and local business media.</span>
              </div>
            </div>
            <div className="project-orbit">
              <div className="orbit-center"><Map size={44} /></div>
              {[
                { icon: <Building2 />, title: "Property Visuals", text: "Homes, lots, cabins, land, and listing visuals.", className: "project-node node-one" },
                { icon: <Mountain />, title: "Tourism Media", text: "Scenic Alaska views for websites and promotion.", className: "project-node node-two" },
                { icon: <TreePine />, title: "Outdoor Work", text: "Trails, events, parks, adventure, and recreation.", className: "project-node node-three" },
                { icon: <Route />, title: "Site Context", text: "Aerial layout views for projects and locations.", className: "project-node node-four" }
              ].map((item) => (
                <div key={item.title} className={item.className}>
                  <div className="node-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p>
                </div>
              ))}
            </div>
          </PremiumGlass>
        </section>

        <section id="credibility" className="section credibility">
          <div>
            <div className="section-heading">
              <p>Credibility</p><h2>Certified, careful, and safety-focused.</h2>
              <span>Commercial drone work is planned around weather, location, airspace, and the needs of the project.</span>
            </div>
          </div>
          <div className="cred-grid">
            <PremiumGlass className="cert-card">
              <FileCheck size={62} /><h3>FAA Part 107 Certified</h3>
              <p>FAA-certified commercial drone operator providing safe, legal, and professional aerial services across Alaska.</p>
            </PremiumGlass>
            <PremiumGlass className="cred-list">
              <p><BadgeCheck /> FAA Part 107 Certified</p><p><Plane /> DJI Air 3S Operator</p><p><MapPin /> Alaska-based service</p><p><ShieldCheck /> Safety-minded flight planning</p>
            </PremiumGlass>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading center"><p>Portfolio</p><h2>Recent aerial work</h2></div>
          <div className="portfolio-grid">
            <PremiumGlass className="portfolio-large"><ImagePanel item={portfolio[0]} /></PremiumGlass>
            <PremiumGlass><ImagePanel item={portfolio[1]} /></PremiumGlass>
            <PremiumGlass><ImagePanel item={portfolio[2]} /></PremiumGlass>
            <PremiumGlass className="portfolio-wide"><ImagePanel item={portfolio[3]} /></PremiumGlass>
            <PremiumGlass className="portfolio-wide"><ImagePanel item={portfolio[4]} /></PremiumGlass>
          </div>
        </section>

        <section className="section process">
          <div className="section-heading"><p>Process</p><h2>Simple from planning to delivery.</h2></div>
          <div className="process-list">
            {["Tell me the project goal and location", "Plan weather, airspace, and shot timing", "Capture aerial photos or video safely", "Deliver polished files for web, listings, or social"].map((step, index) => (
              <PremiumGlass key={step} className="process-step">
                <strong>{index + 1}</strong><p><CheckCircle2 /> {step}</p>
              </PremiumGlass>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <PremiumGlass className="contact-panel">
            <div>
              <div className="section-heading"><p>Contact</p><h2>Ready to plan a flight?</h2><span>Send the project type, location, and what you need captured.</span></div>
              <div className="contact-list">
                <p><Mail /> <a href="mailto:hello@insightdroneflights.com">hello@insightdroneflights.com</a></p><p><Phone /> Add your phone number here</p><p><MapPin /> Serving Alaska</p><p><ShieldCheck /> FAA Part 107 Certified</p>
              </div>
            </div>
           <div className="contact-form">
  <a
    className="form-submit"
    href="mailto:hello@insightdroneflights.com?subject=Drone%20Project%20Request"
  >
    Email InSight Drone Flights
  </a>
</div>
          </PremiumGlass>
        </section>
      </main>

      <footer className="footer">© 2026 InSight Drone Flights • insightdroneflights.com</footer>
    </div>
  );
}

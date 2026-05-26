import React from "react";
import { ArrowRight, BadgeCheck, Building2, Camera, CheckCircle2, ClipboardCheck, FileCheck, Home, Mail, MapPin, Mountain, Phone, Plane, ShieldCheck, Sparkles, TreePine } from "lucide-react";

const portfolio = [
  { title: "Alaska Trail Aerial", tag: "Outdoor / Lifestyle", image: "/images/trail-aerial.jpg" },
  { title: "Cook Inlet Sunset", tag: "Scenic / Landscape", image: "/images/cook-inlet-sunset.jpg" },
  { title: "Sunset Over the Flats", tag: "Cinematic Aerial", image: "/images/sunset-flats.jpg" },
  { title: "Golden Hour Coastline", tag: "Marketing Visual", image: "/images/golden-coastline.jpg" },
  { title: "Neighborhood Aerial", tag: "Property Context", image: "/images/neighborhood-aerial.jpg" },
  { title: "Mountain Sunset", tag: "Scenic Aerial", image: "/images/mountain-sunset.jpg" }
];

function GlassCard({ children, className = "" }) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

function PhotoCard({ item, featured = false }) {
  return (
    <div className={`photo-card ${featured ? "featured-photo" : ""}`}>
      <img src={item.image} alt={item.title} />
      <div className="photo-overlay">
        <p>{item.title}</p>
        <span>{item.tag}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="site">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="header">
        <div className="nav">
          <a href="#top" className="brand"><span>In</span>Sight<small>Drone Flights</small></a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#credibility">Credibility</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="nav-cta">Get a Quote</a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><Plane size={16} /> DJI Air 3S • Alaska Drone Services</div>
            <h1>In<span>Sight</span> from the sky.</h1>
            <p>Professional aerial media for Alaska's businesses, tourism, outdoor projects, and property visuals.</p>
            <div className="hero-actions">
              <a href="#contact" className="primary-btn">Request a Quote <ArrowRight size={19} /></a>
              <a href="#work" className="secondary-btn">View Work</a>
            </div>
          </div>
          <div className="hero-media">
            <GlassCard className="hero-glass"><PhotoCard item={portfolio[2]} featured /></GlassCard>
            <div className="stats-row">
              <GlassCard><strong>4K</strong><span>Video Ready</span></GlassCard>
              <GlassCard><strong>Air 3S</strong><span>DJI Drone</span></GlassCard>
              <GlassCard><strong>AK</strong><span>Local</span></GlassCard>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading center"><p>Services</p><h2>Simple aerial packages.</h2></div>
          <div className="three-grid">
            {[
              { icon: <Home />, title: "Real Estate", text: "Aerial photos and short clips that help properties stand out." },
              { icon: <Sparkles />, title: "Marketing Content", text: "Clean aerial visuals for websites, ads, reels, and brand videos." },
              { icon: <ClipboardCheck />, title: "Inspections", text: "Roof, land, and property views without climbing or guessing." }
            ].map((item) => <GlassCard key={item.title} className="service-card"><div className="icon-box">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></GlassCard>)}
          </div>
        </section>

        <section id="projects" className="section">
          <GlassCard className="projects-panel">
            <div className="section-heading"><p>Projects</p><h2>Projects InSight is built for.</h2><span>These are the main types of drone jobs I’m interested in taking on as I grow the drone side of InSight.</span></div>
            <div className="four-grid">
              {[
                { icon: <Building2 />, title: "Real Estate Listings", text: "Homes, land, cabins, lots, and property overview shots." },
                { icon: <Mountain />, title: "Tourism Visuals", text: "Alaska-style visuals for tourism, websites, and social media." },
                { icon: <TreePine />, title: "Outdoor Projects", text: "Trails, events, adventure content, and location promos." },
                { icon: <ShieldCheck />, title: "Property Checks", text: "Roof views, land views, job sites, and hard-to-reach areas." }
              ].map((item) => <div className="project-card" key={item.title}><div>{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></div>)}
            </div>
          </GlassCard>
        </section>

        <section id="credibility" className="section credibility">
          <div><div className="section-heading"><p>Credibility</p><h2>Certified and safety-focused.</h2><span>InSight Drone Flights is built around safe, legal, and professional drone work. Commercial drone projects are planned around weather, location, airspace, and client needs.</span></div>
            <div className="cred-list"><p><BadgeCheck /> FAA Part 107 Certificate</p><p><Plane /> DJI Air 3S Operator</p><p><MapPin /> Alaska-based drone service</p></div>
          </div>
          <GlassCard className="certificate-card"><FileCheck size={64} /><h3>FAA Part 107 Certificate</h3><p>Certificate image or PDF preview goes here.</p><span>Add your certificate number, issue date, or a downloadable certificate link here.</span></GlassCard>
        </section>

        <section id="work" className="section">
          <div className="section-heading"><p>Portfolio</p><h2>Recent aerial work</h2></div>
          <div className="portfolio-grid">{portfolio.map((item) => <GlassCard key={item.title} className="portfolio-card"><PhotoCard item={item} /><div className="portfolio-text"><h3>{item.title}</h3><p>{item.tag}</p></div></GlassCard>)}</div>
        </section>

        <section id="process" className="section process">
          <div className="section-heading"><p>Process</p><h2>Easy from quote to delivery.</h2><span>InSight Drone Flights keeps the process simple: plan the shot, fly safely, capture clean visuals, and deliver polished files.</span></div>
          <div className="steps">{["Tell us the location and goal", "Plan weather, airspace, and timing", "Capture aerial photos or video", "Deliver edited files for your project"].map((step, index) => <GlassCard key={step} className="step-card"><strong>{index + 1}</strong><p><CheckCircle2 /> {step}</p></GlassCard>)}</div>
        </section>

        <section id="contact" className="section contact">
          <GlassCard className="contact-panel">
            <div><div className="section-heading"><p>Contact</p><h2>Ready to plan a flight?</h2><span>Send the project type, location, and what you need captured.</span></div>
              <div className="contact-list"><p><Mail /> hello@insightdroneflights.com</p><p><Phone /> Add your phone number here</p><p><MapPin /> Serving Alaska</p><p><ShieldCheck /> FAA Part 107 Ready</p></div>
            </div>
            <form className="contact-form"><input placeholder="Name" /><input placeholder="Email" /><input placeholder="Project location" /><textarea placeholder="What do you need filmed or photographed?" /><button type="button">Send Request</button></form>
          </GlassCard>
        </section>
      </main>

      <footer className="footer">© 2026 InSight Drone Flights • insightdroneflights.com</footer>
    </div>
  );
}

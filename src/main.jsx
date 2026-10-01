import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Check,
  Zap,
  Layers3,
  TrendingUp,
  Search,
  Target,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import "./styles.css";

const services = [
  { icon: Search, title: "Visibility Strategy", text: "Align SEO, content and search behavior so people can discover your offer faster." },
  { icon: Target, title: "Performance Campaigns", text: "Build focused acquisition systems around qualified demand and measurable ROI." },
  { icon: Layers3, title: "Experience Design", text: "Create landing pages and journeys that lower friction and improve action rates." },
  { icon: TrendingUp, title: "Growth Optimisation", text: "Learn from the data, test faster and improve the parts of the funnel that matter most." }
];

const process = [
  ["01", "Diagnose", "We review your current funnel, positioning and digital signals to find the biggest opportunity."],
  ["02", "Design", "We shape the offer, message and user flow around what is most likely to convert."],
  ["03", "Launch", "We build and ship a focused experience with tracking and clear performance benchmarks."],
  ["04", "Optimize", "We monitor what matters, iterate quickly and improve the system over time."]
];

const plans = [
  ["Launch", "For businesses ready to build a smarter foundation.", ["Landing page review", "SEO opportunity map", "Marketing funnel audit", "Monthly reporting"]],
  ["Accelerate", "For teams ready to scale acquisition and conversion.", ["Full-funnel strategy", "Paid media optimization", "Creative testing system", "Bi-weekly growth sprints"]],
  ["Scale", "For ambitious brands needing a long-term growth partner.", ["Multi-channel growth planning", "Analytics dashboards", "Conversion experiments", "Dedicated strategic support"]]
];

const faqs = [
  ["What does a growth sprint include?", "Every sprint is built around a specific objective, a clear hypothesis and measurable outcomes. We execute, review the signal and improve fast."],
  ["Can you improve an existing website?", "Yes. We can audit current pages, identify friction and improve conversion opportunities without redesigning everything from scratch."],
  ["Do you manage paid media campaigns?", "Yes. We can plan, launch and optimize campaign systems while keeping them connected to your broader digital growth strategy."],
  ["Can we start with one service?", "Absolutely. Many clients begin with a specific SEO, landing page, content or acquisition challenge and expand as results build."]
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="studio-header">
      <div className="container header-wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">X</span>
          <span>xntrova</span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#solutions" onClick={() => setOpen(false)}>Solutions</a>
          <a href="#process" onClick={() => setOpen(false)}>Process</a>
          <a href="#plans" onClick={() => setOpen(false)}>Plans</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Book a call</a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="studio-hero" id="home">
      <div className="grid-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill"><Zap size={14} /> XNTROVA PERFORMANCE STUDIO</div>
          <h1>Turn digital attention into <span>business momentum.</span></h1>
          <p>
            Conversion-focused growth systems for brands that want clearer strategy, stronger creative and measurable performance.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">Book a growth call <ArrowRight size={17} /></a>
            <a href="#process" className="text-link">See our process <ArrowRight size={16} /></a>
          </div>

          <div className="proof-row">
            <span><strong>120+</strong> launches</span>
            <span><strong>500+</strong> clients</span>
            <span><strong>4.8/5</strong> rating</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dash-top">
            <span>Campaign control room</span>
            <span className="live-dot">LIVE</span>
          </div>

          <div className="metric-row">
            <div>
              <small>Qualified leads</small>
              <strong>2,846</strong>
              <em>+31.8%</em>
            </div>
            <div>
              <small>Cost / lead</small>
              <strong>₹428</strong>
              <em>-18.2%</em>
            </div>
          </div>

          <div className="line-chart">
            <svg viewBox="0 0 600 220" preserveAspectRatio="none">
              <path d="M0 190 C70 184 82 130 140 150 C200 173 218 90 270 112 C335 140 340 66 395 92 C460 122 468 30 530 55 C560 66 575 38 600 26" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M0 190 C70 184 82 130 140 150 C200 173 218 90 270 112 C335 140 340 66 395 92 C460 122 468 30 530 55 C560 66 575 38 600 26 L600 220 L0 220 Z" fill="currentColor" opacity="0.08" />
            </svg>
          </div>

          <div className="channel-row">
            <div><span>SEO</span><b>42%</b><i><u style={{ width: "72%" }} /></i></div>
            <div><span>Paid</span><b>31%</b><i><u style={{ width: "54%" }} /></i></div>
            <div><span>Social</span><b>18%</b><i><u style={{ width: "38%" }} /></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const items = [
    ["01", "Acquisition", "Bring the right customers in through search, paid media, content and demand generation."],
    ["02", "Conversion", "Reduce friction with better landing pages, messaging and field experience design."],
    ["03", "Retention", "Retarget, nurture and deepen loyalty with smarter lifecycle strategy and content."],
    ["04", "Measurement", "Track the metrics that matter and turn performance data into action."]
  ];

  return (
    <section className="studio-section" id="solutions">
      <div className="container">
        <div className="section-heading">
          <div className="section-tag">THE XNTROVA SYSTEM</div>
          <h2>Four connected levers. <span>One growth engine.</span></h2>
        </div>

        <div className="solution-grid">
          {items.map(([num, title, text]) => (
            <article key={num} className="solution-card">
              <small>{num}</small>
              <Layers3 size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Explore <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="studio-section process-section" id="process">
      <div className="container process-wrap">
        <div className="process-visual">
          <div className="mini-board">
            <div className="board-head">xntrova / campaign</div>
            <div className="board-metric">
              <small>Conversion rate</small>
              <b>6.82%</b>
              <span>▲ 42.7%</span>
            </div>
            <div className="phone-bars">
              {[32, 42, 38, 62, 56, 78, 71, 90].map((value, index) => (
                <i key={index} style={{ height: `${value}%` }} />
              ))}
            </div>
            <div className="board-list">
              <span><u /> Landing page</span><b>+28%</b>
              <span><u /> Paid search</span><b>+35%</b>
              <span><u /> SEO</span><b>+49%</b>
            </div>
          </div>
          <div className="insight-badge">LIVE <span>Insights</span></div>
        </div>

        <div className="process-copy">
          <div className="section-tag">HOW IT WORKS</div>
          <h2>Less guesswork. <span>More learning.</span></h2>
          <p>
            We keep the process simple: understand the problem, ship the right work, read the signal and improve fast.
          </p>

          <div className="step-list">
            {process.map(([num, title, text]) => (
              <div key={num} className="step-item">
                <b>{num}</b>
                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
                <ArrowRight size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics-band">
      <div className="container metrics-grid">
        <div><strong>+250%</strong><span>organic traffic</span></div>
        <div><strong>+42%</strong><span>conversion uplift</span></div>
        <div><strong>3.8x</strong><span>average ROAS</span></div>
        <div><strong>92%</strong><span>retention rate</span></div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section className="studio-section" id="plans">
      <div className="container">
        <div className="section-heading narrow">
          <div className="section-tag">WAYS TO WORK TOGETHER</div>
          <h2>A starting point for <span>every stage.</span></h2>
        </div>

        <div className="plan-grid">
          {plans.map(([title, desc, items], index) => (
            <article key={title} className={index === 1 ? "plan-card featured" : "plan-card"}>
              {index === 1 && <div className="popular">Most popular</div>}
              <span className="plan-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}><Check size={15} /> {item}</li>
                ))}
              </ul>
              <a href="#contact">Discuss this plan <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="studio-section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-copy">
          <div className="section-tag">FAQ</div>
          <h2>Good questions lead to <span>better work.</span></h2>
          <p>Here are a few things clients usually ask before starting a project.</p>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div key={question} className={active === index ? "faq-item active" : "faq-item"}>
              <button onClick={() => setActive(active === index ? -1 : index)}>
                {question}
                <ChevronDown size={18} />
              </button>
              {active === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="studio-contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="section-tag">READY WHEN YOU ARE</div>
          <h2>Bring us the challenge. <span>We will bring the plan.</span></h2>
          <p>
            Tell us what you want to improve, launch or scale. We will come back with ideas and a practical next step.
          </p>

          <div className="contact-points">
            <span><Mail size={18} /> hello@xntrova.com</span>
            <span><Phone size={18} /> +91 00000 00000</span>
            <span><MapPin size={18} /> India • Global delivery</span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <h3>Start a conversation</h3>
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@company.com" required />
          </label>
          <label>
            What are you trying to improve?
            <textarea name="message" rows="4" placeholder="Tell us briefly about your goals..." required />
          </label>
          <button type="submit" className="primary-btn">
            {sent ? "Message sent ✓" : "Send enquiry"} <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="studio-footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">X</span>
            <span>xntrova</span>
          </a>
          <p>Performance-led digital growth for ambitious businesses.</p>
        </div>

        <div className="footer-links">
          <div>
            <b>Solutions</b>
            <a href="#solutions">Acquisition</a>
            <a href="#solutions">Conversion</a>
            <a href="#solutions">Measurement</a>
          </div>
          <div>
            <b>Company</b>
            <a href="#process">How it works</a>
            <a href="#plans">Plans</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Xntrova</span>
        <span>Digital growth, made measurable.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="studio-app">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <ProcessSection />
        <Metrics />
        <Plans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

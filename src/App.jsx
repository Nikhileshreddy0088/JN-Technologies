import { useEffect, useRef, useState } from "react";

const EMAIL = "connect.jntechnologies@gmail.com";
const ENQUIRY_SHEET_URL = "https://script.google.com/macros/s/AKfycbwDwjmIMufjCKhmIDIWcKZn2uwKmv4QvNgOlXv2H7K80XyF2njZrUOa5CE76-kBoervyA/exec";
const PHONE_DISPLAY = "+91 72076 00574";
const PHONE_TEL = "+917207600574";
const WHATSAPP = "917207600574";

const services = [
  {
    id: "enterprise",
    index: "01",
    title: "Enterprise Solutions",
    line: "ERP · CRM · Business Automation",
    summary:
      "Streamline everyday operations with systems that organise information, connect workflows and improve visibility across the business.",
    work: [
      "ERP implementation and customisation",
      "CRM workflows and internal portals",
      "Process automation",
      "Reporting dashboards",
      "System integration",
    ],
  },
  {
    id: "software",
    index: "02",
    title: "Custom Software Development",
    line: "Web · Desktop · Cloud Applications",
    summary:
      "Software shaped around the way your organisation works, rather than a one-size-fits-all product your team has to bend around.",
    work: [
      "Business applications",
      "Customer and employee portals",
      "Workflow platforms and dashboards",
      "APIs and database-backed applications",
      "Integrations with the systems you already use",
    ],
  },
  {
    id: "ai",
    index: "03",
    title: "AI & Agentic AI Solutions",
    line: "Intelligent Workflows · AI Assistants",
    summary:
      "Apply AI where it makes information easier to use and repetitive work easier to manage — inside the tools your team already relies on.",
    work: [
      "AI assistants and knowledge search",
      "Document and data workflows",
      "Task automation",
      "Decision-support tools",
      "Integrations with existing systems",
    ],
  },
  {
    id: "iot",
    index: "04",
    title: "IoT & Embedded Systems",
    line: "Devices · Firmware · Industrial Connectivity",
    summary:
      "Connect physical devices and digital systems for monitoring, control and automation across products and operations.",
    work: [
      "Embedded firmware",
      "Microcontroller development",
      "Sensor integration and device communication",
      "Telemetry and monitoring interfaces",
      "Prototypes",
    ],
  },
];

const guides = [
  {
    title: "Accessible by design",
    text: "Technology choices shaped around real needs, capabilities and budgets.",
  },
  {
    title: "Affordable thinking",
    text: "Practical scope, phased delivery and cost-conscious implementation.",
  },
  {
    title: "Quality-led delivery",
    text: "A disciplined approach to requirements, development, testing and handover.",
  },
  {
    title: "Built to evolve",
    text: "Solutions designed with maintainability and future growth in mind.",
  },
];

const audiences = [
  {
    title: "Startups & growing businesses",
    text: "A useful digital foundation: focused applications, workflow tools and architecture that can scale.",
  },
  {
    title: "Small and medium businesses",
    text: "Clearer visibility and less repetitive work through connected business systems and automation.",
  },
  {
    title: "Manufacturing & operations",
    text: "Device connectivity, monitoring, embedded control, dashboards and operational software.",
  },
  {
    title: "Service organisations & institutions",
    text: "Requests, records, approvals, reporting and the interactions your people have every day.",
  },
];

const outcomes = [
  { title: "Clarity", text: "Make information, responsibilities and workflows easier to understand." },
  { title: "Efficiency", text: "Reduce avoidable manual steps and connect disconnected processes." },
  { title: "Visibility", text: "Bring operational information into dashboards and reports people can use." },
  { title: "Connectivity", text: "Help software, devices and teams exchange information where it matters." },
  { title: "Adaptability", text: "Build with future changes, integrations and growth in mind." },
  { title: "Affordability", text: "Prioritise essential value and phase the work that can wait." },
];

const reasons = [
  { title: "Trusted partner", text: "Clear communication, realistic commitments and responsible delivery." },
  { title: "Quality assured", text: "Care in how a solution is understood, designed, built, tested and handed over." },
  { title: "Cost-effective", text: "The right scope for the actual need — practical, not padded." },
  { title: "End to end", text: "From the first conversation through integration, testing and handover." },
  { title: "Innovation driven", text: "Intelligence and new tools applied where they create practical value." },
  { title: "Client-centric", text: "Shaped around your people, process, infrastructure and budget." },
  { title: "Future ready", text: "Maintainable systems that can grow as the work grows." },
];

const steps = [
  { title: "Understand", text: "Discuss your goals, users, current process, constraints and the outcome you want." },
  { title: "Define", text: "Agree requirements, deliverables, priorities, timelines and a realistic budget." },
  { title: "Design", text: "Plan the experience, system structure, integrations and how it will be implemented." },
  { title: "Build & integrate", text: "Develop in stages and connect the software, data and devices the work needs." },
  { title: "Test & refine", text: "Review functionality, address issues and validate against what was agreed." },
  { title: "Handover & support", text: "A clear handover, then maintenance or enhancements as you need them." },
];

const principles = [
  "Clear scope and communication",
  "Practical recommendations, without unnecessary complexity",
  "Attention to usability, maintainability and quality",
  "Respect for client data and agreed access boundaries",
  "A focus on measurable business or operational needs",
];

const ticker = [
  "Trust the brand",
  "Experience the quality",
  "Intelligence",
  "Integration",
  "Innovation",
  "Make technology available for all",
];

const nav = [
  { href: "#about", id: "about", label: "About" },
  { href: "#solutions", id: "solutions", label: "Solutions" },
  { href: "#audiences", id: "audiences", label: "Who we serve" },
  { href: "#approach", id: "approach", label: "Approach" },
  { href: "#contact", id: "contact", label: "Contact" },
];

function Brand() {
  return (
    <a className="brand" href="#home">
      <img src={`${import.meta.env.BASE_URL}jn-logo.png`} alt="" width="48" height="49" />
      <span>
        <strong>JN Technologies</strong>
        <small>Intelligence · Integration · Innovation</small>
      </span>
    </a>
  );
}

export default function App() {
  const progressRef = useRef(null);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [service, setService] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Not sure yet",
    message: "",
  });

  const current = services[service];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveNav(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menu);
    return () => document.body.classList.remove("menu-open");
  }, [menu]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const bar = progressRef.current;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (bar) bar.style.transform = `scaleX(${ratio})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -32px 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function onHeroMove(event) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    event.currentTarget.style.setProperty("--my", ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  }

  function onHeroLeave(event) {
    event.currentTarget.style.setProperty("--mx", "0");
    event.currentTarget.style.setProperty("--my", "0");
  }

  function update(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  async function send(event) {
    event.preventDefault();
    setFormError("");
    if (!ENQUIRY_SHEET_URL) {
      const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.service}\n\n${form.message}`
      );
      setSent(true);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }
    setSending(true);
    try {
      await fetch(ENQUIRY_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      });
      setSent(true);
      setForm({ name: "", email: "", service: "Not sure yet", message: "" });
    } catch {
      setFormError(`The enquiry could not be saved. Write to ${EMAIL}.`);
    } finally {
      setSending(false);
    }
  }

  function onTabKey(event) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (service + 1) % services.length
        : (service - 1 + services.length) % services.length;
    setService(next);
    document.getElementById(`tab-${services[next].id}`)?.focus();
  }

  function closeMenu() {
    setMenu(false);
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <header className={scrolled || menu ? "solid" : ""}>
        <div className="wrap nav">
          <Brand />
          <button
            className={menu ? "menu-btn open" : "menu-btn"}
            type="button"
            aria-expanded={menu}
            aria-controls="site-nav"
            onClick={() => setMenu((open) => !open)}
          >
            <span className="sr-only">{menu ? "Close menu" : "Open menu"}</span>
            <i />
            <i />
            <i />
          </button>
          <nav id="site-nav" className={menu ? "open" : ""}>
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={activeNav === item.id ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Start a project
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home" onPointerMove={onHeroMove} onPointerLeave={onHeroLeave}>
          <div className="hero-glow" aria-hidden="true" />
          <svg className="cover-arcs" viewBox="0 0 800 900" aria-hidden="true">
            <circle cx="760" cy="40" r="180" />
            <circle cx="760" cy="40" r="280" />
            <circle cx="760" cy="40" r="390" />
            <circle cx="760" cy="40" r="510" />
          </svg>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="kicker light">Hyderabad · Technology partner</p>
              <h1>
                Make technology
                <em> available for all.</em>
              </h1>
              <p className="lede">
                We bring enterprise systems, custom software, AI and connected devices together
                so useful technology stays practical, affordable and within reach.
              </p>
              <div className="hero-actions">
                <a className="btn btn-gold" href="#contact">
                  Discuss your idea
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="btn btn-ghost" href="#solutions">
                  Explore solutions
                </a>
              </div>
              <p className="promise-line">Trust the brand. Experience the quality.</p>
            </div>
            <div className="constellation" aria-hidden="true">
              <div className="ring-spin slow">
                <div className="ring r1" />
                <i className="spark" />
              </div>
              <div className="ring-spin reverse">
                <div className="ring r2" />
                <i className="spark soft" />
              </div>
              <img className="constellation-logo" src={`${import.meta.env.BASE_URL}jn-logo.png`} alt="" />
              <span className="node n1">Enterprise</span>
              <span className="node n2">Software</span>
              <span className="node n3">AI</span>
              <span className="node n4">IoT</span>
            </div>
          </div>
          <div className="wrap pillars" aria-label="How we work">
            {["Accessible", "Affordable", "Reliable", "Scalable"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <p key={copy}>
                {ticker.map((phrase) => (
                  <span key={`${copy}-${phrase}`}>{phrase}</span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <section className="section about" id="about">
          <div className="wrap about-grid">
            <div data-reveal>
              <p className="kicker">
                <span className="index">02</span> Who we are
              </p>
              <h2>
                Technology that works <em>for your world.</em>
              </h2>
              <p className="lead">
                JN Technologies helps organisations use digital tools, software and connected
                systems to solve practical business and operational challenges.
              </p>
              <p>
                Enterprise solutions, custom software, AI-enabled workflows, IoT and embedded
                systems sit with one partner — so the pieces can work together instead of becoming
                another stack of disconnected tools.
              </p>
            </div>
            <div className="mission-stack">
              <article className="mission-card" data-reveal style={{ "--d": "80ms" }}>
                <p className="kicker">Our vision</p>
                <h3>Make technology available for all.</h3>
                <p>
                  Useful technology should be accessible to businesses of every size. Start with
                  what you need today. Grow the solution as the need evolves.
                </p>
              </article>
              <article className="mission-card" data-reveal style={{ "--d": "160ms" }}>
                <p className="kicker">Our mission</p>
                <h3>Reliable, innovative and affordable.</h3>
                <p>
                  Simplify work, connect systems, and help people and businesses move forward with
                  confidence.
                </p>
              </article>
              <article className="mission-card promise-card" data-reveal style={{ "--d": "240ms" }}>
                <p className="kicker">Our brand promise</p>
                <h3>Trust the brand. Experience the quality.</h3>
                <p>
                  Trust comes from clear communication, realistic commitments and responsible
                  delivery. Quality shows in how a solution is understood, designed, developed,
                  tested and supported.
                </p>
              </article>
            </div>
          </div>
          <div className="wrap">
            <p className="kicker guides-label">What guides our work</p>
            <div className="guides">
              {guides.map((guide, index) => (
                <article key={guide.title} data-reveal style={{ "--d": `${index * 80}ms` }}>
                  <span>0{index + 1}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section solutions" id="solutions">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker">
                  <span className="index">03</span> What we do
                </p>
                <h2>
                  Four practices. <em>One partner.</em>
                </h2>
              </div>
              <p>
                Software, intelligence and connected hardware, aligned with your goals. Each
                service stands alone — or joins a wider solution.
              </p>
            </div>

            <div className="solution-stage" data-reveal style={{ "--d": "80ms" }}>
              <div className="solution-tabs" role="tablist" aria-label="Technology solutions" onKeyDown={onTabKey}>
                {services.map((item, index) => (
                  <button
                    key={item.id}
                    id={`tab-${item.id}`}
                    type="button"
                    role="tab"
                    aria-selected={service === index}
                    aria-controls="solution-panel"
                    tabIndex={service === index ? 0 : -1}
                    className={service === index ? "active" : ""}
                    onClick={() => setService(index)}
                  >
                    <small>{item.index}</small>
                    <strong>{item.title}</strong>
                    <span>{item.line}</span>
                  </button>
                ))}
              </div>
              <article
                className={`solution-panel tone-${current.id}`}
                id="solution-panel"
                role="tabpanel"
                aria-labelledby={`tab-${current.id}`}
                key={current.id}
              >
                <p className="panel-index">{current.index}</p>
                <h3>{current.title}</h3>
                <p className="panel-line">{current.line}</p>
                <p>{current.summary}</p>
                <p className="work-label">Potential work</p>
                <ul className="work-list">
                  {current.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="btn btn-dark" href="#contact">
                  Discuss this service <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="integration">
          <div className="wrap integration-inner" data-reveal>
            <p className="kicker light">Where the value grows</p>
            <h2>Integration is where separate tools become a way of working.</h2>
            <p>
              A business platform can connect to a device. A dashboard can turn operational data
              into visibility. An AI workflow can help a team use information with less friction.
              We look for ways to make systems work together — not simply add more of them.
            </p>
          </div>
        </section>

        <section className="section audiences" id="audiences">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker">
                  <span className="index">04</span> Designed around real needs
                </p>
                <h2>
                  Practical technology, <em>without the extra complexity.</em>
                </h2>
              </div>
              <p>
                The right scope depends on your process, people, infrastructure and budget. We
                start there.
              </p>
            </div>
            <div className="audience-grid">
              {audiences.map((item, index) => (
                <article key={item.title} data-reveal style={{ "--d": `${index * 70}ms` }}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="outcome-grid">
              {outcomes.map((item, index) => (
                <article key={item.title} data-reveal style={{ "--d": `${index * 60}ms` }}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reasons">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker">Why teams work with us</p>
                <h2>
                  A promise you can <em>recognise in the work.</em>
                </h2>
              </div>
            </div>
            <div className="reason-grid">
              {reasons.map((item, index) => (
                <article key={item.title} data-reveal style={{ "--d": `${index * 60}ms` }}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker">
                  <span className="index">05</span> How an engagement runs
                </p>
                <h2>
                  A clear path from <em>idea to implementation.</em>
                </h2>
              </div>
              <p>
                Every engagement starts with the problem. We define a practical scope, agree
                priorities and build in manageable steps.
              </p>
            </div>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title} data-reveal style={{ "--d": `${index * 70}ms` }}>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="afford-grid">
              <div data-reveal>
                <p className="kicker">An affordable approach</p>
                <h3>Affordable means the right solution for the actual need.</h3>
                <p>
                  It is not about cutting corners. Depending on the project, we can put essential
                  features first, plan a phased rollout, reuse systems that already fit, and keep
                  future expansion in view. Scope, cost and deliverables are discussed before work
                  begins.
                </p>
              </div>
              <div data-reveal style={{ "--d": "120ms" }}>
                <p className="kicker">Working principles</p>
                <ul className="principles">
                  {principles.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-grid">
            <div data-reveal>
              <p className="kicker light">
                <span className="index">06</span> Let’s build what comes next
              </p>
              <h2>
                Have an idea, a process, <em>or a device to connect?</em>
              </h2>
              <p>
                Tell us what you are trying to achieve. We will start with the problem and look
                for a practical first step together.
              </p>
              <div className="details">
                <a href={`tel:${PHONE_TEL}`}>
                  <small>Phone</small>
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello JN Technologies, I would like to discuss a project.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <small>WhatsApp</small>
                  Message us ↗
                </a>
                <a href={`mailto:${EMAIL}`}>
                  <small>Email</small>
                  {EMAIL}
                </a>
                <div>
                  <small>Studio</small>
                  Hyderabad, Telangana, India
                </div>
              </div>
            </div>
            <form onSubmit={send} data-reveal style={{ "--d": "100ms" }}>
              <h3>Tell us about the work</h3>
              <p>We will reply by email.</p>
              <label>
                Your name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                />
              </label>
              <label>
                What do you need help with?
                <select name="service" value={form.service} onChange={update("service")}>
                  <option>Not sure yet</option>
                  {services.map((item) => (
                    <option key={item.id}>{item.title}</option>
                  ))}
                  <option>A combined solution</option>
                </select>
              </label>
              <label>
                Project details
                <textarea
                  required
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="What are you trying to improve, build or connect?"
                />
              </label>
              <button className="btn btn-gold" type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span>
              </button>
              <p className="form-note" role="status">
                {formError
                  ? formError
                  : sent
                    ? ENQUIRY_SHEET_URL
                      ? "Enquiry saved. We will reply by email."
                      : `Your email app should open with this enquiry. If it does not, write to ${EMAIL}.`
                    : ENQUIRY_SHEET_URL
                      ? "Your details are saved in the company enquiry sheet."
                      : "This opens your email app with the message ready to send."}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-main">
          <Brand />
          <div className="foot-links">
            {nav.map((item) => (
              <a key={item.id} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a href="#home">Back to top ↑</a>
        </div>
        <div className="wrap foot-bottom">
          <p>© {new Date().getFullYear()} JN Technologies. All rights reserved.</p>
          <p>Intelligence · Integration · Innovation</p>
        </div>
        <p className="wrap fineprint">
          JN Technologies provides technology services and project-based solutions. Specific scope,
          deliverables, timelines, pricing and support arrangements are agreed with each client
          before commencement.
        </p>
      </footer>
    </>
  );
}

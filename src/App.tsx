import { useEffect, useState } from "react";

const projects = [
  {
    no: "01",
    name: "CareerHQ",
    kicker: "MY INDEPENDENT BUILD",
    result: "A complete AI career platform, shipped solo.",
    copy: "ATS analysis, tailored cover letters, a LaTeX résumé builder, authentication, and a production Stripe subscription flow—all designed and built end to end.",
    tags: ["AI PRODUCT", "FULL-STACK", "STRIPE"],
    href: "https://careerhq.netlify.app",
    className: "yellow",
  },
  {
    no: "02",
    name: "AI Team Brain",
    kicker: "MULTI-AGENT KNOWLEDGE",
    result: "A shared brain for teams that actually answers back.",
    copy: "A conversational knowledge layer that brings fragmented team context together through retrieval, LLM orchestration, and practical agent workflows.",
    tags: ["RAG", "LANGGRAPH", "AGENTS"],
    href: "https://ai-team-brain.vercel.app",
    className: "blue",
  },
  {
    no: "03",
    name: "AutomateX",
    kicker: "WORKFLOW AUTOMATION",
    result: "Turning repetitive queues into observable AI workflows.",
    copy: "A practical automation product built to make agent decisions visible, keep humans in control, and move work from input to action.",
    tags: ["AUTOMATION", "PRODUCT", "REACT"],
    href: "https://automate-x-ai.vercel.app",
    className: "coral",
  },
];

const stops = [
  { year: "NOW", company: "Paytm", role: "AI / LLM Engineering", metric: "8 production services · 99.9% uptime" },
  { year: "2025", company: "Bluestock", role: "Full-stack + Data", metric: "35% less latency · 4 TB/week" },
  { year: "2025", company: "Sigma TechAI", role: "Machine Learning", metric: "50K+ records processed daily" },
  { year: "2023—27", company: "NSUT", role: "B.Tech, Computer Science", metric: "Learning the theory. Building the proof." },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState<"day" | "night">("day");

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const sections = ["home", "work", "journey", "about", "contact"];
    const update = () => {
      const current = sections
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((item) => item.el && item.el.getBoundingClientRect().top < innerHeight * 0.55)
        .at(-1);
      if (current) setActive(current.id);
    };
    addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      reveal.disconnect();
      removeEventListener("scroll", update);
    };
  }, []);

  const moveScene = (event: React.PointerEvent<HTMLElement>) => {
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;
    event.currentTarget.style.setProperty("--mx", `${x}`);
    event.currentTarget.style.setProperty("--my", `${y}`);
  };

  return (
    <main data-theme={theme}>
      <div className="topbar">
        <a className="logo-pill" href="#home">
          <img src="/rohit-kumar.jpg" alt="Rohit Kumar" />
          <span>Rohit Kumar</span>
        </a>
        <button className="sun-button" onClick={() => setTheme(theme === "day" ? "night" : "day")} aria-label="Toggle day and night">
          {theme === "day" ? "☀" : "☾"}
        </button>
      </div>

      <nav className="dock" aria-label="Primary navigation">
        <a className={active === "home" ? "on" : ""} href="#home">Home</a>
        <a className={active === "work" ? "on" : ""} href="#work">Work</a>
        <a href="/rohit-kumar-data-analyst-resume.pdf" target="_blank" rel="noreferrer" title="Open Data Analyst résumé">Non-Tech</a>
        <a href="/rohit-kumar-tech-ai-resume.pdf" target="_blank" rel="noreferrer" title="Open Tech & AI résumé">Tech & AI</a>
        <i />
        <a className="dock-cta" href="#contact">Contact me <Arrow /></a>
      </nav>

      <section className="hero-scene" id="home" onPointerMove={moveScene}>
        <div className="sun" />
        <div className="cloud cloud-one">☁</div>
        <div className="cloud cloud-two">☁</div>
        <div className="stars">✦　·　✧　　·　✦</div>
        <div className="hero-copy">
          <p className="hello">Hey, I’m Rohit <span>— builder in Delhi</span></p>
          <h1>I make ideas<br /><em>work.</em></h1>
          <p className="hero-lead">
            AI engineer, full-stack developer, and curious human building
            products that move from a messy thought to the real world.
          </p>
          <a className="hero-button" href="#work">Wander through my work <span>↓</span></a>
        </div>
        <div className="hill hill-back" />
        <div className="hill hill-front" />
        <div className="workshop">
          <div className="antenna">⌁</div>
          <div className="roof" />
          <div className="house">
            <div className="window"><span>&lt;/&gt;</span></div>
            <div className="door" />
          </div>
          <div className="smoke">·　·　·</div>
        </div>
        <div className="signpost"><span>BUILD</span><span>SHIP</span><span>LEARN</span></div>
        <div className="scroll-note">scroll to enter the workshop ↓</div>
      </section>

      <section className="paper-intro" id="about">
        <div className="paper wrap reveal">
          <div className="tape" />
          <p className="hand-note">not your typical engineer →</p>
          <p className="chapter">A LITTLE ABOUT ME</p>
          <h2>
            I care about the tiny space between
            <span className="brush sky"> “cool demo” </span>
            and <span className="brush sunlit">“people use this.”</span>
          </h2>
          <div className="intro-grid">
            <p>
              I build AI systems that ship—not just notebooks and prototypes.
              At Paytm I work on multi-agent workflows, RAG pipelines, and
              production services. On my own, I build complete products from
              interface to infrastructure.
            </p>
            <blockquote>
              <span>“</span>
              My favourite question is:<br /><b>what can we make by Friday?</b>
            </blockquote>
          </div>
          <div className="paper-doodles"><span>⚙</span><span>⌁</span><span>✦</span></div>
        </div>
      </section>

      <section className="projects wrap" id="work">
        <header className="sec-head reveal">
          <p>SELECTED EXPERIMENTS · 01—03</p>
          <h2>Things I’ve <span className="brush coral">made real.</span></h2>
          <p className="sub">Tap a card. The proof lives outside the deck.</p>
        </header>
        <div className="project-stack">
          {projects.map((project) => (
            <article className={`project ${project.className} reveal`} key={project.name}>
              <div className="project-copy">
                <div className="project-meta"><span>{project.no}</span><span>{project.kicker}</span></div>
                <h3>{project.name}</h3>
                <h4>{project.result}</h4>
                <p>{project.copy}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer">View live build <Arrow /></a>
              </div>
              <div className="project-art" aria-hidden="true">
                {project.no === "01" && <div className="career-window"><div>CAREERHQ <i /></div><strong>73</strong><small>ATS SCORE</small><p><b /><b /><b /></p></div>}
                {project.no === "02" && <div className="agent-map"><b>YOU</b><i /><b>AGENT</b><i /><b>MEMORY</b></div>}
                {project.no === "03" && <div className="automation"><span>01</span><span>THINK</span><span>02</span><span>ACT</span><span>03</span></div>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="wrap">
          <header className="sec-head reveal">
            <p>THE ROAD SO FAR</p>
            <h2>Places that shaped<br /><span className="brush green">how I build.</span></h2>
          </header>
          <div className="road">
            {stops.map((stop, index) => (
              <article className="stop reveal" key={stop.company}>
                <div className="pin">{index + 1}</div>
                <span>{stop.year}</span>
                <h3>{stop.company}</h3>
                <h4>{stop.role}</h4>
                <p>{stop.metric}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="desk">
        <div className="wrap reveal">
          <p className="chapter">WHAT’S ON MY DESK</p>
          <h2>A toolbox for turning<br />“maybe” into <em>“done.”</em></h2>
          <div className="desk-top">
            <div className="sticky-note">Ship small.<br />Learn fast.<br />Repeat. <span>— RK</span></div>
            <div className="laptop">
              <div className="screen"><p>rohit@builder:~$</p><strong>crafting the next thing<span>_</span></strong></div>
              <div className="base" />
            </div>
            <div className="tool-card">
              {["Python", "TypeScript", "LangGraph", "FastAPI", "React", "Docker", "AWS", "Kafka"].map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="coffee">AI<br />FUEL</div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-sky">
          <div className="wrap reveal">
            <p>THE NEXT BUILD COULD BE OURS</p>
            <h2>Have a wild idea?<br /><span>Let’s make it real.</span></h2>
            <a className="mail" href="mailto:rohit.kumar.ug23@nsut.ac.in">rohit.kumar.ug23@nsut.ac.in <Arrow /></a>
            <div className="contact-links">
              <a href="tel:+919999993119"><span>CALL</span>+91 99999 93119</a>
              <a href="mailto:rohit.kumar.ug23@nsut.ac.in"><span>EMAIL</span>rohit.kumar.ug23@nsut.ac.in</a>
              <a href="https://www.linkedin.com/in/rohitkumarnsut/" target="_blank" rel="noreferrer"><span>LINKEDIN</span>rohitkumarnsut <Arrow /></a>
            </div>
            <div className="socials">
              <a href="https://github.com/RoHITKumar3456256" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/rohitkumarnsut" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <span>Delhi, India · 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

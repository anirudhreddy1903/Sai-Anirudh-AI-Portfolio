import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  Code,
  Briefcase,
  User,
  Send,
} from "lucide-react";

import profileImage from "./My_anime_img.jpg";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    const sectionNodes = document.querySelectorAll("section");
    sectionNodes.forEach((section) => observer.observe(section));

    return () => {
      sectionNodes.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sections = ["home", "about", "skills", "experience", "projects", "contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:anirudhvallapureddy@outlook.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name || "Visitor"
    )}&body=${encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.email || "N/A"}`
    )}`;
    window.location.href = mailtoLink;
  };

  const skills = {
    "Languages & Core": [
      "Java 8/11",
      "JavaScript (ES6+)",
      "Python",
      "Scala",
      "SQL",
      "PL/SQL",
      "Go (learning)",
      "Kotlin (learning)",
    ],
    "Backend & APIs": [
      "Spring Boot",
      "Spring Cloud",
      "REST APIs",
      "GraphQL",
      "Kafka Event Streaming",
      "Microservices",
      "OAuth 2.0 / JWT",
    ],
    "Cloud & Platforms": [
      "AWS (EC2, S3, RDS, Lambda, ECS, EKS)",
      "Azure (ADF, Databricks, Key Vault)",
      "Snowflake",
      "PCF",
      "Docker",
      "Kubernetes",
      "GitHub / GitLab CI",
      "Jenkins",
    ],
    "AI, LLMs & Agentic": [
      "LLM Orchestration",
      "LangChain",
      "Agentic Workflows",
      "Prompt Engineering",
      "OpenAI / GPT-4",
      "Transformers",
      "PyTorch",
      "TensorFlow",
      "Real-time AI Integration",
    ],
  };

  const experience = [
    {
      title: "Software Engineer – Backend & AI Integrations",
      company: "Amdocs Americas – T-Mobile USA (Lumos / Steel Thread / Unicorn)",
      period: "Feb 2024 – Present · Overland Park, KS",
      points: [
        "Develop and maintain 20+ production Spring Boot microservices integrating Amdocs cloud systems with CRM platforms for fiber and business customers.",
        "Own Kafka-based event pipelines processing 1M+ events/day with 99.99% uptime for provisioning, credit apps, and Adobe–Amdocs integrations.",
        "Improve API performance through profiling and query optimization, reducing latency by up to 35% on high-volume customer-facing flows.",
        "Automate CI/CD using GitLab and Jenkins for 100+ monthly containerized deployments across 15+ environments.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Wichita State University",
      period: "Jan 2023 – May 2023 · Wichita, KS",
      points: [
        "Supported delivery of advanced CS courses, grading and mentoring students on software engineering and AI fundamentals.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Amdocs Development Center India – T-Mobile USA",
      period: "Apr 2021 – Aug 2022 · Pune, India (Remote)",
      points: [
        "Worked across Amdocs One Suite products (DigitalONE, MarketONE, CatalogONE, DataONE) in a cloud-native microservices ecosystem.",
        "Designed and validated REST/SOAP APIs, leveraging SQL, PL/SQL, Couchbase (N1QL), Kubernetes and Kafka for large-scale telco systems.",
        "Improved defect triage speed using Splunk, Kibana, Camunda and custom debug tooling.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Brio Technologies",
      period: "Jun 2020 – Mar 2021 · Hyderabad, India (Remote)",
      points: [
        "Contributed to backend and web modules using Java, Spring Boot and SQL under Agile delivery.",
      ],
    },
  ];

  const projects = [
    {
      title: "Agentic Self-Healing Test Orchestrator",
      tagline: "Autonomous test recovery for large scale enterprise systems",
      stack: ["Python", "LangChain", "GPT-4", "CI/CD", "Microservices"],
      description:
        "Built an agentic AI workflow that detects order fallout in distributed systems, reasons about failure context, retries with safe rollbacks, and reallocates inventory to the nearest warehouse—cutting manual operations effort by ~80%.",
    },
    {
      title: "Prompt-to-Code Builder for Legacy Modernization",
      tagline: "From business rules to clean service code",
      stack: ["Java", "Python", "LLMs", "Refactoring Agents"],
      description:
        "Designed an internal accelerator that converts semi-structured requirements and legacy patterns into modern service templates, enforcing architecture and coding standards while keeping humans in the loop.",
    },
    {
      title: "Autonomous Order Recovery & Insights Agent",
      tagline: "Real-time observability with AI copilots",
      stack: ["Kafka", "OpenAI", "Dashboards"],
      description:
        "Prototyped an observability agent that watches event streams, summarizes incidents, suggests remediation steps, and opens ready-to-send tickets for SRE/DevOps teams.",
    },
  ];

  const cardBase =
    "bg-slate-900/70 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.35)] rounded-2xl p-6 md:p-8 backdrop-blur-2xl transition duration-300";
  const cardHover =
    "hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(34,211,238,0.75)] hover:-translate-y-1";

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020617] text-slate-100">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[140%] h-[140%] animate-gradient bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.45),transparent_60%),radial-gradient(circle_at_80%_0,rgba(236,72,153,0.35),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(129,140,248,0.5),transparent_60%)] opacity-70" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 border-b border-cyan-400/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-slate-900/80 shadow-[0_0_25px_rgba(34,211,238,0.8)]">
              <span className="text-lg font-semibold tracking-tight text-cyan-300">
                SV
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
                Software & AI Engineer
              </span>
              <span className="text-sm font-medium text-slate-100 group-hover:text-cyan-100">
                Agentic Systems · LLM Tooling
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 text-sm">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative capitalize tracking-wide transition ${
                  activeSection === id
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-200"
                }`}
              >
                {id}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile nav button */}
          <button
            className="md:hidden rounded-xl border border-cyan-400/50 bg-slate-900/80 p-1.5 text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cyan-400/20 bg-slate-950/95 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3">
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                    activeSection === id
                      ? "bg-cyan-500/20 text-cyan-100 border border-cyan-400/60 shadow-[0_0_18px_rgba(34,211,238,0.7)]"
                      : "bg-slate-900/80 text-slate-200 border border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.55)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to Software & AI / Agentic Roles
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="block text-slate-100">Hi, I&apos;m</span>
              <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
                Sai Anirudh Reddy Vallapureddy
              </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-slate-200/90">
              Software Engineer focused on{" "}
              <span className="font-semibold text-cyan-200">
                backend systems, LLM integrations, and agentic automation
              </span>{" "}
              — building real-world platforms that ship reliably in production.
            </p>

            <p className="mt-4 text-sm md:text-base text-slate-300/90 max-w-2xl">
              5+ years across telco-scale microservices, Kafka event streams, and
              cloud platforms (AWS, Azure, Snowflake). Recently, I&apos;ve been
              designing AI-driven workflows that self-heal failures, reduce manual
              toil, and keep customer journeys smooth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://1drv.ms/b/c/399C02D85A4DF7DD/IQAiHkl7_BnzR5LHQnuKt_Z_AV2Lg1-6vNvaVuhHtx1EAlI?e=XKGd1X"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.9)] hover:bg-cyan-400 transition"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="https://github.com/anirudhreddy1903"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-slate-950/80 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-slate-900 hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sai-anirudh-reddy-vallapureddy/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/60 bg-slate-950/80 px-4 py-2 text-sm font-medium text-fuchsia-100 hover:bg-slate-900 hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-slate-300/80">
              <div className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-cyan-300" />
                Overland Park, KS · Open to Relocation
              </div>
              <div className="inline-flex items-center gap-2">
                <Mail size={14} className="text-cyan-300" />
                anirudhvallapureddy@outlook.com
              </div>
              <div className="inline-flex items-center gap-2">
                <Phone size={14} className="text-cyan-300" />
                +1 (646) 345-2246
              </div>
            </div>
          </div>

          {/* Futuristic profile / orb */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-cyan-400/40 via-fuchsia-500/35 to-indigo-500/35 blur-3xl" />
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[28px] border border-cyan-400/40 bg-slate-950/80 shadow-[0_0_40px_rgba(34,211,238,0.8)] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(236,72,153,0.3),transparent_55%)] opacity-70" />
                <img
                  src={profileImage}
                  alt="Sai Anirudh Reddy — avatar"
                  className="relative z-10 h-44 w-44 rounded-3xl object-cover border border-cyan-300/50 shadow-[0_0_35px_rgba(34,211,238,0.9)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.7)]">
            <User size={16} />
            About
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-100/90">
            I love building{" "}
            <span className="text-cyan-300 font-semibold">
              production-grade systems
            </span>{" "}
            where traditional backend engineering meets{" "}
            <span className="text-fuchsia-300 font-semibold">
              AI copilots and LLM agents
            </span>
            .
          </p>
          <p className="mt-4 text-sm md:text-base text-slate-300/90">
            From telco microservices handling millions of events per day to
            prototypes that let AI reason about failures and fix them, my work
            has always centered around reliability, observability, and developer
            experience. I like to design solutions that are simple to operate,
            easy to extend, and safe to ship.
          </p>
        </div>
      </section>

      {/* SKILLS + AI CLOUD */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <div>
            <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-cyan-300 mb-6">
              <Code />
              Stack & Superpowers
            </h2>
            <p className="mb-6 text-sm md:text-base text-slate-300/90 max-w-xl">
              I&apos;m strongest when I get to combine{" "}
              <span className="font-semibold text-cyan-200">
                clean backend design
              </span>{" "}
              with{" "}
              <span className="font-semibold text-fuchsia-200">
                AI-driven automation
              </span>{" "}
              — wiring LLM tools and agents into robust event-driven
              architectures.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {Object.entries(skills).map(([group, items]) => (
                <div
                  key={group}
                  className={`${cardBase} ${cardHover} border-cyan-400/15`}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">
                    {group}
                  </h3>
                  <div className="skill-cloud">
                    {items.map((item) => (
                      <span key={item} className="skill-pill text-xs md:text-[13px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated AI cloud */}
          <div className={`${cardBase} ${cardHover} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(236,72,153,0.25),transparent_55%)] opacity-80" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 mb-4">
                 Skill Cloud
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-50">
                How I think about AI systems
              </h3>
              <p className="mt-3 text-sm md:text-[15px] text-slate-200/90">
                LLMs are just one component. I care about the{" "}
                <span className="font-semibold text-cyan-200">
                  surrounding architecture
                </span>{" "}
                — context pipelines, tools, guards, telemetry, and human
                feedback loops.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Retrieval & context engineering",
                  "Tool-driven agents",
                  "Safety & guardrails",
                  "Evaluation & feedback loops",
                  "Cost & latency tuning",
                  "Production incident workflows",
                ].map((chip) => (
                  <span key={chip} className="skill-orbit">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-cyan-300 mb-8">
            <Briefcase />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <article
                key={job.title + job.company}
                className={`${cardBase} ${cardHover} border-l-4 border-l-cyan-400/80`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-50">
                      {job.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-cyan-200">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-xs md:text-[13px] text-slate-400">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm md:text-[15px] text-slate-200/90">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-cyan-300 mb-8">
            <Code />
            Selected AI & Agentic Work
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`${cardBase} ${cardHover} relative`}
              >
                <div className="absolute inset-x-0 -top-px h-[1px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
                <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-fuchsia-200/90">
                  {project.tagline}
                </p>
                <p className="mt-3 text-sm md:text-[15px] text-slate-200/90">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-100/90">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/40 bg-slate-950/80 px-2.5 py-1 shadow-[0_0_14px_rgba(34,211,238,0.7)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`${cardBase} ${cardHover}`}>
            <h2 className="flex items-center gap-2 text-3xl font-bold text-cyan-300 mb-4">
              <Send />
              Let&apos;s Build Something
            </h2>
            <p className="text-sm md:text-[15px] text-slate-200/90 mb-6 max-w-2xl">
              If you&apos;re working on agentic platforms, LLM tooling, or
              high-scale backend systems, I&apos;d love to chat. Drop a message
              and I&apos;ll get back as soon as I can.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4 md:grid-cols-2 md:gap-6"
            >
              <div className="md:col-span-1">
                <label className="text-xs uppercase tracking-wide text-slate-300/80">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-xs uppercase tracking-wide text-slate-300/80">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wide text-slate-300/80">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.9)] hover:brightness-110 transition"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-[11px] text-slate-500 border-t border-cyan-400/10 mt-6">
        <p>
          © {new Date().getFullYear()} Sai Anirudh Reddy Vallapureddy.  All rights reserved.
        </p>
      </footer>
    </div>
  );
}

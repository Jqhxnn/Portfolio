"use client";

import Link from "next/link";

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-top fade show">
          <h2>Things I've Built</h2>
        </div>

        <div className="projects">
          <div className="project fade show">
            <div className="project-top">
              <span className="project-year">2026</span>
              <div className="project-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spigot</span>
              </div>
            </div>

            <h3>DonutCore</h3>

            <p>
              A Minecraft server core with modular features, custom commands,
              and server links integration. I update it sometimes when I have an idea for a feature.
            </p>

            <a
              href="https://github.com/Jqhxnn/Donut.Core"
              target="_blank"
              className="project-link"
            >
              View Project
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

          <div className="project fade show">
            <div className="project-top">
              <span className="project-year">2026</span>
              <div className="project-tags">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">React</span>
              </div>
            </div>

            <h3>Portfolio Website</h3>

            <p>
              This site. My first Next.js project, built while learning the
              framework. I am always improving it as I learn more.
            </p>

            <a
              href="https://github.com/Jqhxnn/Portfolio"
              target="_blank"
              className="project-link"
            >
              View Project
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

          <div className="project fade show">
            <div className="project-top">
              <span className="project-year">2026</span>
              <div className="project-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">NPM</span>
              </div>
            </div>

            <h3>UCCLI</h3>

            <p>
              UCCLI is a terminal application that lets you convert units with simple commands.
            </p>

            <a
              href="https://github.com/Jqhxnn/UCCLI"
              target="_blank"
              className="project-link"
            >
              View Project
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>

        <br \><div style={{ textAlign: "center" }}>
          <Link href="/projects" className="project-link">
            View All Projects
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

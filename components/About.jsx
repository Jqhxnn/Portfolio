"use client";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-top fade show">
          <h2>About</h2>
        </div>

        <div className="about fade show">
          <p className="about-text">
            I started with coding because I wanted to make my own Minecraft plugin. 
            At some point it worked and I saw the endless possibilities coding brings. 
            So I continued learning.
          </p>

          <p className="about-text">
            I’m currently learning Next.js but also trying to optimise the performance of my projects.
          </p>
          
          <p className="about-text">
            One thing I’m proud of is DonutCore, a public Minecraft core plugin I built with custom commands, 
            server links integrations, and a bunch of other server utilities.
          </p>

          <div className="skills">
            <p className="skills-label">Technologies</p>
            <div className="skills-list">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

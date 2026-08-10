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
            I started coding because I wanted to create my own Minecraft plugin and at
            some point it worked and I realised the endless possibilities coding brings.
            After coding the first few plugins I came across YouTube tutorials showing how to code websites and I thought it
            looks easy so I started it and build some projects from tutorials.
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

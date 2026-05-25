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
            Relatively new to JavaScript and web development. Got into coding
            through Minecraft plugins back in the day, started by copying
            tutorials, and now I'm slowly figuring out how everything actually
            works. Currently focused on learning Next.js and getting comfortable
            with the JavaScript ecosystem.
          </p>

          <p className="about-text">
            Still very much a beginner, but excited to keep building and
            learning. I spend way too much time on random projects and not
            enough time finishing them, but I'm trying to be more intentional
            about what I work on. Outside of code, probably doing something
            random.
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
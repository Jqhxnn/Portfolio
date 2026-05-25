"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section-top fade show">
          <h2>Get in Touch</h2>
        </div>

        <div className="footer-content fade show">
          <p>Have a project in mind or just want to chat?</p>
          <p className="learning-tag">Still learning, but always open to connect.</p>

          <a href="mailto:contact@email.com" className="mail">
            contact@email.com
          </a>
        </div>

        <div className="footer-bottom fade show">
          <p className="copyright">© 2026 Jqhxnn</p>

          <div className="social-links">
            <a
              href="https://github.com/Jqhxnn"
              target="_blank"
              className="social-link"
            >
              GitHub
            </a>
          </div>

          <span className="nextjs-credit">Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
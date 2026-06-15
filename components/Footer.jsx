"use client";

import { usePathname } from "next/navigation";

export default function Footer({ showGetInTouch = true, showProjectSection = true }) {
  const pathname = usePathname();
  const isPrivacyPage = pathname === "/privacy";

  return (
    <footer className={`footer${isPrivacyPage ? " footer--minimal" : ""}`}>
      <div className="container">
        {showGetInTouch && (
          <div className="section-top fade show">
            <h2>Get in Touch</h2>
          </div>
        )}

        {showProjectSection && (
          <div className="footer-content fade show">
            <p>Have a project in mind?</p>
            <p className="learning-tag">Still learning, but always open to connect.</p>

            <a href="mailto:jqhxnn@outlook.com" className="mail">
              jqhxnn@outlook.com
            </a>
          </div>
        )}

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
            <a href="/privacy" className="social-link">
              Privacy
            </a>
          </div>

          <span className="nextjs-credit">Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
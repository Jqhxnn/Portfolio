import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy",
  description: "Privacy policy and third-party services used on this portfolio.",
};

export default function Privacy() {
  return (
    <>
      <Navbar />

        <section id="privacy" className="section">
          <div className="container">

            <div className="section-top fade show">
              <h1>Privacy</h1>
            </div>

            <p className="about-text">
              This portfolio uses a small number of third-party services to provide functionality and display content. Some of these services may process technical information such as IP addresses, browser details, and request metadata when you visit the site.
            </p>

            <p className="about-text">
              Where personal data is processed outside the European Union, appropriate safeguards are used in accordance with applicable data protection laws, including the GDPR where relevant.
            </p>

            <h2>Third-Party Services</h2>
						<br />

            <div className="projects">

              <div className="project fade show">
                <div className="project-top">
                  <span className="project-year">Service</span>
                  <div className="project-tags">
                    <span className="tech-tag">Google Fonts</span>
                    <span className="tech-tag">Typography</span>
                  </div>
                </div>

                <h3>Google Fonts</h3>

                <p>
                  This site uses the IBM Plex Mono and Inter typefaces provided by Google Fonts. When fonts are loaded from Google's servers, Google may receive technical information such as your IP address and browser details as part of the request.
                </p>

                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Privacy Policy
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
                  <span className="project-year">Service</span>
                  <div className="project-tags">
                    <span className="tech-tag">GitHub</span>
                    <span className="tech-tag">Profile Content</span>
                  </div>
                </div>

                <h3>GitHub</h3>

                <p>
                  This site fetches public profile information and repository data from GitHub to display open-source projects and contributions. Requests are performed server-side where possible.
                </p>

                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Privacy Policy
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
                  <span className="project-year">Service</span>
                  <div className="project-tags">
                    <span className="tech-tag">Last.fm</span>
                    <span className="tech-tag">Music Integration</span>
                  </div>
                </div>

                <h3>Last.fm</h3>

                <p>
                  This site displays currently playing and recently played tracks using data from Last.fm. These requests are performed server-side only, meaning your browser does not communicate directly with Last.fm through this feature.
                </p>

                <a
                  href="https://www.last.fm/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Privacy Policy
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

              {/* Vercel */}
              <div className="project fade show">
                <div className="project-top">
                  <span className="project-year">Service</span>
                  <div className="project-tags">
                    <span className="tech-tag">Vercel</span>
                    <span className="tech-tag">Hosting & Analytics</span>
                  </div>
                </div>

                <h3>Vercel</h3>

                <p>
                  This site is hosted on Vercel and may use Vercel Analytics and Speed Insights to understand site performance and usage. Vercel may process technical information such as IP addresses, browser characteristics, pages visited, and performance metrics.
                </p>

                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Privacy Policy
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
						<br />

            <h2>Cookies</h2>
            <p className="about-text">
              This site does not use cookies for advertising or user tracking. However, third-party providers may use cookies or similar technologies as part of delivering their services.
            </p>

            <h2>Your Rights</h2>
            <p className="about-text">
              If you are located in the European Economic Area, United Kingdom, or another jurisdiction with applicable privacy rights, you may have the right to request access to, correction of, restriction of, or deletion of personal data processed about you, subject to legal limitations.
            </p>

            <h2>Contact</h2>
            <p className="about-text">
              If you have any questions about privacy or data processing on this site, please contact me using the contact information provided below.
              <br /><br />
              Johann Schneider<br />
              E-Mail:{" "}
              <a href="mailto:jqhxnn@outlook.com" className="mail">
                jqhxnn@outlook.com
              </a>
            </p>

          </div>
        </section>

      <Footer showGetInTouch={false} showProjectSection={false} />
    </>
  );
}
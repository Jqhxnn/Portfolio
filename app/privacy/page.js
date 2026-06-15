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
      <main className="privacy-page">
        <div className="privacy-content fade show">
          <h1 className="page-title">Privacy</h1>
          
          <p className="intro-text">
            This portfolio uses a small number of third-party services to provide functionality and display content. Some of these services may process technical information such as IP addresses, browser details, and request metadata when you visit the site.
          </p>
          
          <p className="intro-text">
            Where personal data is processed outside the European Union, appropriate safeguards are used in accordance with applicable data protection laws, including the GDPR where relevant.
          </p>

          <h2>Third-Party Services</h2>

          <div className="privacy-services-grid">
            <div className="privacy-service-card">
              <div className="privacy-service-header">
                <span className="privacy-service-name">Google Fonts</span>
                <span className="privacy-service-category">Typography</span>
              </div>
              <p className="privacy-service-description">
                This site uses the IBM Plex Mono and Inter typefaces provided by Google Fonts. When fonts are loaded from Google&apos;s servers, Google may receive technical information such as your IP address and browser details as part of the request.
              </p>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="privacy-service-link">
                Privacy Policy →
              </a>
            </div>

            <div className="privacy-service-card">
              <div className="privacy-service-header">
                <span className="privacy-service-name">GitHub</span>
                <span className="privacy-service-category">Profile Content</span>
              </div>
              <p className="privacy-service-description">
                This site fetches public profile information and repository data from GitHub to display open-source projects and contributions. Requests are performed server-side where possible.
              </p>
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="privacy-service-link">
                Privacy Policy →
              </a>
            </div>

            <div className="privacy-service-card">
              <div className="privacy-service-header">
                <span className="privacy-service-name">Last.fm</span>
                <span className="privacy-service-category">Music Integration</span>
              </div>
              <p className="privacy-service-description">
                This site displays currently playing and recently played tracks using data from Last.fm. These requests are performed server-side only, meaning your browser does not communicate directly with Last.fm through this feature.
              </p>
              <a href="https://www.last.fm/legal/privacy" target="_blank" rel="noopener noreferrer" className="privacy-service-link">
                Privacy Policy →
              </a>
            </div>

            <div className="privacy-service-card">
              <div className="privacy-service-header">
                <span className="privacy-service-name">Vercel</span>
                <span className="privacy-service-category">Hosting & Analytics</span>
              </div>
              <p className="privacy-service-description">
                This site is hosted on Vercel and may use Vercel Analytics and Speed Insights to understand site performance and usage. Vercel may process technical information such as IP addresses, browser characteristics, pages visited, and performance metrics.
              </p>
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="privacy-service-link">
                Privacy Policy →
              </a>
            </div>
          </div>

          <h2>Cookies</h2>
          <p className="service-description">
            This site does not use cookies for advertising or user tracking. However, third-party providers may use cookies or similar technologies as part of delivering their services.
          </p>

          <h2>Your Rights</h2>
          <p className="service-description">
            If you are located in the European Economic Area, United Kingdom, or another jurisdiction with applicable privacy rights, you may have the right to request access to, correction of, restriction of, or deletion of personal data processed about you, subject to legal limitations.
          </p>

          <h2>Contact</h2>
          <p className="service-description">
            If you have any questions about privacy or data processing on this site, please contact me using the contact information provided below.
            <br /><br />
						Johann Schneider<br />
            E-Mail: <a href="mailto:jqhxnn@outlook.com" className="mail">
              jqhxnn@outlook.com
            </a>
          </p>
        </div>
      </main>
      <Footer showGetInTouch={false} showProjectSection={false} />
    </>
  );
}

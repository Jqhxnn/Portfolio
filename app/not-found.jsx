import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
    title: "404 Not Found",
    description: "This page does not exist or has been moved.",
};

export default function NotFound() {
    return (
        <>
            <Navbar />

            <section className="not-found">
                <div className="not-found-box">
                    <p className="not-found-command">$ cd /404</p>

                    <h1>404</h1>

                    <p className="not-found-title">
                        page not found
                    </p>

                    <p className="not-found-description">
                        This page doesn&apos;t exist or has been moved.
                    </p>

                    <div className="not-found-actions">
                        <a href="/" className="btn">
                            Back home
                        </a>

                        <a
                            href="https://github.com/Jqhxnn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            GitHub
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

            </section>
            <Footer />
        </>
    );
}
"use client";

import { useEffect, useState } from "react";
import Music from "./Music";

export default function Hero() {
  const [waveCount, setWaveCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasWaved, setHasWaved] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const waved = localStorage.getItem("waved");
    if (waved) {
      setHasWaved(true);
      const savedCount = localStorage.getItem("waveCount");
      if (savedCount) {
        setWaveCount(parseInt(savedCount));
      }
    }
  }, []);

  async function handleWave() {
    if (hasWaved) return;

    setLoading(true);
    setError(null);

    try {
      console.log("Waving...");
      const res = await fetch("/api/wave", {
        method: "POST",
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      console.log("Wave count:", data.count);

      setWaveCount(data.count);
      setHasWaved(true);
      localStorage.setItem("waved", "true");
      localStorage.setItem("waveCount", data.count.toString());
    } catch (err) {
      console.error("Wave failed:", err);
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <section className="hero">
      <div className="hero-box fade show">
        <h1>Jqhxnn</h1>

        <p className="hero-role">
          web developer · minecraft plugin dev
        </p>

        <p className="hero-desc">
          Focused on Minecraft infrastructure, performance, and fast web applications.
        </p>

        <p className="location">Germany</p>

        <div className="hero-buttons">
          <a
            href="https://github.com/Jqhxnn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.09c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
            GitHub
          </a>

          <button
            onClick={handleWave}
            disabled={loading || hasWaved}
            className="btn"
          >
            {loading
              ? "..."
              : hasWaved && waveCount !== null
              ? `you're #${waveCount}`
              : "👋 Wave"}
          </button>
        </div>

        <Music />

        {error && (
          <p className="wave-error" style={{ color: "red", marginTop: "10px" }}>
            Error: {error}
          </p>
        )}
      </div>
    </section>
  );
}

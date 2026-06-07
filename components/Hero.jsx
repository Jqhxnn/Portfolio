"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [waveCount, setWaveCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasWaved, setHasWaved] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("waved")) {
      setHasWaved(true);
    }
  }, []);

  async function handleWave() {
    if (hasWaved) return;

    setLoading(true);

    try {
      const res = await fetch("/api/wave", {
        method: "POST",
      });

      const data = await res.json();

      setWaveCount(data.count);
      setHasWaved(true);
      localStorage.setItem("waved", "true");
    } catch (err) {
      console.error("Wave failed:", err);
    }

    setLoading(false);
  }

  return (
    <section className="hero">
      <div className="hero-box fade show">
        <h1>Jqhxnn</h1>

        <p className="hero-desc">
          Started coding through Minecraft plugins. Now exploring web
          development with Next.js.
        </p>

        <p className="location">Germany</p>

        <div className="hero-buttons">
          <a
            href="https://github.com/Jqhxnn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub
          </a>

          <button
            onClick={handleWave}
            disabled={loading || hasWaved}
            className="btn"
          >
            {loading
              ? "..."
              : hasWaved
              ? "✔ Waved"
              : "👋 Wave"}
          </button>
        </div>

        {waveCount !== null && (
          <p className="wave-text">
            You are wave #{waveCount} 👋
          </p>
        )}
      </div>
    </section>
  );
}
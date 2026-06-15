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
              : hasWaved && waveCount !== null
              ? `You are Wave #${waveCount} 👋`
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

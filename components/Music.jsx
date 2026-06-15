'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Music() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrack = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/lastfm');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setTrack(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrack();
  }, [fetchTrack]);

  const isPlaying = track?.['@attr']?.nowplaying === 'true';

  return (
    <div className="music-widget fade show">
      <div className="music-header">
        <span className="music-label">LAST.FM</span>
        <div className="music-status">
          {isPlaying ? (
            <span className="playing-indicator">◉</span>
          ) : (
            <span className="muted">○</span>
          )}
          <span>{isPlaying ? 'now playing' : 'recently played'}</span>
        </div>
        <button onClick={fetchTrack} className="refresh-btn" aria-label="Refresh">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
          </svg>
        </button>
      </div>
      {loading ? (
        <div className="music-skeleton">
          <div className="skeleton-art"></div>
          <div className="skeleton-text">
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>
        </div>
      ) : error ? (
        <div className="music-error">
          <span className="muted">Failed to load</span>
        </div>
      ) : track ? (
        <div className="music-track">
          {track.image?.[2]?.['#text'] && (
            <img src={track.image[2]['#text']} alt="" className="album-art" />
          )}
          <div className="track-info">
            <a href={track.url} target="_blank" rel="noopener noreferrer" className="track-name">
              {track.name}
            </a>
            <span className="artist-name">{track.artist?.['#text'] || track.artist}</span>
            {track.album && <span className="album-name">{track.album}</span>}
          </div>
        </div>
      ) : (
        <div className="music-empty">
          <span className="muted">Not playing</span>
        </div>
      )}
    </div>
  );
}

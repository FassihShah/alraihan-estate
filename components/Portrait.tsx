"use client";

import { useState } from "react";

export default function Portrait({ hero = false, compact = false, note }: { hero?: boolean; compact?: boolean; note: string }) {
  const [loaded, setLoaded] = useState(true);
  return (
    <div className={`portrait-placeholder ${compact ? "portrait-compact" : ""} ${loaded ? "has-photo" : ""}`}>
      {loaded && (
        <img
          src="/images/founder-standing-transparent.png"
          alt="Alraihan real estate advisor"
          className={`portrait-image ${hero ? "hero-photo" : ""} ${compact ? "compact-photo" : ""}`}
          onError={() => setLoaded(false)}
        />
      )}
      <span className="portrait-note">
        {note}
        <br />
        <span className="font-normal opacity-70">public/images/founder-standing-transparent.png</span>
      </span>
    </div>
  );
}

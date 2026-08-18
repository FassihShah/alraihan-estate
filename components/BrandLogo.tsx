"use client";

import { useState } from "react";

export default function BrandLogo() {
  const [loaded, setLoaded] = useState(true);
  return (
    <>
      {loaded && (
        <img
          src="/images/alraihan-logo.png"
          alt="ALRAIHAN REAL ESTATE"
          className="logo-image"
          onError={() => setLoaded(false)}
        />
      )}
      {!loaded && (
        <span className="flex items-center gap-2 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6b421f]/35 text-lg font-serif font-bold text-[#6b421f]">
            R
          </span>
          <span>
            <b className="block text-[.77rem] tracking-[.16em] text-[#412814]">ALRAIHAN</b>
            <small className="block text-[.6rem] tracking-[.12em] text-[#865c36]">REAL ESTATE</small>
          </span>
        </span>
      )}
    </>
  );
}

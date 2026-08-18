"use client";

import { useState } from "react";
import { Building2 } from "lucide-react";

export default function OfficePhoto({ fill = false }: { fill?: boolean }) {
  const [loaded, setLoaded] = useState(true);

  if (fill) {
    return loaded ? (
      <img
        src="/images/alraihan-office.png"
        alt="ALRAIHAN REAL ESTATE office"
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setLoaded(false)}
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#6b421f] text-center text-[#f3e7cf]">
        <Building2 size={36} />
        <span className="mt-4 text-sm font-bold">ALRAIHAN REAL ESTATE</span>
      </div>
    );
  }

  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#6b421f]">
      {loaded && (
        <img
          src="/images/alraihan-office.png"
          alt="ALRAIHAN REAL ESTATE office"
          className="office-photo"
          onError={() => setLoaded(false)}
        />
      )}
      {!loaded && (
        <div className="flex min-h-[300px] flex-col items-center justify-center text-center text-[#f3e7cf]">
          <Building2 size={36} />
          <span className="mt-4 text-sm font-bold">ALRAIHAN REAL ESTATE</span>
        </div>
      )}
    </div>
  );
}

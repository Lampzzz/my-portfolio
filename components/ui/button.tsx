import React from "react";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary px-8 py-3">
      <span className="text-neutral-950 font-anton-sans text-lg">
        {children}
      </span>
    </button>
  );
}

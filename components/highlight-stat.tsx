import React from "react";

export function HighlightStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-end space-y-2">
      <h1 className="text-primary text-4xl font-bold font-anton-sans">
        {value}
      </h1>
      <p className="text-neutral-400 ">{label}</p>
    </div>
  );
}

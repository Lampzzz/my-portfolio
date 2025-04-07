import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white h-screen flex items-center justify-center w-full">
      <div className="">{children}</div>
    </main>
  );
};

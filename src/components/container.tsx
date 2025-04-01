import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white h-screen flex items-center justify-center">
      <div>{children}</div>
    </main>
  );
};

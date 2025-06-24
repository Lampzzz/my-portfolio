import { AppLayout } from "@/components/layout/app-layout";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import React from "react";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <About />
      <div className="mt-40">
        <TechStack />
      </div>
    </AppLayout>
  );
}

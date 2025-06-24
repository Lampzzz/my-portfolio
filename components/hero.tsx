import React from "react";
import { SectionLayout } from "./layout/section-layout";
import { HighlightStat } from "./highlight-stat";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="h-screen w-full">
      <div className="max-w-7xl mx-auto py-20 h-full">
        <div className="grid grid-cols-12 h-full ml-16">
          {/* left side */}
          <div className="flex flex-col justify-center items-start h-full col-span-6 space-y-6">
            <div>
              <h1 className="text-8xl font-bold font-anton-sans text-primary">
                FULL STACK
              </h1>
              <h1 className="ml-8 text-8xl font-bold font-anton-sans text-light-gray">
                DEVELOPER
              </h1>
            </div>
            <p className="text-lg max-w-xl text-left text-neutral-400">
              Hi! I&apos;m{" "}
              <span className="font-bold text-light-gray">James</span>, a full
              stack web and mobile developer committed to delivering
              high-quality, scalable digital solutions that drive user
              engagement and business growth.
            </p>
            <Button>CONTACT ME</Button>
          </div>
          {/* right side */}
          <div className="flex flex-col justify-end items-end h-full col-span-6 space-y-6 mr-4">
            <HighlightStat value="2" label="Years of Learning" />
            <HighlightStat value="2" label="Tech Awards Received" />
            <HighlightStat value="5" label="Completed Projects" />
          </div>
        </div>
      </div>
    </div>
  );
}

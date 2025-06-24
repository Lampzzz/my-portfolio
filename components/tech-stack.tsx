import React from "react";
import { SectionLayout } from "./layout/section-layout";
import Shuriken from "./shuriken";

export default function TechStack() {
  return (
    <SectionLayout>
      <div className="flex items-center space-x-2">
        <h1 className="font-normal text-xl mb-8 text-white-gray">MY STACK</h1>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5">
            <h1 className="text-4xl font-bold font-anton-sans text-light-gray">
              FRONTEND
            </h1>
          </div>
          <div className="col-span-5"></div>
        </div>
        <h1 className="text-4xl font-bold font-anton-sans text-light-gray">
          BACKEND
        </h1>
        <h1 className="text-4xl font-bold font-anton-sans text-light-gray">
          DATABASE
        </h1>
        <h1 className="text-4xl font-bold font-anton-sans text-light-gray">
          TOOLS
        </h1>
      </div>
    </SectionLayout>
  );
}

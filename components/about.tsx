import React from "react";
import { SectionLayout } from "./layout/section-layout";

export default function About() {
  return (
    <SectionLayout>
      <div className="mb-20">
        <h1 className="text-5xl font-roboto font-light text-white-gray">
          I follow a user centered development approach, ensuring that every
          website I build is intuitive, accessible, and tailored to deliver a
          seamless experience for its users.
        </h1>
      </div>

      <p className="mb-2 text-neutral-400">This is me.</p>
      <hr className="border-neutral-800 mb-8" />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5">
          <h1 className="text-5xl text-white-gray">Hi, I&apos;m James</h1>
        </div>
        <div className="space-y-2 col-span-5 text-neutral-400">
          <p>
            I'm a web developer dedicated to turning ideas into creative and
            scalable digital solutions. I specialize in building seamless,
            user-friendly experiences that work flawlessly across devices.
          </p>
          <p>
            My approach focuses on delivering high-performing, maintainable
            websites tailored to both user needs and business objectives. By
            prioritizing performance, accessibility, and responsiveness, I
            strive to create experiences that not only engage users but also
            drive meaningful results.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}

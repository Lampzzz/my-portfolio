"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-in",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up-and-fade", {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-out",
          trigger: container.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });

      tl.to(".slide-up-and-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: container },
  );

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
          I follow a user centered approach, building solutions that balance
          usability with performance, security, and scalability.
        </h2>

        <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
          This is me.
        </p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <p className="text-5xl slide-up-and-fade">Hi, I&apos;m James.</p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-[450px]">
              <p className="slide-up-and-fade">
                I&apos;m a full stack web and mobile developer dedicated to
                turning ideas into creative solutions. I specialize in creating
                seamless and intuitive user experiences.
              </p>
              <p className="mt-3 slide-up-and-fade">
                My approach involves building complete, end-to-end applications
                from crafting smooth, responsive interfaces to developing
                scalable and secure back-end systems. I aim to ensure that every
                layer of the stack works harmoniously to deliver seamless user
                experiences and reliable performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

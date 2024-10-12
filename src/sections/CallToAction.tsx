"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b to-white from-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Be the First to</h2>
          <p className="section-description mt-5">
            Join our exclusive Demo for early access to Chat with AI powered
            resume builder.
          </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a href="/waitlist">
            <button className="btn btn-primary">Join Waitlist</button>
          </a>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

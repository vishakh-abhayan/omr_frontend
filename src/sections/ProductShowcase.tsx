"use client";

import productImage from "@/assets/ProductImage.webp";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, response, SaaS
            website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="product Image"
            className="mt-10"
            placeholder="blur"
            blurDataURL="data:..."
            width={2505}
            height={1566}
            quality={75}
            priority={false}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

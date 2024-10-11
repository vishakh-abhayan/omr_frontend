import { CallToAction } from "@/sections/CallToAction";
import dynamic from "next/dynamic";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

const DynamicProductShowcase = dynamic(
  () => import("@/sections/ProductShowcase").then((mod) => mod.ProductShowcase),
  {
    loading: () => <div></div>,
    ssr: false, // Use this if the component relies on browser APIs
  }
);

const DynamicCallToAction = dynamic(
  () => import("@/sections/CallToAction").then((mod) => mod.CallToAction),
  {
    loading: () => <div></div>,
  }
);

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <LogoTicker /> */}
      <DynamicProductShowcase />
      {/* <DynamicPricing /> */}
      {/* <DynamicTestimonials /> */}
      <DynamicCallToAction />
      <Footer />
    </main>
  );
}

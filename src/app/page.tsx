import { CallToAction } from "@/sections/CallToAction";
import dynamic from "next/dynamic";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import FAQSection from "@/sections/FAQ";
import FeaturesSection from "@/sections/FeaturesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductShowcase />
      <FeaturesSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </main>
  );
}

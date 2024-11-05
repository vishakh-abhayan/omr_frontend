import productImage from "@/assets/ProductImage.webp";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-12 md:py-24 overflow-x-clip">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="tag">AI Powered Resume Builder</div>
          </div>
          <h2 className="section-title mt-5">Chat. Create. Career</h2>
          <p className="section-description mt-5">
            Create a professional resume in minutes with our AI driven chat
            based resume builder.
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto mt-10">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg overflow-hidden"
              src="https://www.youtube.com/embed/g78BEQ1ADBo?si=RTD1-ZPaZxaC0ptP&autoplay=1&mute=1&loop=1&playlist=g78BEQ1ADBo&controls=0"
              title="Resume Builder Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

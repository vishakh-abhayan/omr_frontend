import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.webp";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 h-screen pb-20 md:pt-5 md:pb-10 bg-gradient-to-b to-white from-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Coming soon</div>
            {/* Preconnect to critical origins */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />

            {/* Use semantic HTML for better LCP */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Chat Your Way to a Perfect Resume
            </h1>

            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Build for job seekers, powered by advanced AI technology.
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <a aria-label="Join our early access waitlist" href="/waitlist">
                  Get free Demo
                </a>
              </button>

              <button className="inline-flex items-center px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <a aria-label="About OhMyResume" href="/about">
                  About
                </a>
                <ArrowIcon className="h-5 w-5 ml-1" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage.src}
              alt="Create a professional resume with AI"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              height={648} // Optimized dimensions
              width={800} // Optimized dimensions
              loading="eager" // Force priority loading
              priority={true}
              quality={85} // Slightly higher quality for hero image
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add appropriate blur data URL
              sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

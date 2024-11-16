import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import productImage from "@/assets/ProductImage.webp";

export const Hero = () => {
  return (
    <section className="pt-8 h-screen pb-20 md:pt-5 md:pb-10 bg-gradient-to-b  to-white from-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Comming soon</div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tigher bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Chat Your Way to a Perfect Resume
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Build for job seekers, powered by advanced AI technology.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">
                <a
                  aria-label="Join our early access waitlist"
                  href="https://demo.ohmyresume.com/"
                >
                  Get free Demo
                </a>
              </button>
              <button className="btn btn-text gap-1">
                <a aria-label="About OhMyResume" href="/about">
                  About
                </a>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={productImage}
              alt="Create a professional resume in minutes with our AI driven chat
              based resume builder."
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              height={1000}
              width={1000}
              blurDataURL="data:..."
              placeholder="blur"
              priority
              quality={75}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

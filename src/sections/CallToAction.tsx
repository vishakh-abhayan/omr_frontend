import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b to-white from-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Get Started Today</h2>
          <p className="section-description mt-5">
            Experience our AI-powered resume builder. Chat with AI and craft the
            perfect resume effortlessly
          </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a aria-label="Join our early access waitlist" href="/waitlist">
            <button className="btn btn-primary">Try Demo</button>
          </a>
          <button className="btn btn-text gap-1">
            <a aria-label="About OhMyResume" href="/about">
              About
            </a>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

import { Header } from "@/sections/Header";
import { Metadata } from "next";
import { generateBaseMetadata } from "../../utils/metadata";

export const metadata: Metadata = generateBaseMetadata("About");

const AboutPage = () => {
  return (
    <section>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#D2DCFF] to-white flex flex-col justify-center items-center px-6 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
          About
        </h1>
        <p className="text-xl text-[#010d3e] tracking-tight leading-relaxed max-w-3xl lg:max-w-2xl mt-4 mb-8 px-4 sm:px-8">
          OhMyResume is transforming the way job seekers create and showcase
          their professional profiles. Our platform leverages cutting-edge AI
          technology to offer a seamless, chat-driven resume-building
          experience, uniquely designed to guide users step-by-step in crafting
          resumes that stand out in today&apos;s competitive job market.
          <br />
          <br />
          Founded with a mission to simplify the resume creation process,
          OhMyResume is built for those seeking a powerful yet intuitive tool to
          highlight their skills, achievements, and career aspirations. Unlike
          traditional resume builders, OhMyResume engages users in an
          interactive conversation, making it easy to personalize each resume
          based on the user&apos;s goals, industry, and role requirements.
          <br />
          <br />
          This ensures that every resume is not only professional and visually
          appealing but also strategically tailored to grab the attention of
          recruiters. Our platform prioritizes user privacy by keeping all data
          processing on the user&apos;s device, providing a secure and private
          experience without the need for sign-ups or data uploads.
          <br />
          <br />
          With features such as customizable templates, personalized
          suggestions, and intuitive design tools, OhMyResume empowers job
          seekers to build resumes that effectively communicate their value.
          Join the OhMyResume community today and take the first step towards
          building a career that reflects your true potential. We&apos;re here
          to make your professional journey smoother, faster, and more
          successful.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;

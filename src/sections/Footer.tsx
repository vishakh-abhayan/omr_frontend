import logo from "@/assets/SaaSLogo.webp";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms and Condition</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://x.com/ohmyresume30969">
            <SocialX />
          </a>
          <a href="https://www.instagram.com/ohmy.resume/">
            <SocialInsta />
          </a>
          <a href="https://www.linkedin.com/company/ohmyresume/">
            <SocialLinkedIn />
          </a>
          <a href="https://www.youtube.com/@ohmyresume">
            <SocialYoutube />
          </a>
        </div>
        <p className="mt-6">
          &copy; 2024 Ohmyresume Inc. All rights reserved.
          <br />
        </p>
      </div>
    </footer>
  );
};

"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import Logo from "@/assets/SaaSLogo.webp";
import av1 from "@/assets/avatar-1.png";
import av2 from "@/assets/avatar-2.png";
import av3 from "@/assets/avatar-3.png";
import av4 from "@/assets/avatar-4.png";
import { submitWaitlist } from "../app/actions";

const WaitlistForm = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const result = await submitWaitlist(email);
      if (result.success) {
        setStatus("Thank you for joining the waitlist!");
        setEmail("");
        setIsSubmitted(true);
      } else {
        setStatus(`An error occurred: ${result.message}`);
        console.error("Submission error:", result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b to-[#D2DCFF] from-white flex justify-center items-center">
      <div className="p-8 w-full max-w-xl text-center">
        <Image
          src={Logo}
          alt="OhMyResume Logo"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tigher bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
          Join for Demo
        </h1>
        <p className="text-lg md:text-xl text-[#010d3e] tracking-tight mt-6 mb-6">
          Cool stuff happening behind the scenes. Get the first look; be the
          early bird
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-4 px-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
              <button type="submit" className="btn btn-primary text-xl">
                Join
              </button>
            </div>
          </form>
        ) : (
          <div className="mb-6 p-6 border-2 border-dashed border-white bg-white/50 rounded-lg shadow-sm backdrop-blur-sm">
            <p className="text-lg text-gray-800">{status}</p>
          </div>
        )}

        <div className="flex items-center justify-center">
          <div className="flex -space-x-1">
            <Image
              src={av1}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full border-white"
            />
            <Image
              src={av2}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full border-white"
            />
            <Image
              src={av3}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full border-white"
            />
            <Image
              src={av4}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full border-1 border-white"
            />
          </div>
          <div className="ml-2 flex items-center">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            <span className="text-sm text-gray-600">+1201 other onboard</span>
          </div>
        </div>

        {!isSubmitted && status && (
          <p className="mt-4 text-sm text-gray-600">{status}</p>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;

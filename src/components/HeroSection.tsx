"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const logos = [
    "Logoipsum-1.png",
    "Logoipsum-2.png",
    "Logoipsum-3.png",
    "Logoipsum-4.png",
    "Logoipsum-5.png",
  ];

  return (
    <section className="relative flex flex-col w-full justify-center items-center mx-auto bg-primary-dark">
      <div className="flex items-center justify-center pt-[76px] py-18 pb-18 w-full max-w-[1440px] min-h-[786px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1248px] items-center justify-between gap-10 mx-auto">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start gap-9 w-full max-w-[632px] h-[544px]">
            {/* Text Content */}
            <div className="flex flex-col items-start gap-5 w-full">
              {/* Tagline */}
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-blue-400 rotate-45"></div>
                <span className="font-inter italic font-medium text-sm leading-5 bg-linear-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                  MODERN SPORTS SOFTWARE
                </span>
              </div>

              {/* Main Heading */}
              <div className="flex flex-col items-start w-full">
                <h1 className="font-inter font-bold text-[60px] leading-[60px] text-[#FAFAFA] w-full">
                  SCALE YOUR TRAINING BUSINESS.
                </h1>
                <div className="flex flex-row justify-center items-start bg-blue-600 w-fit">
                  <span className="font-inter font-bold text-[60px] leading-[60px] text-[#FAFAFA]">
                    MAXIMIZE YOUR
                  </span>
                </div>
                <div className="flex flex-row justify-center items-start bg-blue-600 w-fit">
                  <span className="font-inter font-bold text-[60px] leading-[60px] text-[#FAFAFA]">
                    IMPACT.
                  </span>
                </div>
              </div>

              {/* Supporting text */}
              <p className="font-inter font-normal text-lg leading-7 text-[#A1A1AA] w-full">
                From private sessions to full academies, Underdog simplifies scheduling, payments, and growth - so you can scale without limits.
              </p>
            </div>

            {/* Email capture */}
            <form onSubmit={handleSubmit} className="flex flex-row items-start gap-3 w-full max-w-[480px] h-12">
              {/* Input field */}
              <div className="flex flex-col items-start flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex flex-row items-center px-[14px] py-3 gap-2 w-full h-12 bg-white border border-[#D5D7DA] shadow-[0px_1px_2px_rgba(10,13,18,0.05)] rounded-lg font-inter font-normal text-base leading-6 text-[#717680] placeholder:text-[#717680] focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex flex-row justify-center items-center px-6 py-[2px] gap-5 w-[150px] h-12 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <span className="font-inter font-medium text-sm leading-[130%] uppercase text-white">
                  JOIN WAITLIST
                </span>
              </button>
            </form>

            {/* Social Proof */}
            <div className="flex flex-col justify-center items-start gap-3 w-[200px] h-[68px]">
              <p className="font-inter font-normal text-sm leading-5 text-[#A1A1AA]">
                Seamless Integrations.
              </p>
              
              {/* Social Proof Icons */}
              <div className="flex flex-row items-center gap-1 w-[200px] h-9">
                {/* Google Icon Container */}
                <div className="flex flex-col justify-center items-center px-[6px] py-[2px] gap-2 w-16 h-9 bg-white/10 rounded-lg">
                  <Image src="/svgs/GoogleCalendar.svg" alt="Google" width={20} height={20} />
                </div>

                {/* Apple Pay Icon Container */}
                <div className="flex flex-col justify-center items-center px-[6px] py-[2px] gap-2 w-16 h-9 bg-white/10 rounded-lg">
                  <Image src="/svgs/ApplePay.svg" alt="Apple Pay" width={34} height={16} />
                </div>

                {/* Stripe Icon Container */}
                <div className="flex flex-col justify-center items-center px-[6px] py-[2px] gap-2 w-16 h-9 bg-white/10 rounded-lg">
                  <Image src="/svgs/Stripe.svg" alt="Stripe" width={40} height={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
              <Image src="/images/Hero.png" alt="Dashboard Preview" width={1080} height={812} className="w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="w-full overflow-hidden">
  <div className="relative flex flex-col justify-center items-center gap-10 py-12 min-h-[196px]">
    <p className="text-center text-white/40 text-sm">
      Trusted by Trainers and Academies Nationwide
    </p>

    {/* Gradient edges */}
    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#070C14] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#070C14] to-transparent z-10 pointer-events-none" />

    {/* Smooth Marquee */}
    <div className="relative flex w-full overflow-hidden">
      <div className="flex animate-marquee gap-20 min-w-full">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Image
              src={`/logo/sliderLogos/${logo}`}
              alt={logo.replace(".png", "")}
              width={140}
              height={24}
              className="h-auto w-auto max-h-[24px] object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  </div>

 <style jsx>{`
    .marquee-track {
          width: max-content;
          white-space: nowrap;
        }
    
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-marquee {
      display: flex;
      animation: marquee 25s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
</div>

    </section>
  );
}

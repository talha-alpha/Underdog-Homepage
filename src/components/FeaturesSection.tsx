"use client";

import { useState } from "react";

type Role = "PARENTS" | "TRAINERS" | "ACADEMIES";

interface Feature {
  title: string;
  description: string;
  bg: string;
  img: string;
}

const features: Record<Role, Feature[]> = {
  PARENTS: [
    {
      title: "INSTANT BOOKING",
      description: "Find the numbers that matter for reports you’ll actually use.",
      bg: "bg-gradient-to-b from-[#1A484E] to-[#A1DBE3]",
      img: "/images/Feature/Parent1.png",
    },
    {
      title: "SECURE CHECKOUT",
      description: "Find the numbers that matter for reports you’ll actually use.",
      bg: "bg-gradient-to-b from-[#182947] to-[#98BEFF]",
      img: "/images/Feature/Parent2.png",
    },
    {
      title: "SMART SCHEDULING",
      description: "Find the numbers that matter for reports you’ll actually use.",
      bg: "bg-gradient-to-b from-[#4F5317] to-[#EBF47E]",
      img: "/images/Feature/Parent3.png",
    },
    {
      title: "CALENDAR SYNC",
      description: "Find the numbers that matter for reports you’ll actually use.",
      bg: "bg-gradient-to-b from-[#421A4E] to-[#D4A1E3]",
      img: "/images/Feature/Parent4.png",
    },
  ],
  TRAINERS: [
    {
      title: "INSTANT SETUP",
      description: "Get your profile, services, and schedule online in minutes, not hours.",
      bg: "bg-gradient-to-b from-[#015F91] to-[#7CD4FD]",
      img: "/images/Feature/Trainer1.png",
    },
    {
      title: "EASY PAYMENTS",
      description: "Pay for sessions securely with industry-standard protection.",
      bg: "bg-gradient-to-b from-[#052E16] to-[#86EFAC]",
      img: "/images/Feature/Trainer2.png",
    },
    {
      title: "SMART DASHBOARDS",
      description: "Gain instant insights into your bookings, and clients at a glance.",
      bg: "bg-gradient-to-b from-[#042F2E] to-[#2DD4BF]",
      img: "/images/Feature/Trainer3.png",
    },
    {
      title: "PROGRESS TRACKING",
      description: "Never miss a session! Automatically add bookings to your digital calendar.",
      bg: "bg-gradient-to-b from-[#4A044E] to-[#F0ABFC]",
      img: "/images/Feature/Trainer4.png",
    },
  ],
  ACADEMIES: [
    {
      title: "ALL-IN-ONE",
      description: "Manage everything—registration, payments, and staff—in one platform.",
      bg: "bg-gradient-to-b from-[#172554] to-[#93C5FD]",
      img: "/images/Feature/Academies1.png",
    },
    {
      title: "BULK SCHEDULING",
      description: "Schedule whole seasons or multiple camps for all teams in minutes.",
      bg: "bg-gradient-to-b from-[#1E1B4B] to-[#A5B4FC]",
      img: "/images/Feature/Academies2.png",
    },
    {
      title: "FAST PAYOUTS",
      description: "Get your funds quickly and receive clear reports on all transactions.",
      bg: "bg-gradient-to-b from-[#022C22] to-[#6EE7B7]",
      img: "/images/Feature/Academies3.png",
    },
    {
      title: "EASY SCALING",
      description: "Add new programs and locations easily without any system limits.",
      bg: "bg-gradient-to-b from-[#3B0764] to-[#D8B4FE]",
      img: "/images/Feature/Academies4.png",
    },
  ],
};

export default function FeaturesSection() {
  const [activeRole, setActiveRole] = useState<Role>("PARENTS");

  return (
    <section className="py-20 bg-primary-dark" id="features">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-400 leading-tight">
            BUILT FOR EVERY SPORTS TRAINER,
            <br />
            <span className="text-white">ACADEMY, AND PARENT.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl">
            Underdog gives each role the tools they need - from instant booking and secure payments to smart scheduling and growth dashboards.
          </p>

          {/* Role Tabs */}
          <div className="flex justify-center mt-4">
            <div className="inline-flex items-center justify-between bg-white/5 rounded-full p-1">
              {(["PARENTS", "TRAINERS", "ACADEMIES"] as Role[]).map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${activeRole === role
                    ? "bg-zinc-700 text-white"
                    : "text-white/60 hover:text-white"
                    }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features[activeRole].map((feature, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 flex flex-col gap-4 text-zinc-200 ${feature.bg} h-[384px] transition-all duration-300`}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-extrabold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex justify-center items-center flex-1">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="h-[200px] object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button
            className="flex justify-between items-center gap-2 bg-[#2563EB] text-white p-0.5 rounded-xl font-medium hover:bg-[#1E4FCB] transition-all duration-200 w-[192px] h-[48px] cursor-pointer"
          >
            <p className="flex justify-center w-full text-sm font-medium">JOIN WAITLIST</p>
            <div className="flex items-center justify-center bg-[#1E4FCB] rounded-xl w-11 min-w-11 h-11 p-1">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16602 10H15.8327"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.16602L15.8333 9.99935L10 15.8327"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}

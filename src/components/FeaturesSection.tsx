"use client";

import { useState } from "react";

type Role = "PARENTS" | "TRAINERS" | "ACADEMIES";

interface Feature {
  title: string;
  description: string;
}

const features: Record<Role, Feature[]> = {
  PARENTS: [
    {
      title: "INSTANT BOOKING",
      description: "Find the numbers that matter for reports you'll actually use.",
    },
    {
      title: "SECURE CHECKOUT",
      description: "Pay for sessions securely with industry-standard protection.",
    },
    {
      title: "SMART SCHEDULING",
      description: "Gain instant insights into your bookings, and clients at a glance.",
    },
    {
      title: "CALENDAR SYNC",
      description: "Never miss a session! Automatically add bookings to your digital calendar.",
    },
  ],
  TRAINERS: [
    {
      title: "INSTANT SETUP",
      description: "Get your profile, services, and schedule online in minutes, not hours.",
    },
    {
      title: "EASY PAYMENTS",
      description: "Pay for sessions securely with industry-standard protection.",
    },
    {
      title: "SMART DASHBOARDS",
      description: "Gain instant insights into your bookings, and clients at a glance.",
    },
    {
      title: "PROGRESS TRACKING",
      description: "Track client progress and session history effortlessly.",
    },
  ],
  ACADEMIES: [
    {
      title: "ALL-IN-ONE",
      description: "Manage everything—registration, payments, and staff—in one platform.",
    },
    {
      title: "BULK SCHEDULING",
      description: "Schedule whole seasons or multiple camps for all teams in minutes.",
    },
    {
      title: "FAST PAYOUTS",
      description: "Get your funds quickly and receive clear reports on all transactions.",
    },
    {
      title: "EASY SCALING",
      description: "Add new programs and locations easily without any system limits.",
    },
  ],
};

export default function FeaturesSection() {
  const [activeRole, setActiveRole] = useState<Role>("PARENTS");

  return (
    <section className="py-20 bg-primary-dark" id="features">
      <div className="flex flex-col items-center justify-center mx-auto gap-12 px-6 lg:px-24">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-400 mb-6 leading-tight">
            BUILT FOR EVERY SPORTS TRAINER,
            <br />
            <span className="text-white">ACADEMY, AND PARENT.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Underdog gives each role the tools they need - from instant booking and secure payments to smart scheduling and growth dashboards.
          </p>

          {/* Role Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-between bg-white/5 rounded-full w-[363px] min-h-8">
              {(["PARENTS", "TRAINERS", "ACADEMIES"] as Role[]).map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`flex items-center justify-center w-full h-full rounded-full px-6 transition-all ${activeRole === role
                      ? "bg-zinc-700 text-white"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  <p className="flex w-full justify-center text-sm font-medium px-6 py-0.5">{role}</p>
                </button>
              ))}
            </div>
          </div>
        </div>


        {/* Features Section */}
        <div className="w-full flex flex-col items-center justify-center py-20">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1248px] w-full px-6">
            {[
              {
                title: "INSTANT BOOKING",
                desc: "Find the numbers that matter for reports you'll actually use.",
                bg: "bg-gradient-to-b from-[#1A484E] to-[#A1DBE3]",
                img: "/images/Feature/Parent-Feature1.png",
              },
              {
                title: "SECURE CHECKOUT",
                desc: "Find the numbers that matter for reports you'll actually use.",
                bg: "bg-gradient-to-b from-[#182947] to-[#98BEFF]",
                img: "/images/Feature/Parent-Feature2.png",
              },
              {
                title: "SMART SCHEDULING",
                desc: "Find the numbers that matter for reports you'll actually use.",
                bg: "bg-gradient-to-b from-[#4F5317] to-[#EBF47E]",
                img: "/images/Feature/Parent-Feature3.png",
              },
              {
                title: "CALENDAR SYNC",
                desc: "Find the numbers that matter for reports you'll actually use.",
                bg: "bg-gradient-to-b from-[#421A4E] to-[#D4A1E3]",
                img: "/images/Feature/Parent-Feature4.png",
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 flex flex-col gap-6 justify-center text-zinc-200 ${f.bg} h-[384px]`}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-extrabold">{f.title}</h3>
                  <p className="text-sm leading-relaxed">{f.desc}</p>
                </div>
                <div className="flex justify-center mt-6">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-[236px] object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <button className="flex items-center justify-center gap-3 bg-[#2563EB] text-white px-6 md:px-8 py-3 rounded-md font-medium hover:bg-[#1E4FCB] transition-all duration-200">
              JOIN WAITLIST
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

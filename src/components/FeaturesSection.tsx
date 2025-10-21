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
      <div className=" mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            BUILT FOR EVERY SPORTS
            <br />
            TRAINER, ACADEMY, AND PARENT.
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Underdog gives each role the tools they need - from instant booking and secure payments to smart scheduling and growth dashboards.
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-full p-1 border border-white/10">
            {(["PARENTS", "TRAINERS", "ACADEMIES"] as Role[]).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeRole === role
                    ? "bg-blue-600 text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features[activeRole].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            JOIN WAITLIST
          </button>
        </div>
      </div>
    </section>
  );
}

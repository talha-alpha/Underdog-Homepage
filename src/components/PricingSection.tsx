"use client";

import { useState } from "react";

type BillingCycle = "MONTHLY" | "YEARLY";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("MONTHLY");

  const trainerFeatures = [
    "Unlimited bookings",
    "3.5% transaction fee",
    "Custom trainer profile + URL",
    "Secure payments + Stripe payouts",
    "Promo codes & bulk discounts",
    "Cancellation & rescheduling tools",
  ];

  const academyFeatures = [
    "Unlimited bookings",
    "3.5% transaction fee",
    "Custom trainer profile + URL",
    "Secure payments + Stripe payouts",
    "Promo codes & bulk discounts",
    "Cancellation & rescheduling tools",
    "Advanced financial analytics",
  ];

  const getPrice = (basePrice: number) => {
    return billingCycle === "YEARLY" ? basePrice * 0.75 : basePrice;
  };

  return (
    <section className="py-20 bg-primary-darker" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            POWERFUL FEATURES FOR
            <br />
            TRAINERS & ACADEMIES.
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            Whether you're a solo trainer or running full academies, Underdog gives you the tools to schedule, grow, and get paid with confidence.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <button
              onClick={() => setBillingCycle("MONTHLY")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                billingCycle === "MONTHLY"
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle("YEARLY")}
              className={`px-6 py-2 rounded-full font-medium transition-colors relative ${
                billingCycle === "YEARLY"
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              YEARLY
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                25% off
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Trainer Plan */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">TRAINER</h3>
            <p className="text-white/60 mb-6">
              Built for individual coaches who want to grow.
            </p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">
                ${getPrice(19.99).toFixed(2)}
              </span>
              <span className="text-white/60"> / month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {trainerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Academy Plan */}
          <div className="bg-white/5 rounded-2xl p-8 border-2 border-blue-500 hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">ACADEMY</h3>
            <p className="text-white/60 mb-6">
              Built for Academies who want to grow.
            </p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">
                ${getPrice(49.99).toFixed(2)}
              </span>
              <span className="text-white/60"> / month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {academyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* No Contracts */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            NO LONG-TERM CONTRACTS.
            <br />
            NO CATCHES.
          </h3>
          <p className="text-white/60 mb-6">
            Start your 30-day free trial today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}

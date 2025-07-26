"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  GitCompareArrows,
  ShieldCheck,
  Timer,
  Flame,
} from "lucide-react";

// --- Data for this specific service page ---

const title = "Transport & Logistics";
const subtitle = "Streamlined Solutions for Nigerian Commerce";
const description =
  "At Sprint G. S. Limited, we redefine logistics with fast, seamless solutions built on commitment, flexibility, and trust. Our personalized approach ensures your business&apos;s success is at the forefront of our operations.";

const logisticsSections = [
  {
    icon: Target,
    title: "Unwavering Commitment",
    content:
      "Our commitment is a dedication to excellence in every aspect of our services. We are devoted to meeting and exceeding your expectations, ensuring your goods reach their destination on time, every time.",
  },
  {
    icon: GitCompareArrows,
    title: "Dynamic Flexibility",
    content:
      "We embrace flexibility in our operations to meet your unique requirements. Whether adjusting schedules or customizing delivery routes, we adapt to ensure your complete satisfaction.",
  },
  {
    icon: ShieldCheck,
    title: "A Foundation of Trust",
    content:
      "Trust is the cornerstone of our business. Our customers in Nigeria trust us with valuable cargo, and we work tirelessly to maintain that trust by consistently delivering on our promises with integrity.",
  },
  {
    icon: Timer,
    title: "Proven Reliability",
    content:
      "Reliability is non-negotiable. We pride ourselves on providing on-time deliveries, ensuring your shipments reach their destinations precisely when expected. Our dependability is your advantage.",
  },
  {
    icon: Flame,
    title: "Driven by Passion",
    content:
      "A strong passion for our work is evident in every project. This unwavering drive for excellence fuels our team to continuously improve, innovate, and provide exceptional logistics solutions.",
  },
];

export default function TransportLogisticsPage() {
  return (
    // This JSX represents the implementation of the "ServiceDetailPage" component
    <div className="space-y-12 md:space-y-16">
      {/* 1. Page Header */}
      <header>
        <p className="mb-2 text-lg font-semibold text-red-600">{subtitle}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-4xl">{description}</p>
      </header>

      {/* 2. Feature Image */}
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/images/logistics.png" // Placeholder
          alt="A fleet of Sprint G.S. trucks on a Nigerian highway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      {/* 3. Our Logistics Advantage Section */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-4 border-red-500 pb-2 inline-block">
          The Sprint G.S. Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logisticsSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="p-6 bg-slate-50/70 rounded-xl border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {section.title}
                  </h3>
                </div>
                <p className="text-slate-600 mt-4">{section.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

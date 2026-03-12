"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  GitCompareArrows,
  ShieldCheck,
  Timer,
  Flame,
  CheckCircle2,
} from "lucide-react";

const title = "Transport & Logistics";
const subtitle = "Streamlined Solutions for Nigerian Commerce";
const description =
  "At Sprint G. S. Limited, we redefine logistics with fast, seamless solutions built on commitment, flexibility, and trust. Our personalized approach ensures your business's success is at the forefront of our operations.";

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
    <div className="space-y-10 md:space-y-14">
      {/* 1. Page Header */}
      <header>
        <p className="mb-2 text-sm font-medium text-red-600 uppercase tracking-wider">
          {subtitle}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed">
          {description}
        </p>
      </header>

      {/* 2. Feature Image */}
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/logistics.png"
          alt="A fleet of Sprint G.S. trucks on a Nigerian highway"
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      {/* 3. Our Logistics Advantage Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 pb-3 border-b border-slate-200">
          The Sprint G.S. Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logisticsSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Service Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          "Nationwide Coverage",
          "Real-time Tracking",
          "24/7 Customer Support",
        ].map((highlight, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100"
          >
            <CheckCircle2 className="w-4 h-4 text-blue-800 flex-shrink-0" />
            <span className="text-sm font-medium text-slate-700">
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

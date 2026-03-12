"use client";

import React from "react";
import Image from "next/image";
import {
  Ruler,
  Layers,
  Droplets,
  ShieldCheck,
  HardHat,
  Truck,
} from "lucide-react";

const title = "Road Construction & Engineering";
const subtitle = "Building Durable and Reliable Road Networks Across Nigeria";
const description =
  "From urban roads to major highways, Sprint G.S. Ltd. delivers world-class road construction services. We leverage state-of-the-art technology and deep expertise to build infrastructure that connects communities and powers economic growth.";

const serviceSections = [
  {
    icon: Ruler,
    title: "Site Clearing and Preparation",
    content:
      "We begin with comprehensive site clearing, grubbing, and removal of all obstructions to prepare a clean and stable foundation for your road project.",
  },
  {
    icon: Layers,
    title: "Earthworks, Excavation, and Grading",
    content:
      "Our team performs precise excavation, filling, and grading to achieve the exact design levels and slopes required for durable roads suitable for the Nigerian terrain.",
  },
  {
    icon: Droplets,
    title: "Pavement and Drainage Systems",
    content:
      "We utilize modern equipment to lay sub-base, base course, and asphalt layers, while constructing effective drainage to ensure longevity and prevent water damage.",
  },
  {
    icon: ShieldCheck,
    title: "Finishing and Quality Assurance",
    content:
      "The final stage includes line marking, signage installation, and rigorous quality checks to ensure the road meets all safety and regulatory standards before handover.",
  },
];

const galleryItems = [
  {
    icon: HardHat,
    label: "Premium Aggregates",
    image: "/images/aggregate.png",
  },
  {
    icon: Layers,
    label: "High-Grade Asphalt",
    image: "/images/aspalt.png",
  },
  {
    icon: Truck,
    label: "Modern Paving Fleet",
    image: "/images/fleet.png",
  },
];

export default function RoadConstructionPage() {
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
          src="/images/feature-img.png"
          alt="Large scale road construction project by Sprint G.S."
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      {/* 3. Our Process Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 pb-3 border-b border-slate-200">
          Our Road Construction Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Quality Materials & Equipment Gallery */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 pb-3 border-b border-slate-200">
          Quality Materials & Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold">{item.label}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

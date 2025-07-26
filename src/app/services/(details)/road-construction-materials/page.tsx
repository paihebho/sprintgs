"use client";

import React from "react";
import Image from "next/image";
import {
  Ruler,
  Layers,
  Droplets,
  ShieldCheck,
  HardHat, // Added for gallery
  Truck, // Added for gallery
} from "lucide-react";

// The data for this specific service page, as you provided.
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

// Data for the new gallery section
const galleryItems = [
  {
    icon: HardHat,
    label: "Premium Aggregates",
    image: "/images/aggregate.png", // Replace with actual image
  },
  {
    icon: Layers,
    label: "High-Grade Asphalt",
    image: "/images/aspalt.png", // Replace with actual image
  },
  {
    icon: Truck,
    label: "Modern Paving Fleet",
    image: "/images/fleet.png", // Replace with actual image
  },
];

export default function RoadConstructionPage() {
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
          src="/images/feature-img.png" // Replace with a high-quality photo of road construction in Nigeria
          alt="Large scale road construction project by Sprint G.S."
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      {/* 3. Our Process Section */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-4 border-red-500 pb-2 inline-block">
          Our Road Construction Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceSections.map((section, index) => {
            const Icon = section.icon; // Get the component reference
            return (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-slate-50/70 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-slate-600">{section.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Quality Materials & Equipment Gallery */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-4 border-red-500 pb-2 inline-block">
          Quality Materials & Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold">{item.label}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

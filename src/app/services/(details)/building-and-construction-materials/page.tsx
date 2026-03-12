"use client";

import React from "react";
import Image from "next/image";
import {
  Package,
  Hammer,
  BarChartBig,
  LayoutGrid,
  Layers,
  ShoppingBasket,
  CheckCircle2,
} from "lucide-react";

const title = "Building & Construction Materials";
const subtitle = "Sourcing Quality Materials for Lasting Structures";
const description =
  "We offer a comprehensive range of top-notch building materials, essential for creating cutting-edge residential homes, offices, housing estates, or expansive commercial buildings across Nigeria.";

const materials = [
  {
    icon: Package,
    title: "Premium Cements",
    content:
      "From single apartments to massive estate projects, we supply top-tier cements like Dangote and Lafarge, offering various types to meet your specific structural and finishing needs.",
  },
  {
    icon: Hammer,
    title: "Block Making & Supply",
    content:
      "We provide high-density Granite Blocks and Cement Blocks. For large-scale projects, we can deploy our block-making machinery directly to your site to ensure consistent supply.",
  },
  {
    icon: BarChartBig,
    title: "High-Tensile Iron Rods",
    content:
      "The structural integrity of your project is paramount. We supply different diameters of high-quality local and imported iron rods, with delivery available nationwide.",
  },
  {
    icon: LayoutGrid,
    title: "Elegant & Durable Tiles",
    content:
      "Explore our extensive range of marble and ceramic tiles for kitchens, bathrooms, floors, and walls. We offer versatile classifications to meet any aesthetic preference.",
  },
  {
    icon: Layers,
    title: "Versatile Plywood",
    content:
      "We provide a complete variety of plywood options, including multi-ply, particle board, moisture-resistant MDR, fire-rated boards, and veneered particle boards for all applications.",
  },
  {
    icon: ShoppingBasket,
    title: "All Other Essentials",
    content:
      "Your comprehensive source for all construction needs, including doors, roofing materials, plastic piping, building insulation, fire-stops, and much more.",
  },
];

export default function BuildingMaterialsPage() {
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
          src="/images/building.png"
          alt="A well-stocked construction material supply yard"
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      {/* 3. Our Material Offerings Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 pb-3 border-b border-slate-200">
          Our Material Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map((section, index) => {
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

      {/* 4. Quality Assurance Note */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5 text-blue-800" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Quality Guaranteed
            </h3>
            <p className="text-sm text-slate-600">
              All materials are sourced from certified manufacturers and undergo
              rigorous quality control to ensure they meet international
              standards and project specifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

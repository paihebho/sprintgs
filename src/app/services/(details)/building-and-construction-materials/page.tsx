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
          src="/images/building.png"
          alt="A well-stocked construction material supply yard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      {/* 3. Our Material Offerings Section */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-4 border-red-500 pb-2 inline-block">
          Our Material Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map((section, index) => {
            const Icon = section.icon;
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
    </div>
  );
}

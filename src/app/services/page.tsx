// Building & Civil Construction

"use client";

import React from "react";
import Link from "next/link";
import {
  HardHat,
  Truck,
  Shield,
  Target,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Landmark,
  Award,
} from "lucide-react";
import Image from "next/image";

// Service data array
const services = [
  {
    icon: <HardHat className="w-10 h-10" />,
    title: "Road Construction Materials",
    description:
      "Supplying premium-grade materials for durable, long-lasting road networks across Nigeria and beyond.",
    features: [
      "Asphalt and Bitumen Supply",
      "High-Quality Aggregates & Chippings",
      "Road Base & Sub-base Materials",
      "Concrete & Paving Solutions",
    ],
    href: "/services/road-construction-materials",
    gradient: "from-slate-800 to-slate-900",
  },
  {
    icon: <Landmark className="w-10 h-10" />,
    title: "Building & Civil Construction",
    description:
      "The foundational elements for robust commercial, residential, and industrial structures, meeting global standards.",
    features: [
      "High-Strength Cement & Concrete",
      "Structural & Reinforcement Steel",
      "Premium Finishing Materials",
      "Specialized Engineering Services",
    ],
    href: "/services/building-and-construction-materials",
    gradient: "from-blue-800 to-blue-900",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Transportation & Logistics",
    description:
      "Efficient, reliable, and secure logistics solutions to ensure your materials arrive on-site, on time, every time.",
    features: [
      "Heavy-Duty Haulage Services",
      "Supply Chain Management",
      "Nationwide Delivery Network",
      "Real-time Fleet Tracking",
    ],
    href: "/services/transportation-logistics",
    gradient: "from-stone-800 to-stone-900",
  },
];

// Data for the "Why Choose Us" section
const competitiveAdvantages = [
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Uncompromising Quality",
    description:
      "We source and supply only the highest-grade materials, certified to meet international standards.",
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Strategic Logistics",
    description:
      "Our advanced logistics network ensures timely and efficient delivery across the most challenging terrains.",
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Technical Expertise",
    description:
      "With over 18 years of experience, our team provides expert guidance to match the right materials to your project needs.",
  },
];

const materialStats = [
  {
    value: "50K+",
    label: "Tons Supplied",
    description: "Annually",
  },
  {
    value: "100%",
    label: "Quality Assured",
    description: "Certified materials",
  },
  {
    value: "24/7",
    label: "Delivery",
    description: "Nationwide coverage",
  },
  {
    value: "500+",
    label: "Projects Served",
    description: "Across Nigeria",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Exact match with homepage */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 text-white flex items-center">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6 md:mb-8 border border-white/10">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/80">
                ESTABLISHED 2006 • GLOBAL REACH
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-4 md:mb-6 tracking-tight">
              Premium Construction
              <span className="block font-semibold mt-2">
                Materials & Logistics
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Supplying world-class construction materials and logistics
              solutions with unwavering commitment to quality, reliability, and
              innovation across Nigeria and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 md:mb-16 px-4">
              <Link
                href="/contact"
                className="group bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="group border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>View Projects</span>
              </Link>
            </div>

            {/* Stats - matching homepage style */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/10 px-4">
              {materialStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/60">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/40 mt-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator - matching homepage */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-1 md:gap-2 text-white/40 text-[10px] md:text-xs tracking-wider">
            <span>DISCOVER MORE</span>
            <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Services Section - matching homepage Services style */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-medium text-red-700 uppercase tracking-wider mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4 md:mb-6">
              Comprehensive material supply
              <span className="block font-semibold mt-2">
                and logistics solutions
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4 md:mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs md:text-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-blue-800 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="mt-4 md:mt-6 text-blue-800 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm md:text-base"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - matching homepage Principles style */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-xs sm:text-sm font-medium text-red-700 uppercase tracking-wider mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4 md:mb-6">
                Built on principles that
                <span className="block font-semibold mt-2">
                  ensure your success
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                Partnering with us means choosing a team dedicated to your
                project&apos;s success. We go beyond simple supply, offering a
                strategic advantage built on decades of industry leadership.
              </p>

              <div className="space-y-4 md:space-y-6">
                {competitiveAdvantages.map((advantage, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 md:gap-4 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
                        {advantage.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] md:rounded-2xl overflow-hidden rounded-2xl bg-stone-50">
                <Image
                  src="/images/female-engineer.png"
                  alt="Heavy construction machinery at a Sprint G.S. supply site"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Stats overlay - matching homepage style */}
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-2xl max-w-[200px] md:max-w-xs">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-slate-900">
                      ISO 9001:2024
                    </div>
                    <div className="text-xs md:text-sm text-slate-600">
                      Quality Certified
                    </div>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-600">
                  All materials rigorously tested and certified to meet
                  international quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Exact match with homepage */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
              Ready to discuss your
              <span className="block font-semibold mt-2">material needs?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-8 md:mb-12 leading-relaxed px-4">
              Let&apos;s schedule a consultation to explore how our premium
              materials and logistics expertise can support your next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                Schedule Consultation
              </Link>

              <Link
                href="/contact"
                className="border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                Request Quote
              </Link>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 px-4">
              <p className="text-white/40 text-xs sm:text-sm">
                Lagos • Abuja • Port Harcourt • London • Dubai
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

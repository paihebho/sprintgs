// Building & Civil Construction

"use client";

import React from "react";
import Link from "next/link";
import {
  Building,
  HardHat,
  Truck,
  Shield,
  Target,
  Globe,
  ArrowRight,
  Phone,
} from "lucide-react";

// Service data array for cleaner code and easier updates
const services = [
  {
    icon: <HardHat className="w-8 h-8" />,
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
    color: "text-red-600",
  },
  {
    icon: <Building className="w-8 h-8" />,
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
    color: "text-blue-800",
  },
  {
    icon: <Truck className="w-8 h-8" />,
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
    color: "text-slate-700",
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

export default function ServicesPage() {
  return (
    <div className="bg-white font-sans">
      {/* Branded Hero Section */}
      <section className="relative flex items-center justify-center min-h-[50vh] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Our Core Expertise
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            Delivering a comprehensive suite of world-class construction
            materials and logistics solutions engineered for success.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Comprehensive Solutions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              At Sprint G.S., we provide the critical materials and logistical
              support that underpin successful construction projects nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col bg-white rounded-2xl shadow-lg border border-slate-200/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="p-8">
                  <div
                    className={`inline-flex p-4 bg-slate-100 rounded-xl mb-6 ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="flex-grow p-8 bg-slate-50/70 border-t border-slate-200/80">
                  <h4 className="font-semibold text-slate-700 mb-4">
                    Key Offerings:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 flex-shrink-0 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center">
                          <Shield className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t border-slate-200/80">
                  <Link
                    href={service.href}
                    className="group font-bold text-blue-800 inline-flex items-center gap-2 hover:text-red-600 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Sprint G.S.?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Partnering with us means choosing a team dedicated to your
                project&aposs success. We go beyond simple supply, offering a
                strategic advantage built on decades of industry leadership.
              </p>
              <div className="space-y-6">
                {competitiveAdvantages.map((advantage) => (
                  <div
                    key={advantage.title}
                    className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-800 to-red-600 rounded-lg flex items-center justify-center">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{advantage.title}</h3>
                      <p className="text-slate-300">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3870&auto=format&fit=crop"
                alt="Heavy construction machinery at a Sprint G.S. supply site"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Branded CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-800 to-slate-900 text-white p-8 md:p-16 rounded-3xl text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discuss Your Project&aposs Needs
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
              Whether you require materials, logistics, or expert consultation,
              our team is ready to provide a solution tailored to you.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:scale-105">
              <Phone className="w-5 h-5" />
              <span>Get a Quote Today</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  Shield,
  Target,
  Globe,
  Rocket,
  Phone,
  Building2,
  CheckCircle2,
  Briefcase,
  Compass,
  FileCheck,
  HandshakeIcon,
} from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Uncompromising Integrity",
    description:
      "Ethical conduct and transparency form the foundation of every partnership we undertake, ensuring trust and accountability at every stage.",
    metric: "100% Compliance",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence in Execution",
    description:
      "Meticulous attention to quality and precision in every detail, consistently exceeding industry benchmarks and client expectations.",
    metric: "ISO 9001 Certified",
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Forward-Thinking Innovation",
    description:
      "Continuous adoption of cutting-edge methodologies and technologies to solve complex construction challenges efficiently.",
    metric: "BIM Integrated",
  },
  {
    icon: <HandshakeIcon className="w-8 h-8" />,
    title: "Collaborative Partnership",
    description:
      "Deep collaboration with clients, architects, and stakeholders to deliver unified visions through collective expertise.",
    metric: "98% Retention",
  },
];

const milestones = [
  {
    year: "2006",
    title: "Foundation & Vision",
    description:
      "Sprint G.S. established in Lagos, Nigeria, with a clear mission to redefine construction standards through excellence and integrity.",
    achievements: ["Initial Team of 12", "First Major Contract: ₦2.5B"],
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    year: "2010",
    title: "Certified Excellence",
    description:
      "Achieved registration with the Lagos State Public Procurement Agency, establishing credibility and opening doors to public sector projects.",
    achievements: ["ISO 9001 Certification", "15+ Public Projects"],
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: "2018",
    title: "Global Expansion",
    description:
      "Strategic expansion into international markets, establishing presence in the United States and United Kingdom.",
    achievements: ["3 Continents", "12 Countries Served"],
    icon: <Globe className="w-5 h-5" />,
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description:
      "Recognized as a premier construction and engineering firm with a portfolio exceeding ₦250B in successful project delivery.",
    achievements: ["500+ Projects", "98% Client Satisfaction"],
    icon: <Building2 className="w-5 h-5" />,
  },
];

const certifications = [
  { name: "ISO 9001:2024", description: "Quality Management" },
  { name: "ISO 14001:2024", description: "Environmental Management" },
  { name: "ISO 45001:2024", description: "Occupational Health & Safety" },
  { name: "LPPA Registered", description: "Lagos State Procurement Agency" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="flex flex-col gap-8">
              {/* Badge */}
              <div className="mx-auto inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full border border-white/10 w-fit">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/80">
                  EST. 2006 • GLOBAL REACH
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl text-center lg:text-7xl font-light tracking-tight">
                Building with purpose,
                <span className="block font-semibold mt-2">
                  leading with integrity
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-center md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                For over 18 years, Sprint G.S. has stood as a beacon of
                excellence in the construction industry, delivering landmark
                projects that shape communities and drive progress.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
                {[
                  { value: "18+", label: "Years of Excellence" },
                  { value: "500+", label: "Projects Delivered" },
                  { value: "12", label: "Countries" },
                  { value: "98%", label: "Client Retention" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-xs sm:text-sm font-medium text-red-700 uppercase tracking-wider mb-3 block">
                Our Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">
                A legacy of excellence
                <span className="block font-semibold mt-2">since 2006</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Founded in Lagos, Nigeria, Sprint G.S. began with a singular
                  vision: to transform the construction landscape through
                  unwavering commitment to quality, integrity, and innovation.
                  What started as a dedicated team of 12 has grown into a global
                  enterprise with a presence across three continents.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Today, we stand as a testament to what principled leadership
                  and exceptional execution can achieve. Our portfolio spans
                  commercial landmarks, critical infrastructure, and
                  transformative urban developments that serve communities
                  worldwide.
                </p>
              </div>

              {/* Certification badges - hidden on mobile, visible on tablet/desktop */}
              <div className="hidden sm:grid grid-cols-2 gap-4 mt-8">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"
                  >
                    <FileCheck className="w-5 h-5 text-blue-800 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">
                        {cert.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {cert.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile certification badges - simplified */}
              <div className="grid grid-cols-2 gap-3 sm:hidden mt-6">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="text-xs bg-slate-50 px-3 py-2 rounded-lg text-slate-700"
                  >
                    <span className="font-semibold block">{cert.name}</span>
                    <span className="text-slate-500">{cert.description}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/featured.png"
                  alt="Sprint G.S. headquarters"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">
                      Total Portfolio Value
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      ₦250B+
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Successfully delivered projects across commercial,
                  infrastructure, and industrial sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-medium text-red-700 uppercase tracking-wider mb-3 block">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">
              Principles that guide
              <span className="block font-semibold mt-2">every decision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {principles.map((principle, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4 sm:mb-6 group-hover:bg-blue-800 group-hover:text-white transition-all duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                  {principle.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-800">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  {principle.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-medium text-red-700 uppercase tracking-wider mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">
              Milestones that define
              <span className="block font-semibold mt-2">our evolution</span>
            </h2>
          </div>

          <div className="relative">
            {/* Mobile timeline line - hidden on desktop */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 lg:hidden"></div>

            {/* Desktop timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  } gap-6 lg:gap-16`}
                >
                  {/* Timeline dot - mobile */}
                  <div className="absolute left-4 lg:hidden w-3 h-3 bg-blue-800 rounded-full -translate-x-1/2 mt-6 border-2 border-white"></div>

                  {/* Timeline dot - desktop */}
                  <div className="hidden lg:block absolute left-1/2 w-4 h-4 bg-blue-800 rounded-full -translate-x-1/2 mt-6 border-4 border-white"></div>

                  {/* Content */}
                  <div className="lg:w-1/2 pl-12 lg:pl-0">
                    <div className="bg-slate-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-500">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          {milestone.icon}
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-medium text-blue-800">
                            {milestone.year}
                          </span>
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                        {milestone.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-slate-600 border border-slate-200"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for layout */}
                  <div className="lg:w-1/2 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-slate-900 to-stone-900 text-white p-6 sm:p-8 md:p-12 lg:p-20 rounded-2xl sm:rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#ffffff10,transparent_70%)]"></div>

            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
                Ready to discuss your
                <span className="block font-semibold mt-2">next project?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                Let&apos;s schedule a consultation to explore how our expertise
                can bring your vision to life with precision and excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  Schedule Consultation
                </Link>

                <Link
                  href="/portfolio"
                  className="group border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                  View Our Work
                </Link>
              </div>

              <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-white/40">
                  <span>Lagos</span>
                  <span>Abuja</span>
                  <span>Port Harcourt</span>
                  <span>London</span>
                  <span>Dubai</span>
                  <span>China</span>
                  <span>USA</span>
                  <span>Germany</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Shield,
  Lightbulb,
  Users,
  Target,
  Globe,
  Rocket,
  Phone,
} from "lucide-react";
import Link from "next/link";

// Simplified Core Values for a cleaner grid display
const coreValues = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity & Trust",
    description:
      "Conducting business with the highest ethical standards, ensuring transparency and honesty.",
    color: "text-blue-700",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Uncompromising Excellence",
    description:
      "Striving for perfection and delivering superior quality that exceeds industry standards.",
    color: "text-red-600",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Pioneering Innovation",
    description:
      "Embracing cutting-edge technology to solve complex construction challenges.",
    color: "text-blue-700",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaborative Teamwork",
    description:
      "Bringing together diverse expertise to achieve exceptional results for our clients.",
    color: "text-red-600",
  },
];

// Consolidated milestones for the new timeline component
const milestones = [
  {
    year: "2006",
    title: "Foundation & Vision",
    description:
      "Sprint G.S. was incorporated in Nigeria with a clear vision to redefine the construction industry through excellence.",
    icon: <Rocket className="w-5 h-5 text-white" />,
    color: "bg-red-600",
  },
  {
    year: "2010",
    title: "Official Certification",
    description:
      "Successfully registered with the Lagos State Public Procurement Agency, cementing our credibility and expertise.",
    icon: <Award className="w-5 h-5 text-white" />,
    color: "bg-blue-800",
  },
  {
    year: "2018",
    title: "International Expansion",
    description:
      "Expanded our operational footprint by becoming a registered international brand in the United States.",
    icon: <Globe className="w-5 h-5 text-white" />,
    color: "bg-slate-700",
  },
  {
    year: "2024",
    title: "Recognized Industry Leader",
    description:
      "Acknowledged as a leading construction and engineering firm with a portfolio of successful projects across continents.",
    icon: <Target className="w-5 h-5 text-white" />,
    color: "bg-red-600",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
            Building the Future on a <br /> Foundation of{" "}
            <span className="text-blue-400">Trust</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            For over 18 years, Sprint G.S. has been a globally recognized leader
            in construction, transforming ambitious visions into tangible
            landmarks.
          </p>
        </div>
      </section>

      <hr />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                <span>Our Story of </span>
                <span className="text-blue-800">Growth & Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                From our incorporation in Nigeria in 2006 to becoming an
                international construction powerhouse, our journey is defined by
                a relentless pursuit of excellence. As specialists and investors
                in our clients&apos success, we merge cutting-edge technology
                with meticulous craftsmanship.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our philosophy of total excellence ensures every project,
                regardless of scale, receives our full commitment to quality,
                safety, and client satisfaction.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:scale-105">
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/featured.png"
                alt="Sprint G.S. team collaborating on a construction blueprint"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              The Principles That Guide Us
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our core values are the bedrock of our culture, inspiring our
              actions and driving our commitment to every client and community
              we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300">
                <div
                  className={`inline-flex p-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      {/* Our Journey (Timeline) Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Journey to Excellence
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              A timeline of key moments that have shaped Sprint G.S. into a
              global leader in the construction industry.
            </p>
          </div>
          <div className="relative">
            {/* The vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700"
              aria-hidden="true"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative p-6 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-lg ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  } md:max-w-sm`}>
                  <div
                    className={`absolute top-1/2 -mt-2 w-4 h-4 rounded-full ${
                      milestone.color
                    } ${
                      index % 2 === 0 ? "-left-[26px]" : "-right-[26px]"
                    } border-4 border-slate-900`}></div>

                  <p className="text-xl font-bold text-red-500 mb-1">
                    {milestone.year}
                  </p>
                  <h3 className="text-2xl font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-300">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-800 to-slate-900 text-white p-8 md:p-16 rounded-3xl text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&aposs Build Something Great Together
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
              Have a project in mind? Our team of experts is ready to help you
              turn your vision into a reality.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:scale-105">
              <Phone className="w-5 h-5" />
              <span>Contact Us Today</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

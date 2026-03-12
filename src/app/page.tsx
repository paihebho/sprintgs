"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  Phone,
  Mail,
  Building2,
  Shield,
  Target,
  TrendingUp,
  CheckCircle2,
  Users,
  HardHat,
  Briefcase,
  Calendar,
  Landmark,
  LineChart,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const stats = [
    {
      value: "18+",
      label: "Years of Excellence",
      description: "Since 2006",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Across 12 countries",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      value: "98%",
      label: "Client Retention",
      description: "Industry leading",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: "₦250B+",
      label: "Project Value",
      description: "Successfully managed",
      icon: <LineChart className="w-6 h-6" />,
    },
  ];

  const services = [
    {
      icon: <Landmark className="w-10 h-10" />,
      title: "Commercial Construction",
      description:
        "End-to-end delivery of large-scale commercial projects, from high-rise developments to corporate headquarters, with unwavering commitment to quality and timeline.",
      metrics: [
        "45+ High-rise Projects",
        "2.5M sq. ft. Annually",
        "Zero Defects",
      ],
      gradient: "from-slate-800 to-slate-900",
    },
    {
      icon: <HardHat className="w-10 h-10" />,
      title: "Infrastructure Development",
      description:
        "Critical infrastructure projects including transportation hubs, public facilities, and urban development initiatives that shape communities and drive economic growth.",
      metrics: [
        "12 Major Hubs",
        "Public-Private Partnerships",
        "Sustainable Design",
      ],
      gradient: "from-blue-800 to-blue-900",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Project Management",
      description:
        "Comprehensive project oversight integrating lean methodologies, risk management, and quality assurance to deliver complex projects on time and within budget.",
      metrics: ["ISO Certified", "Agile Methodology", "Real-time Reporting"],
      gradient: "from-stone-800 to-stone-900",
    },
  ];

  const expertise = [
    {
      category: "Commercial",
      items: [
        "Corporate Headquarters",
        "Shopping Complexes",
        "Mixed-use Developments",
      ],
      value: "₦95B",
      completion: "32 Projects",
    },
    {
      category: "Infrastructure",
      items: ["Transportation Hubs", "Public Facilities", "Urban Planning"],
      value: "₦120B",
      completion: "28 Projects",
    },
    {
      category: "Industrial",
      items: ["Manufacturing Plants", "Warehouses", "Distribution Centers"],
      value: "₦45B",
      completion: "18 Projects",
    },
  ];

  const principles = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Uncompromising Quality",
      description:
        "Rigorous quality control at every stage, exceeding industry standards.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Execution",
      description:
        "Meticulous planning and execution ensuring project certainty.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sustainable Value",
      description: "Long-term value creation through sustainable practices.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership Approach",
      description:
        "Collaborative relationships built on trust and transparency.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative o min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 text-white">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-8 border border-white/10">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-sm font-medium tracking-wide text-white/80">
                ESTABLISHED 2006 • GLOBAL REACH
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              Building with
              <span className="block font-semibold mt-2">
                Purpose & Precision
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              A distinguished construction and infrastructure firm delivering
              exceptional projects across multiple continents through unwavering
              commitment to quality and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/about"
                className="group bg-white text-slate-900 px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="group border border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-white/60">
                    {stat.label}
                  </div>
                  <div className="text-xs text-white/40 mt-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/40 text-xs tracking-wider">
            <span>DISCOVER MORE</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-3 flex flex-col gap-8">
              <div className="max-w-3xl mb-16">
                <span className="text-sm font-medium text-red-700 uppercase tracking-wider mb-4 block">
                  Our Foundation
                </span>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                  Built on principles that
                  <span className="block font-semibold mt-2">
                    stand the test of time
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  For over 18 years, we&apos;ve maintained an unwavering
                  commitment to excellence, earning the trust of industry
                  leaders and communities worldwide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {principles.map((principle, i) => (
                  <div key={i} className="group">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                      {principle.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative col-span-2 w-full h-60 bg-slate-50 md:h-auto rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/innovative-engineer.png"
                alt="Expertise"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-red-700 uppercase tracking-wider mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Comprehensive construction
              <span className="block font-semibold mt-2">
                and development services
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-800" />
                      <span className="text-slate-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Breakdown */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-medium text-red-700 uppercase tracking-wider mb-4 block">
                Sector Expertise
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                Delivering excellence across
                <span className="block font-semibold mt-2">
                  diverse sectors
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our multidisciplinary approach allows us to tackle complex
                projects across commercial, infrastructure, and industrial
                sectors with consistent results.
              </p>

              <div className="space-y-6">
                {expertise.map((sector, i) => (
                  <div
                    key={i}
                    className="border-b border-slate-200 pb-6 last:border-0"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {sector.category}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-blue-800">
                          {sector.value}
                        </span>
                        <span className="text-sm text-slate-500">
                          {sector.completion}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {sector.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/sprintgs-team.png"
                  alt="Construction project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      ISO 9001:2024
                    </div>
                    <div className="text-sm text-slate-600">
                      Quality Certified
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Rigorously audited and certified for international quality
                  management standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Ready to discuss your
              <span className="block font-semibold mt-2">next project?</span>
            </h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Let&apos;s schedule a consultation to explore how our expertise
              can bring your vision to life with precision and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Schedule Consultation
              </Link>

              <Link
                href="/contact"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Inquiry
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm">
                Lagos • Abuja • Port Harcourt • London • Dubai
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

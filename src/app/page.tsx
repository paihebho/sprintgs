"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  Star,
  Phone,
  Mail,
  Building2,
  Shield,
  Clock,
  ChevronRight,
  Globe,
  Play,
  Zap,
  Target,
  TrendingUp,
  Layers,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const stats = [
    {
      value: "18+",
      label: "Years Experience",
      icon: <Clock className="w-6 h-6" />,
      color: "from-slate-700 to-slate-900",
    },
    {
      value: "500+",
      label: "Projects Completed",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-700 to-blue-900",
    },
    {
      value: "12",
      label: "Countries Served",
      icon: <Globe className="w-6 h-6" />,
      color: "from-red-600 to-red-800",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-6 h-6" />,
      color: "from-slate-700 to-slate-900",
    },
  ];

  const services = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Commercial Construction",
      description:
        "Large-scale commercial projects with precision engineering and timely, on-budget delivery.",
      gradient: "from-blue-700 to-blue-800",
      features: ["High-rise Buildings", "Shopping Complexes", "Office Towers"],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Infrastructure Development",
      description:
        "Critical infrastructure projects that form the backbone of modern society, built to last.",
      gradient: "from-red-600 to-red-700",
      features: ["Transportation Hubs", "Public Facilities", "Urban Planning"],
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Project Management",
      description:
        "End-to-end project oversight ensuring quality, budget, and timeline adherence with agile methods.",
      gradient: "from-slate-700 to-slate-800",
      features: [
        "Resource Optimization",
        "Quality Assurance",
        "Timeline Management",
      ],
    },
  ];

  // const testimonials = [
  //   {
  //     quote:
  //       "Sprint G.S. transformed our vision into a landmark reality. Their professionalism and technical expertise are unmatched. They delivered a world-class facility ahead of schedule.",
  //     author: "Michael Thompson",
  //     position: "CEO, Global Infrastructure Ltd",
  //     rating: 5,
  //     project: "Marina Bay Complex",
  //     value: "₦65B",
  //   },
  //   {
  //     quote:
  //       "Their international experience and local insights made our complex project seamless. The attention to detail and commitment to excellence from Sprint G.S. was truly remarkable.",
  //     author: "Sarah Chen",
  //     position: "Director, Urban Development Corp",
  //     rating: 5,
  //     project: "City Center Plaza",
  //     value: "₦42B",
  //   },
  //   {
  //     quote:
  //       "Outstanding quality, on-time delivery, and exceptional project management. Sprint G.S. exceeded every expectation. They are our trusted partners for all major projects.",
  //     author: "David Okafor",
  //     position: "Principal, Landmark Properties",
  //     rating: 5,
  //     project: "Corporate Headquarters",
  //     value: "₦90B",
  //   },
  // ];

  const capabilities = [
    { icon: <Zap className="w-5 h-5" />, label: "Rapid Deployment" },
    { icon: <Target className="w-5 h-5" />, label: "Precision Engineering" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Scalable Solutions" },
    { icon: <Globe className="w-5 h-5" />, label: "Global Standards" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                TRUSTED GLOBALLY SINCE 2006
              </div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12">
              <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-red-400 to-blue-300 bg-clip-text text-transparent animate-pulse">
                  Engineering
                </span>
                <br />
                <span className="text-white relative">
                  Excellence
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-out_1s_forwards]"></div>
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Global construction solutions powered by innovation,
                reliability, and 18+ years of trusted expertise across several
                countries.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300">
                    <div className="text-blue-400">{cap.icon}</div>
                    {cap.label}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-red-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <Play className="w-6 h-6" />
                  View Our Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <Link
                href="/quote"
                className="group px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6 text-red-400" />
                  Get Premium Quote
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Proven <span className="text-blue-800">Track Record</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our numbers speak for themselves - delivering excellence across
              the globe.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                    <div className="text-white">{stat.icon}</div>
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our <span className="text-blue-800">Core Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction solutions engineered for excellence and
              tailored to exceed your expectations.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-white p-10 rounded-3xl border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="mt-8 text-blue-800 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Building Tomorrow&apos;s
                <br />
                <span className="text-blue-800">Landmarks</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                From concept to completion, we deliver architectural marvels
                that stand the test of time. Our portfolio spans continents,
                showcasing our commitment to excellence.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    text: "Award-Winning Architectural Designs",
                    color: "text-red-700",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    text: "Sustainable & Green Building Practices",
                    color: "text-slate-600",
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    text: "International Quality & Safety Standards",
                    color: "text-blue-800",
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    text: "Efficient On-Time Project Delivery",
                    color: "text-slate-800",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div
                      className={`w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <span className="text-slate-700 text-lg font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              <button className="group bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                <span className="flex items-center gap-3">
                  <Layers className="w-6 h-6" />
                  Explore Projects
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
            <div className="relative">
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/sprintgs-team.png"
                  alt="A well-stocked construction material supply yard"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Client <span className="text-blue-800">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from industry leaders who trust Sprint G.S. with their most
              important projects.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-800">
                        {testimonial.value}
                      </div>
                      <div className="text-sm text-slate-500">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-8 leading-relaxed text-lg italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-2xl">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-slate-600 font-medium">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(220,38,38,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Start Your
            <br />
            <span className="text-blue-400">Next Project?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can bring your vision to life with our
            global expertise, proven track record, and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:scale-105">
              <span className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-blue-800" />
                Schedule Consultation
              </span>
            </Link>
            <Link
              href="/contact"
              className="group px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6 text-red-400" />
                Send Project Details
              </span>
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-slate-400 text-sm">
              Trusted by leading firms in Nigeria and beyond • Available 24/7
              for consultations
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

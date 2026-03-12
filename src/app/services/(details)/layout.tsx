"use client";

import { ServiceSidebar } from "@/components/ServicesSidebar";
import { ALL_SERVICES } from "@/lib/services-data";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Hero Section - Matching homepage style */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 text-white flex items-center overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-sm font-medium tracking-wide text-white/80">
                ESTABLISHED 2006 • GLOBAL REACH
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-tight">
              Our Services &
              <span className="block font-semibold mt-2">Capabilities</span>
            </h1>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-white/40 text-xs tracking-wider">
            <span>EXPLORE SERVICES</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4 xl:w-1/5 flex-shrink-0">
              <div className="lg:sticky lg:top-24 transition-all duration-300">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                    Explore Our Services
                  </h3>
                  <ServiceSidebar services={ALL_SERVICES} />
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:w-3/4 xl:w-4/5">
              <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-slate-200">
                {children}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching homepage style */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-slate-900 to-stone-900 text-white p-8 md:p-12 lg:p-16 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#ffffff10,transparent_70%)]"></div>

            <div className="relative max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                Ready to discuss your
                <span className="block font-semibold mt-2">
                  project requirements?
                </span>
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Let our experts provide the materials and support you need to
                ensure your project&apos;s success from the ground up.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group bg-white text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Phone className="w-4 h-4" />
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="group border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Mail className="w-4 h-4" />
                  Request Quote
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs sm:text-sm">
                  Lagos • Abuja • Port Harcourt • London • Dubai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

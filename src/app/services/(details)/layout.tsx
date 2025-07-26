"use client";

import { ServiceSidebar } from "@/components/ServicesSidebar";
import { ALL_SERVICES } from "@/lib/services-data";
import { Phone } from "lucide-react";
import Link from "next/link";

// NOTE: This layout assumes you have two components:
// 1. ServiceSidebar: A component that takes a list of services and renders navigation links.
// 2. The `children`: The actual content of the specific service page.

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-50 font-sans">
      {/* 1. Branded Hero Section for all Service Pages */}
      <section className="relative flex items-center justify-center min-h-[40vh] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Our Services & Capabilities
          </h1>
        </div>
      </section>

      {/* 2. Main Content with Sidebar */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4 xl:w-1/5 flex-shrink-0 lg:sticky lg:top-24 h-fit">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/80">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Explore Our Services
                </h3>
                {/* The actual sidebar component will render here */}
                <ServiceSidebar services={ALL_SERVICES} />
              </div>
            </aside>

            {/* Main Content Area (renders the specific service page) */}
            <main className="lg:w-3/4 xl:w-4/5">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200/80 min-h-[500px]">
                {children}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* 3. Consistent Call-to-Action Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-800 to-slate-900 text-white p-8 md:p-16 rounded-3xl text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
              Let our experts provide the materials and support you need to
              ensure your project's success from the ground up.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:scale-105">
              <Phone className="w-5 h-5" />
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

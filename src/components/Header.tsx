"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

// Assuming ALL_SERVICES is imported from your lib, like so:
// import { ALL_SERVICES } from "@/lib/services-data";
// Using placeholder data here for demonstration.
const ALL_SERVICES = [
  {
    title: "Road Construction & Engineering",
    href: "/services/road-construction-materials",
  },
  {
    title: "Building & Civil Construction",
    href: "/services/building-and-construction-materials",
  },
  { title: "Transport & Logistics", href: "/services/transport-logistics" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const mainNav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // Services link is handled separately for the dropdown
    // { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;
  const isServicesActive = () => pathname.startsWith("/services");

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-lg"
            : "bg-white"
        }`}>
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* ## Logo ## */}
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Return to homepage">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo.png" // Using your actual logo file
                  alt="Sprint G.S. Ltd. Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* ## Desktop Navigation ## */}
            <div className="hidden lg:flex items-center gap-2">
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-red-600"
                      : "text-slate-700 hover:text-red-600"
                  }`}>
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}>
                <Link
                  href="/services"
                  className={`flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                    isServicesActive()
                      ? "text-red-600"
                      : "text-slate-700 hover:text-red-600"
                  }`}>
                  Services
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-200/80 p-2 transform transition-all duration-200 origin-top scale-95 opacity-0 animate-scale-in">
                    {ALL_SERVICES.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className={`block w-full text-left px-4 py-3 text-sm rounded-lg hover:bg-slate-100 ${
                          isActive(service.href)
                            ? "text-red-600 font-semibold"
                            : "text-slate-700 hover:text-red-600"
                        }`}>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ## CTA & Mobile Menu Toggle ## */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5">
                <Phone className="w-4 h-4 mr-2" />
                Request a Quote
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
                aria-label="Toggle menu">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ## Full-Screen Mobile Menu ## */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 lg:hidden transform transition-all duration-300 animate-fade-in">
          <div className="container mx-auto px-6 pt-5 h-full">
            <div className="flex justify-between items-center mb-10">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-32 h-10">
                  <Image
                    src="/logo_sprintgs.png"
                    alt="Sprint G.S. Ltd. Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-slate-300 hover:bg-white/10"
                aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center gap-4 text-center">
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-2xl font-semibold py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-red-400"
                      : "text-slate-200 hover:text-white"
                  }`}>
                  {item.name}
                </Link>
              ))}
              <Link
                href="/services"
                className={`text-2xl font-semibold py-2 transition-colors ${
                  isServicesActive() && !pathname.includes("/services/")
                    ? "text-red-400"
                    : "text-slate-200 hover:text-white"
                }`}>
                Services
              </Link>
              <div className="flex flex-col items-center gap-2 pl-4 border-l-2 border-slate-700 mt-2">
                {ALL_SERVICES.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`text-lg transition-colors py-1 ${
                      isActive(service.href)
                        ? "text-red-40m_0 text-slate-2000"
                        : "text-slate-400 hover:text-white"
                    }`}>
                    {service.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/quote"
                className="mt-8 inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
                Request a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

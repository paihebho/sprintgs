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
    { name: "About Us", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;
  const isServicesActive = () => pathname.startsWith("/services");

  return (
    <>
      <style jsx global>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scaleIn 0.2s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 shadow-lg shadow-slate-900/10 backdrop-blur-md py-2"
            : "bg-white py-4"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              aria-label="Return to homepage"
            >
              <div className="relative w-32 sm:w-36 md:w-40 h-10 sm:h-12">
                <Image
                  src="/images/logo.png"
                  alt="Sprint G.S. Ltd. Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-red-600 bg-red-50"
                      : "text-slate-700 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown - Fixed with padding bridge */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isServicesActive()
                      ? "text-red-600 bg-red-50"
                      : "text-slate-700 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown with padding bridge to prevent gap */}
                {isServicesOpen && (
                  <>
                    {/* Invisible bridge to connect button to dropdown */}
                    <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-xl shadow-2xl border border-slate-200/80 py-2 transform transition-all duration-200 animate-scale-in">
                      {ALL_SERVICES.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(service.href)
                              ? "text-red-600 bg-red-50 font-medium"
                              : "text-slate-700 hover:text-red-600 hover:bg-red-50"
                          }`}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive("/contact")
                    ? "text-red-600 bg-red-50"
                    : "text-slate-700 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                <span className="hidden xs:inline">Request a Quote</span>
                <span className="xs:hidden">Quote</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <div className="relative w-28 sm:w-32 h-8 sm:h-10">
                  <Image
                    src="/images/logo.png"
                    alt="Sprint G.S. Ltd. Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-1">
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-red-600 bg-red-50"
                      : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div className="py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l-2 border-slate-200 space-y-1">
                    {ALL_SERVICES.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                        className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                          isActive(service.href)
                            ? "text-red-600 bg-red-50 font-medium"
                            : "text-slate-600 hover:text-red-600 hover:bg-slate-50"
                        }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive("/contact")
                    ? "text-red-600 bg-red-50"
                    : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-base font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Request a Quote
              </Link>

              <p className="mt-4 text-xs text-center text-slate-500">
                Lagos • Abuja • Port Harcourt • London • Dubai
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

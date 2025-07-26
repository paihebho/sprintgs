"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { mainContact } from "@/types";

// Assuming ALL_SERVICES is imported from your lib. Using placeholder data for demonstration.
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

export function Footer() {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Request a Quote", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  return (
    <footer className="bg-white text-slate-600">
      {/* Branded Gradient Top Bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-800 via-slate-700 to-red-600"></div>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* ## Column 1: Company Info ## */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" aria-label="Return to homepage">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo.png" // Your logo will have great contrast now
                  alt="Sprint G.S. Ltd. Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pioneering the future of construction and logistics in Nigeria
              with an unwavering commitment to quality, safety, and innovation.
            </p>

            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
              Location
            </h4>
            {/* Contact Details */}
            <div className="space-y-3">
              {mainContact.map((item, index) => {
                const Icon = item.icon;
                const content = item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-red-600 transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                );
                return (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <Icon className="w-4 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <div className="text-slate-600">{content}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ## Column 2: Quick Links ## */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-red-600 transition-colors text-sm hover:underline underline-offset-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ## Column 3: Our Services ## */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {ALL_SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-slate-600 hover:text-red-600 transition-colors text-sm hover:underline underline-offset-4">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ## Column 4: Stay Updated ## */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
              Stay Updated
            </h4>
            <p className="text-slate-600 text-sm mb-4">
              Subscribe for industry insights, project updates, and company
              news.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-md text-sm text-slate-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-md text-sm transition-colors flex-shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ## Bottom Bar ## */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-slate-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sprint G.S. Limited. All Rights
            Reserved.
          </p>
          <div className="flex space-x-1 text-slate-500">
            <span>Designed by</span>
            <Link
              href="https://clients.cofellow.com"
              className="hover:text-red-600 transition-colors">
              Cofellow Nigeria
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

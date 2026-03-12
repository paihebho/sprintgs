"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

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

const mainContact = [
  { icon: MapPin, text: "Lagos, Nigeria", href: null },
  { icon: Phone, text: "+234 (0) 123 456 7890", href: "tel:+2341234567890" },
  { icon: Mail, text: "info@sprintgs.com", href: "mailto:info@sprintgs.com" },
  { icon: Clock, text: "Mon - Fri: 8:00 AM - 6:00 PM", href: null },
];

export function Footer() {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Request a Quote", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  return (
    <footer className="bg-white text-slate-600">
      {/* Branded Gradient Top Bar - Matching homepage style */}
      <div className="h-1.5 bg-gradient-to-r from-blue-800 via-slate-700 to-red-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Company Info - 4 cols */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              aria-label="Return to homepage"
              className="inline-block"
            >
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Sprint G.S. Ltd. Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Pioneering the future of construction and logistics in Nigeria
              with an unwavering commitment to quality, safety, and innovation.
            </p>

            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links - 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-red-600 transition-colors text-sm inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-red-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services - 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {ALL_SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-slate-600 hover:text-red-600 transition-colors text-sm inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-red-600 transition-colors"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter - 4 cols */}
          <div className="lg:col-span-4">
            {/* Contact Details */}
            <div className="mb-6">
              <h4 className="text-base font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Contact Us
              </h4>
              <div className="space-y-3">
                {mainContact.map((item, index) => {
                  const Icon = item.icon;
                  const content = item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-red-600 transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm">{item.text}</span>
                  );
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <div className="text-slate-600">{content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Sprint G.S. Limited. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>Designed by</span>
            <Link
              href="https://clients.cofellow.com"
              className="text-blue-800 hover:text-red-600 transition-colors font-medium"
            >
              Cofellow Nigeria
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

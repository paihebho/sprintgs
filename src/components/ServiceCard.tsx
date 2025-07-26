// components/ServiceCard.tsx
"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: string;
  className?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  href,
  badge,
  className = "",
}: ServiceCardProps) => {
  return (
    <Link
      href={href}
      className={`group block h-full ${className}`}
      aria-label={`Learn more about ${title}`}>
      <div className="relative h-full bg-white rounded-2xl border border-gray-200/80 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/20 transform hover:-translate-y-1 overflow-hidden">
        {/* Gradient background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
              {badge}
            </span>
          </div>
        )}

        <div className="relative p-8 h-full flex flex-col">
          {/* Icon container */}
          <div className="flex justify-center mb-6">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300">
              <div className="w-8 h-8 flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                {icon}
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-blue-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center space-y-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-200">
              {description}
            </p>
          </div>

          {/* Call to action */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
            <span className="font-semibold text-sm">Learn More</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Link>
  );
};

// Alternative compact version for dense layouts
export const ServiceCardCompact = ({
  icon,
  title,
  description,
  href,
  className = "",
}: Omit<ServiceCardProps, "badge">) => {
  return (
    <Link
      href={href}
      className={`group block h-full ${className}`}
      aria-label={`Learn more about ${title}`}>
      <div className="h-full bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
            <div className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
              {icon}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-200 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
              {description}
            </p>
          </div>

          <div className="flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200" />
          </div>
        </div>
      </div>
    </Link>
  );
};

// Premium version with enhanced styling
export const ServiceCardPremium = ({
  icon,
  title,
  description,
  href,
  badge,
  className = "",
}: ServiceCardProps) => {
  return (
    <Link
      href={href}
      className={`group block h-full ${className}`}
      aria-label={`Learn more about ${title}`}>
      <div className="relative h-full bg-white rounded-3xl border border-gray-200/60 hover:border-gray-300/80 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/30 transform hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-6 right-6 z-10">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 shadow-sm">
              {badge}
            </span>
          </div>
        )}

        <div className="relative p-10 h-full flex flex-col">
          {/* Enhanced icon container */}
          <div className="flex justify-center mb-8">
            <div className="relative p-6 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 group-hover:from-blue-100 group-hover:via-blue-50 group-hover:to-indigo-100 transition-all duration-500 shadow-lg group-hover:shadow-xl">
              <div className="w-10 h-10 flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-all duration-300 transform group-hover:scale-110">
                {icon}
              </div>

              {/* Multiple glow effects */}
              <div className="absolute inset-0 rounded-3xl bg-blue-400/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl bg-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
            </div>
          </div>

          {/* Enhanced content */}
          <div className="flex-1 text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 max-w-sm mx-auto">
              {description}
            </p>
          </div>

          {/* Enhanced call to action */}
          <div className="mt-8 flex items-center justify-center space-x-3">
            <span className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
              Learn More
            </span>
            <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-all duration-300 transform group-hover:scale-110">
              <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-blue-700 transform group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Enhanced bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Subtle corner decoration */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
};

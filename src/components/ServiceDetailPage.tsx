// components/ServiceDetailPage.tsx
"use client";

import React from "react";

export interface ServiceSection {
  icon: React.ElementType;
  title: string;
  content: string;
}

interface ServiceDetailPageProps {
  title: string;
  subtitle: string;
  description: string;
  sections: ServiceSection[];
}

export const ServiceDetailPage = ({
  title,
  subtitle,
  description,
  sections,
}: ServiceDetailPageProps) => {
  return (
    // The component is now simpler, focusing only on its content
    <div className="overflow-hidden bg-gradient-to-br from-blue-100/50 to-transparent rounded-xl mt-10">
      {/* 1. Hero Section */}
      <div className="relative overflow-hidden bg-white p-8 lg:p-12 text-center border-b border-gray-200">
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96" />
        <div className="relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-3">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-semibold text-blue-700 mt-1">
            {subtitle}
          </p>
          <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed mt-5">
            {description}
          </p>
        </div>
      </div>

      {/* 2. Content Sections Grid */}
      <div className="p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="group relative bg-gray-50/70 rounded-2xl p-6 border border-gray-200/80">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white shadow-sm border border-gray-200">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

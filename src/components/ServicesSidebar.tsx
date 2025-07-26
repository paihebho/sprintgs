// components/ServiceSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  Building,
  Truck,
  HardHat,
  LandPlot,
  HelpCircle,
  Construction,
} from "lucide-react";

// 1. Create a map from string names to the actual imported components
const iconMap: { [key: string]: React.ElementType } = {
  HardHat,
  Construction,
  Truck,
  Building,
  LandPlot,
};

// 2. Update the type definition to expect 'iconName'
type ServiceLink = {
  title: string;
  href: string;
  iconName: string;
};

export function ServiceSidebar({ services }: { services: ServiceLink[] }) {
  const currentPath = usePathname();

  return (
    <div className="sticky top-24">
      <div className="mb-6">
        <Link
          href="/services"
          className="group inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to All Services
        </Link>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
      <nav className="space-y-2">
        {services.map((service) => {
          const isActive = currentPath === service.href;

          // 3. Look up the component from the map using the 'iconName' string
          // Use a fallback icon (like HelpCircle) if no match is found
          const Icon = iconMap[service.iconName] || HelpCircle;

          return (
            <Link
              key={service.title}
              href={service.href}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-200/60 hover:text-gray-900"
              }`}>
              <Icon
                className={`w-5 h-5 mr-3 ${
                  isActive ? "text-white" : "text-gray-500"
                }`}
              />
              {service.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

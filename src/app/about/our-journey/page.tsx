// app/about/our-journey/page.tsx
import Link from "next/link";
import {
  Flag,
  Truck,
  Building,
  Wind,
  Construction,
  ArrowRight,
  Compass,
  Telescope,
} from "lucide-react";

// Data for the Timeline Section
const milestones = [
  {
    year: "2007",
    title: "Company Inception",
    description:
      "Sprint G.S. Limited was founded in Lagos, Nigeria, with a vision to redefine the standards of the local construction industry.",
    icon: <Flag className="w-6 h-6" />,
    color: "from-blue-500 to-sky-500",
  },
  {
    year: "2012",
    title: "First Major Infrastructure Project",
    description:
      "Awarded the contract for the expansion of a critical section of the Lekki-Epe Expressway, showcasing our early capabilities.",
    icon: <Construction className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2016",
    title: "Launch of Logistics Division",
    description:
      "Expanded our services by launching a full-scale transport and logistics division to provide end-to-end solutions for our clients.",
    icon: <Truck className="w-6 h-6" />,
    color: "from-orange-500 to-amber-500",
  },
  {
    year: "2020",
    title: "Completion of Eko Atlantic Tower",
    description:
      "Successfully completed the construction of a landmark commercial tower in Eko Atlantic City, cementing our reputation for quality.",
    icon: <Building className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    year: "2024",
    title: "Expansion into Renewable Energy",
    description:
      "Broke ground on our first utility-scale solar power project, marking our commitment to a sustainable future for Nigeria.",
    icon: <Wind className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
  },
];

export default function OurJourneyPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* ## 1. Hero Section ## */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            The Story of Sprint G.S. Limited
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            From a bold vision in Lagos to a leader in Nigerian engineering, our
            journey is one of relentless growth, innovation, and commitment to
            building a better future.
          </p>
        </div>
      </section>

      {/* ## 2. Premium Timeline ## */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-cyan-300 to-purple-300 rounded-full"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex justify-between items-center w-full mb-12">
                  {/* Left or Right Content based on index */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "order-1" : "order-3"
                    }`}>
                    <div
                      className={`text-left ${
                        index % 2 !== 0 ? "lg:text-right" : ""
                      }`}>
                      <div className="group bg-white p-6 rounded-2xl shadow-lg border border-slate-200/80 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <p
                          className={`text-3xl font-black bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent mb-2`}>
                          {milestone.year}
                        </p>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 text-base leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Node in the middle */}
                  <div className="order-2 w-16 h-16 bg-white rounded-full border-4 border-blue-500 shadow-xl z-10 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center text-white shadow-inner`}>
                      {milestone.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ## 3. Looking Ahead Section ## */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gray-50/70 rounded-3xl p-8 lg:p-16 border border-gray-200/80">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl mb-5 shadow-md">
                  <Telescope className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Vision for the Future
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our journey doesn't end here. As we look to Tuesday, July 15,
                  2025 and beyond, we are focused on pioneering sustainable
                  infrastructure, embracing digital transformation in
                  construction, and expanding our role in powering Nigeria's
                  growth. Our next chapter will be our most ambitious yet.
                </p>
              </div>
              <div className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1621282622557-63a74304b4c7?q=80&w=2070&auto=format&fit=crop"
                  alt="A futuristic architectural blueprint"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ## 4. CTA Section ## */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Partner With Us on Our Next Chapter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Your vision could be our next milestone. Let's build the future
            together.
          </p>
          <Link
            href="/contact"
            className="group relative inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-3">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

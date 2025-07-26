"use client";

import { mainContact } from "@/types";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

// Data for contact items for easier mapping and maintenance
const contactDetails = [
  {
    icon: <MapPin className="w-6 h-6 text-red-600" />,
    title: "Our Office",
    line1: "123 Sprint Avenue, Victoria Island,",
    line2: "Lagos, Nigeria",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-800" />,
    title: "Email Us",
    line1: (
      <a href="mailto:info@sprintgs.com" className="hover:underline">
        info@sprintgs.com
      </a>
    ),
    line2: "For inquiries & project details",
  },
  {
    icon: <Phone className="w-6 h-6 text-red-600" />,
    title: "Call Us",
    line1: (
      <a href="tel:+2348012345678" className="hover:underline">
        +234 (0) 80 1234 5678
      </a>
    ),
    line2: "Speak with our expert team",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 font-sans">
      {/* Branded Hero Section */}
      <section className="relative flex items-center justify-center min-h-[50vh] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Let's Build Together
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
            Have a project in mind or a question for our team? We're here to
            help you get started.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column: Contact Info & Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200/80">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Contact Our Nigerian Office
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form or use the details below to reach our team.
              </p>

              {/* Contact Details Grid */}
              <div className="grid sm:grid-cols-1 gap-3 mb-10">
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

              {/* Business Hours */}
              <div className="border-t border-slate-200 pt-6 mb-10">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Business Hours
                </h3>
                <div className="flex items-center space-x-3 text-slate-600">
                  <Clock className="w-5 h-5 text-blue-800" />
                  <p>Monday - Friday: 8:00 AM – 5:00 PM (WAT)</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">
                  Send a Direct Message
                </h3>
                <form className="space-y-5">
                  {/* Full Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"></textarea>
                  </div>
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5">
                      <Send className="w-5 h-5 mr-2 transform group-hover:-rotate-12 transition-transform" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Map */}
            <div className="lg:sticky lg:top-24 h-[500px] lg:h-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=Suru+Alaba+Market,+Lagos+-+Badagry+Expressway,+Alaba,+Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[80%] hover:filter-none transition-all duration-500 ease-in-out"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Lucide Icons (for non-form elements)
import {
  FileText,
  Phone,
  UploadCloud,
  Send,
  Clock,
  MessageSquare,
} from "lucide-react";

// Data for the "Why Choose Us" section
const whyUsItems = [
  {
    icon: Clock,
    title: "Prompt Response",
    description:
      "We value your time. Expect a swift and timely response to your quote request from our expert team.",
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    description:
      "Our quotes are detailed, comprehensive, and transparent, giving you a clear understanding of all costs involved.",
  },
  {
    icon: MessageSquare,
    title: "Expert Consultation",
    description:
      "We don't just provide a price; we offer expert insights to ensure your project's success from the start.",
  },
];

export default function QuotePage() {
  return (
    <div className="bg-slate-50 font-sans">
      {/* 1. Branded Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Request a Quote
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
            Provide your project details below, and our team will prepare a
            comprehensive and competitive quote for you.
          </p>
        </div>
      </section>

      {/* 2. Main Content: Form & Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Left Column: The Form */}
            <div className="lg:col-span-2">
              <Card className="p-4 md:p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-900">
                    Project Details Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formspree.io/f/YOUR_UNIQUE_ID" // <-- REPLACE WITH YOUR FORMSPREE ENDPOINT
                    method="POST"
                    encType="multipart/form-data"
                    className="space-y-8 pt-6">
                    {/* Section 1: Contact Information */}
                    <fieldset className="space-y-6">
                      <legend className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">
                        Contact Information
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            type="text"
                            id="fullName"
                            name="Full Name"
                            placeholder="e.g., John Doe"
                            required
                          />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="companyName">
                            Company Name (Optional)
                          </Label>
                          <Input
                            type="text"
                            id="companyName"
                            name="Company Name"
                            placeholder="e.g., ABC Corporation"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            type="email"
                            id="email"
                            name="Email"
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="Phone"
                            placeholder="+234 80 1234 5678"
                            required
                          />
                        </div>
                      </div>
                    </fieldset>

                    {/* Section 2: Project Details */}
                    <fieldset className="space-y-6">
                      <legend className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">
                        Project Details
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="grid w-full items-center gap-1.5">
                          <Label>Service Required</Label>
                          <Select name="Service Type" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Road Construction">
                                Road Construction & Engineering
                              </SelectItem>
                              <SelectItem value="Building Construction">
                                Building & Civil Construction
                              </SelectItem>
                              <SelectItem value="Material Supply">
                                Material Supply
                              </SelectItem>
                              <SelectItem value="Logistics">
                                Transport & Logistics
                              </SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="location">Project Location</Label>
                          <Input
                            type="text"
                            id="location"
                            name="Location"
                            placeholder="e.g., Ikeja, Lagos"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="description">Project Description</Label>
                        <Textarea
                          id="description"
                          name="Description"
                          rows={5}
                          required
                          placeholder="Please describe your project, including scope, scale, and any specific requirements..."
                        />
                      </div>
                    </fieldset>

                    {/* Section 3: File Upload */}
                    <fieldset>
                      <legend className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">
                        Attachments
                      </legend>
                      <Label
                        htmlFor="fileUpload"
                        className="group w-full flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                        <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors mb-2" />
                        <span className="text-slate-600 font-semibold">
                          Click to upload files
                        </span>
                        <span className="text-sm text-slate-500">
                          PDF, DOCX, JPG (Max. 10MB)
                        </span>
                        <Input
                          id="fileUpload"
                          name="Attachment"
                          type="file"
                          className="sr-only"
                        />
                      </Label>
                    </fieldset>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 text-lg font-bold h-12">
                      <Send className="w-5 h-5 mr-3" />
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Why Us & Contact Info */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-10">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Why Get a Quote From Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {whyUsItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
              <div className="bg-blue-800 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Prefer to Talk?</h3>
                <p className="text-blue-200 mb-4">
                  For complex projects or immediate assistance, feel free to
                  call us directly.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="font-bold hover:scale-105">
                  <Link href="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>Contact Us</span>
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

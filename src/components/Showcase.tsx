"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, Eye, Sparkles, Filter } from "lucide-react";
import ImageModal from "./ImageModal";

interface ShowcaseItem {
  id: string;
  category: "public" | "pms" | "analytics";
  title: string;
  subtitle: string;
  badge: string;
  src: string;
  alt: string;
  span?: string;
}

export default function Showcase() {
  const [activeFilter, setActiveFilter] = useState<"all" | "public" | "pms" | "analytics">("all");
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    title: string;
    subtitle: string;
    badge: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
    title: "",
    subtitle: "",
    badge: "",
  });

  const items: ShowcaseItem[] = [
    {
      id: "home",
      category: "public",
      title: "Public Patient Homepage Hero",
      subtitle: "Pre-rendered Next.js SSG with BMDC doctor credentials, live chamber schedule, and WhatsApp booking",
      badge: "Public Interface • /",
      src: "/screenshots/dental7.png",
      alt: "SmileCare Public Patient Homepage Screenshot",
      span: "lg:col-span-8",
    },
    {
      id: "booking",
      category: "public",
      title: "Multi-Step Online Booking Wizard",
      subtitle: "Step 1 Service selection with symptom-based choices and zero advance deposit requirement",
      badge: "Booking Engine • /book",
      src: "/screenshots/dental9.png",
      alt: "Online Booking Wizard Screenshot",
      span: "lg:col-span-4",
    },
    {
      id: "queue",
      category: "pms",
      title: "Live Daily Queue & Patient Serial Tracker",
      subtitle: "Real-time queue tracking with patient status chips, big serial numbers, and 'Call In' triggers",
      badge: "PMS Core • /admin",
      src: "/screenshots/dental2.png",
      alt: "PMS Live Daily Queue Screenshot",
      span: "lg:col-span-6",
    },
    {
      id: "payments",
      category: "pms",
      title: "Billing & Multi-Channel Payments",
      subtitle: "৳43,500 collected today with bKash, Cash, and Card split reconciliations and balance alerts",
      badge: "Financial PMS • /admin/payments",
      src: "/screenshots/dental1.png",
      alt: "PMS Payments and Billing Ledger Screenshot",
      span: "lg:col-span-6",
    },
    {
      id: "calendar",
      category: "pms",
      title: "Doctor Chamber Appointment Calendar",
      subtitle: "30-minute interval grid with doctor filtering and automated Friday off-day exclusion rules",
      badge: "Chamber Schedule • /admin/calendar",
      src: "/screenshots/dental4.png",
      alt: "Appointment Calendar Matrix Screenshot",
      span: "lg:col-span-7",
    },
    {
      id: "profile",
      category: "pms",
      title: "Clinical Patient Profile & History",
      subtitle: "Medical records with Penicillin Allergy flag and synchronized odontogram and prescription tabs",
      badge: "EHR Record • /admin/patients",
      src: "/screenshots/dental3.png",
      alt: "Patient Clinical EHR History Screenshot",
      span: "lg:col-span-5",
    },
    {
      id: "services",
      category: "public",
      title: "Dynamic Service Catalog & Transparent Pricing",
      subtitle: "10 key dental procedures with transparent pricing: Scaling (৳1k), Root Canal (৳4k), Crowns (৳5k)",
      badge: "Public Catalog • /services",
      src: "/screenshots/dental8.png",
      alt: "Dynamic Service Catalog Screenshot",
      span: "lg:col-span-6",
    },
    {
      id: "reports",
      category: "analytics",
      title: "Business Intelligence & Monthly Revenue Reports",
      subtitle: "Monthly revenue graphs, Root Canal popularity breakdown, and 18% returning patient ratio",
      badge: "Analytics • /admin/reports",
      src: "/screenshots/dental5.png",
      alt: "Business Intelligence Reports Screenshot",
      span: "lg:col-span-6",
    },
    {
      id: "proof1",
      category: "analytics",
      title: "Google PageSpeed Desktop 100/100 Benchmark",
      subtitle: "Official production audit on https://www.dmsbcsh.com/ with 0.3s FCP and 0.6s LCP",
      badge: "Desktop Audit • Lighthouse",
      src: "/proof1.png",
      alt: "PageSpeed Insights Desktop 100 Benchmark Proof",
      span: "lg:col-span-6",
    },
    {
      id: "proof2",
      category: "analytics",
      title: "Google PageSpeed Mobile 97/91 Benchmark",
      subtitle: "Official production mobile audit demonstrating Core Web Vitals optimization on cellular networks",
      badge: "Mobile Audit • Lighthouse",
      src: "/proof2.png",
      alt: "PageSpeed Insights Mobile Benchmark Proof",
      span: "lg:col-span-6",
    },
  ];

  const filtered =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const openModal = (item: ShowcaseItem) => {
    setModalData({
      isOpen: true,
      src: item.src,
      alt: item.alt,
      title: item.title,
      subtitle: item.subtitle,
      badge: item.badge,
    });
  };

  return (
    <section id="showcase" className="py-24 border-t border-slate-800 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              14 / Visual Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mt-2">
              Curated Production Gallery
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-xl">
              Inspect real captures across all platform modules. Click any screenshot to open in high-resolution 2400px inspection view.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === "all"
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All Assets ({items.length})
            </button>
            <button
              onClick={() => setActiveFilter("public")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === "public"
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Public & Booking
            </button>
            <button
              onClick={() => setActiveFilter("pms")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === "pms"
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Practice Management (PMS)
            </button>
            <button
              onClick={() => setActiveFilter("analytics")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === "analytics"
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Audits & Reports
            </button>
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className={`group relative rounded-2xl overflow-hidden border border-slate-800 bg-[#090f20] cursor-pointer shadow-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 ${
                item.span || "lg:col-span-6"
              }`}
            >
              {/* Image Frame */}
              <div className="relative w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={2400}
                  height={1363}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 text-white font-medium text-xs border border-slate-700 shadow-xl backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-cyan-400" /> Inspect Capture
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-800/40">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 group-hover:text-teal-400 transition-colors">
                    <span>Inspect</span>
                    <ZoomIn className="w-3 h-3" />
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        imageSrc={modalData.src}
        imageAlt={modalData.alt}
        title={modalData.title}
        subtitle={modalData.subtitle}
        badge={modalData.badge}
      />
    </section>
  );
}

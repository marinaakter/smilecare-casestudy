"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Zap, CheckCircle2, Calendar, Users, LayoutDashboard, ZoomIn, ArrowDown, Sparkles } from "lucide-react";
import ImageModal from "./ImageModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePreview, setActivePreview] = useState<"public" | "pms" | "booking">("pms");

  const previews = {
    public: {
      src: "/screenshots/dental7.png",
      alt: "SmileCare Public Patient Discovery Homepage",
      title: "Public Patient Discovery Experience",
      subtitle: "Pre-rendered Next.js SSG with doctor credentials, live availability, and Google Maps chamber integration",
      badge: "Public Interface • /",
    },
    pms: {
      src: "/screenshots/dental2.png",
      alt: "SmileCare Clinic Practice Management System Live Daily Queue",
      title: "Clinic Practice Management System (PMS)",
      subtitle: "Live daily queue tracker with real-time patient states, serial numbers, and chamber call-in controls",
      badge: "PMS Operations • /admin",
    },
    booking: {
      src: "/screenshots/dental9.png",
      alt: "SmileCare Multi-Step Online Booking Engine",
      title: "Multi-Step Online Booking Engine",
      subtitle: "Atomic MongoDB serial generation, 3-patient per 30-min capacity locking, zero advance payment",
      badge: "Booking Engine • /book",
    },
  };

  const current = previews[activePreview];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Subtle modern ambient background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-teal-50 via-sky-50/40 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CENTERED HERO CONTENT */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>APIXEL CASE STUDY</span>
            <span className="text-teal-400">•</span>
            <span>HEALTHCARE SYSTEM ARCHITECTURE</span>
          </div>

          {/* Centered Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
            Engineering a Modern Dental Operating System
          </h1>

          {/* Centered Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            How Apixel transformed a fragmented clinical practice into a unified Next.js platform — combining public patient discovery, sub-second 30-minute booking, and complete clinic practice management (PMS).
          </p>

          {/* Key Metric Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-9">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-teal-600" />
              <span>0.3s FCP Edge Speed</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 shadow-sm">
              <span className="text-emerald-600 font-bold">100/100</span>
              <span>Lighthouse Score</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 shadow-sm">
              <span>🦷</span>
              <span>32-Tooth Digital Odontogram</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 shadow-sm">
              <span>📈</span>
              <span>৳44k Revenue Scaled</span>
            </div>
          </div>

          {/* Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <a
              href="#deep-dive"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-tight transition-all shadow-lg shadow-teal-600/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Interactive Platform</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://www.dmsbcsh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs tracking-tight transition-all border border-slate-200"
            >
              <span>Visit Live Website</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </div>

        {/* CENTERED HERO INTERACTIVE PREVIEW CANVAS */}
        <div className="max-w-5xl mx-auto">
          {/* Top Browser Bar & Tabs */}
          <div className="p-3 sm:p-4 rounded-t-2xl bg-slate-50 border border-b-0 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                smilecare-platform.internal
              </span>
            </div>

            {/* Interactive Preview Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-sm w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => setActivePreview("pms")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePreview === "pms"
                    ? "bg-teal-50 text-teal-900 font-bold border border-teal-300 shadow-xs ring-1 ring-teal-400/30"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-teal-600" />
                <span>01 Clinic PMS Queue</span>
              </button>

              <button
                onClick={() => setActivePreview("booking")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePreview === "booking"
                    ? "bg-teal-50 text-teal-900 font-bold border border-teal-300 shadow-xs ring-1 ring-teal-400/30"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-teal-600" />
                <span>02 Booking Engine</span>
              </button>

              <button
                onClick={() => setActivePreview("public")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePreview === "public"
                    ? "bg-teal-50 text-teal-900 font-bold border border-teal-300 shadow-xs ring-1 ring-teal-400/30"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Users className="w-3.5 h-3.5 text-teal-600" />
                <span>03 Patient Discovery</span>
              </button>
            </div>
          </div>

          {/* Screenshot Display Box with click-to-zoom */}
          <div
            onClick={() => setModalOpen(true)}
            className="group relative rounded-b-2xl overflow-hidden border border-slate-200 bg-white cursor-pointer shadow-lg hover:shadow-xl transition-all"
          >
            {/* Always visible Floating Click-to-Zoom Cue */}
            <div className="absolute top-3 right-3 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 text-slate-800 text-[11px] font-semibold font-mono border border-slate-200 shadow-sm backdrop-blur-xs group-hover:border-teal-500 group-hover:text-teal-700 transition-colors">
                <ZoomIn className="w-3.5 h-3.5 text-teal-600" />
                <span>Click to Zoom</span>
              </span>
            </div>

            <Image
              src={current.src}
              alt={current.alt}
              width={2400}
              height={1363}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.008]"
              priority
            />

            {/* Bottom info pill */}
            <div className="p-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-200">
                  {current.badge}
                </span>
                <span className="text-slate-800 font-semibold">{current.title}</span>
              </div>
              <span className="text-slate-500 text-[11px] truncate max-w-md">{current.subtitle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={current.src}
        imageAlt={current.alt}
        title={current.title}
        subtitle={current.subtitle}
        badge={current.badge}
      />
    </section>
  );
}

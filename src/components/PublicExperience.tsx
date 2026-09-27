"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe, ZoomIn, CheckCircle2, Shield, Search, ArrowRight, Sparkles } from "lucide-react";
import ImageModal from "./ImageModal";

export default function PublicExperience() {
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

  const openModal = (src: string, alt: string, title: string, subtitle: string, badge: string) => {
    setModalData({ isOpen: true, src, alt, title, subtitle, badge });
  };

  return (
    <section id="public-experience" className="py-20 border-t border-slate-800 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            04 / Public Patient Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
            High-Conversion Discovery Engineered for Trust & Speed
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Patients experiencing dental pain require instant clarity, verified doctor credibility,
            and immediate friction-free appointment pathways. We engineered the public interface as
            pure React Server Components (RSC) to guarantee sub-second delivery.
          </p>
        </div>

        {/* Feature 01: Hero Screenshot (dental7.png) */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-teal-400 px-2 py-0.5 rounded bg-teal-950/40 border border-teal-800/40">
                  Homepage Interface • /
                </span>
                <span className="text-xs text-slate-400">Pre-rendered Next.js SSG</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                High-Trust Hero with Credentials, Live Chamber Availability & 3D Imaging
              </h3>
            </div>

            <button
              onClick={() =>
                openModal(
                  "/screenshots/dental7.png",
                  "SmileCare Homepage Screenshot",
                  "Public Patient Discovery Homepage",
                  "Verified BMDC doctor credentials, live availability, 10+ years experience badge, and WhatsApp integration",
                  "Route: /"
                )
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inspect Fullscreen (2400px)</span>
            </button>
          </div>

          {/* Screenshot Display */}
          <div
            onClick={() =>
              openModal(
                "/screenshots/dental7.png",
                "SmileCare Homepage Screenshot",
                "Public Patient Discovery Homepage",
                "Verified BMDC doctor credentials, live availability, 10+ years experience badge, and WhatsApp integration",
                "Route: /"
              )
            }
            className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1d] cursor-pointer shadow-2xl"
          >
            <Image
              src="/screenshots/dental7.png"
              alt="SmileCare Homepage Screenshot"
              width={2400}
              height={1240}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white font-medium text-xs border border-slate-700 shadow-xl backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-cyan-400" /> Click to Inspect High-Res Capture
              </span>
            </div>
          </div>

          {/* Documented Capabilities Pill Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-xs font-mono text-slate-400">
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <span className="text-slate-400 block text-[10px] uppercase">Doctor Credentials</span>
              <span className="text-white font-medium">BMDC Verification</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <span className="text-slate-400 block text-[10px] uppercase">Chamber Schedule</span>
              <span className="text-white font-medium">Live Chamber Status</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <span className="text-slate-400 block text-[10px] uppercase">Local Discovery</span>
              <span className="text-white font-medium">Google Maps Chamber Sync</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <span className="text-slate-400 block text-[10px] uppercase">Instant Access</span>
              <span className="text-teal-400 font-medium">Direct WhatsApp API Hook</span>
            </div>
          </div>
        </div>

        {/* Feature 02: Service Catalog Screenshot (dental8.png) */}
        <div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                  Service Catalog • /services
                </span>
                <span className="text-xs text-slate-400">Dynamic SSG Routing</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Transparent Pricing & Procedure Timelines for 10 Core Dental Treatments
              </h3>
            </div>

            <button
              onClick={() =>
                openModal(
                  "/screenshots/dental8.png",
                  "SmileCare Services Catalog Screenshot",
                  "Dynamic Service Catalog & Transparent Pricing",
                  "Documented procedure costs: Scaling (৳1,000), Root Canal (৳4,000), Crown & Bridge (৳5,000) with FAQ schema",
                  "Route: /services"
                )
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inspect Fullscreen (2400px)</span>
            </button>
          </div>

          {/* Screenshot Display */}
          <div
            onClick={() =>
              openModal(
                "/screenshots/dental8.png",
                "SmileCare Services Catalog Screenshot",
                "Dynamic Service Catalog & Transparent Pricing",
                "Documented procedure costs: Scaling (৳1,000), Root Canal (৳4,000), Crown & Bridge (৳5,000) with FAQ schema",
                "Route: /services"
              )
            }
            className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1d] cursor-pointer shadow-2xl"
          >
            <Image
              src="/screenshots/dental8.png"
              alt="SmileCare Dental Services Screenshot"
              width={2400}
              height={1240}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white font-medium text-xs border border-slate-700 shadow-xl backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-cyan-400" /> Click to Inspect High-Res Capture
              </span>
            </div>
          </div>

          {/* Editorial Technical Deep-Dive on Service Pages */}
          <div className="mt-8 p-6 rounded-xl bg-slate-900/50 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div>
              <h4 className="font-semibold text-white mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                10 Dynamic Procedure Pages
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Static Site Generation (SSG) for high-intent treatments (e.g., Root Canal, Crowns,
                Scaling, Orthodontics). Each page statically generated at build time with 0ms database latency.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Transparent Pricing & Timelines
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Clear treatment pricing (Scaling from ৳1,000; Root Canal from ৳4,000; Crown from ৳5,000)
                paired with 4-step treatment timelines to eradicate patient anxiety prior to arrival.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                Structured FAQPage Data
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Every service slug dynamically embeds JSON-LD `FAQPage` and `MedicalProcedure` schema
                conforming to search crawler standards for rich snippet eligibility.
              </p>
            </div>
          </div>
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

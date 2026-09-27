"use client";

import React, { useState } from "react";
import { Zap, ChevronDown, ChevronUp } from "lucide-react";
import PerformanceGraph from "./PerformanceGraph";

export default function Performance() {
  const [expandedDetails, setExpandedDetails] = useState(false);

  const engineeringPillars = [
    {
      title: "01. Minimal First Contentful Paint (0.3s FCP)",
      desc: "Zero-JS Static Footprint: Public marketing pages render as pure React Server Components (RSC). Initial HTML payload contains complete structure without client hydration blocks.",
    },
    {
      title: "02. Zero-FOIT Font Optimization",
      desc: "Google Fonts (Plus Jakarta Sans & Inter) loaded via next/font/google, automatically self-hosting font binaries, inlining CSS definitions, and applying font-display: swap.",
    },
    {
      title: "03. Sub-Second Largest Contentful Paint (0.6s LCP)",
      desc: "Cloudinary CDN Edge transformations deliver AVIF and WebP formats dynamically sized to device DPR. Next.js priority preloading instructs the browser preload scanner before DOM parsing.",
    },
    {
      title: "04. Zero Cumulative Layout Shift (CLS: 0.00)",
      desc: "Strict aspect ratio wrappers and fixed geometric bounds prevent content re-flow during image hydration. Sticky navigation utilizes hardware-accelerated CSS transforms rather than JS scroll listeners.",
    },
    {
      title: "05. Perfect Local Dental SEO (100/100)",
      desc: "Machine-readable schema.org/Dentist JSON-LD markup injects clinic coordinates, chamber hours, and phone numbers. Combined with strict h1–h3 hierarchy, canonical tags, automated sitemap.xml, and robots.ts.",
    },
  ];

  return (
    <section id="performance" className="py-20 border-t border-slate-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-teal-700 font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200">
              04 / Verified Performance
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
              Live Production Audit
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mt-1">
            Audited via Google PageSpeed Insights
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Healthcare websites must load instantly for patients in acute pain. Audited on live production
            infrastructure (dmsbcsh.com) with verified sub-second paint milestones.
          </p>
        </div>

        {/* Visual Graph & Comparison Lab */}
        <div className="mb-10">
          <PerformanceGraph />
        </div>

        {/* Expandable Engineering Deep-Dive - Clean & Inviting */}
        <div className="rounded-xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
          <button
            onClick={() => setExpandedDetails(!expandedDetails)}
            className="w-full px-5 py-4 flex items-center justify-between text-left bg-slate-50/70 hover:bg-slate-100/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                How 100/100 Was Achieved: 5 Core Web Vitals Techniques
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-teal-800 bg-white px-2.5 py-0.5 rounded-full border border-teal-200 hidden sm:inline font-semibold">
                {expandedDetails ? "Click to collapse" : "👆 Click to expand"}
              </span>
              {expandedDetails ? (
                <ChevronUp className="w-4 h-4 text-teal-700" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-500" />
              )}
            </div>
          </button>

          {expandedDetails && (
            <div className="p-5 sm:p-6 divide-y divide-slate-100 text-xs bg-white">
              {engineeringPillars.map((item, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

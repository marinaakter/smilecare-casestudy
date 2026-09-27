"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, Monitor, Smartphone, ZoomIn, ArrowRight, Gauge, Check } from "lucide-react";
import ImageModal from "./ImageModal";

export default function PerformanceGraph() {
  const [viewDevice, setViewDevice] = useState<"desktop" | "mobile">("desktop");
  const [modalOpen, setModalOpen] = useState(false);

  const speedComparisons = [
    {
      metric: "First Contentful Paint (FCP)",
      smilecare: viewDevice === "desktop" ? "0.3s" : "1.0s",
      smilecareWidth: viewDevice === "desktop" ? 8 : 18,
      legacy: "4.8s",
      legacyWidth: 85,
      diff: viewDevice === "desktop" ? "16x Faster" : "4.8x Faster",
    },
    {
      metric: "Largest Contentful Paint (LCP)",
      smilecare: viewDevice === "desktop" ? "0.6s" : "3.2s",
      smilecareWidth: viewDevice === "desktop" ? 12 : 45,
      legacy: "6.2s",
      legacyWidth: 95,
      diff: viewDevice === "desktop" ? "10x Faster" : "2x Faster",
    },
    {
      metric: "Cumulative Layout Shift (CLS)",
      smilecare: "0.00",
      smilecareWidth: 4,
      legacy: "0.28",
      legacyWidth: 70,
      diff: "Zero Shift",
    },
  ];

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="text-[11px] font-mono text-teal-700 uppercase tracking-wider font-semibold">
              Speed & Core Web Vitals Lab
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            Performance Benchmark Comparison
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Audited on live production infrastructure via Google PageSpeed Insights.
          </p>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100/80 border border-slate-200 self-start sm:self-center">
          <button
            onClick={() => setViewDevice("desktop")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              viewDevice === "desktop"
                ? "bg-white text-teal-900 font-bold border border-slate-200 shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <Monitor className="w-3.5 h-3.5 text-teal-600" />
            <span>Desktop (100)</span>
          </button>
          <button
            onClick={() => setViewDevice("mobile")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              viewDevice === "mobile"
                ? "bg-white text-teal-900 font-bold border border-slate-200 shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-teal-600" />
            <span>Mobile (91)</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Comparison Graph + Score Gauges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-center">
        {/* Left: Speed Comparison Visual Graph (7 Cols) */}
        <div className="lg:col-span-7 p-6 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <span className="text-xs font-semibold text-slate-900">Visual Latency Comparison</span>
            <div className="flex items-center gap-4 text-[10px] font-mono">
              <span className="flex items-center gap-1.5 text-teal-700 font-semibold">
                <span className="w-2.5 h-2.5 rounded-sm bg-teal-500" /> SmileCare
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-400" /> Legacy Clinic Sites
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {speedComparisons.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-700 font-medium">{item.metric}</span>
                  <span className="font-mono text-teal-700 font-bold">{item.diff}</span>
                </div>

                {/* Bars */}
                <div className="space-y-1.5">
                  {/* SmileCare Bar */}
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-slate-200 h-6 rounded-md overflow-hidden relative p-0.5">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-sky-500 rounded flex items-center px-2 text-[10px] font-mono font-bold text-white transition-all duration-500"
                        style={{ width: `${Math.max(item.smilecareWidth, 14)}%` }}
                      >
                        {item.smilecare}
                      </div>
                    </div>
                  </div>

                  {/* Legacy Bar */}
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-slate-200 h-5 rounded-md overflow-hidden relative p-0.5">
                      <div
                        className="h-full bg-slate-400 rounded flex items-center px-2 text-[10px] font-mono text-white transition-all duration-500"
                        style={{ width: `${item.legacyWidth}%` }}
                      >
                        {item.legacy}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center justify-between">
            <span>Lower values = Better patient experience</span>
            <span className="text-emerald-700 font-semibold">Core Web Vitals: PASS</span>
          </div>
        </div>

        {/* Right: Lighthouse Score Gauges (5 Cols) */}
        <div className="lg:col-span-5 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-900">Google Lighthouse Scores</span>
              <span className="text-[10px] font-mono text-teal-700 font-semibold uppercase">
                {viewDevice.toUpperCase()} AUDIT
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center mb-6">
              <div className="p-3.5 rounded-xl bg-white border border-teal-200 shadow-sm">
                <span className="text-3xl font-display font-extrabold text-teal-600 block">
                  {viewDevice === "desktop" ? "100" : "91"}
                </span>
                <span className="text-[10px] font-mono uppercase text-slate-500 mt-1 block">
                  Performance
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl font-display font-extrabold text-teal-600 block">92</span>
                <span className="text-[10px] font-mono uppercase text-slate-500 mt-1 block">
                  Accessibility
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl font-display font-extrabold text-teal-600 block">100</span>
                <span className="text-[10px] font-mono uppercase text-slate-500 mt-1 block">
                  Best Practices
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl font-display font-extrabold text-teal-600 block">100</span>
                <span className="text-[10px] font-mono uppercase text-slate-500 mt-1 block">
                  SEO
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-xs font-mono text-slate-700 hover:text-teal-900 transition-all cursor-pointer shadow-xs group"
          >
            <ZoomIn className="w-3.5 h-3.5 text-teal-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">🔍 Click to Inspect Raw Google PageSpeed Screenshot</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Real Proof */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={viewDevice === "desktop" ? "/proof1.png" : "/proof2.png"}
        imageAlt={`Google PageSpeed Insights Official Audit - ${viewDevice}`}
        title={`Google PageSpeed Insights Audit Capture (${viewDevice.toUpperCase()})`}
        subtitle="Audited on live production URL https://www.dmsbcsh.com/"
        badge="Official Production Benchmark"
      />
    </div>
  );
}

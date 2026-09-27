"use client";

import React from "react";
import { CheckCircle2, TrendingUp, Clock, Zap, FileSpreadsheet, ShieldAlert, FileText, Sparkles } from "lucide-react";

export default function BusinessImpact() {
  const outcomes = [
    {
      metric: "99.9%",
      label: "Platform Uptime",
      detail: "Sub-300ms page transitions across the entire patient funnel, driven by Next.js server components and CDN caching.",
      icon: Zap,
    },
    {
      metric: "< 45s",
      label: "Mobile Confirmation",
      detail: "Patients confirm appointments in under 45 seconds on mobile devices without mandatory app downloads or advance payments.",
      icon: Clock,
    },
    {
      metric: "0",
      label: "Schedule Collisions",
      detail: "Real-time slot locking and atomic serial counters eliminate double-bookings and doctor schedule conflicts completely.",
      icon: ShieldAlert,
    },
    {
      metric: "100%",
      label: "Paperless Operations",
      detail: "Digital 32-tooth odontograms, instant PDF-ready prescriptions, and transparent revenue audit trails replace manual paper logs.",
      icon: FileText,
    },
  ];

  return (
    <section id="impact" className="py-24 border-t border-slate-800 bg-[#080d19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            13 / Business Outcomes & Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mt-2">
            Measurable Operational Transformation
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Direct business results documented in the SmileCare production deployment. The platform
            transformed fragmented clinic operations into a streamlined, paperless healthcare practice.
          </p>
        </div>

        {/* 4 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                      {item.metric}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Outcome</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Quote Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0a1020] to-slate-900 border border-slate-800 relative">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-2">
              Operational Takeaway
            </span>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
              "By eliminating the boundary between patient booking and in-clinic practice management,
              SmileCare demonstrates how thoughtful full-stack engineering can elevate patient care
              while eradicating administrative chaos."
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="text-white font-semibold">Apixel Case Study Analysis</span>
              <span>•</span>
              <span>Dental Healthcare Practice Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

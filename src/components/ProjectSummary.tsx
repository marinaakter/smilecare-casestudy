"use client";

import React from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Database, Layers, Zap } from "lucide-react";

export default function ProjectSummary() {
  const takeaways = [
    {
      title: "One Codebase, Two Worlds",
      desc: "Unifying high-speed public patient marketing with complex clinic back-office workflows eliminated data fragmentation and redundant third-party SaaS subscriptions.",
    },
    {
      title: "Deterministic Concurrency",
      desc: "Atomic serial counters and dynamic slot aggregation solved the chronic clinic problem of schedule collisions and overbooked waiting rooms.",
    },
    {
      title: "Sub-Second Delivery at Scale",
      desc: "React Server Components and edge image transformation proved that modern medical portals can attain 100/100 Core Web Vitals without sacrificing rich interactive dashboards.",
    },
    {
      title: "Paperless Clinical Continuity",
      desc: "Interactive 32-tooth odontograms and synchronized digital prescriptions permanently transitioned the practice away from fragile paper charts.",
    },
  ];

  return (
    <section className="py-24 border-t border-slate-800 bg-[#080d19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            15 / Project Synthesis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mt-2">
            Engineering Summary & Key Architectural Learnings
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            The SmileCare platform proves that clinical software does not have to be ugly, slow, or fragmented.
            By engineering the product as a unified digital system, Apixel bridged the gap between patient discovery and operational execution.
          </p>
        </div>

        {/* 4 Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {takeaways.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Flow Banner */}
        <div className="p-8 rounded-2xl bg-[#090f20] border border-cyan-500/20 text-center">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-semibold">
            The Unified Continuum
          </span>
          <p className="text-lg sm:text-xl font-display font-medium text-white max-w-4xl mx-auto leading-relaxed">
            Public Discovery &nbsp;➔&nbsp; Appointment Booking &nbsp;➔&nbsp; Patient Self-Service &nbsp;➔&nbsp;
            Live Clinic Queue &nbsp;➔&nbsp; Dental Odontogram &nbsp;➔&nbsp; E-Prescription &nbsp;➔&nbsp;
            Multi-Channel Billing &nbsp;➔&nbsp; BI Reporting
          </p>
        </div>
      </div>
    </section>
  );
}

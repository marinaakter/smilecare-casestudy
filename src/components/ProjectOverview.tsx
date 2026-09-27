"use client";

import React from "react";
import { CheckCircle2, Layers, Cpu, Database, ShieldCheck, Zap } from "lucide-react";

export default function ProjectOverview() {
  const highlights = [
    {
      title: "Public Patient Discovery",
      desc: "Static Site Generation (SSG) for 10 core dental procedures with sub-second page loads, medical credentials, and schema.org structured data.",
      route: "/ (public)",
      icon: Zap,
    },
    {
      title: "Online Booking Engine",
      desc: "4-step wizard with atomic MongoDB serial allocation, real-time slot capacity checks (3 patients / 30 mins), and zero advance payment.",
      route: "/book",
      icon: Layers,
    },
    {
      title: "Self-Service Patient Portal",
      desc: "Phone OTP auth with SHA-256 tokens, multi-patient family profile switcher, printable clinical prescriptions, and payment history.",
      route: "/(portal)",
      icon: ShieldCheck,
    },
    {
      title: "Practice Management (PMS)",
      desc: "Clinic back-office featuring live daily queues, 32-tooth interactive dental charts, quick prescription writer, and multi-channel billing.",
      route: "/(admin)",
      icon: Cpu,
    },
  ];

  return (
    <section id="overview" className="py-16 border-t border-slate-800/80 bg-[#080c17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              01 / Project Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1 tracking-tight">
              An Enterprise Digital Platform, Not Just a Clinic Website
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            Engineered by Apixel to unify patient discovery and daily clinical operations into a
            single, type-safe Next.js platform.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50">
                      {item.route}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Snapshot Table */}
        <div className="rounded-xl bg-slate-900/40 border border-slate-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Specification Matrix
            </span>
            <span className="text-xs font-mono text-emerald-400">Production Release v15.5</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-xs">
            <div className="p-5">
              <span className="text-slate-400 block mb-1">Architecture</span>
              <span className="text-white font-medium">4-Tier Separation of Concerns</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">RSC + API + Services + Repos</span>
            </div>

            <div className="p-5">
              <span className="text-slate-400 block mb-1">Rendering Engine</span>
              <span className="text-white font-medium">Next.js 15.5 App Router</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Hybrid SSG & Server Components</span>
            </div>

            <div className="p-5">
              <span className="text-slate-400 block mb-1">Persistence & Data</span>
              <span className="text-white font-medium">MongoDB + Mongoose 8.9</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Atomic counter collections</span>
            </div>

            <div className="p-5">
              <span className="text-slate-400 block mb-1">Benchmarked LCP</span>
              <span className="text-white font-medium">0.6s (Desktop) / 3.2s (Mobile)</span>
              <span className="text-[11px] text-emerald-400 block mt-0.5">Zero layout shift (CLS: 0.00)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

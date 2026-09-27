"use client";

import React, { useState } from "react";
import { Globe, CalendarClock, UserCheck, Stethoscope, ArrowRight, ShieldCheck, Database, Layers } from "lucide-react";

export default function PlatformOverview() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "public",
      number: "01",
      name: "Public Patient Discovery",
      route: "/(public)",
      tagline: "Sub-second static acquisition for high-intent patients",
      description:
        "High-trust marketing pages pre-rendered via Next.js SSG with medical credentials, live doctor availability, 10 dynamic procedure pages, transparent pricing, and schema.org structured data.",
      features: [
        "Homepage with BMDC doctor credentials & chamber map",
        "10 dynamic procedure pages with transparent pricing",
        "Problem-oriented 'In Your Words' symptom matcher",
        "Zero-JS RSC initial HTML for 0.3s First Contentful Paint",
      ],
      color: "from-teal-500/20 to-teal-500/5",
      border: "border-teal-500/30",
      text: "text-teal-400",
    },
    {
      id: "booking",
      number: "02",
      name: "Online Booking Engine",
      route: "/book",
      tagline: "Friction-free 4-step wizard with atomic concurrency control",
      description:
        "Instant digital ticket generation with atomic serial numbering via MongoDB $inc counter, 30-minute slot aggregation capping 3 patients per slot, and Dhaka timezone off-day handling.",
      features: [
        "Service ➔ Slot ➔ Details ➔ Digital Ticket flow",
        "Atomic $inc Counter eliminating serial race conditions",
        "Max 3 patients per 30-min slot capacity ceiling",
        "Zero advance payment required; sub-45s mobile flow",
      ],
      color: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
    },
    {
      id: "portal",
      number: "03",
      name: "Self-Service Patient Portal",
      route: "/(portal)",
      tagline: "Passwordless clinical records & prescription access",
      description:
        "Secure phone OTP verification allowing patients to switch family profiles under a single phone number, inspect past visit records, track invoices, and print high-fidelity prescriptions.",
      features: [
        "2-phase SMS OTP authentication (SHA-256 code, 5m TTL)",
        "Multi-family member profile switcher under one mobile",
        "Printable clinical prescriptions with 1+0+1 dosage pills",
        "Real-time ledger of completed visits and paid balances",
      ],
      color: "from-indigo-500/20 to-indigo-500/5",
      border: "border-indigo-500/30",
      text: "text-indigo-400",
    },
    {
      id: "pms",
      number: "04",
      name: "Practice Management (PMS)",
      route: "/(admin)",
      tagline: "Full clinical back-office for receptionists & doctors",
      description:
        "The operational core: live daily queue manager, walk-in emergency intake modal, interactive 32-tooth universal dental chart, quick prescription writer, multi-channel billing, and BI reporting.",
      features: [
        "Live queue tracking with Waiting / In-Chamber states",
        "Interactive 32-tooth dental chart with condition records",
        "Prescription writer synchronized directly to patient portal",
        "Multi-channel billing (bKash, Cash, Card) with due tracking",
      ],
      color: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
    },
  ];

  return (
    <section id="platform" className="py-20 border-t border-slate-800 bg-[#080d19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              03 / The Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
              A Unified 4-in-1 Healthcare Operating System
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Eliminating the boundary between public discovery and clinical back-office operations
            through a single transactional MongoDB data model.
          </p>
        </div>

        {/* System Connected Flow Diagram */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a1022] border border-slate-800 mb-12 relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              End-to-End System Connectivity
            </span>
            <h3 className="text-lg font-semibold text-white mt-1">
              One Shared Backend Architecture Serving All 4 Contexts
            </h3>
          </div>

          {/* 4 Connected Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {pillars.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-xl cursor-pointer transition-all border ${
                  activeTab === idx
                    ? `bg-slate-900 ${item.border} shadow-lg ring-1 ring-cyan-500/20`
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${item.text}`}>
                    NODE {item.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                    {item.route}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">{item.name}</h4>
                <p className="text-xs text-slate-400 line-clamp-2">{item.tagline}</p>
              </div>
            ))}
          </div>

          {/* Connector Line on Desktop */}
          <div className="hidden md:block my-6 px-12">
            <div className="h-[2px] w-full bg-gradient-to-r from-teal-500/40 via-cyan-500/40 to-emerald-500/40 relative">
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
              <div className="absolute top-1/2 left-2/4 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
            </div>
          </div>

          {/* Central DB & Shared Services Layer */}
          <div className="mt-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 text-slate-300">
              <Database className="w-4 h-4 text-cyan-400" />
              <span>MongoDB Shared Storage: Appointments • Serials • Clinical Records • Invoices</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Next.js Edge Middleware RBAC Session Guard</span>
            </div>
          </div>
        </div>

        {/* Selected Pillar Detail Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 ${pillars[activeTab].text}`}>
                  PILLAR {pillars[activeTab].number}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Route Scope: {pillars[activeTab].route}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                {pillars[activeTab].name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {pillars[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {pillars[activeTab].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center p-6 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Operational Rationale
              </span>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                By co-locating this subsystem with clinic services in Next.js App Router, all state
                mutations occur with sub-300ms latency. No third-party API webhooks or iframe delays.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified in Production</span>
                <span className="text-emerald-400 font-semibold">100% Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

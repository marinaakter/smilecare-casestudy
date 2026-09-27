"use client";

import React, { useState } from "react";
import { ArrowDown, Database, Layers, Check, HelpCircle, Code, ShieldCheck } from "lucide-react";

export default function Architecture() {
  const [activeTradeoff, setActiveTradeoff] = useState<number>(0);

  const tiers = [
    {
      tier: "Tier 1",
      name: "Client UI & View Layer",
      path: "src/app/ (Public, Portal, Admin)",
      role: "React Server Components (RSC) for marketing pages + React Client Components for interactive PMS dashboards and booking wizards.",
      rule: "Consumes only typed helpers; zero direct DB access.",
    },
    {
      tier: "Tier 2",
      name: "API Routes & Request Controllers",
      path: "src/app/api/* & src/lib/api.ts",
      role: "Thin controllers responsible solely for request deserialization, Zod schema validation, and delegating execution to the business service layer.",
      rule: "Rule: Route handlers never query Mongoose directly.",
    },
    {
      tier: "Tier 3",
      name: "Business Services Layer",
      path: "src/server/services/*",
      role: "Pure domain logic: chamber capacity checks, atomic booking allocations, SMS dispatch, payment calculation, and timezone scheduling rules.",
      rule: "Rule: Services never import Mongoose models directly.",
    },
    {
      tier: "Tier 4",
      name: "Repositories & Data Layer",
      path: "src/server/repositories/* & src/server/models/*",
      role: "Isolated database mutations, atomic $inc Counter transactions, Mongoose schemas, and indexing strategies.",
      rule: "Rule: Only repositories execute Mongoose queries.",
    },
  ];

  const tradeoffs = [
    {
      question: "Why a Unified Next.js Monolith over Microservices?",
      decision: "Unified Modular Monolith",
      alternative: "Distributed Microservices (Booking API, PMS Service, Portal API)",
      rationale:
        "Separating the public scheduler, clinic PMS, and patient portal into independent microservices would introduce distributed transaction coordination (Sagas), network serialization latency, and authentication overhead for a single medical practice. A modular Next.js monolith sharing unified MongoDB schemas guarantees ACID consistency, zero internal network latency, and simple one-click edge deployment.",
    },
    {
      question: "Why React Server Components (RSC) over Client-Side SPA?",
      decision: "Hybrid SSG + React Server Components",
      alternative: "Client-Side Single Page Application (Vite / CRA)",
      rationale:
        "Patients searching for emergency dental care on mobile networks cannot wait for a heavy 2MB JavaScript bundle to parse before seeing clinic hours or booking buttons. RSC delivers pure static HTML on the edge in 0.3s, completely eliminating First Contentful Paint (FCP) delays while reserving client JavaScript strictly for interactive tools.",
    },
    {
      question: "How is Serverless MongoDB Connection Exhaustion Prevented?",
      decision: "Global Cached Connection Singleton (src/server/db.ts)",
      alternative: "Opening mongoose.connect() per request",
      rationale:
        "Next.js serverless route handlers spin up independently during traffic spikes. If each handler opened a dedicated connection, MongoDB Atlas would rapidly hit max connection limits. Implementing a cached global mongoose singleton preserves and reuses database sockets across warm lambda invocations.",
    },
    {
      question: "Why Zod Schema Validation at the Edge Layer?",
      decision: "Runtime Zod Schema Enforcement",
      alternative: "Manual if/else validation or loose TypeScript casting",
      rationale:
        "TypeScript types disappear at runtime. Zod schemas validate every incoming booking payload at the HTTP controller boundary, guaranteeing that invalid phone numbers, illegal time slots, or malformed medical inputs are rejected before reaching database service routines.",
    },
  ];

  return (
    <section id="architecture" className="py-20 border-t border-slate-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-700 font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200">
            02 / Architecture & Trade-Offs
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mt-2">
            System Architecture & Key Technical Decisions
          </h2>
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
            Great software engineering is defined by deliberate trade-offs. Here is the architectural pipeline engineered by Apixel and why alternative patterns were rejected:
          </p>
        </div>

        {/* 4-Tier Flow Visual Pipeline - Light & Crisp */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-14 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-100 gap-2">
            <div>
              <span className="text-xs font-mono text-teal-700 uppercase tracking-wider font-semibold">
                Unidirectional Execution Pipeline
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                Strict Layering: Client UI ➔ Controller ➔ Domain Service ➔ Repository ➔ MongoDB
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-semibold shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Production Enforced</span>
            </div>
          </div>

          <div className="space-y-3">
            {tiers.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="p-4 sm:p-4.5 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-300 hover:bg-white transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start md:items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex flex-col items-center justify-center text-teal-800 shrink-0">
                      <span className="text-[10px] font-mono font-bold leading-none">{item.tier}</span>
                      <Layers className="w-3.5 h-3.5 mt-0.5 text-teal-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-slate-900">{item.name}</span>
                        <code className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                          {item.path}
                        </code>
                      </div>
                      <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">{item.role}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-teal-800 bg-white px-3 py-1.5 rounded-lg border border-teal-200/80 shrink-0 self-start md:self-center font-medium shadow-2xs">
                    {item.rule}
                  </span>
                </div>

                {idx < tiers.length - 1 && (
                  <div className="flex justify-center my-1.5 text-slate-300">
                    <ArrowDown className="w-3.5 h-3.5 text-teal-600/70" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Database Base Node */}
          <div className="mt-5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <Database className="w-4 h-4 text-teal-600" />
              <span>MongoDB Enterprise Database with Cached Global Connection Pool (src/server/db.ts)</span>
            </div>
            <span className="text-emerald-700 font-semibold hidden sm:inline">Single Connection Pool</span>
          </div>
        </div>

        {/* Architectural Trade-offs & Decisions Section */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-mono uppercase tracking-wider text-teal-700 font-bold">
                Engineering Trade-Offs (Why X, Not Y?)
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
              👆 Click an ADR to view trade-off rationale
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-6">
            Architectural Decision Records (ADRs)
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Decision Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              {tradeoffs.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTradeoff(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 text-xs cursor-pointer ${
                    activeTradeoff === idx
                      ? "bg-teal-50 text-teal-950 font-bold border-teal-400 shadow-xs ring-1 ring-teal-400/40"
                      : "bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <span className="leading-snug">{item.question}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 font-medium ${
                      activeTradeoff === idx
                        ? "bg-teal-600 text-white font-bold"
                        : "bg-white border border-slate-200 text-slate-600"
                    }`}
                  >
                    ADR 0{idx + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Decision Detail Canvas (7 cols) */}
            <div className="lg:col-span-7 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Chosen: {tradeoffs[activeTradeoff].decision}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-200 text-slate-700 border border-slate-300 line-through">
                    Rejected: {tradeoffs[activeTradeoff].alternative}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {tradeoffs[activeTradeoff].question}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tradeoffs[activeTradeoff].rationale}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-teal-600" />
                <span>Enforced across production repository</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Clock, Users, DollarSign, Award, ArrowUpRight } from "lucide-react";

export default function BusinessOutcome() {
  const roiMetrics = [
    {
      metric: "40%",
      label: "Reduction in Staff Overhead",
      desc: "Receptionists transitioned from manual paper registries to one-click digital intake and automatic queue status updates.",
      icon: Clock,
      color: "text-teal-700 bg-teal-50 border-teal-200",
    },
    {
      metric: "0",
      label: "Chamber Schedule Collisions",
      desc: "Atomic serial counter and real-time 30-minute capacity locking completely eliminated double-booked doctor appointments.",
      icon: ShieldCheck,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      metric: "100%",
      label: "Audit-Ready Financials",
      desc: "Multi-channel ledger reconciling bKash, card, cash collections, and outstanding dues without manual book-keeping discrepancies.",
      icon: DollarSign,
      color: "text-sky-700 bg-sky-50 border-sky-200",
    },
    {
      metric: "6 Weeks",
      label: "Discovery to Production",
      desc: "Architected, developed, tested, and deployed to live production URL with zero downtime and 100/100 Core Web Vitals.",
      icon: Award,
      color: "text-indigo-700 bg-indigo-50 border-indigo-200",
    },
  ];

  return (
    <section id="impact" className="py-20 border-t border-slate-200 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-700 font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200">
            05 / Production Impact & ROI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mt-2">
            Measurable Operational & Business Outcomes
          </h2>
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
            Engineering excellence is verified by clinical outcome. The SmileCare platform converted a stressed, manual clinic into a streamlined, high-efficiency healthcare operation:
          </p>
        </div>

        {/* 4 ROI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roiMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">KPI 0{idx + 1}</span>
                  </div>
                  <div className="text-3xl font-display font-extrabold text-slate-900 mb-1">{item.metric}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{item.label}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified in Production</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Retrospective Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-teal-700 font-bold block mb-1">
                Engineering Post-Mortem
              </span>
              <h3 className="text-xl font-display font-bold text-slate-900">
                The Lesson: Healthcare Requires Domain-Driven Systems, Not Generic Site Templates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                By investing in a custom Next.js architecture with strict 4-tier boundaries, SmileCare eliminated the recurring maintenance debt, security vulnerabilities, and database collisions typical of plugin-based medical sites. The unified codebase is ready to scale across multi-branch clinic expansions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="https://www.dmsbcsh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-all shadow-sm"
              >
                <span>Inspect Live Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href="https://apixel.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <span>Partner with Apixel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

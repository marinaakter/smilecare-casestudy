"use client";

import React from "react";
import { AlertTriangle, CheckCircle, ArrowRight, Clock, FileSpreadsheet, Zap, Database, Lock } from "lucide-react";

export default function Challenge() {
  return (
    <section id="challenges" className="py-20 border-t border-slate-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-700 font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200">
            01 / Root Cause & Failure Modes
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-2 tracking-tight">
            Why Off-The-Shelf Dental Systems Fail in Production
          </h2>
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
            Prior to SmileCare’s custom architecture, the clinic operated across three disconnected channels: a slow WordPress template, handwritten paper charts, and detached Excel cashbooks. This created systemic operational failures:
          </p>
        </div>

        {/* 3 Core Engineering Failure Modes Cards - Light & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Failure Mode 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                  Concurrency Failure
                </span>
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                  <Lock className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Chamber Booking Collisions</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Phone appointments, walk-in patients, and generic web form submissions had zero synchronized concurrency control. Two patients were frequently booked into the exact same 30-minute doctor slot.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-rose-700 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>Impact: Waiting room chaos & 45-min delays</span>
            </div>
          </div>

          {/* Failure Mode 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Clinical Blindspots
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Fragile Paper EHR Records</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Tooth histories, root canal stages, and crucial medical allergy alerts (<strong className="text-slate-800 font-semibold">Penicillin allergies</strong>) were trapped in physical paper folders that frequently went missing between operatory rooms.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-amber-700 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Impact: Medical safety risk & missing logs</span>
            </div>
          </div>

          {/* Failure Mode 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                  Latency Penalty
                </span>
                <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">5.8s Mobile Drop-Off</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Heavy WordPress themes with 50+ plugins took nearly 6 seconds to render on 4G cellular. Prospective patients suffering acute dental pain abandoned the page before completing an appointment request.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-600 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Impact: 65% patient abandonment before booking</span>
            </div>
          </div>
        </div>

        {/* Visual Side-by-Side Architectural Transformation - Clean Minimalist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Left: The Legacy Frustration */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/60 border border-slate-200">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/80">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                Legacy Stack (The Past)
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                Fragmented Plugins
              </span>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-slate-500 font-mono text-[11px]">First Contentful Paint (FCP)</span>
                  <span className="text-rose-600 font-mono font-bold">4.8s Latency</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-400 h-full w-[80%]" />
                </div>
              </div>
              <div className="flex items-start gap-2 text-slate-600">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Unsynchronized appointment channels causing double-booked chambers.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-600">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Paper clipboards for queue tracking; zero real-time receptionist status.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-600">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Hand-written cashbooks creating bKash/cash payment discrepancies.</span>
              </div>
            </div>
          </div>

          {/* Right: The SmileCare Solution */}
          <div className="p-6 sm:p-7 rounded-2xl bg-teal-50/30 border border-teal-200/80">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-teal-200/60">
              <span className="text-xs font-mono font-bold text-teal-900 uppercase tracking-wider">
                SmileCare Unified Platform (Apixel)
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-teal-100/80 text-teal-800 border border-teal-200 font-semibold">
                Single Codebase Engine
              </span>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700">
              <div className="p-3.5 rounded-xl bg-white border border-teal-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-slate-500 font-mono text-[11px]">First Contentful Paint (FCP)</span>
                  <span className="text-teal-700 font-mono font-bold">0.3s (16x Faster)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-500 h-full w-[10%]" />
                </div>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <span className="text-teal-600 font-bold shrink-0">✓</span>
                <span>Atomic MongoDB serial generator (#01–#08) with 30-minute slot locking.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <span className="text-teal-600 font-bold shrink-0">✓</span>
                <span>Interactive 32-tooth odontogram with optimistic updates & zero paper.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <span className="text-teal-600 font-bold shrink-0">✓</span>
                <span>Unified ledger tracking bKash, card, cash, dues, and monthly BI analytics.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Decision Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-700 font-bold block mb-1">
              Core Architectural Directive
            </span>
            <h4 className="text-base font-bold text-slate-900">
              Solve with One Unified Next.js Monolith, Not Duct-Taped Third-Party SaaS
            </h4>
          </div>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Review System Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

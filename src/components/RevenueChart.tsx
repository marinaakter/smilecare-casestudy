"use client";

import React, { useState } from "react";
import { TrendingUp, Users, DollarSign, Award, ArrowUpRight } from "lucide-react";

export default function RevenueChart() {
  const [activeMonth, setActiveMonth] = useState<number>(5); // Sep default

  const months = [
    { name: "Apr", rev: 0, label: "৳0" },
    { name: "May", rev: 1200, label: "৳1.2k" },
    { name: "Jun", rev: 1800, label: "৳1.8k" },
    { name: "Jul", rev: 9000, label: "৳9k" },
    { name: "Aug", rev: 3500, label: "৳3.5k" },
    { name: "Sep", rev: 44000, label: "৳44k (Peak)" },
  ];

  const services = [
    { name: "Root Canal Treatment", count: 20, pct: 83, rev: "৳80,000+" },
    { name: "Orthodontics Consult", count: 1, pct: 5, rev: "৳1,500" },
    { name: "Composite Dental Filling", count: 1, pct: 5, rev: "৳3,500" },
    { name: "Dental Crown & Bridge", count: 1, pct: 5, rev: "৳12,000" },
    { name: "Scaling & Polishing", count: 1, pct: 4, rev: "৳1,500" },
  ];

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="text-[11px] font-mono text-teal-700 uppercase tracking-wider font-semibold">
              Live Practice Metrics & BI Analytics
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            Operational Revenue & Procedure Distribution
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Directly compiled from SmileCare MongoDB aggregation pipelines (/admin/reports).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-600 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">
            Source: PMS Monthly Report (Sep 2026)
          </span>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
            Revenue This Month
          </span>
          <span className="text-2xl font-display font-extrabold text-slate-900">৳43,500</span>
          <span className="text-[10px] font-mono text-emerald-600 font-semibold block mt-1">↑ +388% vs Jul</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
            Total Dues Pending
          </span>
          <span className="text-2xl font-display font-extrabold text-rose-600">৳25,000</span>
          <span className="text-[10px] font-mono text-slate-500 block mt-1">4 Pending Invoices</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
            Patients Treated
          </span>
          <span className="text-2xl font-display font-extrabold text-sky-600">11</span>
          <span className="text-[10px] font-mono text-slate-500 block mt-1">Zero No-shows Today</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
            New Patient Acquisition
          </span>
          <span className="text-2xl font-display font-extrabold text-teal-600">9</span>
          <span className="text-[10px] font-mono text-teal-700 font-medium block mt-1">82% First-time Visits</span>
        </div>
      </div>

      {/* Main Dual Graphs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 6-Month Interactive Revenue Curve (7 Cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-semibold text-slate-900">Revenue Growth Trend (Last 6 Months)</span>
                <span className="text-[10px] font-mono text-slate-500 block mt-0.5">Click month to inspect value</span>
              </div>
              <span className="text-xs font-mono font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded border border-teal-200">
                Peak: ৳44k (Sep)
              </span>
            </div>

            {/* Visual SVG Line Graph */}
            <div className="relative h-44 sm:h-52 w-full pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
                {/* Horizontal Grid lines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="#e2e8f0" strokeDasharray="3 3" strokeWidth="1" />
                <line x1="0" y1="100" x2="600" y2="100" stroke="#e2e8f0" strokeDasharray="3 3" strokeWidth="1" />
                <line x1="0" y1="160" x2="600" y2="160" stroke="#e2e8f0" strokeDasharray="3 3" strokeWidth="1" />

                {/* Shaded Area Under Curve */}
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50 185 L 150 180 L 250 175 L 350 135 L 450 165 L 550 45 L 550 190 L 50 190 Z"
                  fill="url(#revGrad)"
                />

                {/* Trend Polyline */}
                <polyline
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="50,185 150,180 250,175 350,135 450,165 550,45"
                />

                {/* Data Points */}
                {[
                  { cx: 50, cy: 185, val: "৳0" },
                  { cx: 150, cy: 180, val: "৳1.2k" },
                  { cx: 250, cy: 175, val: "৳1.8k" },
                  { cx: 350, cy: 135, val: "৳9k" },
                  { cx: 450, cy: 165, val: "৳3.5k" },
                  { cx: 550, cy: 45, val: "৳44k" },
                ].map((pt, i) => (
                  <g key={i} className="cursor-pointer" onClick={() => setActiveMonth(i)}>
                    <circle
                      cx={pt.cx}
                      cy={pt.cy}
                      r={activeMonth === i ? 7 : 4.5}
                      fill="#ffffff"
                      stroke="#0d9488"
                      strokeWidth={activeMonth === i ? 3.5 : 2}
                      className="transition-all"
                    />
                    <text
                      x={pt.cx}
                      y={pt.cy - 12}
                      textAnchor="middle"
                      fill={activeMonth === i ? "#0f172a" : "#64748b"}
                      fontSize={activeMonth === i ? "12" : "10"}
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {pt.val}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* X-Axis Months */}
            <div className="flex justify-between px-2 sm:px-3 mt-2 text-xs font-mono text-slate-500">
              {months.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMonth(i)}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    activeMonth === i
                      ? "text-teal-900 font-bold bg-white border border-teal-300 shadow-2xs"
                      : "hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
            <span>Selected: {months[activeMonth].name} 2026</span>
            <span className="text-slate-900 font-bold">Reported Revenue: {months[activeMonth].label}</span>
          </div>
        </div>

        {/* Right: Popular Procedures Breakdown (5 Cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-900">Most Popular Procedures</span>
              <span className="text-[10px] font-mono text-slate-500">By Patient Volume</span>
            </div>

            <div className="space-y-3.5">
              {services.map((svc, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-700 font-medium">{svc.name}</span>
                    <span className="font-mono text-slate-900 font-bold">{svc.count} patients</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        i === 0
                          ? "bg-gradient-to-r from-teal-500 to-sky-500"
                          : "bg-slate-400"
                      }`}
                      style={{ width: `${svc.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retention Stat Donut */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-teal-500 flex items-center justify-center font-mono font-bold text-xs text-teal-700 bg-teal-50">
                18%
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-900 block">Patient Retention</span>
                <span className="text-[10px] font-mono text-slate-500">18% Returning • 82% New</span>
              </div>
            </div>

            <span className="text-[11px] font-mono text-emerald-600 font-bold">High Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
}

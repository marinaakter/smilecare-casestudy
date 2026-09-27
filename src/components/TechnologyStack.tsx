"use client";

import React from "react";
import { Check } from "lucide-react";

export default function TechnologyStack() {
  const stack = [
    {
      name: "Next.js 15.5",
      sub: "App Router • SSG & RSC",
      role: "Hybrid rendering: Static Site Generation (SSG) for SEO + React Server Components (RSC) for zero-JS initial payload.",
      badge: "Framework",
      svg: (
        <svg viewBox="0 0 180 180" className="w-6 h-6" fill="currentColor">
          <mask height="180" id="next-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" data-circle="true" fill="black" r="90" stroke="white" strokeWidth="6" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#next-paint0)" />
            <rect fill="url(#next-paint1)" height="72" width="12" x="115" y="54" />
          </g>
          <defs>
            <linearGradient id="next-paint0" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next-paint1" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "React 19",
      sub: "Server & Client Architecture",
      role: "Component model powering interactive clinic queues, 32-tooth dental charts, and booking wizards.",
      badge: "Library",
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 text-[#00d8ff]" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "TypeScript 5",
      sub: "Strict Mode • Zero 'any'",
      role: "End-to-end type contracts across booking schemas, API route handlers, and database records.",
      badge: "Language",
      svg: (
        <svg viewBox="0 0 128 128" className="w-6 h-6">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M83.4 92.5c2.8 5 7.4 8.2 14.1 8.2 6.5 0 10.7-3.4 10.7-8.1 0-5.7-4.6-7.8-12.7-11.3-11.7-5-17.2-10.4-17.2-21.4 0-11.8 9.3-20.7 23.3-20.7 9.8 0 16.9 3.5 21.6 11.5l-9.7 6.2c-2.4-4.3-5.5-6.1-11.8-6.1-5.3 0-8.8 3.1-8.8 7.3 0 4.8 3.6 6.7 11.7 10.2 13 5.6 18.3 11 18.3 22.5 0 13.5-10.2 21.6-25.5 21.6-13.6 0-22.3-5.9-26.6-14.8l12.6-5.1zM58.3 40.5v11.4h-19v58.9h-14V51.9h-19V40.5h52z" fill="#ffffff" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS 3.4",
      sub: "Token-Driven System",
      role: "Utility tokens (primary, cta, ink, whatsapp) eliminating render-blocking runtime stylesheets.",
      badge: "Styling",
      svg: (
        <svg viewBox="0 0 54 33" className="w-6 h-6 fill-[#38BDF8]">
          <path d="M13.5 0C6.046 0 0 6.046 0 13.5C0 20.954 6.046 27 13.5 27C17.027 27 20.244 25.642 22.658 23.418C21.848 24.364 20.718 25.138 19.387 25.65C17.755 26.277 15.82 26.29 13.987 25.688C13.253 25.447 12.378 24.896 11.667 24.28C10.749 23.485 9.774 22.368 9.07 21.054C8.618 20.21 8.358 19.262 8.358 18.257C8.358 14.869 11.082 12.115 14.47 12.115C16.963 12.115 19.117 13.593 20.088 15.71C20.65 16.938 21.83 17.757 23.214 17.757C25.048 17.757 26.535 16.27 26.535 14.436C26.535 6.463 20.7 0 13.5 0ZM40.5 6C33.046 6 27 12.046 27 19.5C27 26.954 33.046 33 40.5 33C44.027 33 47.244 31.642 49.658 29.418C48.848 30.364 47.718 31.138 46.387 31.65C44.755 32.277 42.82 32.29 40.987 31.688C40.253 31.447 39.378 30.896 38.667 30.28C37.749 29.485 36.774 28.368 36.07 27.054C35.618 26.21 35.358 25.262 35.358 24.257C35.358 20.869 38.082 18.115 41.47 18.115C43.963 18.115 46.117 19.593 47.088 21.71C47.65 22.938 48.83 23.757 50.214 23.757C52.048 23.757 53.535 22.27 53.535 20.436C53.535 12.463 47.7 6 40.5 6Z" />
        </svg>
      ),
    },
    {
      name: "MongoDB & Mongoose 8.9",
      sub: "Indexed Document Store",
      role: "Atomic $inc counters for serial queue allocation, dental charts, appointments, and payments.",
      badge: "Database",
      svg: (
        <svg viewBox="0 0 128 128" className="w-6 h-6">
          <path d="M63.7 3.2c-2.4 2.8-15.6 19.4-20.9 33.5-6.8 18-5.3 35.6 3.8 51.5 8.1 14.1 20 25.7 20 36.6 0-3.6 1.8-6.9 3.6-10.4 7.6-14.7 17.5-27.4 20.9-44.5 4.3-21.7-4.4-43.6-17.7-60.8-3.4-4.5-6.7-5.9-9.7-5.9z" fill="#00ED64" />
          <path d="M63.7 3.2c-1 0-2.4 1.4-3.4 2.8-1.5 2.1-12.8 17.7-17.5 30.7-6.8 18-5.3 35.6 3.8 51.5 8.1 14.1 20 25.7 20 36.6v-121.6z" fill="#00684A" />
        </svg>
      ),
    },
    {
      name: "Cloudinary CDN",
      sub: "Automated AVIF / WebP",
      role: "Edge transformation dynamically optimizing dental imaging matching precise device pixel ratios.",
      badge: "Media CDN",
      svg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#3448C5]" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
        </svg>
      ),
    },
    {
      name: "Zod 3.24",
      sub: "Type Inference & Validation",
      role: "Single source of truth for runtime validation across client forms and backend route controllers.",
      badge: "Validation",
      svg: (
        <svg viewBox="0 0 128 128" className="w-6 h-6">
          <rect width="128" height="128" rx="16" fill="#18233C" />
          <path d="M30 40h68l-40 48h40v12H30l40-48H30V40z" fill="#3E67B1" />
        </svg>
      ),
    },
    {
      name: "jose (HS256 JWT)",
      sub: "Edge Stateless Sessions",
      role: "Signed auth tokens stored in httpOnly, SameSite=Lax, Secure cookies (sc_session).",
      badge: "Auth Security",
      svg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#D63AFF]" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tech-stack" className="py-16 border-t border-slate-200 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Compact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-teal-700 font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200">
              Stack / Technology Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mt-2 tracking-tight">
              Production Architecture Stack
            </h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Verified core technologies documented in the production platform repository.
          </p>
        </div>

        {/* Compact Tech Grid with Official Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-300 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 p-1">
                    {item.svg}
                  </div>
                  <span className="text-[9px] font-mono font-medium text-slate-600 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 uppercase">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-slate-900 tracking-tight">{item.name}</h3>
                <span className="text-[10px] font-mono text-teal-700 font-medium block mt-0.5 mb-1.5">{item.sub}</span>
                <p className="text-[11px] text-slate-600 leading-snug">{item.role}</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 font-medium">
                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Verified in CASE_STUDY.md</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-16 border-t border-slate-200 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive High-Ticket Founder CTA Banner */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-900 text-white shadow-2xl mb-16 relative overflow-hidden">
          {/* Subtle teal flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-teal-400 mb-6 font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>BUILT BY APIXEL ENGINEERING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight mb-4">
              Ready to engineer your next flagship digital platform?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We partner with founders and enterprise leaders to architect production-grade web applications,
              operational software, and high-performance digital engines.
            </p>

            {/* Apixel Capabilities Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">Digital Platforms</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">Practice Management (PMS)</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">Sub-Second Web Vitals</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">High-Converting UX</span>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://apixel.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-tight transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule an Architectural Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.dmsbcsh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white font-medium text-sm transition-all border border-slate-700"
              >
                <span>Visit Live SmileCare Site</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-600 font-mono">
          <div className="flex items-center gap-3">
            <Link href="https://apixel.net/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
              <div className="relative w-6 h-6 rounded-md overflow-hidden bg-white border border-slate-200 p-0.5 flex items-center justify-center shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Apixel Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-slate-900 tracking-wider">APIXEL</span>
            </Link>
            <span>•</span>
            <span>SmileCare Engineering Case Study</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.dmsbcsh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              SmileCare Production Site
            </a>
            <a
              href="https://apixel.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              apixel.net
            </a>
            <span>© {new Date().getFullYear()} Apixel. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

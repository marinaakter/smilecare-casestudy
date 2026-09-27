"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledTotal = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledTotal);
      setScrolled(winScroll > 20);

      const sections = ["overview", "challenges", "architecture", "deep-dive", "performance", "impact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navChapters = [
    { label: "Summary", href: "#overview", id: "overview" },
    { label: "Challenges", href: "#challenges", id: "challenges" },
    { label: "Architecture", href: "#architecture", id: "architecture" },
    { label: "Deep Dive", href: "#deep-dive", id: "deep-dive" },
    { label: "Performance", href: "#performance", id: "performance" },
    { label: "Impact", href: "#impact", id: "impact" },
  ];

  return (
    <>
      {/* Precision Top Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-600 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-[0_2px_15px_rgba(0,0,0,0.05)]"
            : "bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between h-10 w-full">
            {/* Left: Apixel Brand + Case Study Indicator */}
            <div className="flex items-center gap-3 justify-self-start shrink-0">
              <Link
                href="https://apixel.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
              >
                <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white border border-slate-200 p-1 flex items-center justify-center transition-all group-hover:border-slate-300 shadow-sm shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Apixel Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold tracking-tight text-slate-900 text-sm leading-none">
                    APIXEL
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase mt-0.5 font-semibold">
                    Engineering
                  </span>
                </div>
              </Link>

              <div className="hidden xl:block h-4 w-[1px] bg-slate-200 shrink-0" />

              <div className="hidden xl:flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                  Case Study
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  SmileCare
                </span>
              </div>
            </div>

            {/* Center: Perfectly Centered Pill Navigation (Grid Centered, Zero Collision) */}
            <div className="hidden lg:flex items-center justify-center justify-self-center">
              <nav className="flex items-center gap-0.5 xl:gap-1 p-1 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-sm">
                {navChapters.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`px-2.5 xl:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                        isActive
                          ? "bg-white text-teal-900 shadow-sm font-semibold border border-slate-200/80"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 xl:gap-2.5 justify-self-end shrink-0">
              <a
                href="https://www.dmsbcsh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-200 rounded-lg transition-all whitespace-nowrap shadow-sm"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href="https://apixel.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0"
              >
                <span>Build with Apixel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 mb-4">
              {navChapters.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
              <a
                href="https://www.dmsbcsh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="https://apixel.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-teal-600 rounded-lg"
              >
                <span>Start a Project with Apixel</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

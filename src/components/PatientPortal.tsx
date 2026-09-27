"use client";

import React, { useState } from "react";
import Image from "next/image";
import { KeyRound, Users2, Printer, Receipt, ShieldCheck, ZoomIn, FileText, CheckCircle2 } from "lucide-react";
import ImageModal from "./ImageModal";

export default function PatientPortal() {
  const [modalOpen, setModalOpen] = useState(false);

  const portalModules = [
    {
      icon: KeyRound,
      title: "Phone OTP Authentication",
      badge: "Zero-Password Access",
      desc: "2-phase SMS verification utilizing a SHA-256 cryptographically hashed code. Features a strict 5-minute Time-To-Live (TTL) and a 60-second cooldown period to prevent brute-force attacks.",
    },
    {
      icon: Users2,
      title: "Family Profile Switcher",
      badge: "Multi-Patient Context",
      desc: "Allows a single guardian or family phone number to securely manage distinct clinical records for children, spouses, or elderly parents without account hopping or cross-polluted histories.",
    },
    {
      icon: Printer,
      title: "Printable Clinical Prescriptions",
      badge: "window.print Engine",
      desc: "Clinic letterhead format featuring doctor credentials, diagnosis findings, dosage pills (e.g., 1+0+1), and clinical advice with dedicated @media print CSS styles for instant A4 printing.",
    },
    {
      icon: Receipt,
      title: "Payment & Visit Transparency",
      badge: "Live Ledger",
      desc: "Real-time record of all past treatments, paid fees, outstanding balances, and receipt download links, providing complete financial transparency directly to patients.",
    },
  ];

  return (
    <section id="patient-portal" className="py-20 border-t border-slate-800 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            06 / Patient Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
            Self-Service Patient Experience & Digital Clinical Records
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Eliminating physical paper prescriptions and lost appointment slips. Patients access
            their entire diagnostic journey, prescription history, and family records securely via
            phone OTP.
          </p>
        </div>

        {/* 4 Portal Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {portalModules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/30">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Clinical History Screenshot Integration (dental3.png) */}
        <div className="p-8 rounded-2xl bg-[#090e1d] border border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-800/40">
                  Shared Record Synchronizer • /(portal) ⟷ /(admin)
                </span>
                <span className="text-xs text-slate-400">Patient ID: SC-8A6E</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Clinical Prescriptions & Visit History Co-Synchronized Across Portal & Admin
              </h3>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inspect Profile Capture (2400px)</span>
            </button>
          </div>

          <div
            onClick={() => setModalOpen(true)}
            className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer shadow-xl mb-6"
          >
            <Image
              src="/screenshots/dental3.png"
              alt="Patient Profile and Clinical History Record"
              width={2400}
              height={1363}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white font-medium text-xs border border-slate-700 shadow-xl backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-cyan-400" /> Click to Inspect Patient Clinical Profile Capture
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-slate-400 block text-[10px] uppercase">Allergy Safeguard</span>
              <span className="text-rose-400 font-semibold">ALLERGY : Penicillin Alert Flagged</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-slate-400 block text-[10px] uppercase">Modular Tabs</span>
              <span className="text-white font-medium">History • Dental Chart • Prescriptions • Payments</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-slate-400 block text-[10px] uppercase">Visit Status</span>
              <span className="text-emerald-400 font-medium">Scaling & Polishing (Completed)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc="/screenshots/dental3.png"
        imageAlt="Patient Profile and Clinical History"
        title="Patient Profile & Clinical History"
        subtitle="Patient ID SC-8A6E with Penicillin allergy flag, clinical history, and synchronized prescriptions tab"
        badge="Route: /admin/patients/[id]"
      />
    </section>
  );
}

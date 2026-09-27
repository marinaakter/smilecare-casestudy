"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, ZoomIn, CheckCircle2, ShieldCheck, Database, Clock, Users, ArrowRight, Code } from "lucide-react";
import ImageModal from "./ImageModal";

export default function BookingEngine() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showCodeSnippet, setShowCodeSnippet] = useState(false);

  const steps = [
    { num: "1", title: "Service Selection", desc: "Patient chooses symptoms or procedures without technical medical jargon" },
    { num: "2", title: "Date & Time Slot", desc: "Real-time calendar shows 30-min chamber slots; skips Fridays" },
    { num: "3", title: "Patient Details", desc: "Name, mobile number, and optional note with zero mandatory upfront fee" },
    { num: "4", title: "Digital Ticket", desc: "Instant confirmation ticket with atomic serial number and SMS dispatch" },
  ];

  const engineeringHighlights = [
    {
      title: "Atomic Serial Generation",
      tag: "MongoDB $inc Counter",
      desc: "Eliminates race conditions via atomic increments in a specialized counters collection. Guarantees deterministic, collision-free serial numbers (#01, #02, #03...) during high-concurrency booking spikes.",
    },
    {
      title: "Slot Capacity Management",
      tag: "Max 3 Patients / 30-min",
      desc: "Real-time database aggregation checks slot density prior to commit. Once a 30-minute interval reaches 3 confirmed patients, the slot automatically locks, preventing physician burnout.",
    },
    {
      title: "Dhaka Timezone & Chamber Rules",
      tag: "Timezone Normalization",
      desc: "All scheduling math strictly executes in 'Asia/Dhaka' (UTC+6). Automatically filters out weekly clinic off-days (e.g., Friday) and dynamically clamps available slots to active doctor hours.",
    },
    {
      title: "Sub-45s Mobile Funnel",
      tag: "Zero Upfront Barrier",
      desc: "No account registration or advance payment required to reserve a ticket. Optimized form UX enables mobile users to secure an appointment in under 45 seconds.",
    },
  ];

  return (
    <section id="booking-engine" className="py-20 border-t border-slate-800 bg-[#080d19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            05 / Appointment Booking Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
            Friction-Free Patient Scheduling Backed by Atomic Concurrency
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            The booking engine bridges prospective patients directly into the clinic's daily operational queue.
            Designed to solve both the user friction of scheduling and the doctor's nightmare of double-bookings.
          </p>
        </div>

        {/* 4-Step Interactive Flow Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${
                idx === 0
                  ? "bg-cyan-950/20 border-cyan-500/40 shadow-sm"
                  : "bg-slate-900/40 border-slate-800"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                  idx === 0 ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-400"
                }`}>
                  {step.num}
                </span>
                <span className="text-xs font-semibold text-white">{step.title}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Real Screenshot Viewport */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                Step 1: Service Selection • /book
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Real-world patient interface
              </span>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inspect Fullscreen (2400px)</span>
            </button>
          </div>

          <div
            onClick={() => setModalOpen(true)}
            className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1d] cursor-pointer shadow-2xl"
          >
            <Image
              src="/screenshots/dental9.png"
              alt="SmileCare Online Booking Engine Wizard"
              width={2400}
              height={1240}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white font-medium text-xs border border-slate-700 shadow-xl backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-cyan-400" /> Click to Inspect Booking Flow Capture
              </span>
            </div>
          </div>
        </div>

        {/* Engineering Deep-Dive: Progressive Disclosure */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Technical Architecture
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-1">
                The Engineering Behind Zero-Collision Booking
              </h3>
            </div>

            <button
              onClick={() => setShowCodeSnippet(!showCodeSnippet)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs font-mono text-slate-300 hover:text-white transition-colors border border-slate-700"
            >
              <Code className="w-3.5 h-3.5 text-teal-400" />
              <span>{showCodeSnippet ? "Hide Concurrency Architecture" : "View Concurrency Architecture"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringHighlights.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <span className="text-[10px] font-mono text-teal-400 px-2 py-0.5 rounded bg-teal-950/40 border border-teal-800/30">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Expandable Architecture Details */}
          {showCodeSnippet && (
            <div className="mt-6 p-5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-3 text-slate-400 pb-2 border-b border-slate-800">
                <span>Concurrency Control Workflow (MongoDB $inc)</span>
                <span className="text-[10px] text-teal-400">src/server/services/booking.service.ts</span>
              </div>
              <p className="mb-2 text-slate-400">
                // 1. Check aggregate capacity for chamber slot (max 3)
                <br />
                const slotCount = await appointmentRepo.countActiveBySlot(chamberId, date, timeSlot);
                <br />
                if (slotCount &gt;= 3) throw new SlotCapacityExceededError();
                <br />
                <br />
                // 2. Atomic serial counter increment prevents duplicate serial numbers
                <br />
                const counter = await Counter.findOneAndUpdate(
                <br />
                &nbsp;&nbsp;{'{'} chamberId, dateKey {'}'},
                <br />
                &nbsp;&nbsp;{'{'} $inc: {'{'} seq: 1 {'}'} {'}'},
                <br />
                &nbsp;&nbsp;{'{'} new: true, upsert: true {'}'}
                <br />
                );
                <br />
                const serialNumber = `#${'{'}String(counter.seq).padStart(2, '0'){'}'}`;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc="/screenshots/dental9.png"
        imageAlt="SmileCare Online Booking Step 1"
        title="Multi-Step Online Booking Engine"
        subtitle="Step 1 Service Selection: Scaling & Polishing, Root Canal, Braces, Extraction, General Checkup"
        badge="Route: /book"
      />
    </section>
  );
}

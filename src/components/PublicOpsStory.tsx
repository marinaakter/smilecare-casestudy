"use client";

import React from "react";
import { ArrowDown, ArrowRight, CheckCircle, Globe, CalendarCheck, User, Stethoscope, FileText, CreditCard, BarChart2 } from "lucide-react";

export default function PublicOpsStory() {
  const patientSide = [
    { title: "Discovery", sub: "SSG Marketing Page", icon: Globe, route: "/" },
    { title: "Booking", sub: "Atomic Serial Reservation", icon: CalendarCheck, route: "/book" },
    { title: "Portal", sub: "Phone OTP & Self-Service", icon: User, route: "/portal" },
  ];

  const clinicSide = [
    { title: "Queue", sub: "Live Chamber Intake", icon: CheckCircle, route: "/admin" },
    { title: "Odontogram", sub: "32-Tooth Digital Chart", icon: Stethoscope, route: "/admin/patients" },
    { title: "Prescription", sub: "Auto-synced E-Prescribe", icon: FileText, route: "/admin/patients" },
    { title: "Billing", sub: "bKash / Cash / Card", icon: CreditCard, route: "/admin/payments" },
    { title: "BI Reports", sub: "Monthly Revenue & Retention", icon: BarChart2, route: "/admin/reports" },
  ];

  return (
    <section className="py-20 border-t border-slate-800 bg-[#070b14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            08 / Connected Operational Loop
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
            Patient Experience Meets Clinical Execution
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            The platform is not a disjointed marketing facade. Every patient interaction on the public
            layer triggers deterministic state changes directly inside the clinic’s clinical and financial machinery.
          </p>
        </div>

        {/* The Two Sides Visual Board */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Patient Facing Loop */}
            <div className="p-6 rounded-xl bg-slate-950/60 border border-teal-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                    <h3 className="text-sm font-mono font-bold text-teal-400 uppercase tracking-wider">
                      Patient Experience Side
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Public & Portal Layer</span>
                </div>

                <div className="space-y-4">
                  {patientSide.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 p-3.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white">{step.title}</span>
                            <span className="text-[10px] font-mono text-slate-400">{step.route}</span>
                          </div>
                          <p className="text-[11px] text-slate-300">{step.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400">
                Guaranteed: Sub-300ms navigation, zero advance deposit, instant digital ticket.
              </div>
            </div>

            {/* Right: Clinic Operational Loop */}
            <div className="p-6 rounded-xl bg-slate-950/60 border border-indigo-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    <h3 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider">
                      Clinic Operations Side
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">PMS Back-Office Layer</span>
                </div>

                <div className="space-y-3">
                  {clinicSide.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white">{step.title}</span>
                            <span className="text-[10px] font-mono text-slate-400">{step.route}</span>
                          </div>
                          <p className="text-[11px] text-slate-300">{step.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400">
                Guaranteed: Zero overbooking, paperless records, automated financial audit trail.
              </div>
            </div>
          </div>

          {/* Central synchronization badge */}
          <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-center text-xs font-mono text-cyan-300">
            <span>⇄ Bidirectional Synchronicity: Atomic transactions keep patient tickets, chamber queues, charts, and billing in constant parity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

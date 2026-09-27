"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Calendar,
  CreditCard,
  BarChart3,
  UserCheck,
  Stethoscope,
  ZoomIn,
  Activity,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldCheck,
  Layers,
} from "lucide-react";
import ImageModal from "./ImageModal";
import InteractiveToothChart from "./InteractiveToothChart";
import RevenueChart from "./RevenueChart";

export default function PracticeManagement() {
  const [activeModule, setActiveModule] = useState<string>("queue");
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    title: string;
    subtitle: string;
    badge: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
    title: "",
    subtitle: "",
    badge: "",
  });

  const modules = [
    {
      id: "queue",
      name: "Live Daily Queue",
      route: "/admin",
      icon: Activity,
      src: "/screenshots/dental2.png",
      alt: "Practice Management System Live Daily Queue Screenshot",
      title: "Live Daily Queue & Real-Time Serial Orchestration",
      subtitle: "8 Total Today, 3 Completed, 4 Waiting, 0 No-show with instant 'Call In' chamber action buttons",
      badge: "PMS Core • /admin",
      metrics: [
        { label: "Serial Granularity", val: "Atomic #01–#08" },
        { label: "Real-Time States", val: "Waiting / In-Chamber / Completed" },
        { label: "Staff Actions", val: "One-click 'Call In' button" },
      ],
      description:
        "The beating heart of daily clinic operations. The receptionist and doctor see an identical, real-time board showing patients waiting, their assigned chamber time, service required, and dynamic status badges. Eliminates paper clipboard chaos.",
    },
    {
      id: "calendar",
      name: "Appointment Calendar",
      route: "/admin/calendar",
      icon: Calendar,
      src: "/screenshots/dental4.png",
      alt: "Practice Management System Appointment Calendar Screenshot",
      title: "Doctor Chamber Calendar & Time Slot Matrix",
      subtitle: "30-minute interval grid, doctor filter (Dr. Mahmudul Hasan), and automated Friday clinic off-day skip",
      badge: "Scheduling • /admin/calendar",
      metrics: [
        { label: "Time Interval", val: "30-Minute Blocks" },
        { label: "Provider Filter", val: "Dr. Mahmudul Hasan" },
        { label: "Off-Day Handling", val: "Friday Automatically Excluded" },
      ],
      description:
        "Multi-day chamber view plotting all confirmed and completed bookings across weekly columns (Sun–Thu, Sat). Enforces doctor availability rules and prevents schedule collisions without manual oversight.",
    },
    {
      id: "payments",
      name: "Billing & Multi-Channel Payments",
      route: "/admin/payments",
      icon: CreditCard,
      src: "/screenshots/dental1.png",
      alt: "Practice Management System Payments and Billing Screenshot",
      title: "Multi-Channel Invoicing & Balance Ledger",
      subtitle: "Collected Today ৳43,500 • Total Due ৳25,000 • Support for bKash, Cash & Card with receipt generation",
      badge: "Billing Engine • /admin/payments",
      metrics: [
        { label: "Payment Channels", val: "bKash / Cash / Card" },
        { label: "Payment States", val: "Paid / Partial / Due" },
        { label: "Collections Tracked", val: "৳43,500 Today" },
      ],
      description:
        "Complete financial ledger tracking patient invoices. Staff can record full, partial, or due payments, trigger SMS reminders, and generate printable thermal/A4 clinic receipts on demand.",
    },
    {
      id: "reports",
      name: "BI & Monthly Reporting",
      route: "/admin/reports",
      icon: BarChart3,
      src: "/screenshots/dental5.png",
      alt: "Practice Management System Business Intelligence Reports Screenshot",
      title: "Business Intelligence & Revenue Analytics",
      subtitle: "Monthly Revenue (৳43,500), 11 Patients, 18% Returning Patient Ratio, and 6-Month Trend Curve",
      badge: "Analytics • /admin/reports",
      metrics: [
        { label: "Top Procedure", val: "Root Canal Treatment (20)" },
        { label: "Patient Retention", val: "18% Returning / 82% New" },
        { label: "Revenue Peak", val: "৳44k 6-Month High" },
      ],
      description:
        "Real-time MongoDB aggregation pipelines compile revenue velocity, procedure popularity breakdowns, and retention metrics. Empowers clinic directors with actionable operational intelligence.",
    },
    {
      id: "profile",
      name: "Patient Clinical Profiles",
      route: "/admin/patients/[id]",
      icon: UserCheck,
      src: "/screenshots/dental3.png",
      alt: "Practice Management System Patient Profile Screenshot",
      title: "Consolidated Clinical History & Allergy Alerts",
      subtitle: "Patient Tanvir Hossain (SC-8A6E) with persistent Penicillin Allergy Alert and clinical log",
      badge: "EHR Records • /admin/patients",
      metrics: [
        { label: "Safety Alert", val: "ALLERGY: Penicillin Flag" },
        { label: "Identifier", val: "Patient ID: SC-8A6E" },
        { label: "Connected Tabs", val: "Chart • Rx • Payments" },
      ],
      description:
        "Patient digital health record (EHR) consolidating chief complaints, treatment histories, dental charts, prescriptions, and financial balances under a unified medical identifier.",
    },
  ];

  const current = modules.find((m) => m.id === activeModule) || modules[0];

  const openModal = (src: string, alt: string, title: string, subtitle: string, badge: string) => {
    setModalData({ isOpen: true, src, alt, title, subtitle, badge });
  };

  return (
    <section id="practice-management" className="py-24 border-t border-slate-800 bg-[#080c17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              07 / Practice Management System (PMS)
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              Core Differentiator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            The Digital Back-Office Powering Daily Clinical Operations
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            SmileCare is fundamentally an operational operating system. Apixel engineered a bespoke,
            full-featured Practice Management System that turns chaotic manual queues, paper charts,
            and fragmented cashbooks into an automated, type-safe digital workflow.
          </p>
        </div>

        {/* PMS Interactive Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {modules.map((m) => {
            const Icon = m.icon;
            const isActive = m.id === activeModule;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-slate-900 text-white border-teal-500/40 shadow-lg ring-1 ring-teal-500/20"
                    : "bg-slate-900/40 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-teal-400" : "text-slate-400"}`} />
                <span>{m.name}</span>
                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">{m.route}</span>
              </button>
            );
          })}
        </div>

        {/* Main PMS Showcase Canvas */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0a1020] border border-slate-800 shadow-2xl mb-12">
          {/* Header info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-teal-950/50 text-teal-400 border border-teal-800/40">
                  {current.badge}
                </span>
                <span className="text-xs text-slate-400">Production PMS Capture</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">{current.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">{current.description}</p>
            </div>

            <button
              onClick={() =>
                openModal(current.src, current.alt, current.title, current.subtitle, current.badge)
              }
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-mono text-slate-200 hover:text-white transition-all border border-slate-700 shrink-0"
            >
              <ZoomIn className="w-4 h-4 text-cyan-400" />
              <span>Inspect 2400px Retina Capture</span>
            </button>
          </div>

          {/* Screenshot Display */}
          <div
            onClick={() =>
              openModal(current.src, current.alt, current.title, current.subtitle, current.badge)
            }
            className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer shadow-2xl mb-6"
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={2400}
              height={1363}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white font-medium text-xs border border-slate-700 shadow-xl backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-cyan-400" /> Click to Inspect High-Resolution View
              </span>
            </div>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.metrics.map((m, i) => (
              <div key={i} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                  {m.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">{m.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Clinical & BI Tools Showcase */}
        <div className="space-y-12">
          {/* Real Interactive Dental Odontogram */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Live Interactive Tool
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                Try Clicking Any Tooth
              </span>
            </div>
            <InteractiveToothChart />
          </div>

          {/* Real Visual Revenue & BI Graph */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                Clinic Financial Analytics
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20 font-medium">
                Real Aggregation Pipeline Data
              </span>
            </div>
            <RevenueChart />
          </div>

          {/* Quick Subsystems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Quick Prescription Writer */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-indigo-950/60 text-indigo-400 border border-indigo-800/40">
                    E-PRESCRIBING
                  </span>
                  <Layers className="w-4 h-4 text-indigo-400" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">Structured Digital Prescription Writer</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Quick-prescribe interface with instant medicine search, dosage chips (<strong className="text-indigo-300">1+0+1</strong>),
                  and meal timing toggles. Auto-syncs to the patient portal and prints clinic-branded letterhead in one click.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Output: High-res Printable PDF</span>
                <span className="text-indigo-400">Zero Paper Pads</span>
              </div>
            </div>

            {/* Walk-in Emergency Intake */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    EMERGENCY INTAKE
                  </span>
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">Instant Walk-In Queue Injection</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Global reception modal allowing staff to immediately inject emergency or walk-in patients into today's queue
                  with auto-generated serials (#09, #10) without disturbing scheduled appointments.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Global Trigger: Shift + N</span>
                <span className="text-emerald-400">Atomic Serializer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        imageSrc={modalData.src}
        imageAlt={modalData.alt}
        title={modalData.title}
        subtitle={modalData.subtitle}
        badge={modalData.badge}
      />
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Activity,
  Calendar,
  CreditCard,
  BarChart3,
  UserCheck,
  Stethoscope,
  ZoomIn,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Layers,
} from "lucide-react";
import InteractiveToothChart from "./InteractiveToothChart";
import RevenueChart from "./RevenueChart";
import ImageModal from "./ImageModal";

export default function InteractivePlatformConsole() {
  const [activeTab, setActiveTab] = useState<"odontogram" | "revenue" | "queue" | "booking" | "ehr">("odontogram");
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

  const tabs = [
    {
      id: "odontogram" as const,
      label: "32-Tooth Odontogram",
      icon: Stethoscope,
      pill: "Interactive Simulation",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
    },
    {
      id: "revenue" as const,
      label: "Revenue & BI Analytics",
      icon: BarChart3,
      pill: "Live Data Graph",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      id: "queue" as const,
      label: "Live Chamber Queue",
      icon: Activity,
      pill: "PMS Core /admin",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
      img: "/screenshots/dental2.png",
      alt: "PMS Live Daily Chamber Queue Screenshot",
      title: "Live Chamber Queue & Real-Time Serial Orchestration",
      subtitle: "8 Total Today, 3 Completed, 4 Waiting, 0 No-show with instant 'Call In' chamber action buttons",
      badge: "Production PMS • /admin",
      bullets: [
        "Atomic Serials #01–#08 generated with zero collisions",
        "Staff can trigger 'Call In' alerts directly to waiting chamber",
        "Eliminates paper clipboard chaos in clinic reception",
      ],
    },
    {
      id: "booking" as const,
      label: "3-Step Booking Engine",
      icon: Calendar,
      pill: "Public Flow /book",
      badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
      img: "/screenshots/dental9.png",
      alt: "Online Booking Engine Screenshot",
      title: "Sub-Second Multi-Step Appointment Booking",
      subtitle: "Doctor selection, 30-minute slot matrix, and automated SMS confirmation with zero advance deposit required",
      badge: "Booking Engine • /book",
      bullets: [
        "Real-time 30-minute slot locking prevents double bookings",
        "Friday clinic off-days automatically excluded from schedule",
        "Immediate booking confirmation code generated for patient",
      ],
    },
    {
      id: "ehr" as const,
      label: "Patient EHR & Safety Alerts",
      icon: UserCheck,
      pill: "Clinical Records",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      img: "/screenshots/dental3.png",
      alt: "Patient Medical Record Screenshot",
      title: "Consolidated Clinical History & Allergy Alerts",
      subtitle: "Patient Tanvir Hossain (SC-8A6E) with persistent Penicillin Allergy Alert and unified clinical log",
      badge: "EHR Medical Records • /admin/patients",
      bullets: [
        "Persistent medical allergy warnings (e.g. Penicillin) highlighted",
        "Unified timeline: Treatments, Dental Charts, Prescriptions & Invoices",
        "Print-ready clinical letterhead generated in one click",
      ],
    },
  ];

  const currentTabMeta = tabs.find((t) => t.id === activeTab);

  return (
    <section id="deep-dive" className="py-20 border-t border-slate-200 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-mono font-semibold text-teal-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>03 / Hard Technical Problems Solved</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Interactive Deep Dive: 5 Core Engineering Subsystems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            From atomic concurrency slot locking to 32-tooth optimistic odontogram updates, click across the modules below to test live interactive tools and review real production captures.
          </p>
        </div>

        {/* Interactive Affordance Callout & 2-Row Module Switcher (Zero Scrollbar) */}
        <div className="flex flex-col items-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-mono font-semibold shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>✨ Click any module below to test live interactive tools</span>
          </div>

          {/* 2-Row Centered Buttons - Exactly 3 on Row 1, 2 on Row 2 */}
          <div className="flex flex-col items-center gap-2.5 w-full max-w-3xl mx-auto">
            {/* Row 1: 3 Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 w-full">
              {tabs.slice(0, 3).map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-medium transition-all border cursor-pointer ${
                      isActive
                        ? "bg-white text-teal-950 border-teal-500 shadow-sm ring-2 ring-teal-500/20 font-bold"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-teal-600" : "text-slate-400"}`} />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Row 2: 2 Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 w-full">
              {tabs.slice(3, 5).map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-medium transition-all border cursor-pointer ${
                      isActive
                        ? "bg-white text-teal-950 border-teal-500 shadow-sm ring-2 ring-teal-500/20 font-bold"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-teal-600" : "text-slate-400"}`} />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="transition-all duration-300">
          {activeTab === "odontogram" && <InteractiveToothChart />}

          {activeTab === "revenue" && <RevenueChart />}

          {(activeTab === "queue" || activeTab === "booking" || activeTab === "ehr") && currentTabMeta && currentTabMeta.img && (
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                      {currentTabMeta.badge}
                    </span>
                    <span className="text-xs text-slate-500">2400px Retina Capture</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">{currentTabMeta.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">{currentTabMeta.subtitle}</p>
                </div>

                <button
                  onClick={() =>
                    setModalData({
                      isOpen: true,
                      src: currentTabMeta.img!,
                      alt: currentTabMeta.alt!,
                      title: currentTabMeta.title!,
                      subtitle: currentTabMeta.subtitle!,
                      badge: currentTabMeta.badge!,
                    })
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono text-slate-800 transition-all border border-slate-200 shrink-0 self-start lg:self-center"
                >
                  <ZoomIn className="w-4 h-4 text-teal-600" />
                  <span>Inspect High-Resolution View</span>
                </button>
              </div>

              {/* Clickable Image Preview */}
              <div
                onClick={() =>
                  setModalData({
                    isOpen: true,
                    src: currentTabMeta.img!,
                    alt: currentTabMeta.alt!,
                    title: currentTabMeta.title!,
                    subtitle: currentTabMeta.subtitle!,
                    badge: currentTabMeta.badge!,
                  })
                }
                className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer shadow-md mb-6"
              >
                <Image
                  src={currentTabMeta.img}
                  alt={currentTabMeta.alt || "SmileCare Platform Capture"}
                  width={2400}
                  height={1363}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold text-xs border border-slate-200 shadow-xl">
                    <ZoomIn className="w-4 h-4 text-teal-600" /> Click to Inspect 2400px Retina View
                  </span>
                </div>
              </div>

              {/* Bullet Points Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {currentTabMeta.bullets?.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
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

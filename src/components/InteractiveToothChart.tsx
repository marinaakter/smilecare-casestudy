"use client";

import React, { useState } from "react";
import { Sparkles, Info, RefreshCw, CheckCircle2 } from "lucide-react";

type ToothCondition = "healthy" | "cavity" | "filled" | "crown" | "extracted";

interface ToothState {
  num: number;
  condition: ToothCondition;
  label: string;
}

export default function InteractiveToothChart() {
  const initialTeeth: ToothState[] = [
    // Upper Jaw (1-16)
    { num: 1, condition: "healthy", label: "3rd Molar" },
    { num: 2, condition: "filled", label: "2nd Molar" },
    { num: 3, condition: "crown", label: "1st Molar" },
    { num: 4, condition: "healthy", label: "2nd Premolar" },
    { num: 5, condition: "healthy", label: "1st Premolar" },
    { num: 6, condition: "healthy", label: "Canine" },
    { num: 7, condition: "healthy", label: "Lateral Incisor" },
    { num: 8, condition: "healthy", label: "Central Incisor" },
    { num: 9, condition: "healthy", label: "Central Incisor" },
    { num: 10, condition: "healthy", label: "Lateral Incisor" },
    { num: 11, condition: "healthy", label: "Canine" },
    { num: 12, condition: "healthy", label: "1st Premolar" },
    { num: 13, condition: "healthy", label: "2nd Premolar" },
    { num: 14, condition: "cavity", label: "1st Molar" },
    { num: 15, condition: "healthy", label: "2nd Molar" },
    { num: 16, condition: "extracted", label: "3rd Molar" },

    // Lower Jaw (17-32)
    { num: 17, condition: "extracted", label: "3rd Molar" },
    { num: 18, condition: "healthy", label: "2nd Molar" },
    { num: 19, condition: "cavity", label: "1st Molar" },
    { num: 20, condition: "healthy", label: "2nd Premolar" },
    { num: 21, condition: "healthy", label: "1st Premolar" },
    { num: 22, condition: "healthy", label: "Canine" },
    { num: 23, condition: "healthy", label: "Lateral Incisor" },
    { num: 24, condition: "healthy", label: "Central Incisor" },
    { num: 25, condition: "healthy", label: "Central Incisor" },
    { num: 26, condition: "healthy", label: "Lateral Incisor" },
    { num: 27, condition: "healthy", label: "Canine" },
    { num: 28, condition: "healthy", label: "1st Premolar" },
    { num: 29, condition: "healthy", label: "2nd Premolar" },
    { num: 30, condition: "filled", label: "1st Molar" },
    { num: 31, condition: "crown", label: "2nd Molar" },
    { num: 32, condition: "healthy", label: "3rd Molar" },
  ];

  const [teeth, setTeeth] = useState<ToothState[]>(initialTeeth);
  const [selectedTooth, setSelectedTooth] = useState<ToothState>(initialTeeth[13]); // Tooth 14 default

  const cycleOrder: ToothCondition[] = ["healthy", "cavity", "filled", "crown", "extracted"];

  const cycleToothCondition = (num: number) => {
    setTeeth((prev) =>
      prev.map((t) => {
        if (t.num === num) {
          const currentIdx = cycleOrder.indexOf(t.condition);
          const nextCondition = cycleOrder[(currentIdx + 1) % cycleOrder.length];
          const updated = { ...t, condition: nextCondition };
          setSelectedTooth(updated);
          return updated;
        }
        return t;
      })
    );
  };

  const getConditionColor = (c: ToothCondition) => {
    switch (c) {
      case "healthy":
        return {
          bg: "bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100",
          dot: "bg-emerald-500",
          name: "Healthy",
        };
      case "cavity":
        return {
          bg: "bg-rose-50 border-rose-300 text-rose-800 hover:bg-rose-100",
          dot: "bg-rose-500",
          name: "Cavity (Caries)",
        };
      case "filled":
        return {
          bg: "bg-sky-50 border-sky-300 text-sky-800 hover:bg-sky-100",
          dot: "bg-sky-500",
          name: "Composite Filled",
        };
      case "crown":
        return {
          bg: "bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100",
          dot: "bg-amber-500",
          name: "Porcelain Crown",
        };
      case "extracted":
        return {
          bg: "bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200 line-through",
          dot: "bg-slate-400",
          name: "Extracted",
        };
    }
  };

  const upperTeeth = teeth.slice(0, 16);
  const lowerTeeth = teeth.slice(16, 32);

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-[11px] font-mono text-teal-700 uppercase tracking-wider font-semibold">
              Interactive Clinical Simulation
            </span>
          </div>
          <h3 className="text-xl font-display font-bold text-slate-900 mt-0.5">
            Universal 32-Tooth Digital Odontogram
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Click any tooth to cycle clinical conditions in real-time. Replaces paper dental charts in SmileCare PMS.
          </p>
        </div>

        <button
          onClick={() => {
            setTeeth(initialTeeth);
            setSelectedTooth(initialTeeth[13]);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 transition-all self-start sm:self-center"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Grid</span>
        </button>
      </div>

      {/* Prominent Clickable Action Callout */}
      <div className="mb-5 p-3 rounded-xl bg-teal-50 border border-teal-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-teal-900 font-medium">
          <span className="text-base">👇</span>
          <span>
            <strong>Interactive Odontogram:</strong> Click on any tooth <strong>(#1 to #32)</strong> to cycle diagnosis states.
          </span>
        </div>
        <span className="text-[10px] font-mono text-teal-800 bg-white px-2.5 py-0.5 rounded-full border border-teal-200 font-semibold self-start sm:self-center shadow-2xs">
          Clickable Simulator
        </span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-6 text-xs font-mono">
        <span className="text-slate-500 text-[11px]">Condition States:</span>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Healthy</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-50 border border-rose-200 text-rose-700 font-medium">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>Cavity</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 font-medium">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>Filled</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>Crown</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-slate-400" />
          <span>Extracted</span>
        </div>
      </div>

      {/* 32-Tooth Visual Chart */}
      <div className="p-4 sm:p-6 rounded-xl bg-slate-50/80 border border-slate-200 mb-6 overflow-x-auto">
        {/* Upper Arch */}
        <div className="mb-6">
          <div className="text-[10px] font-mono uppercase text-slate-500 mb-2 flex items-center justify-between">
            <span>Upper Arch (Maxillary Teeth 1–16)</span>
            <span className="text-teal-700 font-semibold">👆 Click to change</span>
          </div>
          <div className="grid grid-cols-16 gap-1.5 sm:gap-2 min-w-[640px]">
            {upperTeeth.map((tooth) => {
              const meta = getConditionColor(tooth.condition);
              const isSelected = selectedTooth.num === tooth.num;
              return (
                <button
                  key={tooth.num}
                  onClick={() => cycleToothCondition(tooth.num)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border text-xs font-mono font-bold transition-all relative cursor-pointer hover:scale-108 hover:shadow-md active:scale-95 ${
                    meta.bg
                  } ${isSelected ? "ring-2 ring-teal-500 scale-105 z-10 shadow-sm" : ""}`}
                  title={`Tooth #${tooth.num} (${tooth.label}) - ${meta.name}. Click to change.`}
                >
                  <span className="text-[11px] leading-none mb-1">#{tooth.num}</span>
                  <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Dividing Arch Line */}
        <div className="h-[1px] w-full bg-slate-200 my-4" />

        {/* Lower Arch */}
        <div>
          <div className="text-[10px] font-mono uppercase text-slate-500 mb-2 flex items-center justify-between">
            <span>Lower Arch (Mandibular Teeth 17–32)</span>
            <span className="text-teal-700 font-semibold">👆 Click to change</span>
          </div>
          <div className="grid grid-cols-16 gap-1.5 sm:gap-2 min-w-[640px]">
            {lowerTeeth.map((tooth) => {
              const meta = getConditionColor(tooth.condition);
              const isSelected = selectedTooth.num === tooth.num;
              return (
                <button
                  key={tooth.num}
                  onClick={() => cycleToothCondition(tooth.num)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border text-xs font-mono font-bold transition-all relative cursor-pointer hover:scale-108 hover:shadow-md active:scale-95 ${
                    meta.bg
                  } ${isSelected ? "ring-2 ring-teal-500 scale-105 z-10 shadow-sm" : ""}`}
                  title={`Tooth #${tooth.num} (${tooth.label}) - ${meta.name}. Click to change.`}
                >
                  <span className={`w-2 h-2 rounded-full ${meta.dot} mb-1`} />
                  <span className="text-[11px] leading-none">#{tooth.num}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Tooth Detail Panel */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal-100 border border-teal-200 flex flex-col items-center justify-center text-teal-800 font-bold shrink-0">
            <span>#{selectedTooth.num}</span>
          </div>
          <div>
            <span className="text-slate-900 font-semibold text-sm">{selectedTooth.label}</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-slate-500">Current Diagnosis:</span>
              <span className="text-teal-700 font-semibold">{getConditionColor(selectedTooth.condition).name}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <Info className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>Clicking tooth updates state optimistically in MongoDB</span>
        </div>
      </div>
    </div>
  );
}

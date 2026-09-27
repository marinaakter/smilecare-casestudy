"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ExternalLink } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  badge,
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-6xl max-h-[92vh] bg-[#0c1222] border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e1a]/90">
          <div className="flex items-center gap-3">
            {badge && (
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                {badge}
              </span>
            )}
            <div>
              <h3 className="text-base font-semibold text-white tracking-tight">{title}</h3>
              {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Content Container */}
        <div className="relative overflow-auto p-4 md:p-6 bg-[#070b14] flex items-center justify-center min-h-[300px]">
          <div className="relative w-full rounded-xl overflow-hidden border border-slate-800/80 shadow-inner">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={2400}
              height={1363}
              className="w-full h-auto object-contain max-h-[75vh]"
              priority
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-slate-800/80 bg-[#090e1a]/70 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Production Screenshot • Native Capture (2400px Retina)</span>
          </div>
          <span className="font-mono text-slate-500">Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
}

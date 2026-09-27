"use client";

import React from "react";
import { ShieldCheck, Lock, Key, EyeOff, Cookie, Check } from "lucide-react";

export default function Security() {
  const securityPillars = [
    {
      icon: ShieldCheck,
      title: "Edge Middleware RBAC Enforcement",
      badge: "src/middleware.ts",
      desc: "Role-Based Access Control strictly enforced at the Next.js Edge layer before hitting node runtimes. Route paths (/(admin)/*, /(portal)/*) and API trees (/api/admin/*, /api/portal/*) are guarded against unauthorized role escalation.",
    },
    {
      icon: Lock,
      title: "scrypt Cryptographic Password Hashing",
      badge: "Unique 16-Byte Salt",
      desc: "Clinic staff credentials derive keys through the memory-hard scrypt algorithm with individual 16-byte cryptographic salts per user. Plaintext credentials are never persisted to MongoDB.",
    },
    {
      icon: EyeOff,
      title: "Anti-Enumeration Protections",
      badge: "Uniform Error Responses",
      desc: "Authentication controllers return identical, generic error payloads across invalid usernames and incorrect passwords, preventing automated user enumeration and account discovery attacks.",
    },
    {
      icon: Cookie,
      title: "Stateless HS256 JWT in Hardened Cookies",
      badge: "httpOnly • SameSite=Lax",
      desc: "Sessions utilize stateless HS256 JSON Web Tokens signed by a server-side AUTH_SECRET. Stored strictly in `httpOnly`, `SameSite=Lax`, `Secure` cookies (`sc_session`), eliminating XSS token theft.",
    },
  ];

  return (
    <section id="security" className="py-20 border-t border-slate-800 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            12 / Security & Data Integrity
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
            Enterprise Guardrails for Clinical & Patient Data
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Medical information systems demand rigorous access control and defensive session management.
            Apixel implemented industry-standard security architectures across all network boundaries.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-800/40 font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Documented in CASE_STUDY.md</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

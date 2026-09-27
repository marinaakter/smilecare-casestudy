import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Architecture from "@/components/Architecture";
import TechnologyStack from "@/components/TechnologyStack";
import InteractivePlatformConsole from "@/components/InteractivePlatformConsole";
import Performance from "@/components/Performance";
import BusinessOutcome from "@/components/BusinessOutcome";
import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-teal-500/20 selection:text-teal-900">
      <Header />
      <div id="overview">
        <Hero />
      </div>
      <Challenge />
      <Architecture />
      <TechnologyStack />
      <InteractivePlatformConsole />
      <Performance />
      <BusinessOutcome />
      <Footer />
    </main>
  );
}

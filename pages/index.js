import React from 'react';
import Head from 'next/head';
import { Camera, Factory, Activity, Cpu, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30">
      <Head>
        <title>Apex Alpha Solutions | AI Vision Systems</title>
        <meta name="description" content="Industrial AI and Computer Vision Solutions" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/Apex_Alpha_Solutions_Logo.jpg" 
              alt="Apex Alpha Solutions Logo" 
              className="h-16 w-auto rounded border border-slate-700"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
            <a href="#vision" className="hover:text-blue-400 transition-colors">Vision</a>
            <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
            <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/Rotating_A_Logo_with_Neural_Network_Background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
            APEX ALPHA SOLUTIONS
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg md:text-xl font-light">
            The next evolution of industrial automation and personal performance through Computer Vision.
          </p>
        </div>
      </section>

      {/* Vision Grid */}
      <section id="vision" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
            <Activity className="text-blue-500 mb-6 w-10 h-10 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 italic">Apex Performance Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              Automated gym tracking using facial recognition. Monitor reps, weight, and exercise selection in real-time without manual logging. Data-driven fitness for elite results.
            </p>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
            <Factory className="text-blue-500 mb-6 w-10 h-10 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 italic">Apex Industrial Edge</h3>
            <p className="text-slate-400 leading-relaxed">
              Seamlessly track parts on the move. Our AI vision systems feed real-time data back to your PLCs, bridging the gap between physical logistics and Unified Namespace.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="solutions" className="py-24 bg-slate-950/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-sm font-black tracking-[0.3em] uppercase mb-16 text-slate-500">
            Technological Foundation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Cpu className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold mb-2">Edge AI</h4>
              <p className="text-xs text-slate-500">Localized processing for low-latency feedback.</p>
            </div>
            <div className="flex flex-col items-center">
              <Camera className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold mb-2">Computer Vision</h4>
              <p className="text-xs text-slate-500">YOLO-based object detection and tracking.</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold mb-2">PLC Integration</h4>
              <p className="text-xs text-slate-500">Direct communication with industrial control systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-900">
        <p className="text-[10px] text-slate-600 tracking-widest uppercase">
          © 2026 APEX ALPHA SOLUTIONS LLC. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
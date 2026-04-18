import React from 'react';
import Head from 'next/head';
import { Camera, Factory, Activity, Cpu, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Head>
        <title>Apex Alpha Solutions | AI Vision Systems</title>
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <img 
            src="/Apex_Alpha_Solutions_Logo.jpg" 
            alt="Apex Alpha Solutions Logo" 
            className="h-12 w-auto rounded-sm"
          />
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#vision" className="hover:text-blue-400 transition">Vision</a>
          <a href="#solutions" className="hover:text-blue-400 transition">Solutions</a>
          <a href="#contact" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-transparent">
        {/* Background Video Container - Pushed to absolute back (-z-20) */}
        <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none bg-slate-950">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://apexalphasolutions.com/background.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark overlay to ensure text readability (-z-10) */}
        <div className="absolute inset-0 bg-black/30 -z-10" />
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase relative z-10">
          APEX ALPHA SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mb-8 relative z-10">
          The next evolution of industrial automation and personal performance through Computer Vision.
        </p>
      </section>

      {/* Core Solutions */}
      <section id="solutions" className="py-24 px-8 bg-slate-900 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="bg-blue-600/20 p-4 w-fit rounded-lg mb-6 group-hover:scale-110 transition-transform">
              <Activity className="text-blue-400 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 italic">Apex Performance Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              Automated gym tracking using facial recognition. Monitor reps, weight, and exercise selection in real-time without manual logging.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="bg-slate-600/20 p-4 w-fit rounded-lg mb-6 group-hover:scale-110 transition-transform">
              <Factory className="text-slate-300 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 italic">Apex Industrial Edge</h3>
            <p className="text-slate-400 leading-relaxed">
              Seamlessly track parts on the move. AI vision systems feed real-time data to PLCs, bridging the gap between physical logistics and Unified Namespace.
            </p>
          </div>

        </div>
      </section>

      {/* Technological Foundation */}
      <section id="vision" className="py-20 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest border-b border-blue-900 pb-4">Technological Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Cpu className="text-blue-500 mb-4" size={40} />
              <h4 className="font-bold mb-2">Edge AI</h4>
              <p className="text-sm text-slate-500">Localized processing for low-latency feedback.</p>
            </div>
            <div className="flex flex-col items-center">
              <Camera className="text-blue-500 mb-4" size={40} />
              <h4 className="font-bold mb-2">Computer Vision</h4>
              <p className="text-sm text-slate-500">YOLO-based object detection and tracking.</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-blue-500 mb-4" size={40} />
              <h4 className="font-bold mb-2">PLC Integration</h4>
              <p className="text-sm text-slate-500">Direct communication with industrial control systems.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm relative z-10">
        <p>&copy; 2026 APEX ALPHA SOLUTIONS LLC. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
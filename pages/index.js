import '../styles/globals.css';
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
      <nav className="flex justify-between items-center px-8 py-6 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
        <div className="flex items-center gap-4">
          {/* Static Logo at Top */}
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
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Rotating Logo */}
        <div className="absolute opacity-20 w-full max-w-2xl -z-10 pointer-events-none">
          <video autoPlay loop muted playsInline className="w-full h-full object-contain">
            <source src="/Rotating_A_Logo_with_Neural_Network.mp4" type="video/mp4" />
          </video>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
          APEX ALPHA SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8">
          The next evolution of industrial automation and personal performance through Computer Vision.
        </p>
      </section>

      {/* Core Solutions */}
      <section id="solutions" className="py-24 px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Gym Vision Card */}
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="bg-blue-600/20 p-4 w-fit rounded-lg mb-6 group-hover:scale-110 transition-transform">
              <Activity className="text-blue-400 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 italic">Apex Performance Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              Automated gym tracking using facial recognition. Monitor reps, weight, and exercise selection in real-time without manual logging. Data-driven fitness for elite results.
            </p>
          </div>

          {/* Industrial Vision Card */}
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="bg-slate-600/20 p-4 w-fit rounded-lg mb-6 group-hover:scale-110 transition-transform">
              <Factory className="text-slate-300 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 italic">Apex Industrial Edge</h3>
            <p className="text-slate-400 leading-relaxed">
              Seamlessly track parts on the move. Our AI vision systems feed real-time data back to your PLCs, bridging the gap between physical logistics and Unified Namespace.
            </p>
          </div>

        </div>
      </section>

      {/* Feature Breakdown */}
      <section id="vision" className="py-20 px-8">
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

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; 2026 APEX ALPHA SOLUTIONS LLC. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
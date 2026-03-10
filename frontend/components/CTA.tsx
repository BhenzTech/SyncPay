import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 px-4 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-center relative overflow-hidden">
      {/* Decorative background elements if needed */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      
      <div className="relative max-w-4xl mx-auto z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Stop managing finance with spreadsheets
        </h2>
        <button className="bg-white text-indigo-900 font-semibold py-4 px-8 rounded-md hover:bg-slate-100 transition-colors shadow-lg">
          Start Automating Finance with SyncPay
        </button>
      </div>
    </section>
  );
}

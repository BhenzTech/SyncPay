import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center">
      <h1 className="text-4xl md:text-[56px] font-bold text-white max-w-4xl tracking-tight leading-[1.1] mb-6">
        Programmable Finance for<br />Modern Organizations
      </h1>
      <p className="text-slate-400 max-w-2xl text-lg mb-10">
        Automate payroll, revenue sharing, and investment distribution with smart
        contracts on the Stacks network.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
          Get Started
        </button>
        <button className="bg-[#0B1426] border border-slate-700 hover:border-slate-500 text-white font-medium py-3 px-8 rounded-md transition-colors">
          View Demo
        </button>
      </div>
      
      {/* Dashboard Mockup - purely structural using tailwind to replace the image respectfully */}
      <div className="w-full max-w-5xl rounded-t-xl overflow-hidden border border-slate-800 bg-[#0B1524] shadow-[0_0_50px_rgba(37,99,235,0.15)] relative h-[250px] sm:h-[400px] md:h-[500px]">
        {/* Mockup Topbar */}
        <div className="h-6 w-full bg-[#1A253A] flex items-center px-4 gap-2 border-b border-slate-800">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
        </div>
        
        {/* Mockup Content Layout */}
        <div className="flex h-[calc(100%-24px)] p-6 gap-6">
          {/* Main Chart Area */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="h-1/2 w-full border border-slate-800 rounded-lg p-4 bg-[#111A2E] flex flex-col">
              <div className="w-32 h-4 bg-slate-700/50 rounded mb-4"></div>
              <div className="flex-1 border-b border-l border-slate-700/50 relative flex items-end px-4 gap-2">
                {/* Fake chart bars */}
                {[40, 70, 45, 90, 65, 30, 80, 50, 60, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-cyan-400/80 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
            <div className="h-1/2 w-full border border-slate-800 rounded-lg p-4 bg-[#111A2E] flex flex-col justify-end gap-2">
               <div className="w-48 h-4 bg-slate-700/50 rounded mb-2"></div>
               {/* Line chart mock */}
               <div className="h-2 w-full bg-indigo-500 rounded-full mb-4"></div>
               <div className="h-2 w-3/4 bg-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

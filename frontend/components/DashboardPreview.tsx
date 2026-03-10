import React from 'react';

export default function DashboardPreview() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Powerful Dashboard</h2>
      
      <div className="relative mx-auto max-w-5xl">
        {/* Glow effect behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-20"></div>
        
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl shadow-black/50 aspect-video">
          {/* Mockup Topbar */}
          <div className="h-8 w-full bg-[#111827] flex items-center px-4 gap-2 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          
          <div className="flex h-[calc(100%-32px)]">
            {/* Sidebar Mockup */}
            <div className="w-48 bg-[#0B101A] border-r border-slate-800 p-4 flex flex-col gap-4 hidden md:flex">
              <div className="h-6 w-3/4 bg-blue-500/20 rounded mb-4"></div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-slate-800 rounded"></div>
              ))}
            </div>
            
            {/* Main Content Mockup */}
            <div className="flex-1 p-6 bg-[#0F172A]">
               <div className="grid grid-cols-4 gap-4 mb-6">
                 {[...Array(4)].map((_, i) => (
                   <div key={i} className="h-24 bg-slate-800/80 rounded border border-slate-700/50 p-4 flex flex-col justify-between">
                     <div className="h-3 w-1/2 bg-slate-600 rounded"></div>
                     <div className="h-6 w-3/4 bg-slate-400 rounded"></div>
                   </div>
                 ))}
               </div>
               
               <div className="h-64 bg-slate-800/80 rounded border border-slate-700/50 p-4 w-full flex items-end gap-2 pb-8">
                 {[40, 70, 45, 90, 65, 30, 80, 50, 60, 100, 85, 75].map((h, i) => (
                   <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80" style={{ height: `${h}%` }}></div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

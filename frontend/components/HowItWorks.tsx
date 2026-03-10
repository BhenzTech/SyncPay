import React from 'react';
import { LayoutGrid, Users, FileText, SendHorizontal } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <LayoutGrid className="w-5 h-5 text-blue-500" />,
      title: "Create a common workspace",
      description: "Set up a shared environment for your team and operations."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      title: "Assign members and contributions",
      description: "Define roles, responsibilities, and expected inputs seamlessly."
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      title: "Define payment terms",
      description: "Set rules for compensation, schedules, and distribution models."
    },
    {
      icon: <SendHorizontal className="w-5 h-5 text-blue-500" />,
      title: "Automated payouts",
      description: "Smart contracts handle everything, sending payments exactly as specified."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0B1426]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <div className="bg-blue-500/10 w-10 h-10 rounded-full flex items-center justify-center mb-5 border border-blue-500/20">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

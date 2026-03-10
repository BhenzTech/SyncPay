import React from 'react';
import { BadgeDollarSign, HeartHandshake, PieChart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-cyan-400" />,
      title: "Automated Payroll",
      description: "Pay employees globally instantly with programmable disbursements."
    },
    {
      icon: <PieChart className="w-6 h-6 text-purple-400" />,
      title: "Revenue Sharing",
      description: "Distribute revenue efficiently without any recurring settlement hassle."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-blue-400" />,
      title: "Investment Streams",
      description: "Automatically stream returns to investors as revenue comes in."
    }
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Modern Finance</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
            <div className="bg-slate-800/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-white/5">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

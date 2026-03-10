import React from 'react';
import { Eye, Settings2, Globe2, Percent } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Eye className="w-5 h-5 text-blue-500" />,
      title: "Transparent Payments",
      description: "All operations happen on-chain, ensuring 100% transparency."
    },
    {
      icon: <Settings2 className="w-5 h-5 text-blue-500" />,
      title: "Automated Workflows",
      description: "Set rules once and let smart contracts handle the repetitive payment tasks."
    },
    {
      icon: <Globe2 className="w-5 h-5 text-blue-500" />,
      title: "Global Payments",
      description: "Pay anyone, anywhere instantly using Stacks and Bitcoin networks."
    },
    {
      icon: <Percent className="w-5 h-5 text-blue-500" />,
      title: "Low Fees",
      description: "Minimize transaction costs compared to traditional payment systems."
    }
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose SyncPay</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
            <div className="bg-blue-500/10 w-10 h-10 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
              {reason.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

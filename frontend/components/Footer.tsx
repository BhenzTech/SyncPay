import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B101A] pt-16 pb-8 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div>
          <h4 className="text-white font-semibold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Docs</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Getting Started</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Guides</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Built on Stacks</h4>
          <div className="flex space-x-4">
             <a href="#" className="text-slate-400 hover:text-white transition-colors">
               <Github className="w-5 h-5" />
             </a>
             <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
               <Twitter className="w-5 h-5" />
             </a>
             <a href="#" className="text-slate-400 hover:text-white transition-colors">
               <Mail className="w-5 h-5" />
             </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800/50 text-center text-xs text-slate-500">
        © 2024 SyncPay. All rights reserved.
      </div>
    </footer>
  );
}

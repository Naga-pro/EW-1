
import React from 'react';
import { Link as LinkIcon, BarChart, Globe, Zap, MousePointer, Shield } from 'lucide-react';
import DemoForm from '../components/DemoForm.tsx';
import FooterForm from '../components/FooterForm.tsx';

const URLShortener: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white pt-20 pb-40">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">URL Shorter <br /><span className="text-blue-500">& Tracker</span></h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
              Stop paying for monthly link subscriptions. Get a custom Google Script-powered shortener that tracks every click with precision.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <BarChart className="text-blue-500 mb-2" />
                <div className="font-bold">Real-time Data</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Zap className="text-yellow-500 mb-2" />
                <div className="font-bold">Instant Setup</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <DemoForm />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20">
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Use Our Script?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Zero Fees', icon: Globe, desc: 'Avoid Bitly or Rebrandly monthly costs. Host it on your own Google account.' },
              { title: 'Deep Analytics', icon: MousePointer, desc: 'Track IP, location, device, and timestamp for every single click.' },
              { title: 'Secure & Private', icon: Shield, desc: 'Your data stays in your Google environment. No third-party data collection.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Discuss Your Use Case</h2>
        <FooterForm />
      </div>
    </div>
  );
};

export default URLShortener;

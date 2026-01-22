
import React from 'react';
import { Mail, CheckCircle, Image as ImageIcon, Link as LinkIcon, Send, Users, Shield } from 'lucide-react';
import DemoForm from '../components/DemoForm';
import FooterForm from '../components/FooterForm';

const FestivalEmailTool: React.FC = () => {
  const features = [
    { title: 'Rich Media Support', desc: 'Send emails with stunning images and embedded hyperlinks easily.', icon: ImageIcon },
    { title: '95% Inbox Ratio', desc: 'Engineered for high deliverability via Google Workspace scripts.', icon: Shield },
    { title: 'Personalization', desc: 'Automatic name and detail personalization for every recipient.', icon: Users },
    { title: 'Attachments', desc: 'Easily attach files and reports to your bulk outreach.', icon: Send },
    { title: 'Bulk One-Click', desc: 'Send to up to 150 users at a time with a single script trigger.', icon: Users },
    { title: 'Google Sheets Native', desc: 'Runs entirely within your Google environment for maximum privacy.', icon: LinkIcon }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6">GOOGLE SCRIPT POWERED</div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Festival Email <br /><span className="text-blue-600">Marketing Tool</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Resellable SaaS code and script for high-efficiency bulk email marketing. Built on Google Scripts, adhering to all terms and conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 font-medium">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                95% Inbox Rate
              </div>
              <div className="flex items-center text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 font-medium">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                150 Emails/Click
              </div>
            </div>
          </div>
          <div className="relative">
            <DemoForm />
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Powerful Features for Modern Outreach</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Get all the benefits of high-end email platforms using the simple power of Google Apps Script.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing/Value Section */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Own This Script?</h2>
          <p className="text-slate-400 text-lg mb-10">
            I resell the full Google Sheet & Script package. It is yours to keep, use, and scale. No recurring monthly fees to external platforms.
          </p>
          <div className="inline-block p-1 bg-white/5 rounded-2xl border border-white/10 mb-12">
             <div className="bg-slate-800 px-8 py-6 rounded-xl">
                <span className="text-slate-400 block text-sm font-bold uppercase mb-2">One-time Investment</span>
                <div className="text-4xl font-bold">$ Contact for Pricing</div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Get in Touch</h2>
        <FooterForm />
      </div>
    </div>
  );
};

export default FestivalEmailTool;

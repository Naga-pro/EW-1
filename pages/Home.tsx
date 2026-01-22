
import React from 'react';
import { ShieldCheck, Zap, BarChart3, Cloud, Factory, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterForm from '../components/FooterForm.tsx';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-50 opacity-50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="h-4 w-4" />
            <span>Precision Marketing for Complex Industries</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Where Marketing <br />
            <span className="text-blue-600">Meets Engineering</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            I'm a freelancer specializing in driving growth for technical businesses. From SaaS to Manufacturing, I bridge the gap between complex products and their ideal customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center shadow-lg shadow-slate-200">
              Explore Services <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/festival-email-marketing" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
              View Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries I Empower</h2>
          <p className="text-slate-600">Specialized strategies for high-stakes, technical markets.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'SaaS Companies', icon: Cloud, desc: 'Scaling recurring revenue through data-driven lead gen and product-led growth strategies.' },
            { name: 'Manufacturing', icon: Factory, desc: 'Modernizing traditional supply chains with digital marketing and ICP-specific outreach.' },
            { name: 'Logistics', icon: Truck, desc: 'Optimizing touchpoints for transportation giants and innovative freight startups alike.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Preview */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 italic">Built with Google Scripts, <br />Designed for Performance.</h2>
            <p className="text-slate-400 text-lg mb-8">
              I develop custom automated solutions using Google Apps Script that simplify complex marketing tasks without the enterprise price tag.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-2 rounded-lg mt-1">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold">Verified Compliance</h4>
                  <p className="text-slate-500 text-sm">Reselling scripts under full Google Terms & Conditions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-2 rounded-lg mt-1">
                  <Zap className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold">High Efficiency</h4>
                  <p className="text-slate-500 text-sm">95% inbox ratios and one-click automation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Link to="/festival-email-marketing" className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:bg-slate-750 transition-all block">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Product One</span>
                <BarChart3 className="h-6 w-6 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Festival Email Tool</h3>
              <p className="text-slate-400">Personalized email marketing with hyper-low friction and high deliverability.</p>
            </Link>
            <Link to="/url-shortener" className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:bg-slate-750 transition-all block">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-green-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Product Two</span>
                <Zap className="h-6 w-6 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">URL Shorter & Tracker</h3>
              <p className="text-slate-400">Secure link shortening with deep analytics, built entirely on Google Script.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="max-w-4xl mx-auto px-4 pt-10">
        <FooterForm />
      </section>
    </div>
  );
};

export default Home;

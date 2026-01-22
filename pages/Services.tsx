
import React from 'react';
import { Target, UserCheck, Layers, Mail, Layout, ArrowRight } from 'lucide-react';
import FooterForm from '../components/FooterForm.tsx';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Lead Generation',
      icon: Target,
      color: 'blue',
      desc: 'Identifying and qualifying high-intent prospects through outbound and inbound strategies tailored for technical sales cycles.',
      features: ['Outbound Prospecting', 'LinkedIn Outreach', 'Lead Scoring', 'CRM Integration']
    },
    {
      title: 'Account Based Marketing',
      icon: Layers,
      color: 'indigo',
      desc: 'High-touch, personalized campaigns targeting high-value accounts with precision-crafted messaging.',
      features: ['Account Mapping', 'Personalized Content', 'Sales-Marketing Alignment', 'Tiered Outreach']
    },
    {
      title: 'Landing Page Gen & Opt',
      icon: Layout,
      color: 'emerald',
      desc: 'Building high-conversion landing pages and A/B testing them to ensure maximum ROI for your ad spend.',
      features: ['Conversion UI/UX', 'A/B Testing', 'Fast-loading Pages', 'Analytics Setup']
    },
    {
      title: 'Email Marketing',
      icon: Mail,
      color: 'orange',
      desc: 'Strategic email automation that nurtures leads and drives retention without spamming your audience.',
      features: ['Drip Campaigns', 'Newsletter Strategy', 'Deliverability Audits', 'Segmentation']
    },
    {
      title: 'ICP Profile Creation',
      icon: UserCheck,
      color: 'purple',
      desc: 'Deep-dive research to define your Ideal Customer Profile, ensuring your marketing efforts are never wasted.',
      features: ['Market Research', 'Persona Mapping', 'Pain Point Analysis', 'Competitive Benchmarking']
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-20">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expert Solutions for Your Growth</h1>
          <p className="text-xl text-slate-600">I provide specialized marketing services designed to scale technical organizations through precision and strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-2xl transition-all flex flex-col h-full group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${service.color}-50 text-${service.color}-600`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-center text-sm font-medium text-slate-500">
                    <ArrowRight className={`h-4 w-4 mr-2 text-${service.color}-500 opacity-50`} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Ready to scale?</h2>
            <p className="text-slate-600">Select the services you need in the form below.</p>
          </div>
          <FooterForm />
        </div>
      </div>
    </div>
  );
};

export default Services;

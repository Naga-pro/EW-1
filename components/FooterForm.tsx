
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../types.ts';

const FooterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    phone: '',
    selectedServices: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(id)
        ? prev.selectedServices.filter(s => s !== id)
        : [...prev.selectedServices, id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending hire me request:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-900 text-white rounded-xl p-8 text-center flex flex-col items-center justify-center border border-slate-800">
        <div className="bg-blue-600 p-3 rounded-full mb-4">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">Request Received!</h3>
        <p className="text-slate-400">I'll review your details and reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div id="footer-form" className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-900 px-6 py-4">
        <h3 className="text-white font-semibold text-lg">Hire Engineers Work</h3>
        <p className="text-slate-400 text-sm">Fill out the details below to start our collaboration.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Name</label>
            <input
              required
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Website</label>
            <input
              required
              type="url"
              placeholder="https://example.com"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
              value={formData.website}
              onChange={e => setFormData({ ...formData, website: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Contact Number</label>
            <input
              required
              type="tel"
              placeholder="+1 234 567 890"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">You wanted to Hire me for</label>
          <div className="flex flex-wrap gap-2">
            {SERVICES_LIST.map(service => (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  formData.selectedServices.includes(service.id)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-blue-400'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={formData.selectedServices.length === 0}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2"
        >
          <span>Submit Request</span>
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default FooterForm;

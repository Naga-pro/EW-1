
import React from 'react';
import { AlertTriangle, ShieldCheck, Scale } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 p-12 text-center text-white">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Legal Disclaimer</h1>
            <p className="text-slate-400">Essential information for users purchasing the SaaS code from Engineers Work.</p>
          </div>

          <div className="p-12 space-y-10">
            <section className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-900 mb-2">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                <h2 className="text-2xl font-bold">Ethical Use Policy</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                The "Festival Email Marketing Tool" (SaaS code/Google Script) provided by Engineers Work is intended for legitimate marketing and communication purposes. By purchasing and using this script, you agree to comply with all local and international anti-spam laws, including but not limited to CAN-SPAM, GDPR, and CASL.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-900 mb-2">
                <ShieldCheck className="h-6 w-6 text-blue-500" />
                <h2 className="text-2xl font-bold">Google Terms & Conditions</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Engineers Work operates as a reseller of custom script solutions. This script is built using Google Apps Script. All users must maintain a valid Google account and adhere to Google's Terms of Service and API Usage Policies. We do not claim ownership of the underlying Google infrastructure or Apps Script platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Liability Limitation</h2>
              <div className="bg-slate-50 border-l-4 border-slate-300 p-6 italic text-slate-700">
                "Engineers Work shall not be held liable for any account suspensions, blacklisting, or legal actions resulting from the misuse of the provided email marketing script. Users are solely responsible for the content and frequency of their outreach."
              </div>
            </section>

            <div className="pt-8 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} Engineers Work. All rights reserved.</p>
              <p>Last Updated: October 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

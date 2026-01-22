
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import FestivalEmailTool from './pages/FestivalEmailTool.tsx';
import URLShortener from './pages/URLShortener.tsx';
import Disclaimer from './pages/Disclaimer.tsx';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <div className="text-white font-bold text-xl mb-2 flex items-center">
               Engineers<span className="text-blue-500">Work</span>
            </div>
            <p className="text-sm max-w-sm">
              Helping SaaS, Manufacturing, and Logistics companies scale through precision marketing and custom tools.
            </p>
          </div>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#/" className="hover:text-white transition-colors">Home</a>
            <a href="#/services" className="hover:text-white transition-colors">Services</a>
            <a href="#/disclaimer" className="hover:text-white transition-colors underline">Legal Disclaimer</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} Engineers Work. All services and scripts provided under strict adherence to Google T&C.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/festival-email-marketing" element={<FestivalEmailTool />} />
            <Route path="/url-shortener" element={<URLShortener />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Back to top fab */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-40 md:hidden"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen text-on-surface bg-[#F7F8F6] font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* Main Content Wrapper */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-12 pb-24 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="text-center mt-8 mb-16 max-w-3xl animate-in fade-in slide-in-from-top-4 duration-1000">
          <h1 className="font-headline font-extrabold text-7xl md:text-8xl text-primary tracking-tight mb-4 drop-shadow-sm">
            CareSync
          </h1>
          <p className="font-headline text-3xl md:text-4xl text-on-surface-variant font-medium tracking-wide mb-4">
            Aapka swasthya saathi
          </p>
          <div className="h-1.5 w-24 bg-primary/20 mx-auto rounded-full mb-6"></div>
          <p className="font-body text-lg text-[#6B7280] font-medium opacity-80">
            Choose how you want to use CareSync to get started
          </p>
        </header>

        {/* Mode Selection Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[1100px] items-stretch mb-16 px-4">
          {/* Senior Mode Card (Primary Focus) */}
          <button 
            onClick={() => navigate('/home')}
            className="group relative flex flex-col items-center justify-center p-16 bg-[#EAF4EF] border border-primary/10 rounded-3xl shadow-[0_20px_50px_-12px_rgba(25,28,27,0.08)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_40px_80px_-20px_rgba(25,28,27,0.12)] hover:border-primary/20 overflow-hidden"
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Emoji Container */}
            <div className="mb-10 p-10 bg-white/90 rounded-full shadow-sm transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:shadow-md border border-primary/5">
              <span className="text-8xl block leading-none transform transition-transform group-hover:rotate-6">👵</span>
            </div>
            
            <div className="text-center relative z-10">
              <h2 className="font-headline font-extrabold text-4xl mb-3 text-[#191c1b]">Senior Mode</h2>
              <p className="font-body text-xl text-primary font-bold opacity-90">Kamla Devi ke liye</p>
            </div>
            
            {/* Action Indicator */}
            <div className="mt-10 flex items-center gap-3 text-primary font-black text-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span>Aage badhein</span>
              <span className="material-symbols-outlined font-black">arrow_forward</span>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
          </button>

          {/* Caregiver Mode Card (Secondary Focus) */}
          <button 
            onClick={() => navigate('/caregiver')}
            className="group relative flex flex-col items-center justify-center p-16 bg-white border border-surface-container-highest/20 rounded-3xl shadow-[0_10px_30px_-10px_rgba(25,28,27,0.04)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(25,28,27,0.08)] hover:border-secondary/20 overflow-hidden"
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Emoji Container */}
            <div className="mb-10 p-10 bg-surface-container-low rounded-full shadow-sm transition-all duration-500 group-hover:bg-surface-container-high group-hover:scale-110 group-hover:shadow-md border border-secondary/5">
              <span className="text-8xl block leading-none transform transition-transform group-hover:-rotate-6">👨</span>
            </div>
            
            <div className="text-center relative z-10">
              <h2 className="font-headline font-bold text-4xl mb-3 text-[#191c1b]">Caregiver Mode</h2>
              <p className="font-body text-xl text-secondary font-semibold opacity-90">Rahul ke liye</p>
            </div>
            
            <div className="mt-10 flex items-center gap-3 text-secondary font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span>Aage badhein</span>
              <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </div>

            {/* Background Accent */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
          </button>
        </div>

        {/* Feature Highlights/Badge */}
        <div className="flex flex-col items-center text-on-surface-variant max-w-2xl text-center space-y-6">
          <div className="flex items-center gap-4 py-3 px-8 bg-white rounded-full shadow-sm border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
            <p className="font-body text-base tracking-[0.15em] font-black uppercase text-primary/80">Safe • Trusted • Caring</p>
          </div>
          <p className="font-body text-lg text-on-surface-variant/80 font-medium italic border-l-4 border-primary/20 pl-4 py-1">
            "Designed with love to provide comfort and care for our elders."
          </p>
        </div>
      </main>

      {/* Footer Component */}
      <footer className="w-full py-10 border-t border-[#E5E7EB] bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-primary font-black font-headline text-3xl tracking-tight">CareSync</span>
            <p className="text-[#191c1b]/60 font-body text-sm tracking-wide mt-2">
              © 2024 The Serene Guardian. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <a className="text-[#191c1b]/60 font-body text-sm font-bold tracking-widest uppercase hover:text-primary hover:underline transition-all duration-300" href="#">Privacy Policy</a>
            <a className="text-[#191c1b]/60 font-body text-sm font-bold tracking-widest uppercase hover:text-primary hover:underline transition-all duration-300" href="#">Terms of Service</a>
            <a className="text-[#191c1b]/60 font-body text-sm font-bold tracking-widest uppercase hover:text-primary hover:underline transition-all duration-300" href="#">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModeSelection;

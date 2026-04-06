import React from 'react';

const SOS = () => {
  return (
    <div className="bg-surface text-on-surface font-body h-screen overflow-hidden relative">
      {/* REAL DASHBOARD BACKGROUND (BLURRED) */}
      <div className="absolute inset-0 z-0 flex overflow-hidden opacity-30 grayscale-[0.4] filter blur-xl scale-110 pointer-events-none">
        {/* Mockup Sidebar */}
        <aside className="w-64 bg-emerald-50 h-full flex flex-col p-8 border-r border-emerald-100">
          <div className="h-8 w-32 bg-emerald-900/20 rounded-full mb-12"></div>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-6 w-full bg-emerald-900/10 rounded-lg"></div>
            ))}
          </div>
        </aside>
        {/* Mockup Content Area */}
        <main className="flex-1 p-16 space-y-12">
          <div className="h-12 w-96 bg-emerald-900/20 rounded-2xl"></div>
          <div className="grid grid-cols-3 gap-10 h-full">
            <div className="col-span-2 bg-emerald-900/5 rounded-[40px]"></div>
            <div className="bg-emerald-900/5 rounded-[40px]"></div>
          </div>
        </main>
      </div>

      {/* EMERGENCY OVERLAY */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-on-surface/40 backdrop-blur-[30px]">
        {/* Modal Container */}
        <div className="relative w-full max-w-[900px] bg-[#f9faf8] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(230,57,70,0.3)] overflow-hidden animate-in zoom-in-95 fade-in duration-500 border-4 border-white/40">
          
          {/* Pulsing Emergency Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-sos-red animate-pulse"></div>

          {/* Modal Header */}
          <div className="px-12 pt-12 pb-8 flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sos-red text-4xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                <h2 className="text-5xl font-black text-sos-red tracking-tight font-headline">Emergency Help</h2>
              </div>
              <p className="text-on-surface-variant font-bold text-xl opacity-80 pl-1">Aapke liye sahayta prapt karein</p>
            </div>
            <button className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-all hover:rotate-90">
              <span className="material-symbols-outlined text-on-surface-variant text-2xl">close</span>
            </button>
          </div>

          {/* Modal Content Scrollable */}
          <div className="px-12 pb-14 space-y-12 max-h-[75vh] overflow-y-auto custom-scrollbar">
            
            {/* SECTION 1: NEARBY HOSPITALS */}
            <section>
              <div className="flex items-center gap-4 mb-6 sticky top-0 bg-[#f9faf8] py-2 z-10">
                <span className="material-symbols-outlined text-emerald-700 bg-emerald-50 p-2 rounded-xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_hospital</span>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">Nearby Medical Centers</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Apollo Hospital', dist: '2.3 km', time: '8 mins' },
                  { name: 'Medanta Hospital', dist: '4.1 km', time: '12 mins' }
                ].map((hospital, idx) => (
                  <div key={idx} className="group bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-outline-variant/10 flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl hover:border-sos-red/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-3xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-emerald-700 text-3xl">apartment</span>
                        </div>
                        <div>
                          <h4 className="font-headline font-black text-2xl text-on-surface">{hospital.name}</h4>
                          <p className="text-sm text-emerald-700 font-bold tracking-tight uppercase">{hospital.dist} away • {hospital.time}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-sos-red/40 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward</span>
                    </div>
                    <button className="w-full h-16 rounded-full bg-sos-red text-white font-black text-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-lg shadow-red-500/20 active:scale-95">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                      Call Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 2: PERSONAL DOCTOR */}
            <section>
              <div className="flex items-center gap-4 mb-6 sticky top-0 bg-[#f9faf8] py-2 z-10">
                <span className="material-symbols-outlined text-emerald-700 bg-emerald-50 p-2 rounded-xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">Personal Healthcare</h3>
              </div>
              <div className="group bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-outline-variant/10 flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-8 flex-1">
                  <div className="relative">
                    <img 
                      alt="Dr. Ramesh Sharma" 
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-emerald-50 shadow-lg" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbhXMG4WJQYDH_2dS85nlHgYlhrDM2VTRL_jKcF_3doTqb0PKY_w_8xRh5zToFBbD0BvAV8LaZGFyPp_s_QaZAFnue_Ntt1HwHnv2ReAEgJEcsmtzvW9fqvGJ5ACPj9hb3qSa-LRhHxBwsRMvk8GQ_1VQkr2gMJpPqlJGSZ1bASzEEsphCURBlU5cdE0yMcFq0Qx53Uaytl3eZx8J5MncdQpJJT_u6jyP7p4gX8C0u5e7ea8mAr7y-8DaxUcuBQ4PPoUDbMJS-BGs" 
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-3xl font-headline font-black text-on-surface">Dr. Ramesh Sharma</h4>
                    <p className="text-lg text-emerald-700 font-bold opacity-70">Cardiologist • Primary Care</p>
                    <p className="text-sm text-stone-400 mt-1 font-medium italic">Available for emergency call</p>
                  </div>
                </div>
                <button className="w-full md:w-auto px-12 h-18 rounded-full bg-primary text-white font-black text-xl flex items-center justify-center gap-4 hover:brightness-110 transition-all shadow-xl shadow-emerald-900/20 active:scale-95 py-5">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  Secure Doctor Call
                </button>
              </div>
            </section>

            {/* SECTION 3: FAMILY / CAREGIVER */}
            <section>
              <div className="flex items-center gap-4 mb-6 sticky top-0 bg-[#f9faf8] py-2 z-10">
                <span className="material-symbols-outlined text-emerald-700 bg-emerald-50 p-2 rounded-xl" style={{ fontVariationSettings: "'FILL' 1" }}>family_history</span>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">Family & Loved Ones</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Rahul (Beta)', role: 'Primary Emergency Contact', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjZ0AhV4o_UZmc25kiWhThcUSibN_3e3PRxcCLVuOyKm_HlRLhKSpD8IfOg6h6QQ-R9gKsByb748Mj4bWwukJMnDSMh2Qe0xPCz0581Y5vevQP01WdLSEe72TzHbHN0vOY5oMGzxo9s-HwkMZvPiDaeKqxW12chg5fzArvKWjA9OTi_5OPELdr9rBcc9zayKUhRXz94oh5Oz2ZE100BGXGltEGqT85VQw_0jBQdI494Zm3twjE1gykTCsfckR07r4S8OJIRaGVjx8' },
                  { name: 'Priya (Beti)', role: 'Secondary Emergency Contact', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOADQt0iL6uU_1U1xL3qxKud0x0mMKp7GyOc8u11N1QG_mnitF9M4SybMRDgvc3TftqQ_DWDWTxK3qxGkhiL551HqGUEhxz8RtcIGwYJVucp4cbsAUwn1GhP-zZH6Rdzye3pm1Z5r-8Sc1tN1zK4_qVpyIWoeIyG6kTUSfpob68zTqAY4vYEiwpfNmbf2YZLoyqKsC-Xjp6j8OCw-ENUTUX3bkUkop81AtMHt8I2kjuUckL3iRRKCxud8wa2fjz71zgxKDo4YUFZs' }
                ].map((family, idx) => (
                  <div key={idx} className="group bg-white p-6 rounded-[2rem] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.03)] border border-outline-variant/10 flex items-center justify-between hover:shadow-xl transition-all">
                    <div className="flex items-center gap-5">
                      <img alt={family.name} className="w-16 h-16 rounded-full object-cover shadow-inner group-hover:scale-105 transition-transform" src={family.img} />
                      <div>
                        <h4 className="font-headline font-black text-xl text-on-surface">{family.name}</h4>
                        <p className="text-xs text-on-surface-variant font-bold opacity-60 uppercase tracking-tighter">{family.role}</p>
                      </div>
                    </div>
                    <button className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all active:scale-90">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom Safety Bar */}
          <div className="bg-emerald-900/5 px-12 py-6 flex items-center justify-center gap-4">
            <span className="material-symbols-outlined text-emerald-800 text-sm animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>encrypted</span>
            <span className="text-[10px] font-black text-emerald-800 tracking-[0.3em] uppercase opacity-60">SECURE SOS CHANNEL • CARESYNC ENCRYPTED</span>
          </div>
        </div>

        {/* SUCCESS TOAST (SIMULATED) */}
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-4 bg-primary text-white pl-6 pr-8 py-5 rounded-full shadow-[0_20px_50px_-10px_rgba(15,82,56,0.4)] animate-in slide-in-from-bottom-20 duration-500">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
            <span className="material-symbols-outlined text-white text-xl animate-spin" style={{ animationDuration: '3s' }}>cached</span>
          </div>
          <span className="font-headline font-black text-xl tracking-tight">Connecting Rahul...</span>
          <button className="ml-4 text-xs font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full hover:bg-white/20">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SOS;

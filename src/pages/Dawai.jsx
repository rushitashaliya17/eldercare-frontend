import React from 'react';

const Dawai = () => {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      {/* Main Content */}
      <main className="min-h-screen pt-20">
        {/* TopNavBar Component */}
        <header className="fixed top-0 right-0 w-full h-20 bg-emerald-50/80 dark:bg-slate-950/80 backdrop-blur-md z-10 flex justify-between items-center px-10 border-b border-outline-variant/10 md:w-[calc(100%-16rem)]">
          <h2 className="text-xl font-headline font-black text-emerald-900 dark:text-emerald-50">Dawai Routine</h2>
          <div className="flex items-center gap-6">
            <button className="text-emerald-900 dark:text-emerald-400 hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-emerald-900 dark:text-emerald-400 hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        <div className="pt-8 pb-12 px-12 max-w-6xl mx-auto">
          {/* Greeting & Header */}
          <section className="mb-10">
            <p className="text-headline text-5xl font-extrabold text-primary tracking-tight mb-2">Namaskar, Kamla ji</p>
            <p className="text-xl text-on-surface-variant font-medium">Aaj ki Dawai</p>
          </section>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Column: Primary Info */}
            <div className="col-span-12 lg:col-span-7 space-y-8">
              {/* Primary Medicine Card */}
              <div className="bg-[#EAF4EF] p-10 rounded-xl shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[160px]">medication</span>
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold rounded-full mb-6 uppercase tracking-wider">Next Dosage</span>
                  <h3 className="text-4xl font-headline font-extrabold text-primary mb-4">Metformin 500mg</h3>
                  <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-2xl">pill</span>
                      <span className="text-xl font-semibold text-primary">Ek goli</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-2xl">restaurant</span>
                      <span className="text-xl font-semibold text-primary font-medium">Breakfast ke baad</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Explanation Section */}
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                  </div>
                  <h4 className="text-lg font-bold text-on-surface">Yeh kyu leni hai?</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span 
                      className="material-symbols-outlined text-primary mt-1" 
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-lg text-on-surface-variant leading-relaxed">
                      Aapka <strong className="text-on-surface font-bold text-primary">sugar control</strong> karne mein madad karti hai.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span 
                      className="material-symbols-outlined text-primary mt-1" 
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-lg text-on-surface-variant leading-relaxed">
                      Din bhar ki <strong className="text-on-surface font-bold text-primary">energy</strong> banaye rakhti hai.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-6 pt-4">
                <button className="flex-1 h-20 rounded-full bg-gradient-to-r from-primary to-primary-container text-white text-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-2xl">done_all</span>
                  DAWAI LE LI
                </button>
                <button className="flex-1 h-20 rounded-full bg-surface-container-highest text-on-surface-variant text-xl font-bold flex items-center justify-center gap-3 hover:bg-surface-container-high active:scale-95 transition-all border border-outline-variant/20">
                  <span className="material-symbols-outlined text-2xl">close</span>
                  SKIP KAR DI
                </button>
              </div>
            </div>

            {/* Right Column: Contextual Info */}
            <div className="col-span-12 lg:col-span-5 space-y-8">
              {/* Highlighted Row: Next Dose */}
              <div className="bg-secondary-fixed p-8 rounded-xl flex items-center justify-between shadow-sm border border-secondary/10 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-on-secondary-container/10 rounded-full flex items-center justify-center">
                    <span 
                      className="material-symbols-outlined text-on-secondary-container text-3xl" 
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      schedule
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-secondary-fixed-variant uppercase tracking-widest mb-1 opacity-70">Agli khurak</p>
                    <p className="text-3xl font-black text-on-secondary-container">08:30 PM</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-secondary-container text-4xl">chevron_right</span>
              </div>

              {/* Side-by-Side Cards */}
              <div className="grid grid-cols-2 gap-6">
                {/* Side Effects */}
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 flex flex-col gap-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-tertiary text-2xl">warning</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-tertiary uppercase tracking-wider mb-2">Side Effects</p>
                    <p className="text-on-surface-variant text-[15px] leading-relaxed">Thoda pet kharab ho sakta hai. Paani khoob piyein.</p>
                  </div>
                </div>
                {/* Diet Tip */}
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 flex flex-col gap-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-primary text-2xl">tips_and_updates</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Diet Tip</p>
                    <p className="text-on-surface-variant text-[15px] leading-relaxed">Meetha kum khayein, hari sabziyan zyada.</p>
                  </div>
                </div>
              </div>

              {/* Visual Context / Illustration Area */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-2xl group">
                <img
                  alt="Healthy breakfast scene"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgOAMFToyFt-zHhFAM4yeDcjh4iu0Km2sP6fdrKU4hWeWOndmLEdlcaUsybuRPtvlQDuXj5AQ44AwKpg9zgOHovfjBqJ0AX8QUDBZajhPGOMh7DEbGr7DsUMb_B7QMMSLQvNx_lJE45NLVlH3VGG3k2c79VfV4lSCUGeJMSpsc6GHaoX2GeonInoF6mEgQ_ncJl-3kPpEevPjt308L0bD_Gx141da0gg1h7TFPcx3TcuhESKCtxVCE6SkVQPUX7DsNoXEacn5_MPI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-xl drop-shadow-md">Acha khana, achi sehat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dawai;

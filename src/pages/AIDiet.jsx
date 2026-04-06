import React from 'react';

const AIDiet = () => {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      {/* TopNavBar Component (Page Specific) */}
      <header className="fixed top-0 right-0 w-full h-20 z-40 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-outline-variant/10 flex justify-between items-center px-10 md:w-[calc(100%-16rem)]">
        <h2 className="font-headline text-2xl font-bold text-emerald-900 dark:text-emerald-500 tracking-tight">AI Diet Guide</h2>
        <div className="flex items-center space-x-6">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-all active:scale-95">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500">notifications</span>
          </button>
          <div className="h-8 w-px bg-outline-variant/30"></div>
          <div className="flex items-center space-x-3 hover:opacity-80 cursor-pointer transition-opacity">
            <span className="font-headline text-lg font-semibold tracking-wide text-emerald-900 dark:text-emerald-500">Settings</span>
            <span className="material-symbols-outlined text-stone-500">settings</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mt-20 p-12 w-full max-w-7xl mx-auto overflow-x-hidden">
        {/* Greeting Section */}
        <section className="mb-12">
          <h1 className="text-6xl font-headline font-extrabold text-on-surface tracking-tight mb-3">Namaskar, Kamla ji</h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-3xl">Aaj ka khana health ke liye kaisa hai? Chaliye check karte hain.</p>
        </section>

        {/* Plate Scan Hero Section */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/10 group">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-12 z-10">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-secondary-container/20 text-secondary font-bold rounded-full text-xs mb-6 border border-secondary/10">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>colors_spark</span>
                  <span className="uppercase tracking-widest">AI Powered Analysis</span>
                </div>
                <h2 className="text-5xl font-headline font-bold text-on-surface mb-6 leading-tight">Apni plate ki photo scan karein</h2>
                <p className="text-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">Hamara AI bataega aapke khane mein kitni energy aur poshan hai. Bas ek photo click karein!</p>
                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-full font-headline font-bold text-xl flex items-center space-x-4 shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-2xl">photo_camera</span>
                  <span>Scan Now</span>
                </button>
              </div>
              <div className="lg:w-1/2 h-[420px] relative overflow-hidden">
                <img 
                  alt="Healthy balanced meal plate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrmQIkLD92S2egXUv42KCpAmEtAJyELUg_3r88lezQFyjz185UEiUMx2ZnSorau8Zl64YpADY2e2EoMjO-LbMGmQ8I_MyDteDgzKoe5b7DXaxqhIKlHUGg3YC1DtU25_4rK530rXxzeYks6KUNSk0IZ5v91Wofx4kCbczCtR73mwukbIPm_1nDoqbaJjihLEd5PttcQJvDUAsUgOw9EIck1Vw2FLL18HEdedTkU5qZlzwokWzh6UrsmYwC8q69NpQGz-JNLHENpks" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent lg:block hidden"></div>
                {/* Visual Analysis Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white/50 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-4 w-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Sehat Suggestions Column */}
          <div className="lg:col-span-12 xl:col-span-7 bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-3xl font-headline font-bold text-on-surface">Sehat Suggestions</h3>
              <button className="text-primary font-bold hover:underline underline-offset-4 transition-all">View All Recipes</button>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-44 h-44 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                  <img 
                    alt="Dal Chawal and Salad" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5YYifqHDGUI1JnlDslCfuEuH1wkZ3-HU5SYERBk8M1r9BzOpV4516fY4DMTGtX7hJns82e-GPoYVe3Px5OQnCbvpbydhcu4XJAGud0xCMeWEvW8OCuuWe_6qyWroxjPXzv1n1mTVto1o2822MiuYdHkkvvTbJatfpQA9x4ShnO5y_O0f4LyxTed_--kUcfbQ6FHMiA72tBkqDNag__JBm2A30wmW3tWRAlPLBPibyn2rgV0Defxi00IGZmHyDTq0HH3vYNYs67qg" 
                  />
                </div>
                <div className="flex-1 py-1">
                  <h4 className="text-2xl font-headline font-bold text-on-surface mb-2">Dal Chawal with extra salad</h4>
                  <p className="text-on-surface-variant mb-6 italic leading-relaxed text-lg">Kam tail aur zyada fiber ke saath, dopahar ke liye best.</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 text-stone-600 bg-stone-100 px-4 py-2 rounded-full text-sm font-semibold border border-stone-200/50">
                      <span className="material-symbols-outlined text-xl">local_fire_department</span>
                      <span>420 kcal</span>
                    </div>
                    <div className="flex items-center space-x-2 text-stone-600 bg-stone-100 px-4 py-2 rounded-full text-sm font-semibold border border-stone-200/50">
                      <span className="material-symbols-outlined text-xl">schedule</span>
                      <span>15 mins</span>
                    </div>
                    <div className="flex items-center space-x-2 text-primary bg-primary-fixed/30 px-4 py-2 rounded-full text-sm font-bold border border-primary/10">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
                      <span>Great Choice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-start space-x-5 p-6 bg-tertiary-container/10 rounded-2xl border border-tertiary/10">
              <span className="material-symbols-outlined text-tertiary text-3xl">info</span>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                <span className="font-bold text-tertiary">Dhyan dein:</span> Aaj aapne namak thoda zyada liya hai. Raat ke khane mein dahi ka upyog karein.
              </p>
            </div>
          </div>

          {/* Hydration & Analytics Column */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-10">
            {/* Water Tracking Card */}
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm border border-outline-variant/10 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface">Paani Peeyein</h3>
                  <p className="text-md text-on-surface-variant font-medium">Stay hydrated, Kamla ji</p>
                </div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                </div>
              </div>

              <div className="relative pt-2">
                <div className="flex mb-4 items-center justify-between">
                  <div>
                    <span className="text-xs font-bold inline-block py-2 px-4 uppercase rounded-full text-secondary bg-secondary-fixed tracking-widest">
                      Daily Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-headline font-black inline-block text-secondary">
                      1.2L / 2L
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-5 mb-6 flex rounded-full bg-secondary-container/20 p-1 border border-secondary/10">
                  <div 
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-stone-500 font-bold bg-stone-50 py-3 rounded-2xl border border-stone-100">
                <span className="material-symbols-outlined text-xl">info</span>
                <span>Sirf 3 glass aur baaki hain!</span>
              </div>
            </div>

            {/* Health Snapshot Card */}
            <div className="bg-primary-container p-10 rounded-3xl shadow-xl text-on-primary relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined">analytics</span>
                  Health Snapshot
                </h3>
                <div className="flex items-end justify-between h-32 mb-6 px-2 gap-3">
                  <div className="flex-1 bg-on-primary-container/30 h-[40%] rounded-xl hover:bg-on-primary-container/40 transition-all cursor-pointer"></div>
                  <div className="flex-1 bg-on-primary-container/30 h-[60%] rounded-xl hover:bg-on-primary-container/40 transition-all cursor-pointer"></div>
                  <div className="flex-1 bg-on-primary-container/30 h-[50%] rounded-xl hover:bg-on-primary-container/40 transition-all cursor-pointer"></div>
                  <div className="flex-1 bg-on-primary-container h-[90%] rounded-xl relative group">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold shadow-lg">Current</div>
                  </div>
                  <div className="flex-1 bg-on-primary-container/30 h-[40%] rounded-xl hover:bg-on-primary-container/40 transition-all cursor-pointer"></div>
                  <div className="flex-1 bg-on-primary-container/30 h-[75%] rounded-xl hover:bg-on-primary-container/40 transition-all cursor-pointer"></div>
                  <div className="flex-1 bg-on-primary-container/30 h-[55%] rounded-xl hover:bg-on-primary-container/40 transition-all cursor-pointer"></div>
                </div>
                <div className="flex justify-between text-[11px] font-bold opacity-70 uppercase tracking-widest px-2 font-headline">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span className="text-on-primary font-black opacity-100">Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
                <div className="mt-8 pt-8 border-t border-on-primary-container/20 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm opacity-80 font-medium">Weekly Consistency</span>
                    <span className="text-xs font-bold text-emerald-300">Target: 90%</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-headline font-black">+12%</span>
                    <span className="text-[10px] font-bold tracking-tighter uppercase px-2 py-0.5 bg-emerald-500 text-white rounded-full">Improved</span>
                  </div>
                </div>
              </div>
              {/* Background Decor */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Meal Plan Section */}
        <section className="mb-20">
          <div className="bg-surface-container-high p-12 rounded-[40px] border border-outline-variant/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-headline font-bold text-on-surface">Full Day's Meal Plan</h2>
                <p className="text-on-surface-variant font-medium mt-2 text-lg">Aaj ke liye santulit aahar ka nakshe</p>
              </div>
              <div className="flex items-center space-x-3 bg-surface-container-lowest px-6 py-3 rounded-2xl shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-2xl">calendar_today</span>
                <span className="font-bold text-primary text-lg">Thursday, 24 Oct</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Breakfast */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-secondary/10 group">
                <div className="flex justify-between items-center mb-5">
                  <p className="text-secondary font-bold text-[10px] tracking-[0.2em] uppercase">Breakfast</p>
                  <span className="material-symbols-outlined text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">check_circle</span>
                </div>
                <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">Oats Upma</h4>
                <p className="text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed">Puri sabzi ki jagah oats try karein, dil ke liye achha hai.</p>
                <div className="mt-auto flex items-center text-xs font-bold text-stone-400 bg-stone-50 px-3 py-2 rounded-xl border border-stone-100 w-fit">
                  <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                  <span>Completed</span>
                </div>
              </div>

              {/* Lunch */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg border-2 border-primary transform scale-[1.05] relative z-10 transition-all duration-500 group">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-4 py-1 rounded-full font-bold shadow-lg tracking-widest uppercase">Ongoing</div>
                <div className="flex justify-between items-start mb-5 pt-2">
                  <p className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase">Lunch</p>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] rounded-full font-black animate-pulse">LIVE NOW</span>
                </div>
                <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">Dal, Chawal & Salad</h4>
                <p className="text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed font-medium capitalize">Fiber badhane ke liye salad ka ek bada bowl zaroor lein.</p>
                <div className="flex items-center text-sm font-black text-primary bg-primary/5 p-3 rounded-2xl border border-primary/20 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl mr-3">pending</span>
                  <span>TIME TO EAT</span>
                </div>
              </div>

              {/* Snack */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-secondary/10 opacity-70 hover:opacity-100 group">
                <div className="flex justify-between items-center mb-5">
                  <p className="text-secondary font-bold text-[10px] tracking-[0.2em] uppercase">Evening Snack</p>
                  <span className="material-symbols-outlined text-stone-300">schedule</span>
                </div>
                <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">Makhana & Green Tea</h4>
                <p className="text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed">Bhune hue makhane, halka namak aur kaali mirch ke saath.</p>
                <div className="mt-auto flex items-center text-xs font-bold text-stone-500 bg-stone-100/50 px-4 py-2 rounded-xl border border-stone-200/20 w-fit">
                  <span className="material-symbols-outlined text-sm mr-2">alarm</span>
                  <span>05:30 PM</span>
                </div>
              </div>

              {/* Dinner */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-secondary/10 opacity-70 hover:opacity-100 group">
                <div className="flex justify-between items-center mb-5">
                  <p className="text-secondary font-bold text-[10px] tracking-[0.2em] uppercase">Dinner</p>
                  <span className="material-symbols-outlined text-stone-300">schedule</span>
                </div>
                <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">2 Multigrain Roti</h4>
                <p className="text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed text-balance">Lauki ki sabzi aur thoda dahi. Sone se 2 ghante pehle khaein.</p>
                <div className="mt-auto flex items-center text-xs font-bold text-stone-500 bg-stone-100/50 px-4 py-2 rounded-xl border border-stone-200/20 w-fit">
                  <span className="material-symbols-outlined text-sm mr-2">alarm</span>
                  <span>08:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIDiet;

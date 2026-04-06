import React from 'react';
import MedicineCard from '../components/senior/MedicineCard';

const Home = () => {
  return (
    <div className="bg-background min-h-screen selection:bg-primary/20">
      {/* Main Content Area */}
      <div className="transition-all duration-300">
        
        {/* TopAppBar */}
        <header className="bg-[#f7f8f6]/80 backdrop-blur-xl w-full top-0 sticky z-40 flex justify-between items-center px-6 py-5 border-b border-outline-variant/10 md:border-none">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                alt="Kamla ji" 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9xF6TVOYIksioRqAq4DucBrIHB4f5Xc4CHLVjfGJ5caB14W50FOFdZWqozdlJhpjY0plsYA_cknqWqSaZgmLeqtU6yjlWgLqBkolxr65_BMAaGV3Fvt7LxZZDhE3hdFE6b0dBLhm58Dba940fqp5jkWDRBOOrt2xdXI-XAWIrwoGsZPK8XQmg1g7o0xK7nuS8NaV-0gafRdZIwvPJnusuwm2KgxaUILgwlUk5nBBoxMnQbNa2BZCZlkaufwDAx81KMt_wR2gzHBk"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-tertiary rounded-full border-2 border-background"></div>
            </div>
            <h1 className="font-headline text-2xl font-bold tracking-tight text-[#1f2933]">Namaskar, Kamla ji</h1>
          </div>
          <button className="bg-[#e63946] text-white rounded-full px-6 py-2 shadow-lg active:scale-95 transition-transform duration-150 font-bold text-lg hover:bg-error/90">
            SOS
          </button>
        </header>

        <main className="px-6 mt-4 space-y-8 max-w-7xl mx-auto pb-32 md:pb-12">
          {/* Hero Card */}
          <section className="relative overflow-hidden rounded-xl bg-[#EAF4EF] p-8 border border-primary/10 shadow-sm">
            <div className="relative z-10">
              <p className="text-[#1B4332]/70 text-lg font-semibold font-body">Aaj ka din kaisa hai?</p>
              <p className="text-[#1B4332] text-4xl font-extrabold mt-2 tracking-tight font-headline">Thoda rest kijiye.</p>
              <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-tertiary-container font-bold text-lg font-body">Sab badhiya hai 👍</span>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          </section>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MedicineCard 
              status="1/2 baki" 
              nextDose="2:00 PM" 
              medicineName="Metformin" 
              progress={50} 
            />

            {/* Health Logs: BP */}
            <div className="bg-white rounded-xl p-6 flex flex-col justify-between min-h-[180px] transition-all hover:shadow-md border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-on-surface-variant font-semibold tracking-wider text-xs uppercase font-body">HEALTH LOGS</span>
                  <h2 className="text-2xl font-bold mt-1 text-on-surface font-headline">BP 142/88</h2>
                </div>
                <div className="p-3 bg-secondary/10 rounded-2xl">
                  <span className="material-symbols-outlined text-secondary text-3xl">favorite</span>
                </div>
              </div>
              <div className="mt-4 bg-secondary/5 p-3 rounded-xl border border-secondary/20">
                <p className="text-on-surface font-semibold flex items-center gap-2 font-body">
                  <span className="material-symbols-outlined text-xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                  Thoda zyada hai
                </p>
              </div>
            </div>

            {/* Health Logs: Sugar */}
            <div className="bg-white rounded-xl p-6 flex flex-col justify-between min-h-[180px] transition-all hover:shadow-md border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-on-surface-variant font-semibold tracking-wider text-xs uppercase font-body">BLOOD SUGAR</span>
                  <h2 className="text-2xl font-bold mt-1 text-on-surface font-headline">165 mg/dL</h2>
                </div>
                <div className="p-3 bg-error/10 rounded-2xl">
                  <span className="material-symbols-outlined text-error text-3xl">bloodtype</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-on-surface-variant text-sm font-medium italic font-body">Update: 2 ghante pehle</p>
              </div>
            </div>

            {/* Sehat Alerts Card */}
            <div className="md:col-span-2 lg:col-span-3 bg-white rounded-xl p-6 transition-all hover:shadow-md border border-outline-variant/20 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-tertiary/10 rounded-2xl">
                    <span className="material-symbols-outlined text-tertiary text-3xl">medical_services</span>
                  </div>
                  <h2 className="text-2xl font-bold text-on-surface font-headline">Sehat Alerts</h2>
                </div>
                <span className="bg-error text-on-error text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 font-body">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                  2 Alerts
                </span>
              </div>
              
              <div className="space-y-4">
                {/* Warning Alert */}
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-surface-variant rounded-xl border border-outline-variant/10">
                  <div className="flex items-center gap-4 flex-1 w-full">
                    <div className="p-2 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg font-headline">Paani piyein ⚠️</p>
                      <p className="text-on-surface-variant font-medium font-body">Pichle 3 ghanto se paani nahi piya.</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto h-[72px] min-w-[140px] bg-tertiary text-white px-8 rounded-2xl font-extrabold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all text-xl hover:bg-tertiary/90 font-headline">
                    <span className="material-symbols-outlined">check_circle</span>
                    THIK HAI
                  </button>
                </div>

                {/* Critical Alert */}
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-surface-variant rounded-xl border border-outline-variant/10">
                  <div className="flex items-center gap-4 flex-1 w-full">
                    <div className="p-2 bg-error/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-error font-headline">Chalna baki hai ❗</p>
                      <p className="text-on-surface-variant font-medium font-body">Aaj 1000 steps baki hain.</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto h-[72px] min-w-[140px] bg-secondary text-white px-8 rounded-2xl font-extrabold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all text-xl hover:bg-secondary/90 font-headline">
                    <span className="material-symbols-outlined">directions_walk</span>
                    ABHI
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Diet Suggestion */}
          <section className="bg-surface-container rounded-xl p-8 relative overflow-hidden border border-outline-variant/30 shadow-sm">
            <div className="relative z-10 max-w-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-on-surface-variant text-xl">restaurant</span>
                <h3 className="text-on-surface-variant font-headline text-lg font-bold">AI Diet Suggestion</h3>
              </div>
              <p className="text-on-surface text-lg leading-relaxed font-body">
                "Kamla ji, aaj lunch mein <strong>Lauki ka Raaita</strong> aur ek choti Missi Roti lijiye. Yeh aapke BP ke liye acha hai."
              </p>
              <button className="mt-6 bg-white border-2 border-primary text-primary px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 font-headline">
                Recipe Dekhein
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none md:opacity-20 transition-opacity">
              <img 
                alt="Healthy food" 
                className="h-full w-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2OnFOTLHZddLSqwA2cdmJa1wQ_nOtYHsfyoneKmcjsVTwzKHY0T-ThcWwrMxoGsMkjUVMiUXRGTxafWJZ4UNIpib_NFakDGKRzJpTWiT-DY7BayfsHjPG8goZdk5RzzwtDkmfRUI8QXKr0KCW8nAHx7DzB01esBUlhRpNzC80nOOlzQybU0i2Aa_egjM9s2KldSYQ0zTt2CpG2sgTWdbP3vMf6DpSqz256J9IhEUYgOyTU9r7UugzQgtXyEwY22FX2E1UEfM-lpc"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;

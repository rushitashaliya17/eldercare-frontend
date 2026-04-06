import React from 'react';

const Sehat = () => {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      {/* Main Content Area */}
      <main className="flex-1 p-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <p className="text-xl text-secondary font-medium mb-1 drop-shadow-sm">Namaskar, Kamla ji</p>
          <h2 className="text-6xl font-headline font-extrabold text-on-surface tracking-tight leading-none mb-3">Sehat & Alerts</h2>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </header>

        {/* Top Grid (Urgent Alerts) */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6 px-1">
            <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
            <h3 className="text-sm font-bold text-outline uppercase tracking-[0.2em]">Active Alerts</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Alert Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border-l-8 border-tertiary flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-8">
                <div className="flex gap-6 items-center">
                  <div className="bg-tertiary-fixed p-4 rounded-2xl shadow-inner">
                    <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-headline font-bold text-on-surface mb-1">BP Elevated</h4>
                    <p className="text-lg text-outline font-medium">155/95 mmHg • Recorded 10m ago</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center gap-3 shadow-lg shadow-tertiary/20">
                  <span className="material-symbols-outlined">call</span>
                  Call Doctor
                </button>
                <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-2xl font-bold text-lg hover:bg-surface-variant transition-all border border-outline-variant/10">
                  Retake Reading
                </button>
              </div>
            </div>

            {/* Alert Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border-l-8 border-secondary flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-8">
                <div className="flex gap-6 items-center">
                  <div className="bg-secondary-fixed p-4 rounded-2xl shadow-inner">
                    <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medication</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-headline font-bold text-on-surface mb-1">Medicine Missed</h4>
                    <p className="text-lg text-outline font-medium">Metformin • Scheduled 8:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-secondary text-on-secondary px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center gap-3 shadow-lg shadow-secondary/20">
                  <span className="material-symbols-outlined">check_circle</span>
                  Mark Taken
                </button>
                <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-2xl font-bold text-lg hover:bg-surface-variant transition-all border border-outline-variant/10">
                  Log Symptoms
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Middle Section (AI Health Insight) */}
        <section className="mb-14">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-[3rem] p-12 relative overflow-hidden border border-primary/10 shadow-sm">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Smart Summary</span>
                </div>
                <h3 className="text-4xl font-headline font-bold text-on-surface mb-8 leading-tight">Your health is stable today, but you're a bit less active than last Tuesday.</h3>
                <p className="text-2xl text-on-surface-variant leading-relaxed max-w-3xl font-medium">
                  We noticed your sleep was exceptional last night <span className="text-primary font-bold">(8.5 hrs)</span>. This is a great time for a 15-minute gentle walk to keep your BP in check.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {/* Stats Card 1 */}
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/5 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-5">
                    <div className="bg-secondary/10 p-3 rounded-2xl">
                      <span className="material-symbols-outlined text-secondary text-3xl">steps</span>
                    </div>
                    <div>
                      <p className="text-sm text-outline font-bold uppercase tracking-wider">Today's Steps</p>
                      <p className="text-3xl font-headline font-black text-on-surface leading-tight">2,450</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-secondary-fixed border-t-secondary relative flex items-center justify-center">
                    <span className="text-[10px] font-black text-secondary">60%</span>
                  </div>
                </div>
                {/* Stats Card 2 */}
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/5 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-5">
                    <div className="bg-primary/10 p-3 rounded-2xl">
                      <span className="material-symbols-outlined text-primary text-3xl">bedtime</span>
                    </div>
                    <div>
                      <p className="text-sm text-outline font-bold uppercase tracking-wider">Sleep Quality</p>
                      <p className="text-3xl font-headline font-black text-on-surface leading-tight">8h 30m</p>
                    </div>
                  </div>
                  <span className="px-4 py-1 bg-primary/20 text-primary rounded-full font-black text-xs uppercase tracking-tighter shadow-sm border border-primary/10">Great</span>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-10 opacity-5">
              <span className="material-symbols-outlined text-[120px]">favorite</span>
            </div>
          </div>
        </section>

        {/* Bottom Grid (History & Trends) */}
        <section>
          <div className="flex items-baseline justify-between mb-10">
            <h3 className="text-4xl font-headline font-bold text-on-surface tracking-tight">Sehat History</h3>
            <button className="text-primary font-bold hover:underline flex items-center gap-2 group transition-all">
              View Full Report
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'wght' 700" }}>arrow_forward</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Trend Chart Placeholder */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-sm min-h-[450px] flex flex-col border border-outline-variant/10">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h4 className="text-2xl font-bold text-on-surface mb-1">Weekly Vitality Trend</h4>
                  <p className="text-sm text-outline font-medium">Activity vs Vitals correlation</p>
                </div>
                <div className="flex gap-6">
                  <span className="flex items-center gap-2 text-sm font-bold text-outline uppercase tracking-wider">
                    <span className="w-3 h-3 rounded-full bg-primary shadow-sm shadow-primary/20"></span> Activity
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-outline uppercase tracking-wider">
                    <span className="w-3 h-3 rounded-full bg-secondary shadow-sm shadow-secondary/20"></span> Vitals
                  </span>
                </div>
              </div>
              {/* Mock Bar Chart */}
              <div className="flex-1 flex items-end justify-around gap-6 pb-6 px-4">
                {[
                  { day: 'Mon', h: '60%', active: false },
                  { day: 'Tue', h: '85%', active: true },
                  { day: 'Wed', h: '40%', active: false },
                  { day: 'Thu', h: '70%', active: false },
                  { day: 'Fri', h: '95%', active: false },
                  { day: 'Sat', h: '50%', active: false },
                  { day: 'Sun', h: '65%', active: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-4 w-full group">
                    <div className="w-full bg-surface-container-high rounded-full overflow-hidden flex flex-col justify-end h-56 relative border border-outline-variant/5 shadow-inner">
                      <div 
                        className={`w-full transition-all duration-1000 ease-out group-hover:opacity-80 rounded-t-full ${item.active ? 'bg-primary' : 'bg-primary-container'}`} 
                        style={{ height: item.h }}
                      >
                        {item.active && <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-full"></div>}
                      </div>
                    </div>
                    <span className={`text-sm font-bold ${item.active ? 'text-primary' : 'text-outline'} uppercase tracking-tighter`}>{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Stats Grid */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              {/* Avg Heart Rate */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex-1 flex flex-col justify-center border border-outline-variant/10 hover:shadow-lg transition-all transform hover:-translate-x-1">
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-tertiary-fixed p-4 rounded-2xl shadow-inner scale-110">
                    <span className="material-symbols-outlined text-tertiary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </div>
                  <div>
                    <p className="text-outline font-bold text-sm uppercase tracking-[0.15em] mb-1">Avg. Heart Rate</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-headline font-black text-on-surface">72</span>
                      <span className="text-xl text-outline font-bold">BPM</span>
                    </div>
                  </div>
                </div>
                <div className="bg-tertiary-fixed-dim/20 h-2 rounded-full w-full overflow-hidden">
                  <div className="bg-tertiary h-full rounded-full w-[70%] transition-all duration-1000 shadow-sm border-r-2 border-white/20"></div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <p className="text-sm text-tertiary font-bold tracking-tight uppercase">Within healthy range</p>
                </div>
              </div>

              {/* Avg BP (7d) */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex-1 flex flex-col justify-center border border-outline-variant/10 hover:shadow-lg transition-all transform hover:-translate-x-1">
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-primary-fixed p-4 rounded-2xl shadow-inner scale-110">
                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>blood_pressure</span>
                  </div>
                  <div>
                    <p className="text-outline font-bold text-sm uppercase tracking-[0.15em] mb-1">Avg. BP (7d)</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-headline font-black text-on-surface">128/82</span>
                      <span className="text-xl text-outline font-bold">mmHg</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-fixed-dim/30 h-2 rounded-full w-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-[85%] transition-all duration-1000 shadow-sm border-r-2 border-white/20"></div>
                </div>
                <div className="flex items-center gap-2 mt-6 text-primary">
                  <span className="material-symbols-outlined text-sm font-black">trending_down</span>
                  <p className="text-sm font-bold tracking-tight uppercase">12% lower than last week</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Background visual refinement */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-gradient-to-l from-primary/5 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
};

export default Sehat;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CaregiverDash = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      {/* SideNavBar Component */}
      <aside className="fixed left-0 top-0 h-screen w-[240px] flex flex-col py-8 px-4 bg-[#f9faf8] dark:bg-stone-950 border-r border-surface-container z-50">
        <div className="mb-10 px-4">
          <h1 className="text-2xl font-headline font-bold tracking-tight text-[#0f5238] dark:text-[#4ade80]">The Serene Guardian</h1>
          <p className="text-stone-500 text-[10px] mt-1 font-bold uppercase tracking-[0.2em] opacity-70">Caregiver Dashboard</p>
        </div>
        <nav className="flex-1 space-y-1">
          {/* Home (Active) */}
          <Link to="/home" className="flex items-center gap-4 px-4 py-3 text-[#0f5238] dark:text-[#4ade80] font-bold border-r-4 border-[#0f5238] dark:border-[#4ade80] bg-primary/5 transition-all duration-200 rounded-l-xl">
            <span className="material-symbols-outlined">home</span>
            <span className="font-headline text-sm font-bold">Home</span>
          </Link>
          {/* Dawai */}
          <Link to="/dawai" className="flex items-center gap-4 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#0f5238] hover:bg-[#f3f4f2] dark:hover:bg-stone-800 transition-all duration-200 rounded-xl">
            <span className="material-symbols-outlined">pill</span>
            <span className="font-headline text-sm font-bold">Dawai</span>
          </Link>
          {/* Log */}
          <Link to="/log" className="flex items-center gap-4 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#0f5238] hover:bg-[#f3f4f2] dark:hover:bg-stone-800 transition-all duration-200 rounded-xl">
            <span className="material-symbols-outlined">history_edu</span>
            <span className="font-headline text-sm font-bold">Log</span>
          </Link>
          {/* AI Diet */}
          <Link to="/ai-diet" className="flex items-center gap-4 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#0f5238] hover:bg-[#f3f4f2] dark:hover:bg-stone-800 transition-all duration-200 rounded-xl">
            <span className="material-symbols-outlined">nutrition</span>
            <span className="font-headline text-sm font-bold">AI Diet</span>
          </Link>
          {/* Sehat */}
          <Link to="/sehat" className="flex items-center gap-4 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#0f5238] hover:bg-[#f3f4f2] dark:hover:bg-stone-800 transition-all duration-200 rounded-xl">
            <span className="material-symbols-outlined">monitor_heart</span>
            <span className="font-headline text-sm font-bold">Sehat</span>
          </Link>
        </nav>
        
        <div className="mt-auto px-2 space-y-6">
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4 bg-primary text-on-primary rounded-full font-bold scale-95 active:scale-90 transition-all hover:bg-primary/90 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-sm">cached</span>
            Switch to Senior Mode
          </button>
          
          <div className="flex items-center gap-3 px-2 py-3 bg-white/50 rounded-2xl border border-outline-variant/10">
            <img 
              alt="Caregiver profile" 
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8TUopn3WuUby_M9dX6pS-kHeVR_OHFXNdLkXQ1hx1UThtZc_-FB4WLAsyRrHibcoQ-DfWIi5_FH-mIs0UvZTzlbBQXWh1vnXVcittjmxPixlbraXJTCi6do44-jp51xg3g9ClcLaiEowFVJ7U23sCPT6N4o4klUZUjDVj4IYcYCjezCN-dgi1-R_8XcYGhZgfs2vVEplJsEEqc6fQdGnt0RRuVJFFaB7Q7F5tqQXOGML5sutifkZuaMORBEnVqbYC8a83VLkrHKc" 
            />
            <div>
              <p className="text-sm font-bold text-on-surface leading-tight">Elena Guardian</p>
              <p className="text-[10px] text-stone-500 font-bold uppercase tracking-tighter">Caregiver Mode</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar Component */}
      <header className="fixed top-0 right-0 w-[calc(100%-240px)] z-40 bg-[#f9faf8]/90 dark:bg-stone-950/90 backdrop-blur-md flex justify-between items-center h-20 px-12 border-b border-surface-container">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Kamla Devi</span>
            <div className="flex items-center gap-3 mt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-yellow-100 text-yellow-800 border border-yellow-200">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                🟡 Needs Attention
              </span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/10">Meds: 2/3 Taken</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block group">
            <input 
              className="bg-surface-container-high border border-outline-variant/10 rounded-full px-6 py-2.5 w-80 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner outline-none" 
              placeholder="Search patient logs..." 
              type="text" 
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors">search</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2.5 hover:bg-stone-200 rounded-xl transition-all relative border border-transparent hover:border-stone-300">
              <span className="material-symbols-outlined text-stone-700">notifications</span>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error border-2 border-[#f9faf8] rounded-full"></span>
            </button>
            <button className="p-2.5 hover:bg-stone-200 rounded-xl transition-all border border-transparent hover:border-stone-300">
              <span className="material-symbols-outlined text-stone-700">settings</span>
            </button>
            <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-white shadow-md ml-2 transform hover:scale-105 transition-transform cursor-pointer">
              <img 
                alt="User profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZv_7bMX9NTVdv23ol654kvCuIKPpHpJ6_E75hIqV3Br3Jt3Upr0opqpeW7UrQRlp5ZpjfkXxn2wZO-ktAO0xrcAZnen5Wn2p7yHrXbUztkI2PmYnU704hy6rNUi3NV9aqlM61PuddNIqv2wDu6SernY3WZ9GME8NyPJhEQpQOTEo37NVIzNA71TYaZgQyspSO4jsPypLvFf6EhKjU1j5gclKl_kh7J42NflI6PTMo1MrR4A6xW8OMwwV-CctcxvXbndgBICW9ceo" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-[240px] pt-28 px-12 pb-16 w-full max-w-7xl mx-auto">
        {/* Quick Action Panel */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button className="group flex items-center justify-center gap-4 bg-primary text-on-primary py-5 px-8 rounded-3xl font-headline font-black text-lg transition-all hover:brightness-110 shadow-xl shadow-primary/20 active:scale-[0.98]">
              <span className="material-symbols-outlined text-2xl group-hover:animate-bounce">call</span>
              Call Kamla Devi
            </button>
            <button className="group flex items-center justify-center gap-4 bg-secondary text-white py-5 px-8 rounded-3xl font-headline font-black text-lg transition-all hover:brightness-110 shadow-xl shadow-secondary/20 active:scale-[0.98]">
              <span className="material-symbols-outlined text-2xl group-hover:scale-125 transition-transform">notification_important</span>
              Send Med Reminder
            </button>
            <button className="group flex items-center justify-center gap-4 bg-surface-container-highest text-on-surface py-5 px-8 rounded-3xl font-headline font-black text-lg border-2 border-outline-variant/30 transition-all hover:bg-white hover:border-primary/20 shadow-lg active:scale-[0.98]">
              <span className="material-symbols-outlined text-2xl group-hover:-rotate-12 transition-transform">edit_note</span>
              Log Data
            </button>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-10">
          {/* LEFT COLUMN: Insights & Logs */}
          <div className="col-span-12 lg:col-span-7 space-y-10">
            {/* Weekly Adherence Chart */}
            <section className="bg-surface-container-lowest rounded-[32px] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-outline-variant/10">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight">Weekly Adherence</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-4xl font-headline font-black text-primary">85%</span>
                    <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-tighter">
                      ↑ 5% <span className="font-medium opacity-70 ml-1">vs last week</span>
                    </span>
                  </div>
                </div>
                <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.15em] text-stone-400">
                  <span className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-md bg-primary shadow-sm shadow-primary/20"></span> Taken
                  </span>
                  <span className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-md bg-tertiary shadow-sm shadow-tertiary/20"></span> Missed
                  </span>
                </div>
              </div>
              
              <div className="h-56 flex items-end justify-between gap-4 px-2">
                {[
                  { label: 'MON', status: [100, 0], val: '3/3' },
                  { label: 'TUE', status: [66, 34], val: '2/3' },
                  { label: 'WED', status: [100, 0], val: '3/3' },
                  { label: 'THU', status: [100, 0], val: '3/3' },
                  { label: 'FRI', status: [66, 34], val: '2/3' },
                  { label: 'SAT', status: [100, 0], val: '3/3' },
                  { label: 'SUN', status: [66, 0], val: '2/3', active: true },
                ].map((day, i) => (
                  <div key={day.label} className="flex flex-col items-center flex-1 h-full">
                    <div className={`w-full flex flex-col-reverse h-full bg-surface-container/50 rounded-t-2xl overflow-hidden group relative transition-all duration-300 hover:bg-surface-container ${day.active ? 'ring-4 ring-primary/20 ring-offset-4 ring-offset-white' : ''}`}>
                      <div className="bg-primary transition-all duration-700 ease-out" style={{ height: `${day.status[0]}%` }}></div>
                      {day.status[1] > 0 && <div className="bg-tertiary transition-all duration-700 ease-out" style={{ height: `${day.status[1]}%` }}></div>}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-stone-900 text-white text-[10px] font-black py-2 px-3 rounded-xl shadow-xl z-10 whitespace-nowrap">
                        {day.val}
                      </div>
                    </div>
                    <span className={`text-[10px] font-black mt-4 tracking-widest ${day.active ? 'text-primary' : 'text-stone-400'}`}>{day.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Medicine Logs Timeline */}
            <section className="bg-surface-container-lowest rounded-[32px] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-outline-variant/10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight">Recent Medicine Logs</h3>
                <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full">History</button>
              </div>
              <div className="space-y-8">
                {[
                  { name: 'Metformin 500mg', time: '08:30 AM', status: 'taken', desc: 'Confirmed taken by patient. No side effects reported.' },
                  { name: 'Atorvastatin 10mg', time: '09:15 AM', status: 'taken', desc: 'Confirmed taken by smart dispenser.' },
                  { name: 'Multivitamin', time: '02:00 PM', status: 'pending', desc: 'Scheduled for 02:00 PM. Notification sent to phone.' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-6 pb-8 ${i !== 2 ? 'border-b border-surface-container-high' : ''}`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${item.status === 'taken' ? 'bg-primary-fixed/50 text-primary' : 'bg-secondary-fixed/50 text-secondary'}`}>
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {item.status === 'taken' ? 'check_circle' : 'schedule'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1.5">
                        <h4 className="font-headline font-black text-lg text-on-surface">{item.name}</h4>
                        <span className={`text-sm font-black ${item.status === 'taken' ? 'text-stone-400' : 'text-secondary'}`}>{item.time}</span>
                      </div>
                      <p className="text-sm text-stone-500 font-medium leading-relaxed max-w-md">{item.desc}</p>
                      {item.status === 'pending' && (
                        <div className="mt-5 flex gap-3">
                          <button className="px-5 py-2.5 bg-secondary text-white text-[11px] font-black rounded-xl shadow-md shadow-secondary/20 hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest">Remind Again</button>
                          <button className="px-5 py-2.5 bg-white text-stone-600 text-[11px] font-black rounded-xl border border-outline-variant hover:bg-stone-50 active:scale-95 transition-all uppercase tracking-widest">Mark as Taken</button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Alerts & Vitals */}
          <div className="col-span-12 lg:col-span-5 space-y-10">
            {/* Alerts Panel */}
            <section className="bg-surface-container-lowest rounded-[32px] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-outline-variant/10">
              <h3 className="font-headline text-2xl font-black text-on-surface mb-8 tracking-tight">Security & Alerts</h3>
              <div className="space-y-5">
                {[
                  { type: 'critical', title: 'Critical: BP High', desc: 'Measured 155/98 mmHg. Immediate attention required.', time: '10:45 AM', icon: 'emergency' },
                  { type: 'warning', title: 'Warning: High Temp', desc: 'Living room at 28°C. Recommend cooling.', time: '11:20 AM', icon: 'device_thermostat' },
                  { type: 'system', title: 'System: Main Door', desc: 'Locked and secure for the night.', time: '07:00 AM', icon: 'home_check' },
                ].map((alert, i) => (
                  <div key={i} className={`p-6 rounded-2xl flex items-start gap-5 border transition-all duration-300 hover:scale-[1.02] ${
                    alert.type === 'critical' ? 'bg-red-50 border-red-100' : 
                    alert.type === 'warning' ? 'bg-amber-50 border-amber-100' : 'bg-green-50 border-green-100'
                  }`}>
                    <div className={`p-2.5 rounded-full shrink-0 shadow-lg ${
                      alert.type === 'critical' ? 'bg-red-600' : 
                      alert.type === 'warning' ? 'bg-amber-500' : 'bg-green-600'
                    }`}>
                      <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{alert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <p className={`text-sm font-black ${alert.type === 'critical' ? 'text-red-900' : alert.type === 'warning' ? 'text-amber-900' : 'text-green-900'}`}>{alert.title}</p>
                        <span className={`text-[10px] font-black uppercase tracking-tighter opacity-60 ${alert.type === 'critical' ? 'text-red-700' : alert.type === 'warning' ? 'text-amber-700' : 'text-green-700'}`}>{alert.time}</span>
                      </div>
                      <p className={`text-xs font-medium leading-relaxed mb-4 ${alert.type === 'critical' ? 'text-red-700' : alert.type === 'warning' ? 'text-amber-700' : 'text-green-700'}`}>{alert.desc}</p>
                      <div className="flex gap-2">
                        {alert.type === 'critical' ? (
                          <>
                            <button className="flex-1 bg-red-600 text-white py-2 rounded-xl text-[10px] font-black hover:bg-red-700 shadow-md shadow-red-200 transition-all uppercase tracking-widest">Call Now</button>
                            <button className="px-5 py-2 bg-white border border-red-200 text-red-600 rounded-xl text-[10px] font-black hover:bg-red-50 transition-all uppercase tracking-widest">Review</button>
                          </>
                        ) : (
                          <button className={`w-full py-2 rounded-xl text-[10px] font-black transition-all border uppercase tracking-widest ${
                            alert.type === 'warning' ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-green-700 border-green-200 hover:bg-green-100'
                          }`}>
                            {alert.type === 'warning' ? 'Take Action' : 'Mark Resolved'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Latest Health Readings */}
            <section className="bg-surface-container-lowest rounded-[32px] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-outline-variant/10">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight">Vital Vitals</h3>
                <span className="animate-pulse bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.15em] border border-emerald-100">Live Sync</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-6 rounded-2xl text-center border border-surface-container-high/50 hover:shadow-lg transition-all duration-300">
                  <span className="material-symbols-outlined text-primary mb-3 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <p className="text-3xl font-headline font-black text-on-surface">72 <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">bpm</span></p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[9px] font-black uppercase tracking-widest">Normal</span>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl text-center border border-surface-container-high/50 hover:shadow-lg transition-all duration-300">
                  <span className="material-symbols-outlined text-primary mb-3 text-3xl">air</span>
                  <p className="text-3xl font-headline font-black text-on-surface">98 <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">%</span></p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[9px] font-black uppercase tracking-widest">Optimal</span>
                </div>
                <div className="bg-red-50 p-8 rounded-2xl text-center border border-red-100 col-span-2 group relative overflow-hidden">
                  <div className="flex items-center justify-between relative z-10">
                    <div className="text-left">
                      <span className="material-symbols-outlined text-red-600 mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                      <p className="text-4xl font-headline font-black text-on-surface">155/98 <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">mmHg</span></p>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-red-600 text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-200">Stage 2 High</span>
                    </div>
                    <button className="px-6 py-3 bg-white text-red-600 border-2 border-red-100 rounded-xl text-[10px] font-black shadow-xl hover:bg-red-50 active:scale-95 transition-all uppercase tracking-widest">Check Daily Trend</button>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full -translate-y-12 translate-x-12 blur-3xl group-hover:bg-red-200/50 transition-colors"></div>
                </div>
              </div>
            </section>
          </div>

          {/* BOTTOM SECTION: AI Insights */}
          <div className="col-span-12">
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-white rounded-[40px] p-12 flex flex-col xl:flex-row items-center gap-12 shadow-[0_20px_50px_-20px_rgba(15,82,56,0.1)] relative overflow-hidden group">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-2xl ring-8 ring-white transform group-hover:scale-110 transition-transform duration-500 z-10">
                <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div className="flex-1 z-10 text-center xl:text-left">
                <h3 className="font-headline text-3xl font-black text-primary mb-6 flex items-center justify-center xl:justify-start gap-4">
                  AI Wellness Insights
                  <span className="px-3 py-1 bg-white/50 text-xs rounded-full border border-primary/20 font-bold uppercase tracking-widest text-primary/80">Pro Edition</span>
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                  {[
                    { text: 'Morning activity increased by 12% over last week.', type: 'positive' },
                    { text: 'BP rising consistently during evening measurements ⚠️', type: 'warning' },
                    { text: 'Recommendation: Reduce salt intake during dinner and ensure hydration.', type: 'action', full: true },
                  ].map((insight, i) => (
                    <li key={i} className={`flex items-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary/5 font-headline font-bold text-lg text-on-surface transform hover:translate-x-2 transition-transform duration-300 ${insight.full ? 'md:col-span-2 text-primary' : ''}`}>
                      <span className={`w-3 h-3 rounded-full shrink-0 ${insight.type === 'positive' ? 'bg-primary' : insight.type === 'warning' ? 'bg-red-500 animate-pulse' : 'bg-secondary'}`}></span>
                      {insight.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 text-right z-10 scale-90 md:scale-100">
                <div className="inline-flex flex-col items-end gap-3 px-8 py-5 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-primary/10">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(15,82,56,0.5)]"></span>
                    <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Live Connection</span>
                  </div>
                  <p className="text-xl font-headline font-black text-primary">Status: Secure</p>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-tighter mt-1">Sync: 12:45:01 PM</p>
                </div>
              </div>
              
              {/* Background Accents */}
              <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute bottom-[-50%] left-[-10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaregiverDash;

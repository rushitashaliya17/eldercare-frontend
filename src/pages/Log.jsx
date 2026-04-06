import React from 'react';

const Log = () => {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center py-12 px-8">
        <div className="w-full max-w-[1000px] flex flex-col gap-10">
          
          {/* TopAppBar Header */}
          <header className="flex justify-between items-end w-full">
            <div>
              <h2 className="text-primary font-headline text-4xl font-extrabold tracking-tight">Namaskar, Kamla ji</h2>
              <p className="text-on-surface-variant text-xl font-medium mt-1">Weekly History & Logs</p>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center cursor-pointer active:scale-95 hover:bg-surface-container-highest transition-all duration-200">
                <span className="material-symbols-outlined text-primary">notifications</span>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-fixed cursor-pointer active:scale-95 transition-all duration-200 ring-2 ring-primary/20">
                <img 
                  alt="Senior User Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq3JrGsIcAUBCdFzk2MP_2gTMTjXTpcB1FQ-zTN9Nw-2IggiVQbCztO-Bp4IjTrSk-sWkHx89CvTwTUjvoJYtODIBwxBHocv3egJjBRD40L200pevlfkPaO-cNXsfSEYbRd-WAmxMmN13nFSWdlfa-TKdHEI7YkdTPKf4LllXrATKO4sWBplg-dDTY5_TjPz2pTXTSfm4O-oc3YF_7STiFaFtSPIcRu-P_7A2EIWB5sUPJbbYbNvmO-9ipTNqcmog1zvtYyibMPKo"
                />
              </div>
            </div>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Weekly Adherence Card - Spans 2 cols on large */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/5">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold font-headline text-on-surface">Weekly Adherence</h3>
                <span className="text-primary font-bold text-sm bg-primary-fixed/30 px-4 py-1.5 rounded-full">
                  92% Compliance
                </span>
              </div>
              
              <div className="flex justify-between items-center gap-2">
                <DayCircle day="Mon" date="12 Jun" status="done" />
                <DayCircle day="Tue" date="13 Jun" status="done" />
                <DayCircle day="Wed" date="14 Jun" status="missed" />
                <DayCircle day="Thu" date="15 Jun" status="done" />
                <DayCircle day="Fri" date="16 Jun" status="done" />
                <DayCircle day="Sat" date="17 Jun" status="today" />
                <DayCircle day="Sun" date="18 Jun" status="future" />
              </div>
            </div>

            {/* AI Insight Section - Fixed inside grid for better balance */}
            <div className="bg-primary/5 rounded-3xl border-l-[12px] border-primary p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-fixed p-3 rounded-2xl shadow-inner">
                    <span className="material-symbols-outlined text-on-primary-fixed">auto_awesome</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">AI Wellness Insight</h3>
                </div>
                <p className="text-on-surface font-medium leading-relaxed text-lg mb-4">
                  You missed your <span className="text-primary font-bold">Metformin dose at 2:00 PM</span>. This explains the slightly elevated blood sugar reading.
                </p>
                <div className="space-y-3">
                  <InsightItem text="Take dose now (30 min late is okay)" />
                  <InsightItem text="Drink a glass of warm water" />
                  <InsightItem text="Rest for 15 minutes after" />
                </div>
              </div>
            </div>
          </section>

          {/* Today's Health Logs Row */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BP Card */}
            <HealthCard 
              label="Blood Pressure" 
              value="142/88" 
              status="High" 
              icon="monitor_heart" 
              color="error" 
              bg="bg-error-container/50"
              iconColor="text-error"
            />
            {/* Sugar Card */}
            <HealthCard 
              label="Blood Sugar" 
              value="165" 
              unit="mg/dL" 
              icon="water_drop" 
              color="secondary" 
              bg="bg-secondary-fixed/50"
              iconColor="text-secondary"
            />
          </section>

          {/* Past Logs Table/List */}
          <section className="pb-12 text-on-surface">
            <h3 className="text-2xl font-bold font-headline mb-6">Pichle Logs (Past Logs)</h3>
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-10 py-6 text-on-surface-variant font-bold text-sm uppercase tracking-widest">Name</th>
                    <th className="px-10 py-6 text-on-surface-variant font-bold text-sm uppercase tracking-widest">Time</th>
                    <th className="px-10 py-6 text-on-surface-variant font-bold text-sm uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <LogRow name="Metformin 500mg" time="Today, 2:00 PM" status="Missed" />
                  <LogRow name="Atorvastatin" time="Today, 8:00 AM" status="Taken" />
                  <LogRow name="Multivitamin" time="Yesterday, 9:00 PM" status="Taken" />
                  <LogRow name="Ramipril 5mg" time="Yesterday, 8:00 AM" status="Taken" />
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>

      {/* Global Floating Action Button */}
      <button className="fixed bottom-12 right-12 w-20 h-20 bg-primary-container text-white rounded-full shadow-2xl flex items-center justify-center transition-all active:scale-90 hover:scale-110 z-50 group">
        <span className="material-symbols-outlined text-4xl group-hover:rotate-90 transition-transform duration-300">add</span>
      </button>
    </div>
  );
};

// Sub-components for cleaner code
const DayCircle = ({ day, date, status }) => {
  const baseClasses = "flex-1 flex flex-col items-center gap-3 transition-all duration-300";
  const circleBase = "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm";
  
  let content;
  if (status === "done") {
    content = <div className={`${circleBase} bg-primary text-white scale-100 italic`}><span className="material-symbols-outlined text-sm">check</span></div>;
  } else if (status === "missed") {
    content = <div className={`${circleBase} bg-tertiary-container text-white`}><span className="material-symbols-outlined text-sm">close</span></div>;
  } else if (status === "today") {
    content = <div className={`${circleBase} border-4 border-primary text-primary font-black animate-pulse`}>Today</div>;
  } else if (status === "future") {
    content = <div className={`${circleBase} bg-surface-container-high opacity-40`}></div>;
  }

  return (
    <div className={`${baseClasses} ${status === 'future' ? 'opacity-40' : ''}`}>
      <span className="text-on-surface-variant font-semibold text-sm">{day}</span>
      {content}
      <span className="text-xs font-bold text-on-surface-variant">{date}</span>
    </div>
  );
};

const HealthCard = ({ label, value, unit, status, icon, bg, iconColor }) => (
  <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 flex items-center gap-8 hover:shadow-md transition-all duration-300 group">
    <div className={`w-20 h-20 rounded-3xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
      <span className={`material-symbols-outlined ${iconColor} text-4xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
    </div>
    <div>
      <p className="text-on-surface-variant font-bold uppercase tracking-widest text-xs mb-1">{label}</p>
      <h4 className="text-4xl font-black text-on-surface">
        {value} {unit && <span className="text-xl font-medium text-on-surface-variant">{unit}</span>}
        {status && <span className="ml-3 text-lg font-bold text-tertiary">{status}</span>}
      </h4>
    </div>
  </div>
);

const LogRow = ({ name, time, status }) => (
  <tr className="hover:bg-surface-bright transition-colors group cursor-pointer">
    <td className="px-10 py-8">
      <div className="flex items-center gap-5">
        <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary transition-colors">
          <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">pill</span>
        </div>
        <span className="font-bold text-on-surface text-lg">{name}</span>
      </div>
    </td>
    <td className="px-10 py-8 text-on-surface-variant font-semibold">{time}</td>
    <td className="px-10 py-8">
      <div className={`flex items-center gap-2 font-black ${status === 'Missed' ? 'text-tertiary' : 'text-primary'}`}>
        <span className="material-symbols-outlined text-xl">
          {status === 'Missed' ? 'error' : 'check_circle'}
        </span>
        <span className="uppercase tracking-wider text-sm">{status}</span>
      </div>
    </td>
  </tr>
);

const InsightItem = ({ text }) => (
  <li className="flex items-center gap-4 text-on-surface-variant">
    <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
    <span className="font-medium">{text}</span>
  </li>
);

export default Log;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'Home', icon: 'home', to: '/home' },
    { label: 'Dawai', icon: 'medication', to: '/dawai' },
    { label: 'Log', icon: 'edit_note', to: '/log' },
    { label: 'AI Diet', icon: 'restaurant', to: '/ai-diet' },
    { label: 'Sehat', icon: 'favorite', to: '/sehat' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-white border-r border-outline-variant/20 z-50 p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">health_metrics</span>
          </div>
          <span className="font-headline font-bold text-xl text-primary tracking-tight">CareSync</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]' 
                  : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'
              }`}
            >
              {({ isActive }) => (
                <>
                  <span 
                    className="material-symbols-outlined text-2xl"
                    style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {item.icon}
                  </span>
                  <span className="font-bold tracking-wide">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
          
          {/* SOS Emergency Link */}
          <NavLink
            to="/sos"
            className={({ isActive }) => `mt-6 flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 border-2 ${
              isActive 
                ? 'bg-sos-red text-white border-sos-red shadow-xl shadow-red-500/20 scale-[1.02]' 
                : 'text-sos-red border-sos-red/10 hover:bg-sos-red/5'
            }`}
          >
            {({ isActive }) => (
              <>
                <span 
                  className={`material-symbols-outlined text-2xl ${isActive ? '' : 'animate-pulse'}`}
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  emergency
                </span>
                <span className="font-black tracking-[0.1em] uppercase text-sm">SOS Help</span>
              </>
            )}
          </NavLink>
        </nav>

        <div className="mt-auto border-t border-outline-variant/10 pt-6">
          <NavLink to="/" className="flex items-center gap-4 px-4 py-3 text-error hover:bg-error/5 w-full rounded-xl transition-all font-bold group">
            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">logout</span>
            Logout
          </NavLink>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 bg-white/95 backdrop-blur-2xl z-50 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => `flex flex-col items-center justify-center transition-all duration-300 ease-out ${
              isActive 
                ? 'bg-primary text-white rounded-2xl px-6 py-3 shadow-lg shadow-primary/20 -translate-y-2' 
                : 'text-on-surface-variant p-2 hover:text-primary'
            }`}
          >
            {({ isActive }) => (
              <>
                <span 
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                {isActive && (
                  <span className="font-body text-[10px] font-extrabold uppercase tracking-widest mt-1">
                    {item.label}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
        {/* Mobile SOS */}
        <NavLink
          to="/sos"
          className={({ isActive }) => `flex flex-col items-center justify-center transition-all duration-300 ease-out ${
            isActive 
              ? 'bg-sos-red text-white rounded-2xl px-6 py-3 shadow-lg shadow-red-500/20 -translate-y-2' 
              : 'text-sos-red p-2 hover:bg-sos-red/5 rounded-full'
          }`}
        >
          {({ isActive }) => (
            <>
              <span 
                className={`material-symbols-outlined text-2xl ${isActive ? '' : 'animate-pulse'}`}
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                emergency
              </span>
              {isActive && (
                <span className="font-body text-[10px] font-extrabold uppercase tracking-widest mt-1">
                  SOS
                </span>
              )}
            </>
          )}
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

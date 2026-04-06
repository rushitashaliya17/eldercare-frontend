import React from 'react';

const MedicineCard = ({ status, nextDose, medicineName, progress }) => {
  return (
    <div className="bg-white rounded-2xl p-7 flex flex-col justify-between min-h-[220px] transition-all hover:shadow-lg border-2 border-primary/10 shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-on-surface-variant font-bold tracking-wider text-xs uppercase">DAWAI STATUS</span>
          <h2 className="text-3xl font-extrabold mt-1 text-primary">{status}</h2>
        </div>
        <div className="p-4 bg-primary/10 rounded-2xl">
          <span className="material-symbols-outlined text-primary text-4xl">medication</span>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-on-surface-variant font-medium text-base mt-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">schedule</span>
          Agli dawai: {nextDose} ({medicineName})
        </p>
      </div>
    </div>
  );
};

export default MedicineCard;

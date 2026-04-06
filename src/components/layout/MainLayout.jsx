import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="md:ml-64 pb-24 md:pb-0 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

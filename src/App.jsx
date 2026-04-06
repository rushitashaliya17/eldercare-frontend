import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Pages
import ModeSelection from './pages/ModeSelection';
import Home from './pages/Home';
import Dawai from './pages/Dawai';
import Log from './pages/Log';
import AIDiet from './pages/AIDiet';
import Sehat from './pages/Sehat';
import SOS from './pages/SOS';
import CaregiverDash from './pages/CaregiverDash';

function App() {
  return (
    <Router>
      <Routes>
        {/* Entry Point */}
        <Route path="/" element={<ModeSelection />} />
        
        {/* Caregiver Flow */}
        <Route path="/caregiver" element={<CaregiverDash />} />
        
        {/* Senior Flow (with Layout) */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dawai" element={<Dawai />} />
          <Route path="/log" element={<Log />} />
          <Route path="/ai-diet" element={<AIDiet />} />
          <Route path="/sehat" element={<Sehat />} />
          <Route path="/sos" element={<SOS />} />
        </Route>

        {/* Catch all - redirect to selection */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

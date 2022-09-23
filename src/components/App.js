import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FinancePage from '../pages/FinancePage';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <div className="max-w-[600px] min-h-screen bg-gray-100 m-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/finance" element={<FinancePage />} />
      </Routes>  
    </div>
  );
}

export default App;

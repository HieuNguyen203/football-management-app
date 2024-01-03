// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import RankingBoard from '../components/RankingBoard';
import RulePage from '../pages/home/RulePage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingBoard />} />
      <Route path="/rules" element={<RulePage />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default MainRoutes;

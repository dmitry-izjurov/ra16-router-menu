import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu'; 
import HomePage from './homePage';
import DriftPage from './driftPage';
import ForzaPage from './forzaPage';
import TimeAttackPage from './timeAttackPage';

function MenuTask() {
  return (
    <div className="page">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MenuTask;
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import MapPage from './pages/MapPage/MapPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/map" element={<MapPage/>} />
    </Routes>
  );
}

export default App;

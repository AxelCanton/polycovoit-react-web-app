import { useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import axiosInstance from './config/axios.config';
import AskedReservationsPage from './pages/AskedReservationsPage/AskedReservationsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MapPage from './pages/MapPage/MapPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/map" element={<MapPage/>} />
      <Route path="/asked-reservations" element={<AskedReservationsPage/>}/>
    </Routes>
  );
}

export default App;

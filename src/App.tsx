import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import AuthVerifComponent from './components/AuthVerifComponent/AuthVerifComponent';
import { useEffect } from 'react';
import axiosInstance from './config/axios.config';
import AskedReservationsPage from './pages/AskedReservationsPage/AskedReservationsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MapPage from './pages/MapPage/MapPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import WaitingReservationsPage from './pages/WaitingReservationsPage/WaitingReservationsPage';

function App() {

  const renderElement = (element: React.ReactNode) => <AuthVerifComponent>{element}</AuthVerifComponent>
  
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/map" element={<MapPage/>} />
      <Route path="/asked-reservations" element={<AskedReservationsPage/>}/>
      <Route path="/waiting-reservations" element={<WaitingReservationsPage/>}/>
      <Route path="/map" element={renderElement(<MapPage/>)} />
      <Route path="/settings" element={renderElement(<SettingsPage/>)} />
    </Routes>
  );
}

export default App;

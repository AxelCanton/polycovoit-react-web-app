import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import AuthVerifComponent from './components/AuthVerifComponent/AuthVerifComponent';
import LoginPage from './pages/LoginPage/LoginPage';
import MapPage from './pages/MapPage/MapPage';

function App() {

  const renderElement = (element: React.ReactNode) => <AuthVerifComponent>{element}</AuthVerifComponent>
  
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/map" element={renderElement(<MapPage/>)} />
    </Routes>
  );
}

export default App;

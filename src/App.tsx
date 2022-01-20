import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import AuthVerifComponent from './components/AuthVerifComponent/AuthVerifComponent';
import { useEffect } from 'react';
import axiosInstance from './config/axios.config';
import AskedReservationsPage from './pages/AskedReservationsPage/AskedReservationsPage';
import WaitingReservationsPage from './pages/WaitingReservationsPage/WaitingReservationsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MapPage from './pages/MapPage/MapPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import jwt_decode from "jwt-decode";
import { IDecodedRefreshToken, IDecodedToken } from './interfaces/user.interface';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { loginActions } from './slices/LoginSlice';
import { refreshThunk } from './thunks/LoginThunk';
import { notificationActions } from './slices/NotificationSlice';
import { useSnackbar } from 'notistack';
import MuiAppBar from './components/AppBar/AppBar';
import NotFound from './components/NotFound/NotFound';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';


export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const [isAppReady, setIsAppReady] = useState(false);

  const dispatch = useAppDispatch();
  
  const { message, severity } = useAppSelector((state) => state.notificationReducer);

  const renderElement = (element: React.ReactNode) => <AuthVerifComponent>{element}</AuthVerifComponent>

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    let isAsync = false;
    if (accessToken && refreshToken) {
      const decodedAccessToken: IDecodedToken = jwt_decode(accessToken);
      const now = Math.floor(Date.now()/1000);
      // Check for access token expiracy
      if (now < decodedAccessToken.exp) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        dispatch(loginActions.loginSuccess({
          access_token: accessToken,
          refresh_token: refreshToken,
        }));
      } else {
        
        const decodedRefreshToken: IDecodedRefreshToken = jwt_decode(refreshToken);
        // Check for refresh token expiracy
        if (now < decodedRefreshToken.exp) {
          const refresh = async () => {
            await dispatch(refreshThunk());
            setIsAppReady(true);
          }
          refresh();
          isAsync = true;
        }
      }
    }

    if(!isAsync) {
      setIsAppReady(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, {
        variant: severity
      })
      dispatch(notificationActions.reset());
    }
  }, [dispatch, enqueueSnackbar, message, severity] )
  
  return isAppReady ? (
    <>
    <MuiAppBar />
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/asked-reservations" element={renderElement(<AskedReservationsPage/>)}/>
      <Route path="/waiting-reservations" element={renderElement(<WaitingReservationsPage/>)}/>
      <Route path="/map" element={renderElement(<MapPage/>)} />
      <Route path="/settings" element={renderElement(<SettingsPage/>)} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
  : (
    <></>
  );
}

export default App;
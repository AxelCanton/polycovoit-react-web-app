import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import AuthVerifComponent from './components/AuthVerifComponent/AuthVerifComponent';
import { useEffect } from 'react';
import AskedReservationsPage from './pages/AskedReservationsPage/AskedReservationsPage';
import WaitingReservationsPage from './pages/WaitingReservationsPage/WaitingReservationsPage';
import MapPage from './pages/MapPage/MapPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import jwt_decode from "jwt-decode";
import { IDecodedRefreshToken } from './interfaces/user.interface';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { refreshThunk } from './thunks/LoginThunk';
import { notificationActions } from './slices/NotificationSlice';
import { useSnackbar } from 'notistack';
import MuiAppBar from './components/AppBar/AppBar';
import NotFound from './components/NotFound/NotFound';
import AdminPage from './pages/AdminPage/AdminPage';
import Forbidden from './components/Forbidden/Forbidden';
import ServerError from './components/ServerError/ServerError';
import { loginActions } from './slices/LoginSlice';

export const REFRESH_TOKEN = 'refresh_token';

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const [isAppReady, setIsAppReady] = useState(false);

  const dispatch = useAppDispatch();
  
  const { message, severity } = useAppSelector((state) => state.notificationReducer);

  const renderElement = (element: React.ReactNode) => <AuthVerifComponent>{element}</AuthVerifComponent>

  useEffect(() => {
    let refreshToken = sessionStorage.getItem(REFRESH_TOKEN);
    let remember = false;
    if (refreshToken === null) {
      refreshToken = localStorage.getItem(REFRESH_TOKEN);
      remember = true;
    }
    let isAsync = false;
    if (refreshToken !== null) {
      const now = Math.floor(Date.now()/1000);
      const decodedRefreshToken: IDecodedRefreshToken = jwt_decode(refreshToken);
      // Check for refresh token expiracy
      if (now < decodedRefreshToken.exp) {
        const refresh = async () => {
          if (remember) {
            dispatch(loginActions.remember());
          }
          await dispatch(refreshThunk(refreshToken as string));
          setIsAppReady(true);
        }
        refresh();
        isAsync = true;
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
      <Route path="/" element={<MapPage/>} />
      <Route path="/asked-reservations" element={renderElement(<AskedReservationsPage/>)}/>
      <Route path="/waiting-reservations" element={renderElement(<WaitingReservationsPage/>)}/>
      {/* <Route path="/map" element={renderElement(<MapPage/>)} /> */}
      <Route path="/settings" element={renderElement(<SettingsPage/>)} />
      <Route path="/admin" element={renderElement(<AdminPage/>)} />
      <Route path="/forbidden" element={<Forbidden/>} />
      <Route path="/server-error" element={<ServerError/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
  : (
    <></>
  );
}

export default App;
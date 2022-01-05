import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import CustomThemeProvider from './app/CustomThemeProvider/CustomThemeProvider';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CustomThemeProvider>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </CustomThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyThemeProvider } from './ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyThemeProvider>
    <CssBaseline />
    <App />
  </MyThemeProvider>
);
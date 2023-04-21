import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material';
import { theme } from 'config/theme';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'router';
import { AuthProvider } from 'context/AuthProvider';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Routes/>
                </ThemeProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InterviewContextProvider } from './context/InterviewContext'
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AuthContextProvider>

      <InterviewContextProvider>
        <App />
      </InterviewContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

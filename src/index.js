import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Code for setting up Firebase hosting
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDmjCD-hHX_utJUBwqtRQzjNaJs3YxiT2g",
  authDomain: "to-do-app-fa0e8.firebaseapp.com",
  projectId: "to-do-app-fa0e8",
  storageBucket: "to-do-app-fa0e8.appspot.com",
  messagingSenderId: "586473652858",
  appId: "1:586473652858:web:e547f1d025297026cc71c3"
};
const app = initializeApp(firebaseConfig);
// - Firebase hosting

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
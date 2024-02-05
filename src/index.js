// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { lazy, Suspense } from 'react';
const App=lazy(()=>import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //  </React.StrictMode>
  // <App />
  <Suspense fallback={<div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh',
  fontSize:'60px',color:'red'
  }}>Page loading please wait</div>}>
    <App/>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

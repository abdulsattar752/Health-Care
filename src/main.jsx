import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// ... other imports

// Suppress only the DevTools message (optional)
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes('Download the React DevTools')) return;
  originalConsoleWarn(...args);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* ... ToastContainer etc. */}
  </React.StrictMode>,
)
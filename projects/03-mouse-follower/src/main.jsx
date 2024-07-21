import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // The React.StrictMode component helps in development mode
  // to detect code warnings and errors, e.g.:
  // -> executes the effects and then the cleanup to detect if
  //    it's coded properly
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

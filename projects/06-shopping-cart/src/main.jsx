import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersContext } from './context/filters.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersContext.Provider>
    <App />
  </FiltersContext.Provider>
)

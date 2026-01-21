import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './AuthContext.jsx'
import { TourProvider } from './TourContext.jsx'

createRoot(document.getElementById('root')).render(
  //wrapping our app component with all the providers
  <BrowserRouter>
    <AuthProvider>
      <TourProvider>
        <App />
      </TourProvider>
    </AuthProvider>
  </BrowserRouter>
)


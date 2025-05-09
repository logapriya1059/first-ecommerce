import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {DataProvider} from './Context/ShopContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  
    // <StrictMode>
    //   <BrowserRouter>
    //   < DataProvider>
    //     <App />
    //     </DataProvider>
    //   </BrowserRouter>
    // </StrictMode>,
    <StrictMode>
       <BrowserRouter>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
  
)

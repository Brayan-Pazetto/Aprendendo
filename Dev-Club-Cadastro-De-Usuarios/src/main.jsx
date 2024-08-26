import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles.js'
import Home from './pages/Home/Index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <GlobalStyle/>
  </StrictMode>,
)

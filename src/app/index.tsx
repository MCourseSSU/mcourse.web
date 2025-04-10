import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './providers/providers'
import { Router } from './router'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Providers router={Router} />
  </StrictMode>,
)
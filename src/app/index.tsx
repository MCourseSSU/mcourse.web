import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './providers/Providers'
import { router } from './router'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Providers router={router} />
  </StrictMode>,
)
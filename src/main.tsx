import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ReputationAPIDocs from './pages/ReputationAPIDocs'
import AmmPoolDocs from './pages/AmmPoolDocs'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/reputation-api" element={<ReputationAPIDocs />} />
        <Route path="/docs/amm-pool" element={<AmmPoolDocs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

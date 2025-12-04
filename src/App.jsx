import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './pages/index'
import Roleselection from './pages/roleselection'
import Navbar from './components/Navbar'

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/roleselection'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/roleselection" element={<Roleselection />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

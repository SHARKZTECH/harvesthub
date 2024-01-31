import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

// components
import Header from './components/Header'
import Home from './pages/home/Home'
import Market from './pages/market/Market'
import Profile from './pages/profile/Profile'
import Schedule from './pages/schedule/Schedule'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>


    </div>
  )
}

export default App
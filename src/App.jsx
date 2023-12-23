import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './page/LandingPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route element={<LandingPage />} path="/" />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
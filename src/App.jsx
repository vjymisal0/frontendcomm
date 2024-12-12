import React from 'react'
import 'regenerator-runtime/runtime';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Assessment } from './pages/Assessment'
import { Landing } from './pages/Landing'
import VideosPage from './pages/VideosPage';
import Authentications from './pages/Authentications'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Landing />} />
          <Route path="/authpage" element={<Authentications />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path='/videos' element={<VideosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
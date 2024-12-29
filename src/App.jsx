import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import './App.css'
import Course from './Pages/Course';
import Notforund from './Pages/Notforund';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Notforund/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
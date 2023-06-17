import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Booklist from './pages/Booklist'
import Notfound from './pages/Notfound'
import Header from './Header'

export default function App() {
  return (
    <>
  <Header/>  
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Booklist />} />
        {/* <Route path="/Notfound" element={<Notfound />} /> */}
      </Routes>
  </>
  )
}

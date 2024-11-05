import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import './App.css'
import Formdata from './Components/FormData'
import Company from './Components/Company'

function App() {

  return (
    <>
       <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Company' element={<Company/>}/>
          <Route path="/formdata" element={<Formdata/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App

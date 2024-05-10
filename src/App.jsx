import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Sell from './components/Sell'
import Services from './components/Services'
import Prices from './components/Prices'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/sell" element={<Sell />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="+917419067524"
        accountName="GreenLoop"
        avatar="/gl-logo.png"
        chatMessage="Welcome to GreenLoop, we are here to help you in your waste management."
        messageDelay="2"
        allowClickAway="true"
      />
      <Footer />
    </Router>
    </div>
  )
}

export default App
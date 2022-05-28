import React from 'react'

import { Header, Products, Contact, Footer } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (

    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
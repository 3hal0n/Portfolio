import React, { useState, useEffect } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {

  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

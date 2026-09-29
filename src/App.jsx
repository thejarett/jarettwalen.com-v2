// Root layout: composes the single-page sections in display order.
// Section shading alternates via the `section-alt` class (see styles.css).
import { useState } from 'react'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Commissions from './components/Commissions'
import Comic from './components/Comic'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles.css'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Portfolio />
        <Commissions />
        <Comic />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

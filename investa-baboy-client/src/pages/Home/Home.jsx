import React from 'react'
import Header from './components/header';
import Hero from './components/hero';
import Plans from './components/plans';
import About from './components/about';
import Referral from './components/referral';
import Dashboard from './components/dashboard';
import FAQ from './components/faq';
import Footer from './components/footer';
import Contact from './components/contact';


function Home() {
  return (
    <div className='container-fluid p-0'>
      <Header />
      <Hero />
      <About />
      <Plans />
      <Dashboard />
      <FAQ />
      <Referral />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

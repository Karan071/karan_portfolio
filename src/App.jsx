import React from 'react'
import Header from './Component/header/Header'
import Nav from './Component/nav/Nav'
import About from './Component/about/About'
import Experience from './Component/experience/Experience'
import Service from './Component/service/Service'
import Portfolio from './Component/portfolio/Portfolio'
import Testimonials from './Component/testimonials/Testimonials'
import Contact from './Component/contact/Contact'
import Footer from './Component/footer/Footer'

const App = () => {
  return (
      <>
        <Header />
        <Nav />
        <About />
        <Experience/>
        <Service />
        <Portfolio />
        <Testimonials/>
        <Contact />
        <Footer />
      </>
  );
}

export default App;

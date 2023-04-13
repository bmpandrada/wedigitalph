import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Offer from "./components/Offer"
import Galarey from "./components/Galarey"
import AboutOne from "./components/AboutOne"
import Footer from "./components/Footer"



function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <section className="section-hero">
       <Hero />
      </section>
      <section className="section-offer">
       <Offer />
      </section>
      <section className="section-galarey">
       <Galarey />
      </section>
      <section className="section-aboutOne">
       <AboutOne />
      </section>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  )
}

export default App

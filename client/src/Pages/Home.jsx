import React from 'react'
import Banner from '../Components/home/Banner.jsx'
import Hero from '../Components/home/Hero.jsx'
import Features from '../Components/home/Features.jsx'
import Testimonial from '../Components/home/Testimonial.jsx'
import CalltoAction from '../Components/home/CalltoAction.jsx'
import Footer from '../Components/home/Footer.jsx'

const Home = () => {
  return (
    <div>
        <Banner />
        <Hero />
        <Features/>
        <Testimonial/>
        <CalltoAction />
        <Footer />
    </div>
  )
}

export default Home
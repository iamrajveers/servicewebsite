"use client"
import React from 'react'
import Header from '../sharecompoents/Header'
import HomeHerosection from '../components/HomeHerosection'
import VisionSection from '../components/VisionSection'
import ServicesSection from '../components/ServiceSection'
import HowWeWork from '../components/HowWeWork'
import NewsletterBanner from '../components/NewsletterBanner'
import BlogSection from '../components/BlogSection'
import TestimonialSection from '../components/TestimonialSection'
import Footer from '../sharecompoents/Footer'
const Home = () => {

  return (

    <>
      <Header />
      <HomeHerosection />
      <VisionSection />
      <ServicesSection />
      <HowWeWork />
      <BlogSection />
      <NewsletterBanner />
      <TestimonialSection />
      <Footer />

    </>
  )
}

export default Home
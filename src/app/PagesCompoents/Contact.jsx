import React from 'react'
import Banner from '../sharecompoents/Banner'
import ContactSection from '../components/ContactSection'
import Faqsectioncontactus from '../components/Faqsectioncontactus'
import MapSection from '../components/MapSection'
import NewsletterBanner from '../sharecompoents/NewsletterBanner'
const Contact = () => {

  return (
    <>

      <Banner
        title="Contact us"
        subtitle="We’d love to hear from you! Whether you have a question, feedback, or a business inquiry, feel free to reach out"
        imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
      />

      <ContactSection />

      <Faqsectioncontactus />

      <MapSection />

      <NewsletterBanner />


    </>

  )
}

export default Contact
"use client";
import React, { useState, useEffect } from "react";
import HomeHerosection from "../components/Homecomponents/HomeHerosection";
import ServicesSection from "../components/Homecomponents/ServiceSection";
import VisionSection from "../components/Homecomponents/VisionSection";
import HowWeWork from "../components/Homecomponents/HowWeWork";
import NewsletterBanner from "../sharecompoents/NewsletterBanner";
import BlogSection from "../components/Homecomponents/BlogSection";
import TestimonialSection from "../components/Homecomponents/TestimonialSection";
import Loader from "../sharecompoents/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <Loader loading={isLoading}>
      <HomeHerosection />
      <VisionSection />
      <ServicesSection />
      <HowWeWork />
      <BlogSection isHomePage={true} />
      <NewsletterBanner />
      <TestimonialSection />
    </Loader>
  );
};

export default Home;

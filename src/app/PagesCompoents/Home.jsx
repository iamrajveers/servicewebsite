"use client";
import React, { useState, useEffect } from "react";
import HomeHerosection from "../components/HomeHerosection";
import VisionSection from "../components/VisionSection";
import ServicesSection from "../components/ServiceSection";
import HowWeWork from "../components/HowWeWork";
import NewsletterBanner from "../components/NewsletterBanner";
import BlogSection from "../components/BlogSection";
import TestimonialSection from "../components/TestimonialSection";
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

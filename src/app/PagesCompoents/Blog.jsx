import React from 'react';
import Banner from '../sharecompoents/Banner';
import BlogSection from '../components/BlogSection';
import NewsletterBanner from '../components/NewsletterBanner';

const Blog = () => {
  return (
    <>
      <Banner
        title="Our Insight"
        imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
      />

      <BlogSection />

     <NewsletterBanner />



    </>
  );
};

export default Blog;

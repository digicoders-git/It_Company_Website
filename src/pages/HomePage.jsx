import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import About from '../components/About/About';
import ServicesSection from '../components/Services/ServicesSection';
import ServicesGrid from '../components/Services/ServicesGrid';
import CTABanner from '../components/CTA/CTABanner';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import Testimonials from '../components/Testimonials/Testimonials';
import Clients from '../components/Clients/Clients';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <ServicesSection />
      <ServicesGrid />
      <CTABanner />
      <CaseStudies />
      <Testimonials />
      <Clients />
    </>
  );
};

export default HomePage;

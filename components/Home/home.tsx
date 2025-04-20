"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Hero from './Hero/page';
import About from './About/About';
import Feature from './Feature/Feature';
import Services from './Services/Services';
import ClientReview from './ClientReview/ClientReview';
import Team from './Team/Team';
import Pricing from './Pricing/Pricing';

import 'aos/dist/aos.css'; // AOS styles

const HomePage = () => {
  const pathname = usePathname();

  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import('aos');
      if (AOS?.init) {
        AOS.init({
          duration: 1000,
          easing: 'ease',
          once: true,
          anchorPlacement: 'top-bottom',
        });
      }
    };

    initAOS();
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    const refreshAOS = async () => {
      const AOS = await import('aos');
      AOS.refresh();
    };
    refreshAOS();
  }, [pathname]);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Feature />
      <Services />
      <ClientReview />
      <Team />
      <Pricing />
    </div>
  );
};

export default HomePage;

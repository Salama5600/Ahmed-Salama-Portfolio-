import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import WhatIBuild from './components/WhatIBuild';
import HowIWork from './components/HowIWork';
import About from './components/About';
import Questions from './components/Questions';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'work', 'services', 'process', 'about', 'questions', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#1F3126] font-sans flex flex-col selection:bg-[#E9D8B4] selection:text-[#1F3126]">
      {/* 0. Header (Sticky Top Bar Contract) */}
      <Header activeSection={activeSection} />

      <main className="flex-1 flex flex-col w-full">
        {/* 1. Hero + Sketch your site (Cream 100) */}
        <Hero />

        {/* 2. Selected work (Cream 200) */}
        <SelectedWork />

        {/* 3. What I build (Cream 100) */}
        <WhatIBuild />

        {/* 4. How I work (Sage 700) */}
        <HowIWork />

        {/* 5. About (Cream 100) */}
        <About />

        {/* 6. Questions (Cream 200) */}
        <Questions />
      </main>

      {/* 7. Contact + Footer (Sage 800) */}
      <ContactFooter />
    </div>
  );
}

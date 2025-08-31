import { useEffect, useRef } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { NavSection } from '@/components/sections/NavSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { StoreSection } from '@/components/sections/StoreSection';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleNavigation = (section: string) => {
    const element = sectionRefs.current[section];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Set up section refs
    sectionRefs.current = {
      home: document.getElementById('home'),
      nav: document.getElementById('nav'),
      projects: document.getElementById('projects'),
      store: document.getElementById('store'),
      research: document.getElementById('research'),
      about: document.getElementById('about'),
      contact: document.getElementById('contact'),
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header onNavigate={handleNavigation} />
        
        <main>
          <HeroSection onNavigate={handleNavigation} />
          <NavSection onNavigate={handleNavigation} />
          <ProjectsSection onNavigate={handleNavigation} />
          <StoreSection onNavigate={handleNavigation} />
          <ResearchSection onNavigate={handleNavigation} />
          <AboutSection onNavigate={handleNavigation} />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;

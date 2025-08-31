import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      // Show scroll button only after scrolling past hero section (approximately at nav section)
      setShowScrollButton(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Language Switcher - Only visible when not scrolled */}
          <div className={`flex items-center space-x-2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button
              onClick={() => setLanguage('en')}
              className={`text-sm font-medium transition-fast ${
                language === 'en' ? 'text-brand-primary' : 'text-text-muted hover:text-brand-primary'
              }`}
            >
              EN
            </button>
            <span className="text-text-muted">|</span>
            <button
              onClick={() => setLanguage('fr')}
              className={`text-sm font-medium transition-fast ${
                language === 'fr' ? 'text-brand-primary' : 'text-text-muted hover:text-brand-primary'
              }`}
            >
              FR
            </button>
          </div>

          {/* Logo - Only visible when not scrolled */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button 
              onClick={() => handleNavigation('home')}
              className="text-2xl font-bold text-brand-primary tracking-wider hover:text-brand-accent transition-fast"
            >
              LESS +
            </button>
          </div>

          {/* Hamburger Menu - Always visible */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="p-2 hover:bg-surface-neutral relative z-10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface-white">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-6">
            <nav className="flex flex-col items-center space-y-6">
              <button
                onClick={() => handleNavigation('projects')}
                className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => handleNavigation('store')}
                className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
              >
                {t('store.title')}
              </button>
              <button
                onClick={() => handleNavigation('research')}
                className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
              >
                {t('nav.research')}
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Scroll to Top Button - Only visible after nav section */}
      {showScrollButton && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gray-500/20 backdrop-blur-sm text-brand-primary hover:bg-gray-600/30 hover:text-brand-primary shadow-lg transition-base"
        >
          <ChevronUp size={20} />
        </Button>
      )}
    </>
  );
}
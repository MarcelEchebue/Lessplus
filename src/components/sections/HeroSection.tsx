import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col justify-end bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-20 flex justify-center">
        <div className="text-center">
          {/* Main Brand */}
          <h1 className="text-6xl md:text-8xl font-bold text-text-inverse mb-6 tracking-wider">
            LESS +
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-text-inverse/90 mb-12 font-light tracking-wide">
            {t('hero.tagline')}
          </p>
          
          {/* Arrow to next section */}
          <Button
            variant="ghost"
            onClick={() => onNavigate('nav')}
            className="text-text-inverse hover:text-brand-accent transition-base p-0 h-auto group"
          >
            <ChevronDown 
              size={40} 
              className="animate-bounce group-hover:animate-none transition-base" 
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
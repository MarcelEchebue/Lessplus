import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import didierPortrait from '@/assets/didier-portrait.jpg';

interface AboutSectionProps {
  onNavigate: (section: string) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  const { t } = useLanguage();

  const highlightedText = t('about.description').replace(
    /(arquitecto|fundador|UNESCO|BIM|inteligencia artificial|humanista|coherente|esencial)/gi,
    '<strong>$1</strong>'
  );

  return (
    <section id="about" className="bg-surface-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => onNavigate('about')}
            className="text-3xl md:text-4xl font-bold text-brand-primary tracking-wider p-0 h-auto hover:text-brand-accent transition-fast"
          >
            {t('about.title')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-surface-neutral rounded-sm overflow-hidden max-w-md mx-auto md:mx-0">
              <img 
                src={didierPortrait}
                alt="Didier Yambá Chalé"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:pt-4 lg:pt-8">
            <div 
              className="text-base md:text-lg lg:text-xl text-text-primary leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: highlightedText }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
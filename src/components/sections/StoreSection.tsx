import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface StoreSectionProps {
  onNavigate: (section: string) => void;
}

export function StoreSection({ onNavigate }: StoreSectionProps) {
  const { t } = useLanguage();

  const highlightedText = t('store.description').replace(
    /(arquitectura|libros|publicaciones|reflexiones|humanista|escritura)/gi,
    '<strong>$1</strong>'
  );

  return (
    <section id="store" className="bg-surface-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-wider mb-4">
              {t('store.title')}
            </h2>
            <Button
              variant="ghost"
              onClick={() => onNavigate('store')}
              className="text-brand-accent hover:text-brand-primary transition-fast text-lg underline decoration-2 underline-offset-4 p-0 h-auto"
            >
              {t('store.link')}
            </Button>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <div 
              className="text-xl md:text-2xl text-text-primary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: highlightedText }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
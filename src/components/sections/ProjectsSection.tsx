import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import projectsBackground from '@/assets/projects-background.jpg';

interface ProjectsSectionProps {
  onNavigate: (section: string) => void;
}

// Aqui iran todas las categorias de los proyectos a añadir
const projectCategories = [
  'residential',
  'cultural', 
  'administrative',
  'educational',
  'industrial',
  'urban'
];

// Mock project images - in real app these would be dynamic
const mockProjects = {
  residential: [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300', 
    '/api/placeholder/400/300'
  ],
  cultural: [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300'
  ],
  administrative: [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300'
  ],
  educational: [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300'
  ],
  industrial: [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300'
  ],
  urban: [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300'
  ]
};

export function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section 
      id="projects"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${projectsBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-inverse tracking-wider">
            {t('projects.title')}
          </h1>
          <Button
            variant="ghost"
            onClick={() => onNavigate('all-projects')}
            className="text-text-inverse hover:text-brand-accent transition-fast text-lg underline decoration-2 underline-offset-4"
          >
            {t('projects.viewall')}
          </Button>
        </div>

        <div className="space-y-12">
          {/* Categories List */}
          <div className="space-y-12">
            {projectCategories.map((category) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    className={`text-xl md:text-2xl font-medium tracking-wide transition-fast ${
                      selectedCategory === category 
                        ? 'text-brand-accent' 
                        : 'text-text-inverse hover:text-brand-accent'
                    }`}
                  >
                    {t(`projects.${category}`)}
                  </button>
                  <Button
                    variant="ghost"
                    onClick={() => onNavigate(`projects-${category}`)}
                    className="text-text-inverse hover:text-brand-accent t p-0"
                  >
                    <Plus size={24} />
                  </Button>
                </div>
                
                {/* Project Images for this category */}
                {selectedCategory === category && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-500">
                    {mockProjects[selectedCategory as keyof typeof mockProjects].map((image, index) => (
                      <button
                        key={index}
                        onClick={() => onNavigate(`project-${selectedCategory}-${index}`)}
                        className="aspect-[4/3] bg-surface-neutral rounded-sm overflow-hidden hover:scale-105 transition-base group"
                      >
                        <div className="w-full h-full bg-gradient-to-br from-brand-secondary to-brand-accent opacity-80 group-hover:opacity-60 transition-base flex items-center justify-center">
                          <span className="text-brand-primary font-medium">Project {index + 1}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
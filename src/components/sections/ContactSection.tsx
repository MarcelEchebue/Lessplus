import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message envoyé!",
      description: "Nous vous répondrons bientôt.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-surface-warm py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary tracking-wider mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Transformons ensemble votre vision architecturale en réalité
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-brand-primary mb-8">
                  Restons en contact
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                      <MapPin className="text-text-inverse" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-primary mb-2">{t('contact.address')}</h4>
                      <p className="text-text-secondary">
                        Dakar, Sénégal<br />
                        Plateau, Avenue Léopold Sédar Senghor
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                      <Mail className="text-text-inverse" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-primary mb-2">{t('contact.email')}</h4>
                      <p className="text-text-secondary">contact@lessplus.architecture</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                      <Phone className="text-text-inverse" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-primary mb-2">{t('contact.phone')}</h4>
                      <p className="text-text-secondary">+221 77 123 45 67</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface-white p-8 rounded-sm shadow-lg">
              <h3 className="text-2xl font-semibold text-brand-primary mb-8">
                Démarrons votre projet
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-border focus:border-brand-primary"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-border focus:border-brand-primary"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Parlez-nous de votre projet..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 border-border focus:border-brand-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-interactive-hover text-text-inverse py-4 text-lg font-medium transition-base group"
                >
                  <span>Envoyer le message</span>
                  <Send className="ml-2 group-hover:translate-x-1 transition-base" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
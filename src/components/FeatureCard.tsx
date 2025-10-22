import { LucideIcon } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface FeatureCardProps {
  icon: LucideIcon;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export function FeatureCard({
  icon: Icon,
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn,
}: FeatureCardProps) {
  const { t, dir } = useLanguage();

  return (
    <div className={`group relative p-8 glass-effect rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/30">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="mb-3 text-xl group-hover:text-primary transition-colors">{t(titleAr, titleEn)}</h3>
        <p className="text-neutral-600 leading-relaxed">{t(descriptionAr, descriptionEn)}</p>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
}

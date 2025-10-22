import { LucideIcon } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface CategoryCardProps {
  icon: LucideIcon;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  onClick: () => void;
}

export function CategoryCard({
  icon: Icon,
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn,
  onClick,
}: CategoryCardProps) {
  const { t, dir } = useLanguage();

  return (
    <button
      onClick={onClick}
      className={`group relative p-8 bg-white rounded-2xl border-2 border-neutral-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 w-full overflow-hidden hover:-translate-y-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-50/50 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Decorative Blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-200/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className={`relative flex items-start gap-5 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <div className="p-4 bg-gradient-to-br from-primary via-blue-500 to-purple-600 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/30 group-hover:shadow-primary/50">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="mb-2 group-hover:text-primary transition-colors text-xl">
            {t(titleAr, titleEn)}
          </h3>
          <p className="text-neutral-600 leading-relaxed">{t(descriptionAr, descriptionEn)}</p>
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-600 to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </button>
  );
}

import { useLanguage } from './LanguageProvider';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quoteAr: string;
  quoteEn: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  rating: number;
  initials: string;
}

export function TestimonialCard({
  quoteAr,
  quoteEn,
  nameAr,
  nameEn,
  roleAr,
  roleEn,
  rating,
  initials,
}: TestimonialCardProps) {
  const { t, dir } = useLanguage();

  return (
    <div className={`group relative p-8 glass-effect rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-50/50 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Decorative Quote Mark */}
      <div className={`absolute top-6 text-8xl text-primary/10 ${dir === 'rtl' ? 'right-6' : 'left-6'}`}>
        "
      </div>
      
      <div className="relative">
        {/* Rating */}
        <div className={`flex gap-1 mb-5 ${dir === 'rtl' ? 'justify-end' : ''}`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'fill-warning text-warning' : 'text-neutral-300'
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-neutral-700 mb-8 leading-relaxed text-lg italic">{t(quoteAr, quoteEn)}</p>

        {/* Author */}
        <div className={`flex items-center gap-4 pt-6 border-t-2 border-neutral-200 group-hover:border-primary/30 transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <Avatar className="w-14 h-14 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
            <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white text-lg">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-lg">{t(nameAr, nameEn)}</p>
            <p className="text-neutral-600">{t(roleAr, roleEn)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

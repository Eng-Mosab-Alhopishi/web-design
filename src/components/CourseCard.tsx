import { useLanguage } from './LanguageProvider';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  duration: string;
  rating: number;
  learners: string;
  level: string;
  levelAr: string;
  imageUrl?: string;
  slug: string;
  onViewCourse: () => void;
}

export function CourseCard({
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn,
  duration,
  rating,
  learners,
  level,
  levelAr,
  imageUrl,
  slug,
  onViewCourse,
}: CourseCardProps) {
  const { t, language } = useLanguage();

  const { dir } = useLanguage();

  return (
    <div className="group bg-white rounded-2xl border-2 border-neutral-200 overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="aspect-video bg-neutral-200 relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={t(titleAr, titleEn)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary via-blue-500 to-purple-600">
            <span className="text-white text-4xl">
              {t(titleAr, titleEn).substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        <Badge className={`absolute top-4 bg-gradient-to-r from-accent to-cyan-500 text-white border-none shadow-lg ${dir === 'rtl' ? 'right-4' : 'left-4'}`}>
          {t(levelAr, level)}
        </Badge>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className={`p-6 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
        <h3 className="mb-3 line-clamp-2 text-xl group-hover:text-primary transition-colors">{t(titleAr, titleEn)}</h3>
        <p className="text-neutral-600 mb-5 line-clamp-2 leading-relaxed">{t(descriptionAr, descriptionEn)}</p>

        {/* Meta */}
        <div className={`flex items-center gap-5 mb-5 text-sm text-neutral-600 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{learners}</span>
          </div>
        </div>

        {/* Actions */}
        <div className={`flex gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <Button 
            variant="outline" 
            className="flex-1 border-2 hover:border-primary hover:bg-primary/5 transition-all" 
            onClick={onViewCourse}
          >
            {t('عرض التفاصيل', 'View Course')}
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
            onClick={() => window.open(`https://app.riseup.com/course/${slug}`, '_blank')}
          >
            {t('ابدأ الآن', 'Start now')}
          </Button>
        </div>
      </div>
    </div>
  );
}

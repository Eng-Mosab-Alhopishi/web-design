import { useLanguage } from './LanguageProvider';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';

interface PricingCardProps {
  nameAr: string;
  nameEn: string;
  price: string;
  priceAr: string;
  period?: string;
  periodAr?: string;
  featuresAr: string[];
  featuresEn: string[];
  ctaTextAr: string;
  ctaTextEn: string;
  ctaLink: string;
  popular?: boolean;
  badge?: { textAr: string; textEn: string };
}

export function PricingCard({
  nameAr,
  nameEn,
  price,
  priceAr,
  period,
  periodAr,
  featuresAr,
  featuresEn,
  ctaTextAr,
  ctaTextEn,
  ctaLink,
  popular,
  badge,
}: PricingCardProps) {
  const { t, language } = useLanguage();

  const { dir } = useLanguage();

  return (
    <div
      className={`group relative p-10 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2 ${
        popular 
          ? 'border-transparent bg-gradient-to-br from-primary via-blue-600 to-purple-700 shadow-2xl shadow-primary/40 hover:shadow-primary/60' 
          : 'border-neutral-200 bg-white hover:border-primary hover:shadow-2xl'
      }`}
    >
      {/* Background Overlay for non-popular cards */}
      {!popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-50/50 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}

      {badge && (
        <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-cyan-500 text-white border-none shadow-lg px-6 py-2 text-sm">
          {t(badge.textAr, badge.textEn)}
        </Badge>
      )}

      <div className={`relative text-center mb-8 ${popular ? 'text-white' : ''}`}>
        <h3 className="mb-6 text-2xl">{t(nameAr, nameEn)}</h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl sm:text-6xl">{language === 'ar' ? priceAr : price}</span>
          {period && <span className={`text-xl ${popular ? 'text-white/90' : 'text-neutral-600'}`}>/ {t(periodAr || '', period)}</span>}
        </div>
      </div>

      <ul className={`relative space-y-4 mb-10 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
        {featuresAr.map((_, index) => (
          <li key={index} className={`flex items-start gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${popular ? 'bg-white/20' : 'bg-accent/10'}`}>
              <Check className={`w-4 h-4 ${popular ? 'text-white' : 'text-accent'}`} />
            </div>
            <span className={`${popular ? 'text-white/95' : 'text-neutral-700'} leading-relaxed`}>
              {t(featuresAr[index], featuresEn[index])}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className={`relative w-full py-6 text-lg transition-all hover:scale-105 ${
          popular 
            ? 'bg-white text-primary hover:bg-neutral-100 shadow-xl' 
            : 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white shadow-lg shadow-primary/30'
        }`}
        onClick={() => window.open(ctaLink, '_blank')}
      >
        {t(ctaTextAr, ctaTextEn)}
      </Button>
    </div>
  );
}

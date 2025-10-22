import { useLanguage } from '../LanguageProvider';
import { FeatureCard } from '../FeatureCard';
import { Button } from '../ui/button';
import {
  BookOpen,
  Award,
  Globe2,
  Smartphone,
  Clock,
  Users,
  MessageSquare,
  BarChart3,
  Download,
  Zap,
  Shield,
  HeadphonesIcon,
} from 'lucide-react';

export function FeaturesPage() {
  const { t } = useLanguage();

  const mainFeatures = [
    {
      icon: BookOpen,
      titleAr: 'تعلّم عملي',
      titleEn: 'Hands-on learning',
      descriptionAr: 'مشاريع حقيقية وتطبيقات عملية في كل دورة',
      descriptionEn: 'Real projects and practical applications in every course',
    },
    {
      icon: Award,
      titleAr: 'شهادات رقمية',
      titleEn: 'Digital certificates',
      descriptionAr: 'شهادات معترف بها عند إكمال الدورة',
      descriptionEn: 'Recognized certificates upon completion',
    },
    {
      icon: Globe2,
      titleAr: 'واجهة عربية/إنجليزية',
      titleEn: 'Arabic/English UI',
      descriptionAr: 'تجربة كاملة باللغتين مع دعم RTL',
      descriptionEn: 'Complete experience in both languages with RTL support',
    },
    {
      icon: Smartphone,
      titleAr: 'تطبيق جوّال',
      titleEn: 'Mobile apps',
      descriptionAr: 'تعلّم في أي وقت ومن أي مكان عبر iOS و Android',
      descriptionEn: 'Learn anytime, anywhere on iOS and Android',
    },
    {
      icon: Clock,
      titleAr: 'دروس قصيرة',
      titleEn: 'Bite-sized lessons',
      descriptionAr: 'محتوى مركّز يناسب جدولك المزدحم',
      descriptionEn: 'Focused content that fits your busy schedule',
    },
    {
      icon: Users,
      titleAr: 'مجتمع نشط',
      titleEn: 'Active community',
      descriptionAr: 'تواصل مع متعلمين آخرين وشارك تجربتك',
      descriptionEn: 'Connect with other learners and share your experience',
    },
    {
      icon: MessageSquare,
      titleAr: 'دعم فوري',
      titleEn: 'Instant support',
      descriptionAr: 'فريق دعم متاح على مدار الساعة للإجابة على أسئلتك',
      descriptionEn: '24/7 support team available to answer your questions',
    },
    {
      icon: BarChart3,
      titleAr: 'تتبع التقدم',
      titleEn: 'Progress tracking',
      descriptionAr: 'راقب تطورك وحدد أهدافك التعليمية',
      descriptionEn: 'Monitor your progress and set learning goals',
    },
    {
      icon: Download,
      titleAr: 'تحميل الدروس',
      titleEn: 'Download lessons',
      descriptionAr: 'حمّل الدروس للمشاهدة دون اتصال بالإنترنت',
      descriptionEn: 'Download lessons for offline viewing',
    },
    {
      icon: Zap,
      titleAr: 'تحديثات مستمرة',
      titleEn: 'Regular updates',
      descriptionAr: 'محتوى محدّث باستمرار ليواكب التطورات',
      descriptionEn: 'Constantly updated content to keep pace with developments',
    },
    {
      icon: Shield,
      titleAr: 'تعلّم آمن',
      titleEn: 'Secure learning',
      descriptionAr: 'بياناتك محمية بأعلى معايير الأمان',
      descriptionEn: 'Your data is protected with the highest security standards',
    },
    {
      icon: HeadphonesIcon,
      titleAr: 'محتوى صوتي',
      titleEn: 'Audio content',
      descriptionAr: 'استمع للدروس أثناء التنقل',
      descriptionEn: 'Listen to lessons on the go',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">{t('مميزات BrandName', 'BrandName Features')}</h1>
          <p className="text-xl text-neutral-600 mb-8">
            {t(
              'كل ما تحتاجه لتجربة تعليمية استثنائية',
              'Everything you need for an exceptional learning experience'
            )}
          </p>
          <Button
            size="lg"
            onClick={() => window.open('https://app.riseup.com/signup', '_blank')}
          >
            {t('جرّب الآن مجانًا', 'Try now for free')}
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">
            {t('جاهز للبدء؟', 'Ready to get started?')}
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            {t(
              'انضم إلى آلاف المتعلمين واكتشف جميع المميزات',
              'Join thousands of learners and discover all features'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => window.open('https://app.brand.com/signup', '_blank')}
            >
              {t('ابدأ مجانًا', 'Start free')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://app.brand.com/catalog', '_blank')}
            >
              {t('تصفح الدورات', 'Browse courses')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useLanguage } from '../LanguageProvider';
import { Button } from '../ui/button';
import { Target, Eye, Heart, Users } from 'lucide-react';

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      titleAr: 'التميز',
      titleEn: 'Excellence',
      descriptionAr: 'نسعى دائمًا لتقديم أفضل تجربة تعليمية',
      descriptionEn: 'We always strive to provide the best learning experience',
    },
    {
      icon: Eye,
      titleAr: 'الوضوح',
      titleEn: 'Clarity',
      descriptionAr: 'محتوى واضح ومباشر يسهل الفهم',
      descriptionEn: 'Clear and direct content that is easy to understand',
    },
    {
      icon: Heart,
      titleAr: 'الشغف',
      titleEn: 'Passion',
      descriptionAr: 'نؤمن بقوة التعليم لتغيير الحياة',
      descriptionEn: 'We believe in the power of education to change lives',
    },
    {
      icon: Users,
      titleAr: 'المجتمع',
      titleEn: 'Community',
      descriptionAr: 'نبني مجتمعًا من المتعلمين والمعلمين',
      descriptionEn: 'We build a community of learners and teachers',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">{t('من نحن', 'About Us')}</h1>
          <p className="text-xl text-neutral-600">
            {t(
              'نحن منصة تعليمية تهدف لجعل التعلم متاحًا للجميع',
              'We are an educational platform aiming to make learning accessible to everyone'
            )}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">{t('رسالتنا', 'Our Mission')}</h2>
          <p className="text-xl text-neutral-700 leading-relaxed">
            {t(
              'نؤمن بأن التعليم الجيد يجب أن يكون متاحًا للجميع، بغض النظر عن موقعهم أو خلفيتهم. نسعى لتوفير منصة تعليمية شاملة تساعد المتعلمين على اكتساب المهارات التي يحتاجونها للنجاح في عالم سريع التغير.',
              'We believe that quality education should be accessible to everyone, regardless of their location or background. We strive to provide a comprehensive learning platform that helps learners acquire the skills they need to succeed in a rapidly changing world.'
            )}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('قيمنا', 'Our Values')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-neutral-300 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">{t(value.titleAr, value.titleEn)}</h3>
                <p className="text-neutral-600">{t(value.descriptionAr, value.descriptionEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-semibold text-primary mb-2">
                {t('120 ألف+', '120k+')}
              </div>
              <p className="text-neutral-600">{t('متعلم نشط', 'Active learners')}</p>
            </div>
            <div>
              <div className="text-5xl font-semibold text-primary mb-2">
                {t('500+', '500+')}
              </div>
              <p className="text-neutral-600">{t('دورة تعليمية', 'Courses')}</p>
            </div>
            <div>
              <div className="text-5xl font-semibold text-primary mb-2">
                {t('200+', '200+')}
              </div>
              <p className="text-neutral-600">{t('مدرّب خبير', 'Expert instructors')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">{t('انضم إلينا اليوم', 'Join us today')}</h2>
          <p className="text-xl mb-8 text-white/90">
            {t(
              'كن جزءًا من مجتمع المتعلمين العالمي',
              'Be part of the global learning community'
            )}
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.open('https://app.brand.com/signup', '_blank')}
          >
            {t('ابدأ مجانًا', 'Start free')}
          </Button>
        </div>
      </section>
    </div>
  );
}

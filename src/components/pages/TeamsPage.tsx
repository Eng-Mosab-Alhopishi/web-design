import { useLanguage } from '../LanguageProvider';
import { Button } from '../ui/button';
import { FeatureCard } from '../FeatureCard';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Users, BarChart3, Shield, Zap, CheckCircle2, Building2 } from 'lucide-react';

export function TeamsPage() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Users,
      titleAr: 'إدارة الفريق',
      titleEn: 'Team management',
      descriptionAr: 'لوحة تحكم مركزية لإدارة فريقك وتتبع التقدم',
      descriptionEn: 'Centralized dashboard to manage your team and track progress',
    },
    {
      icon: BarChart3,
      titleAr: 'تقارير وتحليلات',
      titleEn: 'Reports & analytics',
      descriptionAr: 'رؤى مفصلة حول أداء فريقك وإنجازاتهم',
      descriptionEn: 'Detailed insights into team performance and achievements',
    },
    {
      icon: Shield,
      titleAr: 'أمان متقدم',
      titleEn: 'Advanced security',
      descriptionAr: 'SSO، إدارة الأذونات، والتحكم الكامل',
      descriptionEn: 'SSO, permission management, and full control',
    },
    {
      icon: Zap,
      titleAr: 'محتوى مخصص',
      titleEn: 'Custom content',
      descriptionAr: 'دورات خاصة مصممة لاحتياجات شركتك',
      descriptionEn: 'Private courses designed for your company needs',
    },
  ];

  const features = [
    { textAr: 'الوصول لجميع الدورات', textEn: 'Access to all courses' },
    { textAr: 'لوحة تحكم المدير', textEn: 'Admin dashboard' },
    { textAr: 'تقارير مفصلة', textEn: 'Detailed reports' },
    { textAr: 'تكامل SSO', textEn: 'SSO integration' },
    { textAr: 'دورات مخصصة', textEn: 'Custom courses' },
    { textAr: 'مدير حساب مخصص', textEn: 'Dedicated account manager' },
    { textAr: 'دعم ذو أولوية', textEn: 'Priority support' },
    { textAr: 'فواتير موحدة', textEn: 'Consolidated billing' },
  ];

  const companies = [
    { nameAr: 'شركة التقنية', nameEn: 'Tech Corp', initials: 'TC' },
    { nameAr: 'مجموعة الابتكار', nameEn: 'Innovation Group', initials: 'IG' },
    { nameAr: 'حلول الأعمال', nameEn: 'Business Solutions', initials: 'BS' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-accent text-white">
            {t('حلول المؤسسات', 'Enterprise Solutions')}
          </Badge>
          <h1 className="mb-6">{t('BrandName للفرق والشركات', 'BrandName for Teams & Companies')}</h1>
          <p className="text-xl text-neutral-600 mb-8">
            {t(
              'طوّر مهارات فريقك من خلال أفضل منصة تعليمية',
              'Develop your team skills through the best learning platform'
            )}
          </p>
          <Button
            size="lg"
            onClick={() => window.open('https://app.brand.com/teams', '_blank')}
          >
            {t('تواصل مع المبيعات', 'Contact sales')}
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('حلول شاملة لشركتك', 'Comprehensive solutions for your company')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('كل ما تحتاجه في مكان واحد', 'Everything you need in one place')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-300">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{t(feature.textAr, feature.textEn)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('موثوق به من قبل الشركات الرائدة', 'Trusted by leading companies')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-white border border-neutral-300 rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">{company.initials}</span>
                </div>
                <h3 className="mb-2">{t(company.nameAr, company.nameEn)}</h3>
                <p className="text-neutral-600 mb-4">
                  {t(
                    'زيادة بنسبة 45% في مهارات الفريق خلال 6 أشهر',
                    '45% increase in team skills within 6 months'
                  )}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-neutral-700">
                  <div>
                    <div className="font-semibold text-primary">250+</div>
                    <div className="text-neutral-600">{t('موظف', 'Employees')}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">98%</div>
                    <div className="text-neutral-600">{t('رضا', 'Satisfaction')}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="mb-4">{t('احصل على عرض سعر مخصص', 'Get a custom quote')}</h2>
            <p className="text-neutral-600">
              {t(
                'أخبرنا عن احتياجاتك وسنعد لك حلاً مناسبًا',
                'Tell us about your needs and we\'ll prepare a suitable solution'
              )}
            </p>
          </div>

          <div className="bg-white border border-neutral-300 rounded-xl p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm">
                    {t('الاسم', 'Name')}
                  </label>
                  <Input placeholder={t('اسمك الكامل', 'Your full name')} />
                </div>
                <div>
                  <label className="block mb-2 text-sm">
                    {t('البريد الإلكتروني', 'Email')}
                  </label>
                  <Input type="email" placeholder={t('بريدك الإلكتروني', 'Your email')} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm">
                    {t('اسم الشركة', 'Company name')}
                  </label>
                  <Input placeholder={t('اسم شركتك', 'Your company name')} />
                </div>
                <div>
                  <label className="block mb-2 text-sm">
                    {t('حجم الفريق', 'Team size')}
                  </label>
                  <Input placeholder={t('عدد الموظفين', 'Number of employees')} />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  {t('رسالة', 'Message')}
                </label>
                <Input placeholder={t('أخبرنا عن احتياجاتك', 'Tell us about your needs')} />
              </div>

              <Button className="w-full" size="lg">
                {t('إرسال الطلب', 'Submit request')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">{t('جاهز لتطوير فريقك؟', 'Ready to develop your team?')}</h2>
          <p className="text-xl mb-8 text-white/90">
            {t(
              'تواصل معنا اليوم للحصول على عرض مخصص',
              'Contact us today for a custom quote'
            )}
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.open('https://app.brand.com/teams', '_blank')}
          >
            {t('تواصل الآن', 'Contact now')}
          </Button>
        </div>
      </section>
    </div>
  );
}

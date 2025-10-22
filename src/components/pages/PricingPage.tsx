import { useLanguage } from '../LanguageProvider';
import { PricingCard } from '../PricingCard';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function PricingPage() {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      nameAr: 'مجاني',
      nameEn: 'Free',
      price: '$0',
      priceAr: '٠ د.إ',
      featuresAr: [
        'الوصول إلى دورات مجانية محددة',
        'المجتمع والمنتديات',
        'شهادة إتمام أساسية',
        'دعم بالبريد الإلكتروني',
      ],
      featuresEn: [
        'Access to selected free courses',
        'Community and forums',
        'Basic completion certificate',
        'Email support',
      ],
      ctaTextAr: 'ابدأ مجانًا',
      ctaTextEn: 'Start free',
      ctaLink: 'https://app.brand.com/signup',
    },
    {
      nameAr: 'احترافي',
      nameEn: 'Pro',
      price: isAnnual ? '$99' : '$12',
      priceAr: isAnnual ? '٩٩ د.إ' : '١٢ د.إ',
      period: isAnnual ? 'year' : 'month',
      periodAr: isAnnual ? 'سنة' : 'شهر',
      featuresAr: [
        'الوصول لجميع الدورات',
        'تحميل الدروس للمشاهدة دون اتصال',
        'شهادات رقمية معتمدة',
        'دعم ذو أولوية',
        'تتبع تقدم متقدم',
        'مشاريع عملية حصرية',
      ],
      featuresEn: [
        'Access to all courses',
        'Download lessons for offline',
        'Certified digital certificates',
        'Priority support',
        'Advanced progress tracking',
        'Exclusive practical projects',
      ],
      ctaTextAr: 'اشترك الآن',
      ctaTextEn: 'Subscribe now',
      ctaLink: 'https://app.brand.com/checkout?plan=pro',
      popular: true,
      badge: {
        textAr: 'الأكثر شعبية',
        textEn: 'Most Popular',
      },
    },
    {
      nameAr: 'للفرق',
      nameEn: 'For Teams',
      price: 'Custom',
      priceAr: 'مخصص',
      featuresAr: [
        'جميع مميزات الاحترافي',
        'إدارة الفريق ولوحة التحكم',
        'تقارير وتحليلات',
        'دورات مخصصة',
        'مدير حساب مخصص',
        'تكامل SSO',
      ],
      featuresEn: [
        'All Pro features',
        'Team management dashboard',
        'Reports and analytics',
        'Custom courses',
        'Dedicated account manager',
        'SSO integration',
      ],
      ctaTextAr: 'تواصل مع المبيعات',
      ctaTextEn: 'Contact sales',
      ctaLink: 'https://app.brand.com/teams',
    },
  ];

  const faqs = [
    {
      questionAr: 'هل يمكنني الترقية أو التخفيض في أي وقت؟',
      questionEn: 'Can I upgrade or downgrade at any time?',
      answerAr: 'نعم، يمكنك تغيير خطتك في أي وقت. سيتم احتساب الفرق بشكل تناسبي.',
      answerEn: 'Yes, you can change your plan anytime. The difference will be prorated.',
    },
    {
      questionAr: 'هل هناك فترة تجريبية مجانية؟',
      questionEn: 'Is there a free trial?',
      answerAr: 'نعم، نوفر فترة تجريبية مجانية لمدة 7 أيام للخطة الاحترافية.',
      answerEn: 'Yes, we offer a 7-day free trial for the Pro plan.',
    },
    {
      questionAr: 'ما هي طرق الدفع المتاحة؟',
      questionEn: 'What payment methods are available?',
      answerAr: 'نقبل جميع البطاقات الائتمانية الرئيسية و PayPal.',
      answerEn: 'We accept all major credit cards and PayPal.',
    },
    {
      questionAr: 'هل يمكنني إلغاء اشتراكي؟',
      questionEn: 'Can I cancel my subscription?',
      answerAr: 'نعم، يمكنك الإلغاء في أي وقت دون أي رسوم إضافية.',
      answerEn: 'Yes, you can cancel anytime without additional fees.',
    },
    {
      questionAr: 'كم عدد الأجهزة التي يمكنني استخدامها؟',
      questionEn: 'How many devices can I use?',
      answerAr: 'يمكنك الوصول من أي عدد من الأجهزة، ولكن بجلسة واحدة نشطة في كل مرة.',
      answerEn: 'You can access from any number of devices, but one active session at a time.',
    },
    {
      questionAr: 'هل الأسعار شاملة الضرائب؟',
      questionEn: 'Are prices inclusive of taxes?',
      answerAr: 'الأسعار المعروضة لا تشمل ضريبة القيمة المضافة حيثما ينطبق ذلك.',
      answerEn: 'Prices shown exclude VAT where applicable.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">{t('خطط تناسب الجميع', 'Plans for everyone')}</h1>
          <p className="text-xl text-neutral-600 mb-8">
            {t(
              'اختر الخطة التي تناسبك وابدأ رحلة التعلم',
              'Choose the plan that suits you and start your learning journey'
            )}
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={!isAnnual ? 'font-semibold' : 'text-neutral-600'}>
              {t('شهري', 'Monthly')}
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={isAnnual ? 'font-semibold' : 'text-neutral-600'}>
              {t('سنوي', 'Annual')}
            </span>
            {isAnnual && (
              <span className="text-sm text-accent">
                {t('وفّر 18%', 'Save 18%')}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('الأسئلة الشائعة', 'Frequently Asked Questions')}</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-neutral-300 rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  {t(faq.questionAr, faq.questionEn)}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">
                  {t(faq.answerAr, faq.answerEn)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">{t('لا زلت غير متأكد؟', 'Still not sure?')}</h2>
          <p className="text-xl text-neutral-600 mb-8">
            {t(
              'ابدأ بالخطة المجانية وجرّب المنصة',
              'Start with the free plan and try the platform'
            )}
          </p>
          <Button
            size="lg"
            onClick={() => window.open('https://app.brand.com/signup', '_blank')}
          >
            {t('ابدأ مجانًا', 'Start free')}
          </Button>
        </div>
      </section>
    </div>
  );
}

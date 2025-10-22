import { useLanguage } from '../LanguageProvider';
import { SearchBar } from '../SearchBar';
import { Button } from '../ui/button';
import { CategoryCard } from '../CategoryCard';
import { FeatureCard } from '../FeatureCard';
import { CourseCard } from '../CourseCard';
import { TestimonialCard } from '../TestimonialCard';
import { Badge } from '../ui/badge';
import {
  Code,
  Palette,
  Briefcase,
  Languages,
  Database,
  TrendingUp,
  BookOpen,
  Award,
  Globe2,
  Smartphone,
  Star,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t, dir } = useLanguage();

  const categories = [
    {
      icon: Code,
      titleAr: 'البرمجة',
      titleEn: 'Programming',
      descriptionAr: 'تعلم لغات البرمجة وتطوير التطبيقات',
      descriptionEn: 'Learn coding languages and app development',
    },
    {
      icon: Palette,
      titleAr: 'التصميم',
      titleEn: 'Design',
      descriptionAr: 'تصميم UI/UX والرسوميات الإبداعية',
      descriptionEn: 'UI/UX design and creative graphics',
    },
    {
      icon: Briefcase,
      titleAr: 'الأعمال',
      titleEn: 'Business',
      descriptionAr: 'إدارة المشاريع والريادة',
      descriptionEn: 'Project management and entrepreneurship',
    },
    {
      icon: Languages,
      titleAr: 'اللغات',
      titleEn: 'Languages',
      descriptionAr: 'تعلم لغات جديدة بطريقة فعالة',
      descriptionEn: 'Learn new languages effectively',
    },
    {
      icon: Database,
      titleAr: 'البيانات',
      titleEn: 'Data',
      descriptionAr: 'تحليل البيانات والذكاء الاصطناعي',
      descriptionEn: 'Data analysis and AI',
    },
    {
      icon: TrendingUp,
      titleAr: 'التسويق',
      titleEn: 'Marketing',
      descriptionAr: 'التسويق الرقمي ووسائل التواصل',
      descriptionEn: 'Digital marketing and social media',
    },
  ];

  const features = [
    {
      icon: BookOpen,
      titleAr: 'تعلّم عملي',
      titleEn: 'Hands-on learning',
      descriptionAr: 'مشاريع حقيقية وتطبيقات عملية',
      descriptionEn: 'Real projects and practical applications',
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
      descriptionAr: 'تجربة كاملة باللغتين',
      descriptionEn: 'Complete experience in both languages',
    },
    {
      icon: Smartphone,
      titleAr: 'تطبيق جوّال',
      titleEn: 'Mobile apps',
      descriptionAr: 'تعلّم في أي وقت ومن أي مكان',
      descriptionEn: 'Learn anytime, anywhere',
    },
  ];

  const courses = [
    {
      titleAr: 'أساسيات تطوير الويب',
      titleEn: 'Web Development Fundamentals',
      descriptionAr: 'تعلم HTML, CSS, JavaScript من الصفر',
      descriptionEn: 'Learn HTML, CSS, JavaScript from scratch',
      duration: '12h',
      rating: 4.8,
      learners: '15k',
      level: 'Beginner',
      levelAr: 'مبتدئ',
      slug: 'web-dev-fundamentals',
    },
    {
      titleAr: 'تصميم واجهات المستخدم',
      titleEn: 'UI Design Mastery',
      descriptionAr: 'احترف تصميم الواجهات باستخدام Figma',
      descriptionEn: 'Master interface design with Figma',
      duration: '8h',
      rating: 4.9,
      learners: '12k',
      level: 'Intermediate',
      levelAr: 'متوسط',
      slug: 'ui-design-mastery',
    },
    {
      titleAr: 'تحليل البيانات بـ Python',
      titleEn: 'Data Analysis with Python',
      descriptionAr: 'استخدم Python لتحليل البيانات',
      descriptionEn: 'Use Python for data analysis',
      duration: '16h',
      rating: 4.7,
      learners: '18k',
      level: 'Advanced',
      levelAr: 'متقدم',
      slug: 'python-data-analysis',
    },
  ];

  const testimonials = [
    {
      quoteAr: 'تجربة رائعة! الدروس واضحة والدعم ممتاز. حصلت على وظيفة بفضل الشهادة.',
      quoteEn: 'Amazing experience! Clear lessons and excellent support. Got a job thanks to the certificate.',
      nameAr: 'أحمد محمد',
      nameEn: 'Ahmed Mohamed',
      roleAr: 'مطور ويب',
      roleEn: 'Web Developer',
      rating: 5,
      initials: 'AM',
    },
    {
      quoteAr: 'المنصة سهلة الاستخدام والمحتوى عالي الجودة. أنصح بها بشدة!',
      quoteEn: 'Easy to use platform with high-quality content. Highly recommend!',
      nameAr: 'سارة علي',
      nameEn: 'Sara Ali',
      roleAr: 'مصممة UI/UX',
      roleEn: 'UI/UX Designer',
      rating: 5,
      initials: 'SA',
    },
    {
      quoteAr: 'التعلم باللغة العربية كان مهمًا بالنسبة لي. شكراً لهذه المنصة الرائعة.',
      quoteEn: 'Learning in Arabic was important to me. Thanks for this amazing platform.',
      nameAr: 'خالد عبدالله',
      nameEn: 'Khaled Abdullah',
      roleAr: 'محلل بيانات',
      roleEn: 'Data Analyst',
      rating: 5,
      initials: 'KA',
    },
  ];

  const steps = [
    {
      numberAr: '١',
      numberEn: '1',
      titleAr: 'اختر مسارًا',
      titleEn: 'Choose your track',
      descriptionAr: 'اختر من بين مئات الدورات في مختلف المجالات',
      descriptionEn: 'Choose from hundreds of courses across various fields',
    },
    {
      numberAr: '٢',
      numberEn: '2',
      titleAr: 'تعلّم بدروس قصيرة',
      titleEn: 'Learn with bite-size lessons',
      descriptionAr: 'دروس قصيرة ومركزة تناسب جدولك',
      descriptionEn: 'Short, focused lessons that fit your schedule',
    },
    {
      numberAr: '٣',
      numberEn: '3',
      titleAr: 'احصل على شهادة',
      titleEn: 'Earn a certificate',
      descriptionAr: 'شهادة معترف بها تضيف قيمة لسيرتك الذاتية',
      descriptionEn: 'Recognized certificate to boost your resume',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Modern 2026 Gradient */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-cyan-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-purple-600 text-white border-none px-6 py-2 shadow-lg">
              {t('🚀 أكثر من 120,000 متعلم يثقون بنا', '🚀 Trusted by 120,000+ learners')}
            </Badge>
            
            <h1 className="mb-6 bg-gradient-to-r from-neutral-900 via-primary to-purple-900 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl">
              {t('ارتقِ بمهاراتك وحقق طموحاتك', 'Rise up and achieve your ambitions')}
            </h1>
            
            <p className="text-xl sm:text-2xl text-neutral-600 mb-10 leading-relaxed">
              {t(
                'تعلم من خلال دورات تدريبية متميزة، واحصل على شهادات معتمدة، وابدأ رحلتك نحو النجاح',
                'Learn through outstanding courses, get certified, and start your journey to success'
              )}
            </p>

            <div className="flex justify-center mb-8">
              <div className="w-full max-w-2xl">
                <SearchBar />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:from-primary-dark hover:via-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all px-8 py-6 text-lg hover:scale-105"
                onClick={() => window.open('https://app.riseup.com/signup', '_blank')}
              >
                {t('ابدأ الآن مجانًا', 'Start Free')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neutral-300 hover:border-primary bg-white/80 backdrop-blur-sm hover:bg-white px-8 py-6 text-lg hover:scale-105 transition-all"
                onClick={() => onNavigate('categories')}
              >
                {t('تصفح الدورات', 'Browse Courses')}
              </Button>
            </div>

            <button
              onClick={() => window.open('https://app.riseup.com/login', '_blank')}
              className="text-neutral-700 hover:text-primary transition-colors mt-2 inline-flex items-center gap-2 group"
            >
              {t('لديك حساب؟ سجل دخولك', 'Have an account? Login')}
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Social Proof - Glass Effect */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-3xl p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-center gap-12 text-center">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <span className="text-xl">4.8/5</span>
              </div>
              <div className="text-neutral-700 text-lg">
                {t('+120 ألف متعلّم', '120k+ learners')}
              </div>
              <div className="flex items-center gap-6 opacity-60">
                <span className="text-neutral-600">Google</span>
                <span className="text-neutral-600">Microsoft</span>
                <span className="text-neutral-600">Amazon</span>
                <span className="text-neutral-600">Meta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Categories - Modern Gradient Cards */}
      <section className="py-24 relative bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-r from-neutral-900 to-primary bg-clip-text text-transparent">
              {t('استكشف الفئات', 'Explore Categories')}
            </h2>
            <p className="text-xl text-neutral-600">
              {t('اختر المجال الذي يناسبك وابدأ رحلتك التعليمية', 'Choose the field that suits you and start your learning journey')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                {...category}
                onClick={() => onNavigate('categories')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why RiseUp - Glass Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-r from-neutral-900 to-accent bg-clip-text text-transparent">
              {t('لماذا رايز أب؟', 'Why RiseUp?')}
            </h2>
            <p className="text-xl text-neutral-600">
              {t('نوفر لك أفضل تجربة تعليمية لتحقيق أهدافك', 'We provide you with the best learning experience to achieve your goals')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works - Modern Gradient */}
      <section className="py-24 relative bg-gradient-to-br from-blue-50 via-purple-50/40 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-r from-neutral-900 via-primary to-purple-900 bg-clip-text text-transparent">
              {t('كيف يعمل', 'How it works')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-2xl shadow-primary/40 group-hover:shadow-primary/60 group-hover:scale-110 transition-all duration-300">
                    {t(step.numberAr, step.numberEn)}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block absolute top-10 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent ${dir === 'rtl' ? 'right-1/2' : 'left-1/2'}`}></div>
                  )}
                </div>
                <h3 className="mb-3 text-xl">{t(step.titleAr, step.titleEn)}</h3>
                <p className="text-neutral-600 leading-relaxed">{t(step.descriptionAr, step.descriptionEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses - Modern Cards */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between mb-16 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <div>
              <h2 className="mb-3 text-4xl sm:text-5xl bg-gradient-to-r from-neutral-900 to-primary bg-clip-text text-transparent">
                {t('دورات شائعة', 'Popular Courses')}
              </h2>
              <p className="text-xl text-neutral-600">
                {t('ابدأ مع أفضل الدورات التعليمية', 'Start with the best educational courses')}
              </p>
            </div>
            <Button 
              variant="outline" 
              className="border-2 hover:border-primary hover:bg-primary/5 transition-all"
              onClick={() => onNavigate('categories')}
            >
              {t('عرض الكل', 'View all')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
                onViewCourse={() => onNavigate('course')}
              />
            ))}
          </div>

          <div className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-purple-50/50 to-accent/10 p-10 border-2 border-primary/20 shadow-xl">
            <div className="relative z-10 text-center">
              <p className="text-xl text-neutral-700 mb-6">
                {t(
                  'استكشف المئات من الدورات التدريبية المتميزة على منصتنا',
                  'Explore hundreds of outstanding courses on our platform'
                )}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
                onClick={() => window.open('https://app.riseup.com/catalog', '_blank')}
              >
                {t('تصفح جميع الدورات', 'Browse all courses')}
              </Button>
            </div>
            
            {/* Decorative Gradient Blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Impact Metrics - Modern Dark Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-neutral-900 via-blue-900/90 to-purple-900/80">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-5xl sm:text-6xl bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                94%
              </div>
              <p className="text-neutral-300 text-lg">{t('معدل إكمال الدورات', 'Course completion rate')}</p>
            </div>
            <div className="group">
              <div className="text-5xl sm:text-6xl bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                {t('٢٤ ساعة', '24h')}
              </div>
              <p className="text-neutral-300 text-lg">{t('متوسط وقت الدرس الأول', 'Average time to first lesson')}</p>
            </div>
            <div className="group">
              <div className="text-5xl sm:text-6xl bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                78%
              </div>
              <p className="text-neutral-300 text-lg">{t('حصلوا على وظيفة جديدة', 'Got a new job')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Glass Cards */}
      <section className="py-24 relative bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-r from-neutral-900 to-primary bg-clip-text text-transparent">
              {t('قصص النجاح', 'Success Stories')}
            </h2>
            <p className="text-xl text-neutral-600">
              {t('اكتشف كيف غيّرت رايز أب حياة المتعلمين', 'Discover how RiseUp changed learners\' lives')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Modern Gradient with Animation */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-purple-700">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white text-4xl sm:text-5xl lg:text-6xl">
            {t('ارتقِ بمستقبلك اليوم — ابدأ مجانًا', 'Rise up your future today — Start free')}
          </h2>
          <p className="text-xl sm:text-2xl mb-10 text-white/95 leading-relaxed">
            {t(
              'انضم إلى آلاف المتعلمين واصنع مستقبلك المهني مع رايز أب',
              'Join thousands of learners and build your professional future with RiseUp'
            )}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-neutral-100 shadow-2xl hover:shadow-white/50 transition-all px-12 py-7 text-xl hover:scale-110 duration-300"
            onClick={() => window.open('https://app.riseup.com/signup', '_blank')}
          >
            {t('ابدأ الآن مجانًا', 'Start now for free')}
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
            <CheckCircle2 className="w-5 h-5" />
            <span>{t('تسجيل مجاني • لا حاجة لبطاقة ائتمان', 'Free signup • No credit card required')}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

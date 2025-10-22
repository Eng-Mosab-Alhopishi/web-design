import { useLanguage } from '../LanguageProvider';
import { CourseCard } from '../CourseCard';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Alert, AlertDescription } from '../ui/alert';
import { Info } from 'lucide-react';
import { useState } from 'react';

export function CategoriesPage() {
  const { t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

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
      topic: 'programming',
      price: 'free',
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
      topic: 'design',
      price: 'pro',
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
      topic: 'data',
      price: 'pro',
    },
    {
      titleAr: 'التسويق الرقمي',
      titleEn: 'Digital Marketing',
      descriptionAr: 'استراتيجيات التسويق الرقمي الحديثة',
      descriptionEn: 'Modern digital marketing strategies',
      duration: '10h',
      rating: 4.6,
      learners: '9k',
      level: 'Beginner',
      levelAr: 'مبتدئ',
      slug: 'digital-marketing',
      topic: 'marketing',
      price: 'free',
    },
    {
      titleAr: 'إدارة المشاريع الرشيقة',
      titleEn: 'Agile Project Management',
      descriptionAr: 'منهجيات Agile و Scrum',
      descriptionEn: 'Agile and Scrum methodologies',
      duration: '6h',
      rating: 4.8,
      learners: '7k',
      level: 'Intermediate',
      levelAr: 'متوسط',
      slug: 'agile-pm',
      topic: 'business',
      price: 'pro',
    },
    {
      titleAr: 'تعلم الإنجليزية للأعمال',
      titleEn: 'Business English',
      descriptionAr: 'الإنجليزية للتواصل المهني',
      descriptionEn: 'English for professional communication',
      duration: '20h',
      rating: 4.7,
      learners: '14k',
      level: 'Intermediate',
      levelAr: 'متوسط',
      slug: 'business-english',
      topic: 'languages',
      price: 'free',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">{t('استكشف الدورات', 'Explore Courses')}</h1>
          <p className="text-xl text-neutral-600">
            {t(
              'تصفح مئات الدورات في مختلف المجالات',
              'Browse hundreds of courses across various fields'
            )}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger>
                <SelectValue placeholder={t('الموضوع', 'Topic')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('جميع المواضيع', 'All Topics')}</SelectItem>
                <SelectItem value="programming">{t('البرمجة', 'Programming')}</SelectItem>
                <SelectItem value="design">{t('التصميم', 'Design')}</SelectItem>
                <SelectItem value="business">{t('الأعمال', 'Business')}</SelectItem>
                <SelectItem value="data">{t('البيانات', 'Data')}</SelectItem>
                <SelectItem value="marketing">{t('التسويق', 'Marketing')}</SelectItem>
                <SelectItem value="languages">{t('اللغات', 'Languages')}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder={t('المستوى', 'Level')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('جميع المستويات', 'All Levels')}</SelectItem>
                <SelectItem value="beginner">{t('مبتدئ', 'Beginner')}</SelectItem>
                <SelectItem value="intermediate">{t('متوسط', 'Intermediate')}</SelectItem>
                <SelectItem value="advanced">{t('متقدم', 'Advanced')}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue placeholder={t('اللغة', 'Language')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('جميع اللغات', 'All Languages')}</SelectItem>
                <SelectItem value="ar">{t('عربي', 'Arabic')}</SelectItem>
                <SelectItem value="en">{t('إنجليزي', 'English')}</SelectItem>
                <SelectItem value="both">{t('ثنائي اللغة', 'Bilingual')}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger>
                <SelectValue placeholder={t('السعر', 'Price')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('الكل', 'All')}</SelectItem>
                <SelectItem value="free">{t('مجاني', 'Free')}</SelectItem>
                <SelectItem value="pro">{t('احترافي', 'Pro')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notice */}
          <Alert className="mt-6 bg-primary/5 border-primary/20">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription>
              {t(
                'للمزيد من الفلاتر والتفاصيل، انتقل إلى المنصّة.',
                'For advanced filters and full details, continue in the platform.'
              )}
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-neutral-600">
              {t('عرض', 'Showing')} {courses.length} {t('دورة', 'courses')}
            </p>
            <Button
              onClick={() =>
                window.open(
                  `https://app.brand.com/catalog?topic=${selectedTopic}&level=${selectedLevel}`,
                  '_blank'
                )
              }
            >
              {t('عرض في المنصة', 'View in platform')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
                onViewCourse={() => {
                  // Navigate to course page would go here
                }}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://app.brand.com/catalog', '_blank')}
            >
              {t('تحميل المزيد', 'Load more')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

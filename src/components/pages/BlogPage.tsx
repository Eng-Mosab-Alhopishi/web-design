import { useLanguage } from '../LanguageProvider';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Clock, ArrowRight, Search } from 'lucide-react';

export function BlogPage() {
  const { t, dir } = useLanguage();

  const posts = [
    {
      titleAr: 'أفضل 10 لغات برمجة للتعلم في 2025',
      titleEn: 'Top 10 Programming Languages to Learn in 2025',
      excerptAr: 'اكتشف أكثر لغات البرمجة طلبًا في سوق العمل',
      excerptEn: 'Discover the most in-demand programming languages in the job market',
      categoryAr: 'البرمجة',
      categoryEn: 'Programming',
      readTime: '5 min',
      date: 'Oct 15, 2025',
      dateAr: '15 أكتوبر 2025',
      slug: 'top-10-programming-languages',
    },
    {
      titleAr: 'كيف تبني محفظة تصميم احترافية',
      titleEn: 'How to Build a Professional Design Portfolio',
      excerptAr: 'خطوات عملية لإنشاء محفظة أعمال تجذب أصحاب العمل',
      excerptEn: 'Practical steps to create a portfolio that attracts employers',
      categoryAr: 'التصميم',
      categoryEn: 'Design',
      readTime: '7 min',
      date: 'Oct 12, 2025',
      dateAr: '12 أكتوبر 2025',
      slug: 'build-design-portfolio',
    },
    {
      titleAr: 'الذكاء الاصطناعي وتأثيره على التعليم',
      titleEn: 'AI and Its Impact on Education',
      excerptAr: 'كيف يغير الذكاء الاصطناعي طريقة التعلم',
      excerptEn: 'How AI is changing the way we learn',
      categoryAr: 'التعليم',
      categoryEn: 'Education',
      readTime: '6 min',
      date: 'Oct 10, 2025',
      dateAr: '10 أكتوبر 2025',
      slug: 'ai-impact-education',
    },
    {
      titleAr: 'نصائح لإتقان التعلم الذاتي',
      titleEn: 'Tips for Mastering Self-Learning',
      excerptAr: 'استراتيجيات فعالة للتعلم المستقل والمستمر',
      excerptEn: 'Effective strategies for independent and continuous learning',
      categoryAr: 'التطوير الذاتي',
      categoryEn: 'Self Development',
      readTime: '4 min',
      date: 'Oct 8, 2025',
      dateAr: '8 أكتوبر 2025',
      slug: 'self-learning-tips',
    },
    {
      titleAr: 'دليل المبتدئين لتحليل البيانات',
      titleEn: 'Beginner\'s Guide to Data Analysis',
      excerptAr: 'ابدأ رحلتك في عالم تحليل البيانات',
      excerptEn: 'Start your journey in the world of data analysis',
      categoryAr: 'البيانات',
      categoryEn: 'Data',
      readTime: '8 min',
      date: 'Oct 5, 2025',
      dateAr: '5 أكتوبر 2025',
      slug: 'data-analysis-guide',
    },
    {
      titleAr: 'أهمية الشهادات المهنية في 2025',
      titleEn: 'The Importance of Professional Certificates in 2025',
      excerptAr: 'كيف تعزز الشهادات المهنية فرصك الوظيفية',
      excerptEn: 'How professional certificates boost your career prospects',
      categoryAr: 'الوظائف',
      categoryEn: 'Career',
      readTime: '5 min',
      date: 'Oct 1, 2025',
      dateAr: '1 أكتوبر 2025',
      slug: 'professional-certificates',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">{t('المدونة والموارد', 'Blog & Resources')}</h1>
          <p className="text-xl text-neutral-600 mb-8">
            {t(
              'مقالات ونصائح لمساعدتك في رحلة التعلم',
              'Articles and tips to help you in your learning journey'
            )}
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <Input
              type="search"
              placeholder={t('ابحث في المقالات...', 'Search articles...')}
              className="pl-12"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
              {t('الكل', 'All')}
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
              {t('البرمجة', 'Programming')}
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
              {t('التصميم', 'Design')}
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
              {t('البيانات', 'Data')}
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
              {t('التعليم', 'Education')}
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
              {t('الوظائف', 'Career')}
            </Badge>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white border border-neutral-300 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl">
                    {t(post.titleAr, post.titleEn).substring(0, 2)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge>{t(post.categoryAr, post.categoryEn)}</Badge>
                    <span className="text-sm text-neutral-600 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-2 group-hover:text-primary transition-colors">
                    {t(post.titleAr, post.titleEn)}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    {t(post.excerptAr, post.excerptEn)}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {t(post.dateAr, post.date)}
                    </span>
                    <button className="text-primary hover:underline inline-flex items-center gap-1">
                      {t('اقرأ المزيد', 'Read more')}
                      <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              {t('تحميل المزيد', 'Load more')}
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">{t('اشترك في نشرتنا الإخبارية', 'Subscribe to our newsletter')}</h2>
          <p className="text-xl mb-8 text-white/90">
            {t(
              'احصل على آخر المقالات والنصائح في بريدك',
              'Get the latest articles and tips in your inbox'
            )}
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('بريدك الإلكتروني', 'Your email')}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary">{t('اشترك', 'Subscribe')}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

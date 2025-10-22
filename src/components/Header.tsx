import { useLanguage } from './LanguageProvider';
import { Button } from './ui/button';
import { Globe, Menu, X, Search, Mail, BookOpen, Code, Palette, Briefcase, TrendingUp, Database, Lightbulb, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const { language, setLanguage, t, dir } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);

  const categories = [
    {
      icon: Code,
      titleAr: 'البرمجة',
      titleEn: 'Programming',
      descAr: 'تطوير الويب والتطبيقات',
      descEn: 'Web & App Development',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      titleAr: 'التصميم',
      titleEn: 'Design',
      descAr: 'UI/UX والتصميم الجرافيكي',
      descEn: 'UI/UX & Graphic Design',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      titleAr: 'الأعمال',
      titleEn: 'Business',
      descAr: 'إدارة وريادة الأعمال',
      descEn: 'Management & Entrepreneurship',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      titleAr: 'التسويق',
      titleEn: 'Marketing',
      descAr: 'التسويق الرقمي والمبيعات',
      descEn: 'Digital Marketing & Sales',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      titleAr: 'علوم البيانات',
      titleEn: 'Data Science',
      descAr: 'تحليل البيانات والذكاء الاصطناعي',
      descEn: 'Data Analysis & AI',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Lightbulb,
      titleAr: 'التطوير الشخصي',
      titleEn: 'Personal Development',
      descAr: 'المهارات الشخصية والقيادة',
      descEn: 'Soft Skills & Leadership',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const navItems = [
    { key: 'home', label: t('الرئيسية', 'Home') },
    { key: 'courses', label: t('الدورات', 'Courses'), hasDropdown: true },
    { key: 'pricing', label: t('الأسعار', 'Pricing') },
    { key: 'teams', label: t('للفرق', 'For Teams') },
    { key: 'blog', label: t('المدونة', 'Blog') },
    { key: 'about', label: t('من نحن', 'About') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] shadow-xl border-b border-white/10">
      {/* Top Bar with Contact Info */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between h-10 text-sm ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-6 text-neutral-300 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <a href="mailto:info@riseup.com" className={`flex items-center gap-2 hover:text-white transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-3.5 h-3.5" />
                <span>info@riseup.com</span>
              </a>
            </div>
            
            {/* Search and Language */}
            <div className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              {/* Compact Search Bar */}
              <div className="relative hidden md:block">
                <Search className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400 ${dir === 'rtl' ? 'right-2.5' : 'left-2.5'}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('ابحث...', 'Search...')}
                  className={`w-48 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md py-1.5 text-xs text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary focus:w-64 transition-all ${dir === 'rtl' ? 'pr-8 pl-3' : 'pl-8 pr-3'}`}
                />
              </div>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-all"
                aria-label={t('تبديل اللغة', 'Toggle language')}
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="text-xs">{language === 'ar' ? 'EN' : 'AR'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-20 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="group transition-all"
            >
              <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent font-bold text-2xl group-hover:scale-105 transition-transform inline-block">
                {t('رايز أب', 'RiseUp')}
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-1 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {navItems.map((item) => (
              <div 
                key={item.key} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowCoursesMenu(true)}
                onMouseLeave={() => item.hasDropdown && setShowCoursesMenu(false)}
              >
                <button
                  onClick={() => !item.hasDropdown && onNavigate(item.key)}
                  className={`relative px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.key || (item.key === 'courses' && currentPage === 'categories')
                      ? 'text-white bg-white/10'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    {item.label}
                    {item.hasDropdown && <GraduationCap className="w-4 h-4" />}
                  </span>
                </button>

                {/* Mega Menu for Courses */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {showCoursesMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full ${dir === 'rtl' ? 'right-0' : 'left-0'} mt-2 w-[600px] bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden`}
                      >
                        {/* Glass effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                        
                        <div className="relative p-6">
                          {/* Header */}
                          <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-white/10 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className={`text-white ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                                {t('استكشف الدورات', 'Explore Courses')}
                              </h3>
                              <p className={`text-xs text-neutral-400 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                                {t('اختر المجال المناسب لك', 'Choose your learning path')}
                              </p>
                            </div>
                          </div>

                          {/* Categories Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {categories.map((category, index) => {
                              const Icon = category.icon;
                              return (
                                <motion.button
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  onClick={() => {
                                    onNavigate('categories');
                                    setShowCoursesMenu(false);
                                  }}
                                  className={`group relative p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-${dir === 'rtl' ? 'right' : 'left'}`}
                                >
                                  {/* Gradient overlay on hover */}
                                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
                                  
                                  <div className={`relative flex items-start gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                      <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className={`text-white text-sm mb-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                                        {language === 'ar' ? category.titleAr : category.titleEn}
                                      </h4>
                                      <p className={`text-xs text-neutral-400 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                                        {language === 'ar' ? category.descAr : category.descEn}
                                      </p>
                                    </div>
                                  </div>
                                </motion.button>
                              );
                            })}
                          </div>

                          {/* View All Button */}
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => {
                              onNavigate('categories');
                              setShowCoursesMenu(false);
                            }}
                            className="w-full mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30 transition-all"
                          >
                            {t('عرض جميع الدورات', 'View All Courses')}
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => window.open('https://app.riseup.com/login', '_blank')}
              >
                {t('تسجيل الدخول', 'Login')}
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
                onClick={() => window.open('https://app.riseup.com/signup', '_blank')}
              >
                {t('ابدأ الآن', 'Start Now')}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t('القائمة', 'Menu')}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {/* Mobile Search */}
            <div className="mb-4 px-2">
              <div className="relative w-full">
                <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('ابحث عن الدورات...', 'Search courses...')}
                  className={`w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-2.5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                />
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key === 'courses' ? 'categories' : item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-${dir === 'rtl' ? 'right' : 'left'} px-3 py-2.5 rounded-lg transition-all ${
                    currentPage === item.key || (item.key === 'courses' && currentPage === 'categories')
                      ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-white border border-primary/30'
                      : 'text-neutral-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-2">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                  onClick={() => window.open('https://app.riseup.com/login', '_blank')}
                >
                  {t('تسجيل الدخول', 'Login')}
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white"
                  onClick={() => window.open('https://app.riseup.com/signup', '_blank')}
                >
                  {t('ابدأ الآن', 'Start Now')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

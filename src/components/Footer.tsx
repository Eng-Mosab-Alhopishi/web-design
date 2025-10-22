import { useLanguage } from './LanguageProvider';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const footerLinks = {
    product: {
      title: t('المنتج', 'Product'),
      links: [
        { label: t('المميزات', 'Features'), page: 'features' },
        { label: t('الفئات', 'Categories'), page: 'categories' },
        { label: t('الأسعار', 'Pricing'), page: 'pricing' },
        { label: t('تطبيق الجوال', 'Mobile Apps'), page: 'home' },
      ],
    },
    company: {
      title: t('الشركة', 'Company'),
      links: [
        { label: t('من نحن', 'About'), page: 'about' },
        { label: t('المدونة', 'Blog'), page: 'blog' },
        { label: t('وظائف', 'Careers'), page: 'careers' },
        { label: t('تواصل معنا', 'Contact'), page: 'contact' },
      ],
    },
    resources: {
      title: t('الموارد', 'Resources'),
      links: [
        { label: t('المساعدة', 'Help Center'), page: 'help' },
        { label: t('علّم معنا', 'Teach'), page: 'teach' },
        { label: t('للفرق', 'For Teams'), page: 'teams' },
        { label: t('القصص', 'Stories'), page: 'stories' },
      ],
    },
    legal: {
      title: t('قانوني', 'Legal'),
      links: [
        { label: t('الشروط', 'Terms'), page: 'terms' },
        { label: t('الخصوصية', 'Privacy'), page: 'privacy' },
        { label: t('ملفات تعريف الارتباط', 'Cookies'), page: 'cookies' },
      ],
    },
  };

  const { dir } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-blue-900/80 to-purple-900/70 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-5">
              {t('رايز أب', 'RiseUp')}
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              {t(
                'ارتقِ بمهاراتك وحقق طموحاتك مع أفضل الدورات التدريبية',
                'Rise up with the best training courses to achieve your ambitions'
              )}
            </p>
            <div className={`flex gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <Input
                type="email"
                placeholder={t('بريدك الإلكتروني', 'Your email')}
                className={`bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-primary focus:bg-white/15 backdrop-blur-sm ${dir === 'rtl' ? 'text-right' : ''}`}
              />
              <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white shadow-lg">
                {t('اشترك', 'Subscribe')}
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, idx) => (
            <div key={idx}>
              <h4 className="mb-5 text-lg text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-neutral-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className={`pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 ${dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
          <div className={`flex gap-5 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-neutral-400">
            © 2025 {t('رايز أب', 'RiseUp')}. {t('جميع الحقوق محفوظة', 'All rights reserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
}

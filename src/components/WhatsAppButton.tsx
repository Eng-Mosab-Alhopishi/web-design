import { useLanguage } from './LanguageProvider';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const { t, dir } = useLanguage();
  
  // رقم الواتساب - يمكن تغييره حسب الحاجة
  const whatsappNumber = '966123456789'; // بدون + أو 00
  const message = t(
    'مرحباً، أريد الاستفسار عن الدورات التدريبية',
    'Hello, I would like to inquire about the courses'
  );
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 z-50 group ${dir === 'rtl' ? 'left-6' : 'right-6'}`}
      aria-label={t('تواصل عبر واتساب', 'Contact via WhatsApp')}
    >
      {/* Floating Button */}
      <div className="relative">
        {/* Pulsing Ring Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
          <MessageCircle className="w-8 h-8 text-white" fill="white" />
        </div>

        {/* Tooltip */}
        <div className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl ${
          dir === 'rtl' 
            ? 'right-full mr-3' 
            : 'left-full ml-3'
        }`}>
          {t('تواصل معنا عبر واتساب', 'Contact us on WhatsApp')}
          <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-900 rotate-45 ${
            dir === 'rtl' 
              ? 'right-0 translate-x-1' 
              : 'left-0 -translate-x-1'
          }`}></div>
        </div>
      </div>
    </a>
  );
}

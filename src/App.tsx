import { useState } from 'react';
import { LanguageProvider } from './components/LanguageProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './components/pages/HomePage';
import { FeaturesPage } from './components/pages/FeaturesPage';
import { CategoriesPage } from './components/pages/CategoriesPage';
import { PricingPage } from './components/pages/PricingPage';
import { TeachPage } from './components/pages/TeachPage';
import { TeamsPage } from './components/pages/TeamsPage';
import { BlogPage } from './components/pages/BlogPage';
import { CoursePage } from './components/pages/CoursePage';
import { AboutPage } from './components/pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'features':
        return <FeaturesPage onNavigate={setCurrentPage} />;
      case 'categories':
        return <CategoriesPage onNavigate={setCurrentPage} />;
      case 'pricing':
        return <PricingPage onNavigate={setCurrentPage} />;
      case 'teach':
        return <TeachPage onNavigate={setCurrentPage} />;
      case 'teams':
        return <TeamsPage onNavigate={setCurrentPage} />;
      case 'blog':
        return <BlogPage onNavigate={setCurrentPage} />;
      case 'course':
        return <CoursePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer onNavigate={setCurrentPage} />
        
        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

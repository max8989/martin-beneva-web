'use client';

import { useLanguage } from '@/components/LanguageContext';
import { BookingForm } from '@/components/BookingForm';

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Language Toggle - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full font-medium text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm"
          aria-label="Toggle language"
        >
          {t.languageToggle}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t.aboutTitle}
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>{t.aboutDescription}</p>
            <p>{t.aboutDescription2}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t.servicesTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-900 dark:bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-400">
            {t.ctaSubtitle}
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="px-6 py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Martin Beneva. {t.footerRights}.</p>
        </div>
      </footer>
    </div>
  );
}

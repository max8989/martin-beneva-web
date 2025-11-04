'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/components/LanguageContext';
import { BookingForm } from '@/components/BookingForm';
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle').then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    router.push(`/${newLang}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-950 dark:via-purple-950/10 dark:to-gray-950">
      {/* Language & Theme Toggle - Fixed Top Right */}
      <div className="fixed top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-50 flex gap-2 sm:gap-3">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 border-[#4B009B] rounded-full font-semibold text-xs sm:text-sm text-[#4B009B] dark:text-white hover:bg-[#4B009B] hover:text-white hover:scale-105 dark:hover:bg-[#3a0079] transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Toggle language"
        >
          {t.languageToggle}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4B009B] via-[#6200c4] to-[#4B009B] tracking-tight mb-6 sm:mb-8 leading-tight animate-fade-in-up gradient-animated">
            {t.heroTitle}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in-up leading-relaxed px-2" style={{ animationDelay: '0.2s' }}>
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            <a
              href="#booking"
              className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#4B009B] to-[#6200c4] text-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {language === 'en' ? 'Book Now' : 'Réserver Maintenant'}
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 text-[#4B009B] dark:text-purple-300 rounded-full font-semibold text-base sm:text-lg hover:border-[#4B009B] hover:shadow-lg transition-all duration-300"
            >
              {language === 'en' ? 'Learn More' : 'En Savoir Plus'}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 sm:px-6 py-12 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-8 md:gap-12 items-start">
            {/* Left - Professional Photo */}
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm mb-8 md:mb-0">
              <div className="relative group">
                {/* Gradient border effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#4B009B] via-purple-500 to-pink-500 rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>

                {/* Image container */}
                <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-2 shadow-2xl overflow-hidden">
                  <Image
                    src="/martin-gagne.jpg"
                    alt="Martin Gagne - Professional Consultant"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
                    priority
                  />
                </div>

                {/* Name badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#4B009B] to-[#6200c4] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full shadow-xl whitespace-nowrap">
                  <p className="font-bold text-sm sm:text-lg">{t.heroName}</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d2d] dark:text-white mb-4 sm:mb-6 leading-tight">
                {t.aboutTitle}
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="text-lg sm:text-xl">{t.aboutDescription}</p>
                <p>{t.aboutDescription2}</p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h3 className="font-semibold text-[#4B009B] dark:text-purple-300 mb-1">
                      {language === 'en' ? 'Trust & Integrity' : 'Confiance & Intégrité'}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Building relationships based on honesty and transparency' : 'Relations basées sur l\'honnêteté et la transparence'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-[#4B009B] dark:text-purple-300 mb-1">
                      {language === 'en' ? 'Personalized Solutions' : 'Solutions Personnalisées'}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Tailored strategies that fit your unique goals' : 'Stratégies adaptées à vos objectifs uniques'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h3 className="font-semibold text-[#4B009B] dark:text-purple-300 mb-1">
                      {language === 'en' ? 'Long-term Partnership' : 'Partenariat à Long Terme'}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Committed to your financial success for years to come' : 'Engagé pour votre succès financier à long terme'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 md:py-32 bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-gray-950 dark:via-purple-950/10 dark:to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-[#4B009B] dark:text-purple-400 text-sm font-semibold mb-4">
              {language === 'en' ? 'What I Offer' : 'Mes Services'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d2d] dark:text-white mb-4 px-4">
              {t.servicesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t.services.map((service, index) => {
              const icons = ['📊', '⚡', '🚀'];
              const gradients = [
                'from-purple-500 to-pink-500',
                'from-[#4B009B] to-purple-500',
                'from-pink-500 to-purple-600'
              ];

              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Gradient border effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index]} rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>

                  {/* Card content */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 h-full hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {icons[index]}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2d2d2d] dark:text-white mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Animated arrow */}
                    <div className="mt-6 flex items-center text-[#4B009B] dark:text-purple-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">{language === 'en' ? 'Learn more' : 'En savoir plus'}</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-20 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4B009B] via-[#6200c4] to-[#4B009B] gradient-animated"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 sm:opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 border-2 sm:border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 border-2 sm:border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 border-2 sm:border-4 border-white rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {t.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <a
            href="#booking"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-[#4B009B] rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            {language === 'en' ? 'Schedule Your Free Consultation' : 'Planifiez Votre Consultation Gratuite'}
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="px-4 sm:px-6 py-12 sm:py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d2d] dark:text-white mb-3 sm:mb-4">
              {language === 'en' ? 'Book Your Appointment' : 'Réservez Votre Rendez-vous'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {language === 'en' ? 'Take the first step towards success' : 'Faites le premier pas vers le succès'}
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-gray-900 to-[#4B009B] dark:from-black dark:to-[#3a0079]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t.heroName}</h3>
              <p className="text-xs sm:text-sm text-purple-300 mb-2">
                {language === 'en' ? 'Financial Services Advisor' : 'Conseiller en Services Financiers'}
              </p>
              <p className="text-sm sm:text-base text-purple-200">
                {language === 'en'
                  ? 'Helping you build a secure financial future with personalized advice and strategic planning.'
                  : 'Vous aider à bâtir un avenir financier sécurisé avec des conseils personnalisés et une planification stratégique.'}
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm sm:text-base text-purple-200 hover:text-white transition-colors">{language === 'en' ? 'About' : 'À Propos'}</a></li>
                <li><a href="#services" className="text-sm sm:text-base text-purple-200 hover:text-white transition-colors">{language === 'en' ? 'Services' : 'Services'}</a></li>
                <li><a href="#booking" className="text-sm sm:text-base text-purple-200 hover:text-white transition-colors">{language === 'en' ? 'Book Now' : 'Réserver'}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                {language === 'en' ? 'Contact' : 'Contact'}
              </h4>
              <p className="text-sm sm:text-base text-purple-200">
                {language === 'en'
                  ? 'Fill out the form above to get in touch.'
                  : 'Remplissez le formulaire ci-dessus pour nous contacter.'}
              </p>
            </div>
          </div>
          <div className="border-t border-purple-400/30 pt-6 sm:pt-8 text-center text-sm sm:text-base text-purple-200">
            <p>© {new Date().getFullYear()} {t.heroName}. {t.footerRights}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { useLanguage } from './LanguageContext';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function BookingForm() {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState<FormState>('idle');

  const schema = z.object({
    name: z.string()
      .min(1, { message: t.validationNameRequired })
      .min(2, { message: t.validationNameMin }),
    email: z.string()
      .min(1, { message: t.validationEmailRequired })
      .email({ message: t.validationEmailInvalid }),
    phone: z.string()
      .min(1, { message: t.validationPhoneRequired })
      .min(8, { message: t.validationPhoneMin }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setFormState('submitting');

    try {
      const { error } = await supabase
        .from('appointment_requests')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
          },
        ]);

      if (error) throw error;

      setFormState('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');
    }
  };

  const handleReset = () => {
    setFormState('idle');
    reset();
  };

  // Success state
  if (formState === 'success') {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-3xl p-10 text-center shadow-lg">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#2d2d2d] dark:text-white mb-3">
            {t.successTitle}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            {t.successMessage}
          </p>
          <button
            onClick={handleReset}
            className="px-8 py-3.5 bg-[#4B009B] text-white rounded-full font-semibold hover:bg-[#3a0079] transition-all shadow-md hover:shadow-lg"
          >
            {t.successButton}
          </button>
        </div>
      </div>
    );
  }

  // Error state
  if (formState === 'error') {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-3xl p-10 text-center shadow-lg">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#2d2d2d] dark:text-white mb-3">
            {t.errorTitle}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            {t.errorMessage}
          </p>
          <button
            onClick={handleReset}
            className="px-8 py-3.5 bg-[#4B009B] text-white rounded-full font-semibold hover:bg-[#3a0079] transition-all shadow-md hover:shadow-lg"
          >
            {t.errorButton}
          </button>
        </div>
      </div>
    );
  }

  // Form state
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Gradient border wrapper */}
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#4B009B] via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30"></div>

        <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-[#2d2d2d] dark:text-gray-200 mb-3 flex items-center gap-2"
              >
                <span className="text-[#4B009B]">👤</span>
                {t.formName}
              </label>
              <div className="relative">
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  placeholder={t.formNamePlaceholder}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-[#2d2d2d] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4B009B] focus:border-transparent focus:bg-white dark:focus:bg-gray-800 transition-all duration-300"
                  disabled={formState === 'submitting'}
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                  <span>⚠</span> {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-[#2d2d2d] dark:text-gray-200 mb-3 flex items-center gap-2"
              >
                <span className="text-[#4B009B]">✉️</span>
                {t.formEmail}
              </label>
              <div className="relative">
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder={t.formEmailPlaceholder}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-[#2d2d2d] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4B009B] focus:border-transparent focus:bg-white dark:focus:bg-gray-800 transition-all duration-300"
                  disabled={formState === 'submitting'}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                  <span>⚠</span> {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="group">
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-[#2d2d2d] dark:text-gray-200 mb-3 flex items-center gap-2"
              >
                <span className="text-[#4B009B]">📱</span>
                {t.formPhone}
              </label>
              <div className="relative">
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  placeholder={t.formPhonePlaceholder}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-[#2d2d2d] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4B009B] focus:border-transparent focus:bg-white dark:focus:bg-gray-800 transition-all duration-300"
                  disabled={formState === 'submitting'}
                />
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                  <span>⚠</span> {errors.phone.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="group w-full mt-8 px-8 py-5 bg-gradient-to-r from-[#4B009B] to-[#6200c4] text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {formState === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.formSubmitting}
                  </>
                ) : (
                  <>
                    {t.formSubmit}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6200c4] to-[#4B009B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Trust badge */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              🔒 {language === 'en' ? 'Your information is secure and confidential' : 'Vos informations sont sécurisées et confidentielles'}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

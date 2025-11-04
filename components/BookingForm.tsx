'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { useLanguage } from './LanguageContext';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function BookingForm() {
  const { t } = useLanguage();
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
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {t.successTitle}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t.successMessage}
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
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
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {t.errorTitle}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t.errorMessage}
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            {t.errorButton}
          </button>
        </div>
      </div>
    );
  }

  // Form state
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {t.formTitle}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t.formDescription}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.formName}
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              placeholder={t.formNamePlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all"
              disabled={formState === 'submitting'}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.formEmail}
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder={t.formEmailPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all"
              disabled={formState === 'submitting'}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.formPhone}
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              placeholder={t.formPhonePlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all"
              disabled={formState === 'submitting'}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {formState === 'submitting' ? t.formSubmitting : t.formSubmit}
          </button>
        </form>
      </div>
    </div>
  );
}

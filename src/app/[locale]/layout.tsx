'use client';
import { ReactNode } from 'react';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { MainNavigation } from '@/components/ui/navigation-menu';
import { NextIntlClientProvider } from 'next-intl';
import { useParams } from 'next/navigation';
import enMessages from '../../../messages/en.json';
import frMessages from '../../../messages/fr.json';

const messagesMap: Record<string, any> = {
  en: enMessages,
  fr: frMessages,
};

export default function LocaleLayout({ children }: { children: ReactNode }) {
  const params = useParams();
  const locale = (params as any)?.locale || 'fr';
  const messages = messagesMap[locale] || frMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-white flex flex-col">
        <MainNavigation />
        {/* <LanguageSwitcher /> */}
        {children}
      </div>
    </NextIntlClientProvider>
  );
} 
"use client";
import { useTranslations } from 'next-intl';

export default function ShaykhNazimPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('bibliotheque.shaykhNazim');
  return (
    <main className="py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-600">{t('description')}</p>
    </main>
  );
} 
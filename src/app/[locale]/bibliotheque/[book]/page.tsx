"use client";
import { useTranslations } from 'next-intl';

export default function BookPage({ params }: { params: { locale: string; book: string } }) {
  const t = useTranslations('bibliotheque.book');
  return (
    <main className="py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{t('title', { book: params.book })}</h1>
      <p className="text-lg text-gray-600">{t('description', { book: params.book })}</p>
    </main>
  );
} 
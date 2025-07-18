import { useTranslations } from 'next-intl';

export async function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'en' },
  ];
}

export default function BibliothequePage() {
  const t = useTranslations();
  return (
    <main className="flex flex-col items-center justify-center flex-1 py-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">{t('library.title')}</h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
        {t('library.description')}
      </p>
    </main>
  );
} 
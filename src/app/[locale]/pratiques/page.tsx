'use client';
import { useTranslations } from 'next-intl';
import { Heart, BookOpen, Clock, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PracticesPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('practices');
  const { locale } = params;
  
  return (
    <main className="min-h-screen py-16 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Awrad Overview Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-500 text-white rounded-xl">
              <Heart className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('awrad.title')}
              </h2>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {t('awrad.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Practice Levels Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Initiate Level */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500 text-white rounded-xl">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('initie.title')}
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('initie.description')}
            </p>
            
            <div className="space-y-3 mb-6">
              {t.raw('initie.practices').map((practice: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {practice}
                  </span>
                </div>
              ))}
            </div>
            
            <Link 
              href={`/${locale}/pratiques/initie`}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 transition-colors"
            >
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Prepared Level */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500 text-white rounded-xl">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('prepare.title')}
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('prepare.description')}
            </p>
            
            <div className="space-y-3 mb-6">
              {t.raw('prepare.practices').map((practice: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {practice}
                  </span>
                </div>
              ))}
            </div>
            
            <Link 
              href={`/${locale}/pratiques/prepare`}
              className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-medium hover:text-green-700 transition-colors"
            >
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Determination Level */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-500 text-white rounded-xl">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('determination.title')}
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('determination.description')}
            </p>
            
            <div className="space-y-3 mb-6">
              {t.raw('determination.practices').map((practice: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {practice}
                  </span>
                </div>
              ))}
            </div>
            
            <Link 
              href={`/${locale}/pratiques/determination`}
              className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-medium hover:text-red-700 transition-colors"
            >
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Commencez Votre Voyage Spirituel
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Choisissez le niveau qui correspond à votre progression spirituelle et commencez à pratiquer dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/pratiques/awrad`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Découvrir les Awrad
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href={`/${locale}/dhikr`}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
            >
              Pratiquer le Dhikr
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
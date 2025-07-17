'use client';
import { useTranslations } from 'next-intl';
import { Crown, Users, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GoldenChainPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('chaineDoree');
  const { locale } = params;
  
  const masters = t.raw('masters');
  
  return (
    <main className="min-h-screen py-16 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
              <Crown className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-yellow-500 text-white rounded-xl">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                La Chaîne Dorée : 41 Maîtres
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Une lignée ininterrompue de transmission spirituelle depuis le Prophète Muhammad ﷺ jusqu'à nos jours.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">41</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Maîtres Spirituels</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">1400+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Années de Transmission</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bénédictions Continues</div>
            </div>
          </div>
          
          <Link 
            href={`/${locale}/chaine-doree/timeline`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors"
          >
            Voir la Chronologie Interactive
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Masters Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Les 41 Maîtres de la Chaîne Dorée
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Chaque maître a transmis la lumière spirituelle à son successeur, créant une chaîne ininterrompue de guidance divine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {masters.map((master: string, index: number) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 transition-colors">
                {master}
              </h3>
              
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Maître #{index + 1} de la Chaîne
              </div>
              
              <Link 
                href={`/${locale}/chaine-doree/${encodeURIComponent(master.toLowerCase().replace(/\s+/g, '-'))}`}
                className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 text-sm font-medium hover:text-yellow-700 transition-colors"
              >
                En savoir plus
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Special Focus Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Shah Naqshband
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Le 17ème maître de la chaîne, Muhammad Baha'uddin Shah Naqshband, est celui qui a donné son nom à notre tariqa. 
              Ses enseignements et sa méthode de dhikr silencieux (dhikr khafi) sont au cœur de notre pratique spirituelle.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Dhikr silencieux (khafi)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Présence du cœur (hudur)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Guidance spirituelle directe</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-3xl p-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                La Transmission Spirituelle
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Chaque maître reçoit et transmet la lumière spirituelle (nur) à son successeur, 
                créant une chaîne ininterrompue de guidance divine.
              </p>
              <Link 
                href={`/${locale}/chaine-doree/muhammad-baha-uddin-shah-naqshband`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors"
              >
                Découvrir Shah Naqshband
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explorez la Sagesse des Maîtres
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Découvrez les biographies, enseignements et miracles de chaque maître de la Chaîne Dorée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/chaine-doree/timeline`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-yellow-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Chronologie Interactive
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href={`/${locale}/bibliotheque`}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-yellow-600 transition-all"
            >
              Bibliothèque des Maîtres
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
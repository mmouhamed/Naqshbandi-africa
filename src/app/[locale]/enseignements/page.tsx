'use client';
import { useTranslations } from 'next-intl';
import { BookOpen, Play, FileText, ArrowRight } from 'lucide-react';

export default function TeachingsPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('teachings');
  
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

      {/* Online Courses Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-500 text-white rounded-xl">
              <BookOpen className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('onlineCourses.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {t('onlineCourses.description')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {t.raw('onlineCourses.courses').map((course: any, index: number) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-4">
            <p className="text-blue-800 dark:text-blue-200 text-sm italic">
              {t('onlineCourses.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Videos & Audio Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-green-500 text-white rounded-xl">
              <Play className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('videosAudio.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {t('videosAudio.description')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {t.raw('videosAudio.content').map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          
          <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-4">
            <p className="text-green-800 dark:text-green-200 text-sm italic">
              {t('videosAudio.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Readings & Documents Section */}
      <section className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-500 text-white rounded-xl">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('readingsDocuments.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {t('readingsDocuments.description')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {t.raw('readingsDocuments.content').map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-100 dark:bg-purple-900/30 rounded-xl p-4">
            <p className="text-purple-800 dark:text-purple-200 text-sm italic">
              {t('readingsDocuments.note')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 
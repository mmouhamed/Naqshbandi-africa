'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { use } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Heart, 
  Users, 
  Library, 
  Star, 
  ArrowRight, 
  Play, 
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Sparkles,
  Moon,
  Sun,
  Flower2,
  Crown,
  ScrollText,
  AudioLines,
  Brain,
  HeartHandshake,
  Lightbulb,
  Shield,
  Target,
  Zap,
  Award,
  Users2,
  BookMarked,
  CalendarDays,
  Clock3,
  Star as StarIcon,
  Heart as HeartIcon,
  Sparkles as SparklesIcon
} from 'lucide-react';

export default function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations();

  const features = [
    {
      icon: BookOpen,
      title: t('home.features.teachings.title'),
      description: t('home.features.teachings.description'),
      href: `/${locale}/enseignements`,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20'
    },
    {
      icon: Calendar,
      title: t('home.features.events.title'),
      description: t('home.features.events.description'),
      href: `/${locale}/evenements`,
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20'
    },
    {
      icon: Heart,
      title: t('home.features.practices.title'),
      description: t('home.features.practices.description'),
      href: `/${locale}/pratiques`,
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20'
    },
    {
      icon: Users,
      title: t('home.features.goldenChain.title'),
      description: t('home.features.goldenChain.description'),
      href: `/${locale}/chaine-doree`,
      color: 'from-yellow-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20'
    },
    {
      icon: Library,
      title: t('home.features.library.title'),
      description: t('home.features.library.description'),
      href: `/${locale}/bibliotheque`,
      color: 'from-indigo-500 to-purple-500',
      gradient: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20'
    },
    {
      icon: Star,
      title: t('home.features.dhikr.title'),
      description: t('home.features.dhikr.description'),
      href: `/${locale}/dhikr`,
      color: 'from-red-500 to-rose-500',
      gradient: 'bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20'
    }
  ];

  const latestContent = [
    {
      title: "Les Fondements de la Tariqa Naqshbandiyya",
      excerpt: "Découvrez les principes fondamentaux qui guident notre voie spirituelle et illuminent le chemin vers la proximité divine...",
      category: "Enseignements",
      date: "2024-01-15",
      href: `/${locale}/enseignements`,
      readTime: "5 min",
      author: "Shaykh Nazim"
    },
    {
      title: "Dhikr Collectif - Janvier 2024",
      excerpt: "Rejoignez-nous pour une session de dhikr collective en ligne, une expérience spirituelle partagée...",
      category: "Événements",
      date: "2024-01-20",
      href: `/${locale}/evenements`,
      readTime: "3 min",
      author: "Communauté"
    },
    {
      title: "La Chaîne d'Or : Sheikh Ahmad Sirhindi",
      excerpt: "Explorez la vie et l'enseignement du grand réformateur, le Mujaddid Alf Thani...",
      category: "Chaîne d'Or",
      date: "2024-01-10",
      href: `/${locale}/chaine-doree`,
      readTime: "8 min",
      author: "Historique"
    }
  ];

  const practices = [
    {
      icon: HeartHandshake,
      title: "Awrad Quotidiens",
      description: "Pratiques matinales et vespérales pour nourrir l'âme",
      href: `/${locale}/pratiques/awrad`,
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Brain,
      title: "Muraqaba",
      description: "Méditation et contemplation pour l'éveil spirituel",
      href: `/${locale}/pratiques/initie`,
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: AudioLines,
      title: "Dhikr Guidé",
      description: "Sessions audio pour le dhikr collectif et individuel",
      href: `/${locale}/dhikr`,
      color: "from-green-500 to-emerald-600"
    }
  ];

  const stats = [
    { number: "41", label: "Maîtres de la Chaîne d'Or", icon: Crown },
    { number: "1000+", label: "Enseignements Disponibles", icon: BookMarked },
    { number: "24/7", label: "Accès aux Pratiques", icon: Clock3 },
    { number: "500+", label: "Membres de la Communauté", icon: Users2 }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating spiritual symbols */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Star className="h-8 w-8 text-primary/30" />
          </div>
          <div className="absolute top-40 right-20 animate-float delay-1000">
            <Heart className="h-6 w-6 text-purple-500/30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float delay-2000">
            <Moon className="h-7 w-7 text-cyan-500/30" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float delay-1500">
            <Sun className="h-6 w-6 text-yellow-500/30" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Voie Spirituelle Naqshbandiyya</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {t('home.title')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            {t('home.description')}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Une porte vers la lumière de la Tariqa Naqshbandiyya, un lien vivant avec la sagesse des maîtres et l'amour du Prophète ﷺ. 
            Sur cette voie bénie, le cœur s'éveille, l'âme s'élève, et la présence divine devient notre demeure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href={`/${locale}/enseignements`} 
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <BookOpen className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              {t('nav.teachings')}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href={`/${locale}/dhikr`} 
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary text-primary text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Commencer le Dhikr
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Simple Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Découvre la Voie Spirituelle
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore les différentes dimensions de la tradition Naqshbandiyya et trouve ta place sur ce chemin de lumière.
            </p>
          </div>
          
          {/* Simple Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Enseignements Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Enseignements</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Approfondis ta connexion intérieure grâce à des cours accessibles à tous
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Purification du cœur (Tazkiyat an-Nafs)
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Adab et comportement du disciple
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Les étapes du cheminement spirituel (Maqamat)
                </li>
              </ul>
              <Link 
                href={`/${locale}/enseignements`}
                className="inline-block px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Découvrir
              </Link>
            </div>

            {/* Chaîne d'Or Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Chaîne d'Or</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Les 41 maîtres spirituels de la tradition Naqshbandiyya
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Prophet Muhammad ﷺ
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Abu Bakr as-Siddiq
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Shaykh Nazim al-Haqqani
                </li>
              </ul>
              <Link 
                href={`/${locale}/chaine-doree`}
                className="inline-block px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Découvrir
              </Link>
            </div>

            {/* Événements Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Événements</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Participe aux activités spirituelles et aux dhikrs collectifs
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Dhikr collectifs mensuels
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Mawlid an-Nabi
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Retraites spirituelles
                </li>
              </ul>
              <Link 
                href={`/${locale}/evenements`}
                className="inline-block px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Découvrir
              </Link>
            </div>

            {/* Bibliothèque Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                <Library className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Bibliothèque</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Une collection de livres et ressources spirituelles
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Mercy Oceans - Shaykh Nazim
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Livres de Shaykh Hisham
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Textes traditionnels
                </li>
              </ul>
              <Link 
                href={`/${locale}/bibliotheque`}
                className="inline-block px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Découvrir
              </Link>
            </div>

            {/* Pratiques Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Pratiques</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Les awrad et pratiques quotidiennes de la tariqa
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Awrad pour initiés
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Pratiques pour préparés
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Exercices de détermination
                </li>
              </ul>
              <Link 
                href={`/${locale}/pratiques`}
                className="inline-block px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Découvrir
              </Link>
            </div>

            {/* Contact Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Reste connecté avec la communauté spirituelle
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Questions sur la voie
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Participation aux événements
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Demandes d'enseignements
                </li>
              </ul>
              <Link 
                href={`/${locale}/contact`}
                className="inline-block px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Section - Mobile First */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Clock className="h-4 w-4" />
              Contenu Récent
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Derniers Enseignements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Restez connecté avec nos derniers enseignements et événements spirituels
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestContent.map((content, index) => (
              <article key={index} className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="p-6 sm:p-8">
                  {/* Meta info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {content.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      {content.readTime}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {content.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {content.excerpt}
                  </p>
                  
                  {/* Author and date */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Par {content.author}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(content.date).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  
                  {/* Read more link */}
                  <Link 
                    href={content.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Lire l'article complet
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Practices Section - Mobile First */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  <Heart className="h-4 w-4" />
                  Pratiques Quotidiennes
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Transformez Votre Vie Spirituelle
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intégrez la spiritualité dans votre vie quotidienne à travers des pratiques simples mais profondes. 
                  Le dhikr, la méditation, et la contemplation sont des portes vers la paix intérieure et l'éveil spirituel.
                </p>
              </div>

              {/* Practice highlights */}
              <div className="space-y-6">
                {practices.map((practice, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 transition-colors duration-300">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${practice.color} text-white`}>
                      <practice.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {practice.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {practice.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link 
                href={`/${locale}/pratiques`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Découvrir Toutes les Pratiques
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-3xl p-8 sm:p-12">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Commencez Votre Voyage
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Rejoignez notre communauté spirituelle et commencez votre transformation intérieure dès aujourd'hui.
                  </p>
                  <Link 
                    href={`/${locale}/dhikr`}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Play className="h-4 w-4" />
                    Commencer le Dhikr
                  </Link>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Mobile First */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-purple-600 to-cyan-600 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            Soutenez Notre Mission
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Participez à Notre Œuvre Spirituelle
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Votre don nous aide à maintenir cette plateforme spirituelle et à organiser des événements pour la communauté.
            Chaque contribution est une sadaqa jariya (aumône continue) qui perpétue les bénédictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/don`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Faire un Don
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Prêt à Commencer Votre Voyage Spirituel ?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Rejoignez notre communauté et découvrez la beauté de la Tariqa Naqshbandiyya
          </p>
          <Link 
            href={`/${locale}/enseignements`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <BookOpen className="h-5 w-5" />
            Commencer Maintenant
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
} 
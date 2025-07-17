'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { X, Menu, ChevronRight, ChevronDown, BookOpen, Calendar, Heart, Users, Library, Star, Phone, Mail, Globe } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const t = useTranslations('nav');
  const params = useParams();
  const locale = (params as any)?.locale || 'fr';

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    { 
      href: `/${locale}/enseignements`, 
      label: t('teachings'), 
      icon: BookOpen,
      type: 'link'
    },
    { 
      href: `/${locale}/evenements`, 
      label: t('events'), 
      icon: Calendar,
      type: 'link'
    },
    { 
      label: t('practices'), 
      icon: Heart,
      type: 'dropdown',
      subItems: [
        { href: `/${locale}/pratiques/awrad`, label: t('practices_awrad'), description: 'Litanies quotidiennes' },
        { href: `/${locale}/pratiques/initie`, label: t('practices_initie'), description: 'Pour les débutants' },
        { href: `/${locale}/pratiques/prepare`, label: t('practices_prepare'), description: 'Pour les préparés' },
        { href: `/${locale}/pratiques/determination`, label: t('practices_determination'), description: 'Exercices avancés' }
      ]
    },
    { 
      label: t('sacredMonths'), 
      icon: Star,
      type: 'dropdown',
      subItems: [
        { href: `/${locale}/mois-sacres/rajab`, label: t('sacredMonths_rajab'), description: '7ème mois sacré' },
        { href: `/${locale}/mois-sacres/shaban`, label: t('sacredMonths_shaban'), description: '8ème mois sacré' },
        { href: `/${locale}/mois-sacres/ramadan`, label: t('sacredMonths_ramadan'), description: '9ème mois sacré' },
        { href: `/${locale}/mois-sacres/dhul-hijjah`, label: t('sacredMonths_dhulHijjah'), description: '12ème mois sacré' }
      ]
    },
    { 
      label: t('goldenChain'), 
      icon: Users,
      type: 'dropdown',
      subItems: [
        { href: `/${locale}/chaine-doree/timeline`, label: t('goldenChain_timeline'), description: 'Chronologie des 41 maîtres' },
        { href: `/${locale}/chaine-doree/prophet-muhammad`, label: 'Prophet Muhammad ﷺ', description: 'Premier maître de la chaîne' },
        { href: `/${locale}/chaine-doree/abu-bakr`, label: 'Abu Bakr as-Siddiq', description: 'Premier calife et compagnon' },
        { href: `/${locale}/chaine-doree/shaykh-nazim`, label: 'Shaykh Nazim al-Haqqani', description: '40ème maître de la chaîne' },
        { href: `/${locale}/chaine-doree/shaykh-hisham`, label: 'Shaykh Hisham Kabbani', description: '41ème maître de la chaîne' }
      ]
    },
    { 
      label: t('library'), 
      icon: Library,
      type: 'dropdown',
      subItems: [
        { href: `/${locale}/bibliotheque/shaykh-nazim`, label: t('library_shaykhNazim'), description: 'Mercy Oceans & enseignements' },
        { href: `/${locale}/bibliotheque/shaykh-hisham`, label: t('library_shaykhHisham'), description: 'Livres et conférences' },
        { href: `/${locale}/bibliotheque/hajjah-amina`, label: t('library_hajjahAmina'), description: 'Enseignements féminins' }
      ]
    },
    { 
      label: 'Dhikr', 
      icon: Star,
      type: 'dropdown',
      subItems: [
        { href: `/${locale}/dhikr/khatm-khwajagan`, label: t('dhikr_khatmKhwajagan'), description: 'Dhikr collectif des maîtres' },
        { href: `/${locale}/dhikr/awrad-quotidien`, label: t('dhikr_awradQuotidien'), description: 'Pratiques quotidiennes' }
      ]
    },
    { 
      href: `/${locale}/don`, 
      label: t('don') || 'Don', 
      icon: Heart,
      type: 'link',
      highlight: true
    },
    { 
      href: `/${locale}/contact`, 
      label: t('contact'), 
      icon: Phone,
      type: 'link'
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[95vw] sm:max-w-[90vw] bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden mobile-menu overflow-x-auto scrollbar-hide ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header - Fixed at top */}
        <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 sticky top-0 z-10 min-w-max">
          <Link
            href={`/${locale}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 font-bold text-base sm:text-lg text-primary"
          >
            <div className="relative">
              <img src="/images/logo/logo.svg" alt="Naqshbandi Africa Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
            </div>
            <span className="tracking-wide bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Naqshbandi Africa
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Menu items - Scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-auto bg-white dark:bg-slate-900">
          <nav className="p-4 space-y-2 min-w-max">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.type === 'link' ? (
                  <Link
                    href={item.href!}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 group ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg' 
                        : 'hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`h-5 w-5 ${item.highlight ? 'text-white' : 'text-primary'}`} />
                      <span className={`font-medium ${item.highlight ? 'text-white' : 'text-gray-900 dark:text-gray-100'} group-hover:text-primary transition-colors duration-200`}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className={`h-5 w-5 ${item.highlight ? 'text-white' : 'text-gray-400'} group-hover:text-primary transition-colors duration-200`} />
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleSection(item.label)}
                      className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-200">
                          {item.label}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          expandedSections.includes(item.label) ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Submenu */}
                    {expandedSections.includes(item.label) && (
                      <div className="ml-8 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                        {item.subItems?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col gap-1 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200 group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-200">
                                {subItem.label}
                              </span>
                            </div>
                            {subItem.description && (
                              <div className="ml-5 text-xs text-gray-500 dark:text-gray-400">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="p-3 sm:p-4 lg:p-6 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 sticky bottom-0 min-w-max">
          <div className="text-center space-y-3">
            <div className="flex justify-center space-x-4">
              <a href="mailto:contact@naqshbandi-africa.org" className="p-2 text-gray-500 hover:text-primary transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+1234567890" className="p-2 text-gray-500 hover:text-primary transition-colors duration-200">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 text-gray-500 hover:text-primary transition-colors duration-200">
                <Globe className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p className="font-medium">Naqshbandi Africa</p>
              <p className="mt-1">Spiritual Guidance & Wisdom</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
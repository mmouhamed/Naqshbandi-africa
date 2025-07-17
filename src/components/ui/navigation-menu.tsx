'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { use } from 'react';
import { MobileNavigation } from './mobile-navigation';
import { LanguageSwitcher } from './language-switcher';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from './dropdown-menu';

export function MainNavigation() {
  const t = useTranslations('nav');
  const params = useParams();
  const locale = (params as any)?.locale || 'fr';

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/50 dark:border-slate-700/50">
      {/* Logo and site name - Mobile First */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link href={`/${locale}`} className="flex items-center gap-2 sm:gap-3 font-bold text-base sm:text-lg text-primary hover:scale-105 transition-transform duration-200">
          <div className="relative">
            <img src="/images/logo/logo.svg" alt="Naqshbandi Africa Logo" className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 drop-shadow-sm" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
          </div>
          <span className="tracking-wide bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hidden sm:block">
            Naqshbandi Africa
          </span>
        </Link>
      </div>

      {/* Desktop nav - Hidden on mobile, visible on tablet and up */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6">
        <ul className="flex flex-wrap gap-3 xl:gap-4 items-center">
          {/* Teachings - Simple link */}
          <li>
            <Link 
              href={`/${locale}/enseignements`} 
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium group"
            >
              {t('teachings')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Events - Simple link */}
          <li>
            <Link 
              href={`/${locale}/evenements`} 
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium group"
            >
              {t('events')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Practices Dropdown */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium group flex items-center gap-1">
                  {t('practices')}
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/pratiques/awrad`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('practices_awrad')}</div>
                      <div className="text-xs text-gray-500">Litanies quotidiennes</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/pratiques/initie`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('practices_initie')}</div>
                      <div className="text-xs text-gray-500">Pour les débutants</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/pratiques/prepare`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('practices_prepare')}</div>
                      <div className="text-xs text-gray-500">Pour les préparés</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/pratiques/determination`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('practices_determination')}</div>
                      <div className="text-xs text-gray-500">Exercices avancés</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Sacred Months Dropdown */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium group flex items-center gap-1">
                  {t('sacredMonths')}
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/mois-sacres/rajab`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('sacredMonths_rajab')}</div>
                      <div className="text-xs text-gray-500">7ème mois sacré</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/mois-sacres/shaban`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('sacredMonths_shaban')}</div>
                      <div className="text-xs text-gray-500">8ème mois sacré</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/mois-sacres/ramadan`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('sacredMonths_ramadan')}</div>
                      <div className="text-xs text-gray-500">9ème mois sacré</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/mois-sacres/dhul-hijjah`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('sacredMonths_dhulHijjah')}</div>
                      <div className="text-xs text-gray-500">12ème mois sacré</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Golden Chain Dropdown - Enhanced with more content */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium group flex items-center gap-1">
                  {t('goldenChain')}
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72">
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/chaine-doree/timeline`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('goldenChain_timeline')}</div>
                      <div className="text-xs text-gray-500">Chronologie des 41 maîtres</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/chaine-doree/prophet-muhammad`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Prophet Muhammad ﷺ</div>
                      <div className="text-xs text-gray-500">Premier maître de la chaîne</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/chaine-doree/abu-bakr`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Abu Bakr as-Siddiq</div>
                      <div className="text-xs text-gray-500">Premier calife et compagnon</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/chaine-doree/shaykh-nazim`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Shaykh Nazim al-Haqqani</div>
                      <div className="text-xs text-gray-500">40ème maître de la chaîne</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/chaine-doree/shaykh-hisham`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Shaykh Hisham Kabbani</div>
                      <div className="text-xs text-gray-500">41ème maître de la chaîne</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Library Dropdown */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium group flex items-center gap-1">
                  {t('library')}
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/bibliotheque/shaykh-nazim`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('library_shaykhNazim')}</div>
                      <div className="text-xs text-gray-500">Mercy Oceans & enseignements</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/bibliotheque/shaykh-hisham`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('library_shaykhHisham')}</div>
                      <div className="text-xs text-gray-500">Livres et conférences</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/bibliotheque/hajjah-amina`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('library_hajjahAmina')}</div>
                      <div className="text-xs text-gray-500">Enseignements féminins</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Dhikr Dropdown */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium group flex items-center gap-1">
                  Dhikr
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/dhikr/khatm-khwajagan`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('dhikr_khatmKhwajagan')}</div>
                      <div className="text-xs text-gray-500">Dhikr collectif des maîtres</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/dhikr/awrad-quotidien`} className="flex items-center gap-3 p-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{t('dhikr_awradQuotidien')}</div>
                      <div className="text-xs text-gray-500">Pratiques quotidiennes</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Contact - Simple link */}
          <li>
            <Link 
              href={`/${locale}/contact`} 
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium group"
            >
              {t('contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Donate Button - Desktop */}
        <Link 
          href={`/${locale}/don`} 
          className="px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium ml-4"
        >
          {t('don')}
        </Link>

        {/* Language switcher - Desktop */}
        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Tablet Navigation - Medium screens only */}
      <div className="hidden md:flex lg:hidden items-center gap-3">
        {/* Simplified tablet nav with key items */}
        <Link 
          href={`/${locale}/enseignements`} 
          className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary font-medium"
        >
          {t('teachings')}
        </Link>
        <Link 
          href={`/${locale}/evenements`} 
          className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary font-medium"
        >
          {t('events')}
        </Link>
        <Link 
          href={`/${locale}/pratiques`} 
          className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary font-medium"
        >
          {t('practices')}
        </Link>
        <Link 
          href={`/${locale}/chaine-doree`} 
          className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary font-medium"
        >
          {t('goldenChain')}
        </Link>
        
        {/* Donate Button - Tablet */}
        <Link 
          href={`/${locale}/don`} 
          className="px-3 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium text-sm"
        >
          {t('don')}
        </Link>

        {/* Language switcher - Tablet */}
        <LanguageSwitcher />
      </div>

      {/* Mobile navigation - Small screens only */}
      <div className="md:hidden flex items-center gap-2">
        <LanguageSwitcher />
        <MobileNavigation />
      </div>
    </nav>
  );
}

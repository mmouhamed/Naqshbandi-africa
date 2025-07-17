'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = params.locale as string;
  const otherLocale = locale === 'fr' ? 'en' : 'fr';

  // Replace the locale in the current path
  const switchTo = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <button
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 font-medium"
      onClick={() => router.push(switchTo)}
      aria-label={`Switch to ${otherLocale === 'fr' ? 'French' : 'English'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {otherLocale === 'fr' ? 'Français' : 'English'}
      </span>
      <span className="sm:hidden">
        {otherLocale.toUpperCase()}
      </span>
    </button>
  );
} 
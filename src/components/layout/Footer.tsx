import Link from 'next/link';
import type { Locale } from '@/lib/i18n/locales';

interface FooterProps {
  locale: Locale;
  dict: {
    footer: {
      disclaimer: string;
      privacy: string;
      terms: string;
      contact: string;
      about: string;
      copyright: string;
    };
    site: {
      name: string;
    };
  };
}

export default function Footer({ locale, dict }: FooterProps) {
  const prefix = locale === 'zh' ? '/zh' : '';

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-900">
              {dict.site.name}
            </p>
            <p className="text-xs text-gray-400 mt-1">{dict.footer.disclaimer}</p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href={`${prefix}/about`}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {dict.footer.about}
            </Link>
            <Link
              href={`${prefix}/privacy`}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={`${prefix}/terms`}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {dict.footer.terms}
            </Link>
            <Link
              href={`${prefix}/contact`}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {dict.footer.contact}
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-50 text-center">
          <p className="text-xs text-gray-300">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

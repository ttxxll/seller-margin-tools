import Link from 'next/link';
import JsonLd, { breadcrumbJsonLd } from './JsonLd';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale: 'en' | 'zh';
}

export default function Breadcrumb({ items, locale }: BreadcrumbProps) {
  const homeLabel = locale === 'zh' ? '首页' : 'Home';
  const fullItems = [
    { name: homeLabel, url: locale === 'zh' ? '/zh' : '/' },
    ...items.map((item) => ({ name: item.name, url: item.href })),
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(fullItems)} />
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === 0 ? (
                <Link href={item.href} className="hover:text-blue-600 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

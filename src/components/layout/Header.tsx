'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n/locales';

interface HeaderProps {
  locale: Locale;
  dict: {
    nav: {
      home: string;
      amazonFba: string;
      tiktokShop: string;
      shopify: string;
      paymentFees: string;
      targetPrice: string;
      flipkart: string;
      language: string;
    };
    site: {
      name: string;
    };
  };
}

export default function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const prefix = locale === 'zh' ? '/zh' : '';

  const getOtherLocalePath = () => {
    if (locale === 'en') {
      return `/zh${pathname}`;
    }
    return pathname.replace(/^\/zh/, '') || '/';
  };

  const navItems = [
    {
      href: `${prefix}/amazon-fba-profit-calculator`,
      label: dict.nav.amazonFba,
      id: 'amazonFba',
      icon: '📦',
    },
    {
      href: `${prefix}/tiktok-shop-profit-calculator`,
      label: dict.nav.tiktokShop,
      id: 'tiktokShop',
      icon: '🎵',
    },
    {
      href: `${prefix}/shopify-profit-calculator`,
      label: dict.nav.shopify,
      id: 'shopify',
      icon: '🛍️',
    },
    {
      href: `${prefix}/payment-fee-calculator`,
      label: dict.nav.paymentFees,
      id: 'paymentFees',
      icon: '💳',
    },
    {
      href: `${prefix}/target-profit-price-calculator`,
      label: dict.nav.targetPrice,
      id: 'targetPrice',
      icon: '🎯',
    },
    {
      href: `${prefix}/flipkart-profit-calculator`,
      label: dict.nav.flipkart,
      id: 'flipkart',
      icon: '🛒',
    },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`${prefix}/`} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 hidden sm:block">
                {dict.site.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-nowrap items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="flex-shrink-0 leading-none">{item.icon}</span>
                <span className="leading-none">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href={getOtherLocalePath()}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              {dict.nav.language}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

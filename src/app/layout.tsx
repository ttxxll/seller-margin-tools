import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Seller Margin & Seller Profit Calculator for Cross-Border Sellers',
    template: '%s | Seller Margin Tools',
  },
  description:
    'Free seller margin and seller profit calculator for cross-border e-commerce sellers. Estimate true margins and profits on Amazon FBA, TikTok Shop, Shopify, and Flipkart after fees, shipping, ads, and refunds.',
  metadataBase: new URL('https://sellermargintools.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    title: 'Seller Margin & Seller Profit Calculator for Cross-Border Sellers',
    description:
      'Free seller margin and seller profit calculator for cross-border e-commerce sellers. Estimate true margins and profits after platform fees, shipping, ads, and refunds.',
    url: 'https://sellermargintools.com',
    siteName: 'Seller Margin Tools',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Seller Margin and Seller Profit Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seller Margin & Seller Profit Calculator for Cross-Border Sellers',
    description: 'Free seller margin and seller profit calculator for cross-border e-commerce sellers. Estimate true margins and profits after fees, shipping, ads, and refunds.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

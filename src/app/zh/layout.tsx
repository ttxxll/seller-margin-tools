import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import zh from '@/lib/i18n/zh.json';

export const metadata: Metadata = {
  title: {
    default: '跨境电商卖家利润计算器 - 亚马逊/TikTok/Shopify/Flipkart 免费工具',
    template: '%s | 卖家利润工具箱',
  },
  description:
    '跨境电商卖家免费利润计算器。精准估算亚马逊 FBA、TikTok Shop、Shopify、Flipkart 扣除平台佣金、物流、广告、退款后的真实利润率。公式透明，即时出结果。',
  metadataBase: new URL('https://sellermargintools.com'),
  alternates: {
    canonical: '/zh',
    languages: {
      'en': '/',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    title: '跨境电商卖家利润计算器 - 亚马逊/TikTok/Shopify/Flipkart 免费工具',
    description:
      '跨境电商卖家免费利润计算器。精准估算亚马逊 FBA、TikTok Shop、Shopify、Flipkart 扣除平台佣金、物流、广告、退款后的真实利润率。',
    url: 'https://sellermargintools.com/zh',
    siteName: '卖家利润工具箱',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: '跨境电商卖家利润计算器' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '跨境电商卖家利润计算器 - 亚马逊/TikTok/Shopify/Flipkart 免费工具',
    description: '跨境电商卖家免费利润计算器。精准估算扣除平台佣金、物流、广告、退款后的真实利润率。',
  },
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header locale="zh" dict={zh} />
        <main className="flex-1">{children}</main>
        <Footer locale="zh" dict={zh} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-X1X6SQT3MX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X1X6SQT3MX');
          `}
        </Script>
      </body>
    </html>
  );
}

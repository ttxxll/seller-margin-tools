import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import en from '@/lib/i18n/en.json';

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header locale="en" dict={en} />
        <main className="flex-1">{children}</main>
        <Footer locale="en" dict={en} />
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

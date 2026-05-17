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
      </body>
    </html>
  );
}

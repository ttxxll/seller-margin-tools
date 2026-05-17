import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🔍</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Try one of our free profit calculators instead.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/amazon-fba-profit-calculator" className="block bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              📦 Amazon FBA
            </Link>
            <Link href="/tiktok-shop-profit-calculator" className="block bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              🎵 TikTok Shop
            </Link>
            <Link href="/shopify-profit-calculator" className="block bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              🛍️ Shopify
            </Link>
            <Link href="/flipkart-profit-calculator" className="block bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              🛒 Flipkart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

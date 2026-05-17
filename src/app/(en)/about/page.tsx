import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Seller Margin Tools and our mission to help online sellers calculate true profits.',
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">About Seller Margin Tools</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p>Seller Margin Tools is a free, bilingual calculator toolkit designed to help online and cross-border sellers understand their true profit margins. We believe that transparent financial calculations are essential for building a sustainable e-commerce business.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why We Built This</h2>
          <p>Many sellers only look at revenue minus product cost, but the real picture includes platform fees, payment processing fees, advertising costs, shipping, refunds, and other expenses. Without accurate margin calculations, sellers might be losing money on sales they thought were profitable.</p>
          <p>We created these free tools to help sellers make informed pricing decisions, identify unprofitable products, and optimize their business operations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Amazon FBA Profit Calculator:</strong> Estimate true profit after referral fees, fulfillment fees, storage costs, and all expenses.</li>
            <li><strong>TikTok Shop Profit Calculator:</strong> Calculate profit after platform fees, creator commissions, and advertising costs.</li>
            <li><strong>Shopify Profit Calculator:</strong> Track profit after payment processing fees, app subscriptions, and other costs.</li>
            <li><strong>Payment Fee Calculator:</strong> Calculate payment processing fees for PayPal, Stripe, Wise, and other providers.</li>
            <li><strong>Target Profit Price Calculator:</strong> Reverse-calculate the selling price needed to achieve your desired profit margin.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Free to use:</strong> All calculators are completely free with no login required.</li>
            <li><strong>Transparent formulas:</strong> We show exactly how calculations are performed.</li>
            <li><strong>Bilingual support:</strong> Available in English and Chinese.</li>
            <li><strong>Privacy-focused:</strong> No account creation, no data storage.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
          <p>Our calculators provide estimates based on the fee rates you enter. Actual fees may vary based on product category, seller status, and platform policy changes. Always verify with official platform documentation before making business decisions.</p>
        </section>
      </div>
      </div>
    </>
  );
}

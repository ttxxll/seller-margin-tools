import type { Metadata } from 'next';
import ProfitCalculator from '@/components/calculators/ProfitCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import en from '@/lib/i18n/en.json';

export const metadata: Metadata = {
  title: 'TikTok Shop Seller Margin & Seller Profit Calculator',
  description: 'Calculate TikTok Shop seller margin and seller profit after platform fees, creator commissions, advertising, and all costs. Free tool for cross-border e-commerce sellers.',
  keywords: 'seller margin calculator, seller profit calculator, tiktok shop profit calculator, tiktok shop margin calculator, tiktok seller profit, cross-border ecommerce, tiktok shop fees, tiktok ecommerce calculator',
  alternates: {
    canonical: '/tiktok-shop-profit-calculator',
    languages: { 'en': '/tiktok-shop-profit-calculator', 'zh-CN': '/zh/tiktok-shop-profit-calculator' },
  },
};

export default function TikTokShopCalculatorPage() {
  const dict = en.calculator;
  const toolDict = en.tools.tiktokShop;
  const relatedTools = getRelatedTools('tiktok-shop-profit-calculator');

  const fields = [
    { key: 'sellingPrice', label: dict.sellingPrice, type: 'number' as const, suffix: '$', defaultValue: 24.99 },
    { key: 'productCost', label: dict.productCost, type: 'number' as const, suffix: '$', defaultValue: 6.00 },
    { key: 'shippingCost', label: dict.shippingCost, type: 'number' as const, suffix: '$', defaultValue: 4.00 },
    { key: 'platformFeeRate', label: dict.platformFeeRate, type: 'percent' as const, hint: 'TikTok Shop platform fee', defaultValue: 0.06 },
    { key: 'creatorCommissionRate', label: dict.creatorCommissionRate, type: 'percent' as const, hint: 'Creator affiliate commission', defaultValue: 0.10 },
    { key: 'paymentFeeRate', label: dict.paymentFeeRate, type: 'percent' as const, defaultValue: 0.02 },
    { key: 'fixedPaymentFee', label: dict.fixedPaymentFee, type: 'number' as const, suffix: '$', defaultValue: 0.30 },
    { key: 'adCost', label: dict.adCost, type: 'number' as const, suffix: '$', defaultValue: 1.50 },
    { key: 'refundRate', label: dict.refundRate, type: 'percent' as const, defaultValue: 0.03 },
    { key: 'otherCost', label: dict.otherCost, type: 'number' as const, suffix: '$', defaultValue: 0 },
  ];

  const faqItems = [
    {
      question: 'What is the TikTok Shop platform fee?',
      answer: 'TikTok Shop charges a platform fee on each sale, typically around 6% for most categories.',
    },
    {
      question: 'What is creator affiliate commission?',
      answer: 'Creator commission is the percentage paid to TikTok creators who promote and sell your products through their content.',
    },
  ];

  return (
    <>
      <ProfitCalculator
        title={toolDict.name}
        description={toolDict.description}
        calculatorType="tiktokShop"
        fields={fields}
        dict={{
          calculate: dict.calculate,
          results: dict.results,
          formula: dict.formula,
          example: dict.example,
          disclaimer: dict.disclaimer,
          netProfit: dict.netProfit,
          profitMargin: dict.profitMargin,
          roi: dict.roi,
          breakEvenPrice: dict.breakEvenPrice,
          totalCost: dict.totalCost,
          revenue: 'Selling Price',
          platformFee: 'Platform Fee',
          paymentFee: dict.paymentFee,
          refundLoss: dict.refundLoss,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-purple-700">platformFee <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">platformFeeRate</span></p>
              <p className="text-purple-700 mt-2">creatorCommission <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">creatorCommissionRate</span></p>
              <p className="text-purple-700 mt-2">paymentFee <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">paymentFeeRate</span> <span className="text-gray-400">+</span> <span className="text-green-700">fixedPaymentFee</span></p>
              <p className="text-purple-700 mt-2">refundLoss <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">refundRate</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-blue-700">totalCost <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">productCost + shippingCost</p>
              <p className="text-gray-500 ml-4">+ platformFee + creatorCommission</p>
              <p className="text-gray-500 ml-4">+ paymentFee + adCost + refundLoss</p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-yellow-700">netProfit <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">-</span> <span className="text-blue-700">totalCost</span></p>
            </div>
          </div>
        }
        exampleContent={
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">INPUT</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Selling Price</span>
                  <span className="font-medium">$24.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Product Cost</span>
                  <span className="font-medium">$6.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$4.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-medium">6%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Creator Comm.</span>
                  <span className="font-medium">10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ads</span>
                  <span className="font-medium">$1.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Refund Rate</span>
                  <span className="font-medium">3%</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">OUTPUT</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-medium">$1.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Creator Commission</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Cost</span>
                  <span className="font-medium">$19.30</span>
                </div>
                <div className="border-t border-green-200 my-1"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Net Profit</span>
                  <span className="font-bold text-green-600">$5.69</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <FAQSection title="FAQ" items={faqItems} />
        <RelatedTools
          title={en.relatedTools}
          tools={relatedTools}
          locale="en"
          dict={en.tools}
        />
      </div>
    </>
  );
}

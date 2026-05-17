import type { Metadata } from 'next';
import ProfitCalculator from '@/components/calculators/ProfitCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import en from '@/lib/i18n/en.json';

export const metadata: Metadata = {
  title: 'Amazon FBA Seller Margin & Seller Profit Calculator',
  description: 'Calculate Amazon FBA seller margin and seller profit after referral fees, fulfillment fees, storage costs, advertising, and all expenses. Free tool for cross-border e-commerce sellers.',
  keywords: 'seller margin calculator, seller profit calculator, amazon fba profit calculator, amazon fba margin calculator, fba calculator, cross-border seller profit, amazon seller profit, fba fees calculator, ecommerce profit calculator',
  alternates: {
    canonical: '/amazon-fba-profit-calculator',
    languages: { 'en': '/amazon-fba-profit-calculator', 'zh-CN': '/zh/amazon-fba-profit-calculator' },
  },
};

export default function AmazonFbaCalculatorPage() {
  const dict = en.calculator;
  const toolDict = en.tools.amazonFba;
  const relatedTools = getRelatedTools('amazon-fba-profit-calculator');

  const fields = [
    { key: 'sellingPrice', label: dict.sellingPrice, type: 'number' as const, suffix: '$', defaultValue: 29.99 },
    { key: 'productCost', label: dict.productCost, type: 'number' as const, suffix: '$', defaultValue: 8.00 },
    { key: 'shippingCost', label: dict.shippingCost, type: 'number' as const, suffix: '$', defaultValue: 3.00 },
    { key: 'referralFeeRate', label: 'Referral Fee Rate', type: 'percent' as const, hint: 'Amazon referral fee percentage', defaultValue: 0.15 },
    { key: 'fulfillmentFee', label: dict.fulfillmentFee, type: 'number' as const, suffix: '$', defaultValue: 5.00 },
    { key: 'storageCost', label: dict.storageCost, type: 'number' as const, suffix: '$', defaultValue: 0.50 },
    { key: 'paymentFeeRate', label: dict.paymentFeeRate, type: 'percent' as const, defaultValue: 0 },
    { key: 'fixedPaymentFee', label: dict.fixedPaymentFee, type: 'number' as const, suffix: '$', defaultValue: 0 },
    { key: 'adCost', label: dict.adCost, type: 'number' as const, suffix: '$', defaultValue: 2.00 },
    { key: 'refundRate', label: dict.refundRate, type: 'percent' as const, defaultValue: 0.02 },
    { key: 'otherCost', label: dict.otherCost, type: 'number' as const, suffix: '$', defaultValue: 0 },
  ];

  const faqItems = [
    {
      question: 'What is the Amazon referral fee?',
      answer: 'The referral fee is a percentage Amazon charges on each sale, typically 15% for most product categories. It varies by category.',
    },
    {
      question: 'What is FBA fulfillment fee?',
      answer: 'The FBA fulfillment fee covers picking, packing, shipping, and customer service. It depends on the product size and weight.',
    },
    {
      question: 'How is storage cost calculated?',
      answer: 'Amazon charges monthly storage fees based on the volume of inventory stored in their warehouses. Rates vary by season.',
    },
  ];

  return (
    <>
      <ProfitCalculator
        title={toolDict.name}
        description={toolDict.description}
        calculatorType="amazonFba"
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
          platformFee: 'Referral Fee',
          paymentFee: dict.paymentFee,
          refundLoss: dict.refundLoss,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-purple-700">referralFee <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">referralFeeRate</span></p>
              <p className="text-purple-700 mt-2">paymentFee <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">paymentFeeRate</span> <span className="text-gray-400">+</span> <span className="text-green-700">fixedPaymentFee</span></p>
              <p className="text-purple-700 mt-2">refundLoss <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">refundRate</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-blue-700">totalCost <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">productCost + shippingCost + referralFee</p>
              <p className="text-gray-500 ml-4">+ fulfillmentFee + storageCost</p>
              <p className="text-gray-500 ml-4">+ paymentFee + adCost + refundLoss</p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-yellow-700">netProfit <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">-</span> <span className="text-blue-700">totalCost</span></p>
              <p className="text-yellow-700 mt-2">profitMargin <span className="text-gray-400">=</span> <span className="text-yellow-700">netProfit</span> <span className="text-gray-400">/</span> <span className="text-green-700">sellingPrice</span></p>
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
                  <span className="font-medium">$29.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Product Cost</span>
                  <span className="font-medium">$8.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$3.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Referral Fee</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fulfillment</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Storage</span>
                  <span className="font-medium">$0.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ads</span>
                  <span className="font-medium">$2.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Refund Rate</span>
                  <span className="font-medium">2%</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">OUTPUT</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Referral Fee</span>
                  <span className="font-medium">$4.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Cost</span>
                  <span className="font-medium">$25.00</span>
                </div>
                <div className="border-t border-green-200 my-1"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Net Profit</span>
                  <span className="font-bold text-green-600">$4.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Profit Margin</span>
                  <span className="font-bold text-green-600">16.6%</span>
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

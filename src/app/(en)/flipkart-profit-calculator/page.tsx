import type { Metadata } from 'next';
import ProfitCalculator from '@/components/calculators/ProfitCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import en from '@/lib/i18n/en.json';

export const metadata: Metadata = {
  title: 'Flipkart Seller Margin & Seller Profit Calculator',
  description: 'Calculate Flipkart seller margin and seller profit after commission fees, shipping, collection fees, GST on fees, and all expenses. Free tool for cross-border e-commerce sellers.',
  keywords: 'seller margin calculator, seller profit calculator, flipkart profit calculator, flipkart seller profit, flipkart margin calculator, cross-border ecommerce, flipkart fees calculator, flipkart commission calculator',
  alternates: {
    canonical: '/flipkart-profit-calculator',
    languages: { 'en': '/flipkart-profit-calculator', 'zh-CN': '/zh/flipkart-profit-calculator' },
  },
};

export default function FlipkartCalculatorPage() {
  const dict = en.calculator;
  const toolDict = en.tools.flipkart;
  const relatedTools = getRelatedTools('flipkart-profit-calculator');

  const fields = [
    { key: 'sellingPrice', label: dict.sellingPrice, type: 'number' as const, suffix: '$', defaultValue: 499 },
    { key: 'productCost', label: dict.productCost, type: 'number' as const, suffix: '$', defaultValue: 150 },
    { key: 'shippingCost', label: dict.shippingCost, type: 'number' as const, suffix: '$', defaultValue: 50 },
    { key: 'commissionRate', label: dict.commissionRate, type: 'percent' as const, hint: 'Varies by category (typically 5-25%)', defaultValue: 0.15 },
    { key: 'collectionFeeRate', label: dict.collectionFeeRate, type: 'percent' as const, hint: 'Payment collection fee percentage', defaultValue: 0.02 },
    { key: 'gstOnFeesRate', label: dict.gstOnFeesRate, type: 'percent' as const, hint: 'GST charged on platform fees', defaultValue: 0.18 },
    { key: 'fixedFee', label: dict.fixedFeePerOrder, type: 'number' as const, suffix: '$', defaultValue: 10 },
    { key: 'adCost', label: dict.adCost, type: 'number' as const, suffix: '$', defaultValue: 30 },
    { key: 'refundRate', label: dict.refundRate, type: 'percent' as const, defaultValue: 0.03 },
    { key: 'otherCost', label: dict.otherCost, type: 'number' as const, suffix: '$', defaultValue: 0 },
  ];

  const faqItems = [
    {
      question: 'What is the Flipkart commission fee?',
      answer: 'Flipkart charges a commission on each sale that varies by product category, typically ranging from 5% to 25%. The commission is calculated as a percentage of the selling price.',
    },
    {
      question: 'What is the collection fee?',
      answer: 'The collection fee is a small percentage charged by Flipkart on the order value for payment processing. It is typically around 2% of the selling price.',
    },
    {
      question: 'How does GST on fees work?',
      answer: 'Flipkart charges 18% GST (Goods and Services Tax) on the total of commission, shipping, and collection fees. This is not charged on the product price itself, only on the platform fees.',
    },
    {
      question: 'What is the fixed fee per order?',
      answer: 'Flipkart charges a small fixed fee per order, which varies based on the order value slab. It typically ranges from ₹5 to ₹25 per order.',
    },
  ];

  return (
    <>
      <ProfitCalculator
        title={toolDict.name}
        description={toolDict.description}
        calculatorType="flipkart"
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
          platformFee: dict.commissionRate,
          paymentFee: dict.collectionFeeRate,
          refundLoss: dict.refundLoss,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-purple-700">commission <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">commissionRate</span></p>
              <p className="text-purple-700 mt-2">collectionFee <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">collectionFeeRate</span></p>
              <p className="text-purple-700 mt-2">gstOnFees <span className="text-gray-400">=</span> (commission + shippingCost + collectionFee) <span className="text-gray-400">*</span> <span className="text-green-700">gstOnFeesRate</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-blue-700">totalCost <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">productCost + shippingCost + commission</p>
              <p className="text-gray-500 ml-4">+ collectionFee + gstOnFees</p>
              <p className="text-gray-500 ml-4">+ fixedFee + adCost + refundLoss</p>
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
                  <span className="font-medium">$499</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Product Cost</span>
                  <span className="font-medium">$150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Commission</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Collection Fee</span>
                  <span className="font-medium">2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST on Fees</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fixed Fee</span>
                  <span className="font-medium">$10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ads</span>
                  <span className="font-medium">$30</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">OUTPUT</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Commission</span>
                  <span className="font-medium">$74.85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Collection Fee</span>
                  <span className="font-medium">$9.98</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST on Fees</span>
                  <span className="font-medium">$24.28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Cost</span>
                  <span className="font-medium">$424.11</span>
                </div>
                <div className="border-t border-green-200 my-1"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Net Profit</span>
                  <span className="font-bold text-green-600">$74.89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Profit Margin</span>
                  <span className="font-bold text-green-600">15.0%</span>
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

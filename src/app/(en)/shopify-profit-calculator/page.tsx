import type { Metadata } from 'next';
import ProfitCalculator from '@/components/calculators/ProfitCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import CalculatorGuide from '@/components/seo/CalculatorGuide';
import { calculatorGuides } from '@/lib/content/calculatorGuides';
import en from '@/lib/i18n/en.json';

export const metadata: Metadata = {
  title: 'Shopify Seller Margin & Seller Profit Calculator',
  description: 'Calculate Shopify seller margin and seller profit after payment fees, app subscriptions, advertising, and all expenses. Free tool for cross-border e-commerce sellers.',
  keywords: 'seller margin calculator, seller profit calculator, shopify profit calculator, shopify margin calculator, shopify seller profit, cross-border ecommerce, shopify fees calculator',
  alternates: {
    canonical: '/shopify-profit-calculator',
    languages: { 'en': '/shopify-profit-calculator', 'zh-CN': '/zh/shopify-profit-calculator' },
  },
};

export default function ShopifyCalculatorPage() {
  const dict = en.calculator;
  const toolDict = en.tools.shopify;
  const relatedTools = getRelatedTools('shopify-profit-calculator');
  const guide = calculatorGuides.en.shopify;

  const fields = [
    { key: 'sellingPrice', label: dict.sellingPrice, type: 'number' as const, suffix: '$', defaultValue: 49.99 },
    { key: 'productCost', label: dict.productCost, type: 'number' as const, suffix: '$', defaultValue: 15.00 },
    { key: 'shippingCost', label: dict.shippingCost, type: 'number' as const, suffix: '$', defaultValue: 5.00 },
    { key: 'platformFeeRate', label: dict.platformFeeRate, type: 'percent' as const, hint: 'Shopify platform fee (usually 0%)', defaultValue: 0 },
    { key: 'paymentFeeRate', label: dict.paymentFeeRate, type: 'percent' as const, hint: 'Payment processing fee', defaultValue: 0.029 },
    { key: 'fixedPaymentFee', label: dict.fixedPaymentFee, type: 'number' as const, suffix: '$', defaultValue: 0.30 },
    { key: 'appCost', label: dict.appCost, type: 'number' as const, suffix: '$/mo', hint: 'Monthly app subscriptions', defaultValue: 29.00 },
    { key: 'adCost', label: dict.adCost, type: 'number' as const, suffix: '$', defaultValue: 5.00 },
    { key: 'refundRate', label: dict.refundRate, type: 'percent' as const, defaultValue: 0.02 },
    { key: 'otherCost', label: dict.otherCost, type: 'number' as const, suffix: '$', defaultValue: 0 },
  ];

  const faqItems = [
    {
      question: 'Does Shopify charge a platform fee?',
      answer: 'Shopify does not charge a separate platform fee on sales made through Shopify Payments. If you use a third-party payment gateway, Shopify charges an additional fee (0.5%-2% depending on your plan).',
    },
    {
      question: 'What are typical Shopify app costs?',
      answer: 'App costs vary widely. Popular apps for reviews, email marketing, and upsells typically cost $10-$50 each per month.',
    },
  ];

  return (
    <>
      <ProfitCalculator
        title={toolDict.name}
        description={toolDict.description}
        calculatorType="shopify"
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
          paymentFee: 'Payment Processing Fee',
          refundLoss: dict.refundLoss,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-purple-700">platformFee <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">platformFeeRate</span></p>
              <p className="text-purple-700 mt-2">paymentFee <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">paymentFeeRate</span> <span className="text-gray-400">+</span> <span className="text-green-700">fixedPaymentFee</span></p>
              <p className="text-purple-700 mt-2">refundLoss <span className="text-gray-400">=</span> <span className="text-green-700">sellingPrice</span> <span className="text-gray-400">*</span> <span className="text-green-700">refundRate</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-blue-700">totalCost <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">productCost + shippingCost</p>
              <p className="text-gray-500 ml-4">+ platformFee + paymentFee</p>
              <p className="text-gray-500 ml-4">+ appCost + adCost + refundLoss</p>
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
                  <span className="font-medium">$49.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Product Cost</span>
                  <span className="font-medium">$15.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Fee</span>
                  <span className="font-medium">2.9% + $0.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">App Cost</span>
                  <span className="font-medium">$29.00/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ads</span>
                  <span className="font-medium">$5.00</span>
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
                  <span className="text-gray-600">Payment Fee</span>
                  <span className="font-medium">$1.75</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Cost</span>
                  <span className="font-medium">$57.75</span>
                </div>
                <div className="border-t border-green-200 my-1"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Net Profit</span>
                  <span className="font-bold text-red-600">-$7.76</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">Note: App costs are monthly - divide by monthly sales for per-unit cost.</p>
          </div>
        }
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CalculatorGuide title={guide.title} intro={guide.intro} sections={guide.sections} />
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

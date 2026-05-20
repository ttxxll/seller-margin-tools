import type { Metadata } from 'next';
import TargetPriceCalculator from '@/components/calculators/TargetPriceCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import CalculatorGuide from '@/components/seo/CalculatorGuide';
import { calculatorGuides } from '@/lib/content/calculatorGuides';
import en from '@/lib/i18n/en.json';

export const metadata: Metadata = {
  title: 'Target Price Calculator for Seller Margin & Seller Profit',
  description: 'Calculate the selling price you need to reach your target seller margin or seller profit. Includes break-even analysis for cross-border e-commerce sellers.',
  keywords: 'seller margin calculator, seller profit calculator, target price calculator, profit margin calculator, cross-border pricing calculator, break even calculator, ecommerce pricing tool',
  alternates: {
    canonical: '/target-profit-price-calculator',
    languages: { 'en': '/target-profit-price-calculator', 'zh-CN': '/zh/target-profit-price-calculator' },
  },
};

export default function TargetPriceCalculatorPage() {
  const dict = en.calculator;
  const toolDict = en.tools.targetPrice;
  const relatedTools = getRelatedTools('target-profit-price-calculator');
  const guide = calculatorGuides.en.targetPrice;

  const faqItems = [
    {
      question: 'What is a break-even price?',
      answer: 'The break-even price is the minimum selling price at which you neither make a profit nor a loss. It covers all your costs including fees.',
    },
    {
      question: 'Should I target a specific profit or margin?',
      answer: 'It depends on your business model. Target profit works well for fixed-cost products. Target margin is better for scaling businesses where you want consistent percentage returns.',
    },
  ];

  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{toolDict.name}</h1>
          <p className="text-sm text-gray-500">{toolDict.description}</p>
        </div>
      </div>
      <TargetPriceCalculator
        dict={{
          productCost: dict.productCost,
          shippingCost: dict.shippingCost,
          platformFeeRate: dict.platformFeeRate,
          paymentFeeRate: dict.paymentFeeRate,
          fixedPaymentFee: dict.fixedPaymentFee,
          adCost: dict.adCost,
          refundRate: dict.refundRate,
          otherCost: dict.otherCost,
          mode: dict.mode,
          targetNetProfit: dict.targetNetProfit,
          targetProfitMargin: dict.targetProfitMargin,
          calculate: dict.calculate,
          results: dict.results,
          suggestedPrice: dict.suggestedPrice,
          netProfit: dict.netProfit,
          profitMargin: dict.profitMargin,
          breakEvenPrice: dict.breakEvenPrice,
          formula: dict.formula,
          example: dict.example,
          disclaimer: dict.disclaimer,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-gray-400 text-[11px] mb-2">Target Net Profit</p>
              <p className="text-blue-700">baseCosts <span className="text-gray-400">=</span> <span className="text-green-700">productCost</span> <span className="text-gray-400">+</span> <span className="text-green-700">shippingCost</span> <span className="text-gray-400">+</span> <span className="text-green-700">adCost</span> <span className="text-gray-400">+</span> <span className="text-green-700">otherCost</span></p>
              <p className="text-yellow-700 mt-2">suggestedPrice <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">( <span className="text-blue-700">baseCosts</span> <span className="text-gray-400">+</span> <span className="text-green-700">fixedPaymentFee</span> <span className="text-gray-400">+</span> <span className="text-green-700">targetNetProfit</span> )</p>
              <p className="text-gray-500 ml-4"><span className="text-gray-400">/</span> ( 1 <span className="text-gray-400">-</span> <span className="text-green-700">platformFeeRate</span> <span className="text-gray-400">-</span> <span className="text-green-700">paymentFeeRate</span> <span className="text-gray-400">-</span> <span className="text-green-700">refundRate</span> )</p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-gray-400 text-[11px] mb-2">Target Profit Margin</p>
              <p className="text-yellow-700">suggestedPrice <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">( <span className="text-blue-700">baseCosts</span> <span className="text-gray-400">+</span> <span className="text-green-700">fixedPaymentFee</span> )</p>
              <p className="text-gray-500 ml-4"><span className="text-gray-400">/</span> ( 1 <span className="text-gray-400">-</span> <span className="text-green-700">platformFeeRate</span> <span className="text-gray-400">-</span> <span className="text-green-700">paymentFeeRate</span> <span className="text-gray-400">-</span> <span className="text-green-700">refundRate</span> <span className="text-gray-400">-</span> <span className="text-green-700">targetMargin</span> )</p>
            </div>
          </div>
        }
        exampleContent={
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">INPUT</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Product Cost</span>
                  <span className="font-medium">$15.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Fee</span>
                  <span className="font-medium">3% + $0.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ads</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Refund Rate</span>
                  <span className="font-medium">2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Target Profit</span>
                  <span className="font-medium">$10.00</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">OUTPUT</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Suggested Price</span>
                  <span className="font-bold text-green-600">$53.13</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Break-even Price</span>
                  <span className="font-medium">$39.38</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
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

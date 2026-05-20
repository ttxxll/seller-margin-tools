import type { Metadata } from 'next';
import PaymentFeeCalculator from '@/components/calculators/PaymentFeeCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import CalculatorGuide from '@/components/seo/CalculatorGuide';
import { calculatorGuides } from '@/lib/content/calculatorGuides';
import en from '@/lib/i18n/en.json';

export const metadata: Metadata = {
  title: 'Payment Fee Calculator for Seller Margin & Seller Profit',
  description: 'Calculate payment processing fees that affect seller margin and seller profit for cross-border sellers using PayPal, Stripe, Wise, and other providers.',
  keywords: 'seller margin calculator, seller profit calculator, payment fee calculator, paypal fee calculator, stripe fee calculator, wise fee calculator, cross-border payment fees, ecommerce payment processing',
  alternates: {
    canonical: '/payment-fee-calculator',
    languages: { 'en': '/payment-fee-calculator', 'zh-CN': '/zh/payment-fee-calculator' },
  },
};

export default function PaymentFeeCalculatorPage() {
  const dict = en.calculator;
  const toolDict = en.tools.paymentFees;
  const relatedTools = getRelatedTools('payment-fee-calculator');
  const guide = calculatorGuides.en.paymentFees;

  const faqItems = [
    {
      question: 'What is PayPal\'s fee structure?',
      answer: 'PayPal typically charges 2.9% + $0.30 per transaction for domestic US payments. International payments and currency conversions have additional fees.',
    },
    {
      question: 'What is Stripe\'s fee structure?',
      answer: 'Stripe charges 2.9% + $0.30 per successful card charge for domestic cards. International cards and currency conversion have additional fees.',
    },
    {
      question: 'What is Wise\'s fee structure?',
      answer: 'Wise charges a small percentage fee that varies by currency pair, typically 0.4%-1.5% for major currencies.',
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
      <PaymentFeeCalculator
        dict={{
          amount: dict.amount,
          feeRate: dict.feeRate,
          fixedFee: dict.fixedFee,
          mode: dict.mode,
          grossToNet: dict.grossToNet,
          netToGross: dict.netToGross,
          grossAmount: dict.grossAmount,
          netAmount: dict.netAmount,
          feeAmount: dict.feeAmount,
          effectiveFeeRate: dict.effectiveFeeRate,
          calculate: dict.calculate,
          results: dict.results,
          formula: dict.formula,
          example: dict.example,
          disclaimer: dict.disclaimer,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-gray-400 text-[11px] mb-2">Gross to Net</p>
              <p className="text-purple-700">fee <span className="text-gray-400">=</span> <span className="text-green-700">grossAmount</span> <span className="text-gray-400">*</span> <span className="text-green-700">feeRate</span> <span className="text-gray-400">+</span> <span className="text-green-700">fixedFee</span></p>
              <p className="text-yellow-700 mt-2">netAmount <span className="text-gray-400">=</span> <span className="text-green-700">grossAmount</span> <span className="text-gray-400">-</span> <span className="text-purple-700">fee</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-gray-400 text-[11px] mb-2">Net to Gross</p>
              <p className="text-purple-700">grossAmount <span className="text-gray-400">=</span> ( <span className="text-green-700">targetNet</span> <span className="text-gray-400">+</span> <span className="text-green-700">fixedFee</span> ) <span className="text-gray-400">/</span> ( 1 <span className="text-gray-400">-</span> <span className="text-green-700">feeRate</span> )</p>
              <p className="text-yellow-700 mt-2">fee <span className="text-gray-400">=</span> <span className="text-purple-700">grossAmount</span> <span className="text-gray-400">-</span> <span className="text-green-700">targetNet</span></p>
            </div>
          </div>
        }
        exampleContent={
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">GROSS TO NET</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-medium">$100.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fee Rate</span>
                  <span className="font-medium">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fixed Fee</span>
                  <span className="font-medium">$0.30</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">RESULT</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Fee</span>
                  <span className="font-medium">$3.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Net Amount</span>
                  <span className="font-bold text-green-600">$96.70</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Effective Rate</span>
                  <span className="font-medium">3.30%</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">NET TO GROSS</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Target Net</span>
                  <span className="font-medium">$100.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fee Rate</span>
                  <span className="font-medium">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fixed Fee</span>
                  <span className="font-medium">$0.30</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">RESULT</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Fee</span>
                  <span className="font-medium">$3.40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Gross Needed</span>
                  <span className="font-bold text-green-600">$103.40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Effective Rate</span>
                  <span className="font-medium">3.29%</span>
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

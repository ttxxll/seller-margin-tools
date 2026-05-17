import type { Metadata } from 'next';
import PaymentFeeCalculator from '@/components/calculators/PaymentFeeCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import zh from '@/lib/i18n/zh.json';

export const metadata: Metadata = {
  title: '跨境电商收款手续费计算器 - PayPal/Stripe/Wise 费用计算',
  description: '跨境电商卖家专用收款手续费计算器，计算 PayPal、Stripe、Wise 等平台手续费。支持从总额算净额和从净额反算总额。',
  keywords: '跨境电商, 收款手续费计算器, paypal 手续费计算器, stripe 手续费计算器, 跨境电商收款费用',
  alternates: {
    canonical: '/zh/payment-fee-calculator',
    languages: { 'en': '/payment-fee-calculator', 'zh-CN': '/zh/payment-fee-calculator' },
  },
};

export default function ZhPaymentFeeCalculatorPage() {
  const dict = zh.calculator;
  const toolDict = zh.tools.paymentFees;
  const relatedTools = getRelatedTools('payment-fee-calculator');

  const faqItems = [
    {
      question: 'PayPal 的费率是多少？',
      answer: 'PayPal 美国国内交易通常收取 2.9% + $0.30。国际支付和货币转换有额外费用。',
    },
    {
      question: 'Stripe 的费率是多少？',
      answer: 'Stripe 美国国内卡收取 2.9% + $0.30。国际卡和货币转换有额外费用。',
    },
    {
      question: 'Wise 的费率是多少？',
      answer: 'Wise 收取的费用因货币对而异，主要货币通常为 0.4%-1.5%。',
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
              <p className="text-gray-400 text-[11px] mb-2">从总额算净额</p>
              <p className="text-purple-700">手续费 <span className="text-gray-400">=</span> <span className="text-green-700">总额</span> <span className="text-gray-400">*</span> <span className="text-green-700">费率</span> <span className="text-gray-400">+</span> <span className="text-green-700">固定费用</span></p>
              <p className="text-yellow-700 mt-2">净额 <span className="text-gray-400">=</span> <span className="text-green-700">总额</span> <span className="text-gray-400">-</span> <span className="text-purple-700">手续费</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-gray-400 text-[11px] mb-2">从净额反算总额</p>
              <p className="text-purple-700">总额 <span className="text-gray-400">=</span> ( <span className="text-green-700">目标净额</span> <span className="text-gray-400">+</span> <span className="text-green-700">固定费用</span> ) <span className="text-gray-400">/</span> ( 1 <span className="text-gray-400">-</span> <span className="text-green-700">费率</span> )</p>
              <p className="text-yellow-700 mt-2">手续费 <span className="text-gray-400">=</span> <span className="text-purple-700">总额</span> <span className="text-gray-400">-</span> <span className="text-green-700">目标净额</span></p>
            </div>
          </div>
        }
        exampleContent={
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">从总额算净额</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">金额</span>
                  <span className="font-medium">$100.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">费率</span>
                  <span className="font-medium">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">固定费用</span>
                  <span className="font-medium">$0.30</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">结果</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">手续费</span>
                  <span className="font-medium">$3.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">净额</span>
                  <span className="font-bold text-green-600">$96.70</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">实际费率</span>
                  <span className="font-medium">3.30%</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">从净额反算总额</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">目标净额</span>
                  <span className="font-medium">$100.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">费率</span>
                  <span className="font-medium">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">固定费用</span>
                  <span className="font-medium">$0.30</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">结果</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">手续费</span>
                  <span className="font-medium">$3.40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">需要总额</span>
                  <span className="font-bold text-green-600">$103.40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">实际费率</span>
                  <span className="font-medium">3.29%</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <FAQSection title="常见问题" items={faqItems} />
        <RelatedTools
          title={zh.relatedTools}
          tools={relatedTools}
          locale="zh"
          dict={zh.tools}
        />
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import TargetPriceCalculator from '@/components/calculators/TargetPriceCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import CalculatorGuide from '@/components/seo/CalculatorGuide';
import { calculatorGuides } from '@/lib/content/calculatorGuides';
import zh from '@/lib/i18n/zh.json';

export const metadata: Metadata = {
  title: '跨境电商目标利润售价计算器 - 卖家定价工具',
  description: '跨境电商卖家专用目标利润售价计算器，计算达到目标利润率或目标净利润所需的售价。包含盈亏平衡分析。',
  keywords: '跨境电商, 目标售价计算器, 利润率计算器, 定价计算器, 跨境电商定价工具',
  alternates: {
    canonical: '/zh/target-profit-price-calculator',
    languages: { 'en': '/target-profit-price-calculator', 'zh-CN': '/zh/target-profit-price-calculator' },
  },
};

export default function ZhTargetPriceCalculatorPage() {
  const dict = zh.calculator;
  const toolDict = zh.tools.targetPrice;
  const relatedTools = getRelatedTools('target-profit-price-calculator');
  const guide = calculatorGuides.zh.targetPrice;

  const faqItems = [
    {
      question: '什么是盈亏平衡价？',
      answer: '盈亏平衡价是您既不盈利也不亏损的最低售价。它涵盖所有成本，包括各种费用。',
    },
    {
      question: '应该设定目标利润还是目标利润率？',
      answer: '这取决于您的商业模式。目标利润适合固定成本产品。目标利润率适合希望获得一致百分比回报的规模化业务。',
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
              <p className="text-gray-400 text-[11px] mb-2">目标净利润模式</p>
              <p className="text-blue-700">基础成本 <span className="text-gray-400">=</span> <span className="text-green-700">产品成本</span> <span className="text-gray-400">+</span> <span className="text-green-700">物流成本</span> <span className="text-gray-400">+</span> <span className="text-green-700">广告费</span> <span className="text-gray-400">+</span> <span className="text-green-700">其他成本</span></p>
              <p className="text-yellow-700 mt-2">建议售价 <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">( <span className="text-blue-700">基础成本</span> <span className="text-gray-400">+</span> <span className="text-green-700">固定收款费</span> <span className="text-gray-400">+</span> <span className="text-green-700">目标净利润</span> )</p>
              <p className="text-gray-500 ml-4"><span className="text-gray-400">/</span> ( 1 <span className="text-gray-400">-</span> <span className="text-green-700">平台费率</span> <span className="text-gray-400">-</span> <span className="text-green-700">收款费率</span> <span className="text-gray-400">-</span> <span className="text-green-700">退款率</span> )</p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-gray-400 text-[11px] mb-2">目标利润率模式</p>
              <p className="text-yellow-700">建议售价 <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">( <span className="text-blue-700">基础成本</span> <span className="text-gray-400">+</span> <span className="text-green-700">固定收款费</span> )</p>
              <p className="text-gray-500 ml-4"><span className="text-gray-400">/</span> ( 1 <span className="text-gray-400">-</span> <span className="text-green-700">平台费率</span> <span className="text-gray-400">-</span> <span className="text-green-700">收款费率</span> <span className="text-gray-400">-</span> <span className="text-green-700">退款率</span> <span className="text-gray-400">-</span> <span className="text-green-700">目标利润率</span> )</p>
            </div>
          </div>
        }
        exampleContent={
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">输入</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">产品成本</span>
                  <span className="font-medium">$15.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">物流</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">平台费</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">收款费</span>
                  <span className="font-medium">3% + $0.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">广告费</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">退款率</span>
                  <span className="font-medium">2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">目标利润</span>
                  <span className="font-medium">$10.00</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">输出</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">建议售价</span>
                  <span className="font-bold text-green-600">$53.13</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">盈亏平衡价</span>
                  <span className="font-medium">$39.38</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CalculatorGuide title={guide.title} intro={guide.intro} sections={guide.sections} />
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

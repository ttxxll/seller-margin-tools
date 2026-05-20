import type { Metadata } from 'next';
import ProfitCalculator from '@/components/calculators/ProfitCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import CalculatorGuide from '@/components/seo/CalculatorGuide';
import { calculatorGuides } from '@/lib/content/calculatorGuides';
import zh from '@/lib/i18n/zh.json';

export const metadata: Metadata = {
  title: '跨境电商 Flipkart 利润计算器 - 卖家利润估算工具',
  description: '跨境电商卖家专用 Flipkart 利润计算器，计算佣金、物流、代收费用、GST 和所有费用后的真实利润。免费在线工具。',
  keywords: '跨境电商, flipkart 利润计算器, flipkart 卖家利润, flipkart 费用计算器, 跨境电商利润计算',
  alternates: {
    canonical: '/zh/flipkart-profit-calculator',
    languages: { 'en': '/flipkart-profit-calculator', 'zh-CN': '/zh/flipkart-profit-calculator' },
  },
};

export default function FlipkartCalculatorPage() {
  const dict = zh.calculator;
  const toolDict = zh.tools.flipkart;
  const relatedTools = getRelatedTools('flipkart-profit-calculator');
  const guide = calculatorGuides.zh.flipkart;

  const fields = [
    { key: 'sellingPrice', label: dict.sellingPrice, type: 'number' as const, suffix: '$', defaultValue: 499 },
    { key: 'productCost', label: dict.productCost, type: 'number' as const, suffix: '$', defaultValue: 150 },
    { key: 'shippingCost', label: dict.shippingCost, type: 'number' as const, suffix: '$', defaultValue: 50 },
    { key: 'commissionRate', label: dict.commissionRate, type: 'percent' as const, hint: '因品类而异（通常 5%-25%）', defaultValue: 0.15 },
    { key: 'collectionFeeRate', label: dict.collectionFeeRate, type: 'percent' as const, hint: '支付代收费百分比', defaultValue: 0.02 },
    { key: 'gstOnFeesRate', label: dict.gstOnFeesRate, type: 'percent' as const, hint: '平台费用上的 GST 税率', defaultValue: 0.18 },
    { key: 'fixedFee', label: dict.fixedFeePerOrder, type: 'number' as const, suffix: '$', defaultValue: 10 },
    { key: 'adCost', label: dict.adCost, type: 'number' as const, suffix: '$', defaultValue: 30 },
    { key: 'refundRate', label: dict.refundRate, type: 'percent' as const, defaultValue: 0.03 },
    { key: 'otherCost', label: dict.otherCost, type: 'number' as const, suffix: '$', defaultValue: 0 },
  ];

  const faqItems = [
    {
      question: 'Flipkart 的佣金费率是多少？',
      answer: 'Flipkart 对每笔销售收取佣金，费率因产品品类而异，通常在 5% 到 25% 之间。佣金按售价的百分比计算。',
    },
    {
      question: '什么是代收费用？',
      answer: '代收费用是 Flipkart 对订单金额收取的支付处理费用，通常约为售价的 2%。',
    },
    {
      question: '费用上的 GST 是如何计算的？',
      answer: 'Flipkart 对佣金、物流和代收费用的总额收取 18% 的 GST（商品及服务税）。GST 不针对产品价格本身收取，只针对平台费用收取。',
    },
    {
      question: '什么是每单固定费用？',
      answer: 'Flipkart 对每笔订单收取小额固定费用，金额根据订单价值区间而定，通常在 ₹5 到 ₹25 之间。',
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
          revenue: '售价',
          platformFee: '佣金',
          paymentFee: '代收费',
          refundLoss: dict.refundLoss,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-purple-700">佣金 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">佣金费率</span></p>
              <p className="text-purple-700 mt-2">代收费 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">代收费率</span></p>
              <p className="text-purple-700 mt-2">费用GST <span className="text-gray-400">=</span> (佣金 + 物流 + 代收费) <span className="text-gray-400">*</span> <span className="text-green-700">GST税率</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-blue-700">总成本 <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">产品成本 + 物流 + 佣金</p>
              <p className="text-gray-500 ml-4">+ 代收费 + 费用GST</p>
              <p className="text-gray-500 ml-4">+ 固定费 + 广告 + 退款损失</p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-yellow-700">净利润 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">-</span> <span className="text-blue-700">总成本</span></p>
              <p className="text-yellow-700 mt-2">利润率 <span className="text-gray-400">=</span> <span className="text-yellow-700">净利润</span> <span className="text-gray-400">/</span> <span className="text-green-700">售价</span></p>
            </div>
          </div>
        }
        exampleContent={
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">输入</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">售价</span>
                  <span className="font-medium">$499</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">产品成本</span>
                  <span className="font-medium">$150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">物流</span>
                  <span className="font-medium">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">佣金</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">代收费</span>
                  <span className="font-medium">2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">费用GST</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">固定费</span>
                  <span className="font-medium">$10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">广告</span>
                  <span className="font-medium">$30</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">输出</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">佣金</span>
                  <span className="font-medium">$74.85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">代收费</span>
                  <span className="font-medium">$9.98</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">费用GST</span>
                  <span className="font-medium">$24.28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">总成本</span>
                  <span className="font-medium">$424.11</span>
                </div>
                <div className="border-t border-green-200 my-1"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">净利润</span>
                  <span className="font-bold text-green-600">$74.89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">利润率</span>
                  <span className="font-bold text-green-600">15.0%</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
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
